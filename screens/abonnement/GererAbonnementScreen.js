import React, {useState, useEffect} from 'react';
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    Platform,
    ActivityIndicator,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    Keyboard,
    Alert,
    Linking
} from 'react-native';
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import IAP from "react-native-iap";

const windowWidth = Dimensions.get('window').width;

let purchaseUpdatedListener;
let purchaseErrorListener;
let receipt = "";

const GererAbonnementScreen = (props) => {

    // Drill : 2
    // Muscu : 0

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser)

    const [loading, setLoading] = useState(false);

    const { i18n, t } = useTranslation();


    const items = Platform.select({
        ios: ["rd_999_m", "rd_1499_m", "rd_1999_m"],
        android: ["rd_999_m", "rd_1499_m", "rd_1999_m"]
    });

    const [purchased, setPurchased] = useState(false);
    const [products, setProducts] = useState({});

    console.log('purchased', purchased);

    const validate = async (receipt) => {
        const receiptBody = {
            "receipt-data": receipt,
            "password": "302d5205d5a04e04be2241a522caa2d4"
        }
        await IAP.validateReceiptIos(receiptBody, true).catch(err => console.log(err))
            .then((receipt) => {
                try {
                    console.log('res', receipt)
                    const renewalHistory = receipt.latest_receipt_info;
                    console.log('new', renewalHistory)
                    const expiration = renewalHistory[renewalHistory.length - 1].expires_date_ms;
                    let expired = Date.now() > expiration;
                    console.log('expir', expiration);
                    console.log('expir', expired);
                    console.log(Date.now());
                    if (!expired) {
                        setPurchased(true)
                    } else {
                        console.log('hey')
                    }
                } catch (err) {
                    console.log(err)
                }
            })
    }


    useEffect(() => {
        IAP.initConnection().catch((err) => {
            console.log(err)
        }).then(() => {
            console.log("connected to store")
            IAP.getSubscriptions(items).catch(err => console.log(err))
                .then((res) => {
                    console.log("got products")
                    setProducts(res)
                    console.log('res', res)
                })
            IAP.getPurchaseHistory().catch((err) => {
                console.log('err', err)
            }).then((res) => {
                const receipt = res[res.length - 1].transactionReceipt
                if (receipt) {
                    validate(receipt)
                }
            })
        })
        purchaseErrorListener = IAP.purchaseErrorListener((err) => {
            if (err['responseCode'] == "2") {
                console.log('yes')
            } else {
                Alert.alert("Une erreur est survenue !")
            }
        })

        purchaseUpdatedListener = IAP.purchaseUpdatedListener((purchase) => {
            try {
                receipt = purchase.transactionReceipt;
                if (receipt) {
                    validate(receipt)
                }
                console.log('receipt', receipt);
            } catch (err) {
                console.log(err)
            }
        })

        return () => {
            purchaseUpdatedListener.remove();
        }
    }, []);


    const changeAbonnement = async (abonnement) => {
        await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                abonnement: abonnement
            })
    };

    let params;
    if (props.route.params) {
        params = props.route.params.entrainement;
    }

    const handleDesabonnement = () => {
        Linking.openURL('https://apps.apple.com/account/subscriptions')
    };

    console.log('products', products[2])
    const paymentIOS = (props) => {
        if (products) {
            if (userData.abonnement === 'free') {
                if (params === "muscu") {
                    return (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.container}>
                                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                                    <Text style={styles.inscriptionBigText}>{`${t("actuel")}`} {userData.abonnement}</Text>
                                    <Text style={styles.smallBigText}>{`${t("mensuel")}`}</Text>
                                    <Text style={styles.smallBigText}>{`${t("muscuAbonnement")}`}</Text>
                                    <Text style={styles.smallBigText}>{`${t("premiumAbonnement")}`}</Text>


                                    <View>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("MentionsLegalesScreen")}>
                                            <Text style={styles.mentionsText}>Mentions légales</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicyScreen")}>
                                            <Text style={styles.mentionsText}>Politique de confidentialité</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("CGUScreen")}>
                                            <Text style={styles.mentionsText}>Conditions générales d'utilisation</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <ScrollView style={styles.scrollView}>

                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            IAP.requestSubscription(products[0]["productId"]).then(() => changeAbonnement('Musculation'))
                                        }}>
                                            {i18next.language === "en" ?    <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F5%5B1%5D.png?alt=media&token=f6dcf403-9046-4bb0-a205-323d89fe34b6"
                                                }}
                                            /> :    <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F4%5B1%5D.png?alt=media&token=24b21817-8878-4d0b-aeaa-0354fd9ce089"
                                                }}
                                            />}

                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            IAP.requestSubscription(products[1]["productId"]).then(() => changeAbonnement('Premium'))
                                        }}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity>

                                    </ScrollView>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                if (params === "drill") {
                    return (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.container}>
                                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>


                                    <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>
                                    <Text style={styles.smallBigText}>{`${t("mensuel")}`}</Text>
                                    <Text style={styles.smallBigText}>{`${t("drillAbonnement")}`}</Text>
                                    <Text style={styles.smallBigText}>{`${t("premiumAbonnement")}`}</Text>

                                    <View>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("MentionsLegalesScreen")}>
                                            <Text style={styles.mentionsText}>Mentions légales</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicyScreen")}>
                                            <Text style={styles.mentionsText}>Politique de confidentialité</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("CGUScreen")}>
                                            <Text style={styles.mentionsText}>Conditions générales d'utilisation</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <ScrollView style={styles.scrollView}>

                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            IAP.requestSubscription(products[2]["productId"]).then(() => changeAbonnement('Drill'))
                                        }}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F2%5B1%5D.png?alt=media&token=21ed90a3-2718-498a-9b10-57d50b170b12"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            IAP.requestSubscription(products[1]["productId"]).then(() => changeAbonnement('Premium'))
                                        }}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity>

                                    </ScrollView>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
                else {
                    return (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.container}>
                                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>


                                    <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>
                                    <Text style={styles.smallBigText}>{`${t("mensuel")}`}</Text>
                                    <Text style={styles.smallBigText}>{`${t("drillAbonnement")}`}</Text>
                                    <Text style={styles.smallBigText}>{`${t("muscuAbonnement")}`}</Text>
                                    <Text style={styles.smallBigText}>{`${t("premiumAbonnement")}`}</Text>

                                    <View>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("MentionsLegalesScreen")}>
                                            <Text style={styles.mentionsText}>Mentions légales</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicyScreen")}>
                                            <Text style={styles.mentionsText}>Politique de confidentialité</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("CGUScreen")}>
                                            <Text style={styles.mentionsText}>Conditions générales d'utilisation</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <ScrollView style={styles.scrollView}>
                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            IAP.requestSubscription(products[0]["productId"]).then(() => changeAbonnement('Musculation'))
                                        }}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F4%5B1%5D.png?alt=media&token=24b21817-8878-4d0b-aeaa-0354fd9ce089"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            IAP.requestSubscription(products[2]["productId"]).then(() => changeAbonnement('Drill'))
                                        }}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F2%5B1%5D.png?alt=media&token=21ed90a3-2718-498a-9b10-57d50b170b12"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity>

                                    </ScrollView>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            }
            if (userData.abonnement === "Musculation") {
                return (

                    <View style={styles.container}>
                        <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                            <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>
                            <Text style={styles.smallBigText}>{`${t("mensuel")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("drillAbonnement")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("muscuAbonnement")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("premiumAbonnement")}`}</Text>

                            <View>
                                <TouchableOpacity onPress={() => props.navigation.navigate("MentionsLegalesScreen")}>
                                    <Text style={styles.mentionsText}>Mentions légales</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicyScreen")}>
                                    <Text style={styles.mentionsText}>Politique de confidentialité</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate("CGUScreen")}>
                                    <Text style={styles.mentionsText}>Conditions générales d'utilisation</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={styles.scrollView}>

                                <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                    IAP.requestSubscription(products[2]["productId"]).then(() => changeAbonnement('Drill'))
                                }}>
                                    <Image
                                        style={styles.imageCard}
                                        source={{
                                            uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F2%5B1%5D.png?alt=media&token=21ed90a3-2718-498a-9b10-57d50b170b12"
                                        }}
                                    >
                                    </Image>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                    IAP.requestSubscription(products[1]["productId"]).then(() => changeAbonnement('Premium'))
                                }}>
                                    <Image
                                        style={styles.imageCard}
                                        source={{
                                            uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                        }}
                                    >
                                    </Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.abonnementCard} onPress={handleDesabonnement}
                                >
                                    <Text style={styles.abonnementText}>{t("desabonnement")}</Text>
                                </TouchableOpacity>

                            </ScrollView>
                        </ImageBackground>
                    </View>
                )
            }
            if (userData.abonnement === "Drill") {
                return (

                    <View style={styles.container}>
                        <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                            <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>
                            <Text style={styles.smallBigText}>{`${t("mensuel")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("drillAbonnement")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("muscuAbonnement")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("premiumAbonnement")}`}</Text>

                            <View>
                                <TouchableOpacity onPress={() => props.navigation.navigate("MentionsLegalesScreen")}>
                                    <Text style={styles.mentionsText}>Mentions légales</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicyScreen")}>
                                    <Text style={styles.mentionsText}>Politique de confidentialité</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate("CGUScreen")}>
                                    <Text style={styles.mentionsText}>Conditions générales d'utilisation</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={styles.scrollView}>

                                <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                    IAP.requestSubscription(products[0]["productId"]).then(() => changeAbonnement('Musculation'))
                                }}>
                                    <Image
                                        style={styles.imageCard}
                                        source={{
                                            uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F4%5B1%5D.png?alt=media&token=24b21817-8878-4d0b-aeaa-0354fd9ce089"
                                        }}
                                    >
                                    </Image>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                    IAP.requestSubscription(products[1]["productId"]).then(() => changeAbonnement('Premium'))
                                }}>
                                    <Image
                                        style={styles.imageCard}
                                        source={{
                                            uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                        }}
                                    >
                                    </Image>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.abonnementCard} onPress={handleDesabonnement}>
                                    <Text style={styles.abonnementText}>{t("desabonnement")}</Text>
                                </TouchableOpacity>

                            </ScrollView>
                        </ImageBackground>
                    </View>
                )
            }
            if (userData.abonnement === "Premium") {
                return (

                    <View style={styles.container}>
                        <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                            <Text style={styles.inscriptionBigText}>{t('actuel')} {userData.abonnement}</Text>
                            <Text style={styles.smallBigText}>{`${t("mensuel")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("drillAbonnement")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("muscuAbonnement")}`}</Text>
                            <Text style={styles.smallBigText}>{`${t("premiumAbonnement")}`}</Text>

                            <View>
                                <TouchableOpacity onPress={() => props.navigation.navigate("MentionsLegalesScreen")}>
                                    <Text style={styles.mentionsText}>Mentions légales</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate("PrivacyPolicyScreen")}>
                                    <Text style={styles.mentionsText}>Politique de confidentialité</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate("CGUScreen")}>
                                    <Text style={styles.mentionsText}>Conditions générales d'utilisation</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={styles.scrollView}>

                                <TouchableOpacity style={styles.abonnementCard} onPress={handleDesabonnement}>
                                    <Text style={styles.abonnementText}>{t("desabonnement")}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </ImageBackground>
                    </View>
                )
            }
        } else {
            return (
                <View>
                    <ActivityIndicator />
                    <Text>Veuillez patientez</Text>
                </View>
            )
        }
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                        <View>
                            <Text style={styles.paymentStatusText}>{t("patientez")}</Text>
                            <ActivityIndicator />
                        </View>
                </ImageBackground>
            </View>
        )
    } if (purchased) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    <View>
                        <View style={styles.finContainer}>
                            <Text style={styles.paymentStatusText2}>{t("validatePayment")}</Text>
                        </View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AccueilScreen')} style={styles.button}>
                            <Text style={styles.buttonText}>{t("menu")}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    else {
        return (<View style={styles.container}>
            {paymentIOS(props)}
        </View>)
    }
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
    },
    paymentStatusText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    abonnementCard: {
        width: '100%',
        height: 200,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: '3%',
        alignItems: 'center'
    },
    abonnementTextInner: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    recetteCard: {
        width: windowWidth/1,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 2,
        height: 180,
        marginBottom: 3
    },
    imageCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        height: '100%'
    },
    paymentStatusText2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        maxWidth: '90%',
        marginLeft: '5%'
    },
    abonnementFreeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 80
    },
    abonnementText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 40
    },
    inscriptionBigText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 40,
        marginBottom: 30
    },
    button: {
        backgroundColor: 'red',
        alignSelf: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        marginTop: '15%'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    textInput : {
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: 'white'
    },
    buttonContainer: {
        backgroundColor: "red",
        color: 'white',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 20
    },
    validate: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    smallBigText: {
        fontSize: 15,
        color: 'white',
        textAlign: "center",
        marginBottom: 10
    },
    mentionsText : {
        color: 'white',
        marginTop: 10
    }
})
export default GererAbonnementScreen;
