import React, {useState, useEffect} from 'react';
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Image, Dimensions
} from 'react-native';
import firebase from "firebase";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import {PaymentView} from "../../components/PaymentView";
import {useTranslation} from "react-i18next";
import i18next from "i18next";

const windowWidth = Dimensions.get('window').width;

const GererAbonnementScreen = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser)
    console.log(userData);
    const [subscriptionId, setSubscriptionId] = useState('');
    const [response, setResponse ] = useState()
    const [paymentStatus, setPaymentStatus] = useState('')
    const [ makePaymentMuscu, setMakePaymentMuscu ] = useState(false);
    const [ makePaymentDrill, setMakePaymentDrill ] = useState(false);
    const [ makePaymentPremium, setMakePaymentPremium ] = useState(false);

    const { i18n, t } = useTranslation();

    const changeAbonnement = async (abonnement) => {
        await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                abonnement: abonnement
            })
    };


    useEffect(() => {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setSubscriptionId(snapshot.data().subscriptionId)
                } else {
                    console.log('does not exists')
                }
            })
    }, []);


    const onCheckStatusMuscu = async (paymentResponse) => {
        setPaymentStatus('Votre paiement est en cours de traitement')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        console.log('paymentresponse', paymentResponse)
        // perform operation to check payment status

        try {

            const stripeResponse = await axios.post('https://your-redzone.herokuapp.com/payment', {
                email: userData.email,
                authToken: jsonResponse,
                planId: 'price_1K8QEFH8PB1EJ6ZT9RhQsGkY',
            })

            console.log('TSRIPE RESPONSE', stripeResponse)

            if(stripeResponse){

                console.log(stripeResponse)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
                    await changeAbonnement('Musculation')
                    setPaymentStatus('Votre paiement a été validé ! Bienvenue chez RoundPower')
                }else{
                    setPaymentStatus('Le paiement a échoué')
                }

            }else{
                setPaymentStatus('Le paiement a échoué')
            }


        } catch (error) {

            console.log(error)
            setPaymentStatus('Le paiement a échoué')

        }
    }

    const onCheckStatusDrill = async (paymentResponse) => {
        setPaymentStatus('Votre paiement est en cours de traitement')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        console.log('paymentresponse', paymentResponse)
        // perform operation to check payment status

        try {

            const stripeResponse = await axios.post('https://your-redzone.herokuapp.com/payment', {
                email: userData.email,
                authToken: jsonResponse,
                planId: 'price_1K8QEWH8PB1EJ6ZTSR1E2pKL',
            })

            console.log('TSRIPE RESPONSE', stripeResponse)

            if(stripeResponse){

                console.log(stripeResponse.data.items.data[0].plan.active)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
                    await changeAbonnement('Drill')
                    setPaymentStatus('Votre paiement a été validé ! Bienvenue chez RoundPower')
                }else{
                    setPaymentStatus('Le paiement a échoué')
                }

            }else{
                setPaymentStatus('Le paiement a échoué')
            }


        } catch (error) {

            console.log(error)
            setPaymentStatus('Le paiement a échoué')

        }
    }

    const onCheckStatusPremium = async (paymentResponse) => {
        setPaymentStatus('Votre paiement est en cours de traitement')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        console.log('paymentresponse', paymentResponse)
        // perform operation to check payment status

        try {

            const stripeResponse = await axios.post('https://your-redzone.herokuapp.com/payment', {
                email: userData.email,
                authToken: jsonResponse,
                planId: 'price_1K8QEiH8PB1EJ6ZTJcVHE61Z',
            })

            console.log('TSRIPE RESPONSE', stripeResponse)

            if(stripeResponse){

                console.log(stripeResponse.data.items.data[0].plan.active)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
                    await changeAbonnement('Premium')
                    setPaymentStatus('Votre paiement a été validé ! Bienvenue chez RoundPower')
                }else{
                    setPaymentStatus('Le paiement a échoué')
                }

            }else{
                setPaymentStatus('Le paiement a échoué')
            }
        } catch (error) {
            console.log(error)
            setPaymentStatus('Le paiement a échoué')

        }

    }

    let params = undefined;

    if (props.route.params) {
        params = props.route.params.entrainement;
    }

    const paymentUI = (props) => {
        if (!makePaymentMuscu && !makePaymentPremium && !makePaymentDrill) {
            if (userData.abonnement === 'free') {
                if (params === "muscu") {
                    return (
                        <View style={styles.container}>
                            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                                <Text style={styles.inscriptionBigText}>{`${t("actuel")}`} {userData.abonnement}</Text>

                                 <ScrollView style={styles.scrollView}>

                                     <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                         setMakePaymentMuscu(true)
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
                                         setMakePaymentPremium(true)
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
                    )}
                if (params === "drill") {
                    return (
                        <View style={styles.container}>
                            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                                <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>

                                <ScrollView style={styles.scrollView}>

                                    <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                        setMakePaymentDrill(true)
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
                                        setMakePaymentPremium(true)
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
                    )
                }
                else {
                    return (
                        <View style={styles.container}>
                            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                                <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>

                                <ScrollView style={styles.scrollView}>
                                    <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                        setMakePaymentMuscu(true)
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
                                        setMakePaymentDrill(true)
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
                                        setMakePaymentPremium(true)
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
                    )
                }
            }
             if (userData.abonnement === "Musculation") {
                return (

                    <View style={styles.container}>
                        <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                            <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>

                            <ScrollView style={styles.scrollView}>

                                <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                    setMakePaymentDrill(true)
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
                                    setMakePaymentPremium(true)
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
                )
            }
            if (userData.abonnement === "Drill") {
                return (

                    <View style={styles.container}>
                        <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                            <Text style={styles.inscriptionBigText}>{t("actuel")} {userData.abonnement}</Text>

                            <ScrollView style={styles.scrollView}>

                                <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                    setMakePaymentMuscu(true)
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
                                    setMakePaymentPremium(true)
                                }}>
                                    <Image
                                        style={styles.imageCard}
                                        source={{
                                            uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                        }}
                                    >
                                    </Image>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.abonnementCard} onPress={() => {
                                    setMakePaymentDrill(true)
                                }}>
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
                        <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                            <Text style={styles.inscriptionBigText}>{t('actuel')} {userData.abonnement}</Text>

                            <ScrollView style={styles.scrollView}>

                                <TouchableOpacity style={styles.abonnementCard} onPress={() => {
                                    setMakePaymentDrill(true)
                                }}>
                                    <Text style={styles.abonnementText}>{t("desabonnement")}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </ImageBackground>
                    </View>
                )
            }
        }

        if (makePaymentMuscu && !makePaymentDrill && !makePaymentPremium) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                        {paymentStatus === 'Votre paiement est en cours de traitement' ?
                            <View>
                                <Text style={styles.paymentStatusText}>{t("encours")}</Text>
                                <ActivityIndicator />
                            </View> : <Text></Text>}

                        {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                            <View>
                                <View style={styles.finContainer}>
                                    <Text style={styles.paymentStatusText2}>{t("validatePayment")}</Text>
                                </View>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AccueilScreen')} style={styles.button}>
                                    <Text style={styles.buttonText}>{t("menu")}</Text>
                                </TouchableOpacity>
                            </View> : <Text></Text>}
                    </ImageBackground>
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatusMuscu} product={"Abonnement Muscu"} amount={10}/>
            }
        }

        if (!makePaymentMuscu && makePaymentDrill && !makePaymentPremium) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                        {paymentStatus === 'Votre paiement est en cours de traitement' ?
                            <View>
                                <Text style={styles.paymentStatusText}>{t("encours")}</Text>
                                <ActivityIndicator />
                            </View> : <Text></Text>}

                        {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                            <View>
                                <View style={styles.finContainer}>
                                    <Text style={styles.paymentStatusText2}>{t("validatePayment")}</Text>
                                </View>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AccueilScreen')} style={styles.button}>
                                    <Text style={styles.buttonText}>{t("menu")}</Text>
                                </TouchableOpacity>
                            </View> : <Text></Text>}
                    </ImageBackground>
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatusDrill} product={"Abonnement Drill"} amount={15}/>
            }
        }

        if (!makePaymentMuscu && !makePaymentDrill && makePaymentPremium) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                        {paymentStatus === 'Votre paiement est en cours de traitement' ?
                            <View>
                                <Text style={styles.paymentStatusText}>{t("encours")}</Text>
                                <ActivityIndicator />
                            </View> : <Text></Text>}

                        {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                            <View>
                                <View style={styles.finContainer}>
                                    <Text style={styles.paymentStatusText2}>{t("validatePayment")}</Text>
                                </View>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AccueilScreen')} style={styles.button}>
                                    <Text style={styles.buttonText}>{t("menu")}</Text>
                                </TouchableOpacity>
                            </View> : <Text></Text>}
                    </ImageBackground>
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatusPremium} product={"Abonnement Premium"} amount={20}/>
            }
        }

    }

    return (<View style={styles.container}>
        {paymentUI(props)}
    </View>)
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
    }
})
export default GererAbonnementScreen;
