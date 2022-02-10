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
    Image, Dimensions, Keyboard, Alert
} from 'react-native';
import firebase from "firebase";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import {PaymentView} from "../../components/PaymentView";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import IAP from "react-native-iap";

const windowWidth = Dimensions.get('window').width;

let purchaseUpdatedListener;
let purchaseErrorListener;
let receipt = "";

const GererAbonnementScreen = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser)
    console.log(userData);

    const [loading, setLoading] = useState(false);

    const [response, setResponse ] = useState()
    const [paymentStatus, setPaymentStatus] = useState('')
    const [ makePaymentMuscu, setMakePaymentMuscu ] = useState(false);
    const [ makePaymentDrill, setMakePaymentDrill ] = useState(false);
    const [ makePaymentPremium, setMakePaymentPremium ] = useState(false);
    const [ makePaymentPremiumRed, setMakePaymentPremiumRed ] = useState(false);

    const { i18n, t } = useTranslation();


    const items = Platform.select({
        ios: ["rp_5999_y", "rp_999_m", "rp_8999_y", "rp_1499_m"],
        android: [""]
    });

    const [purchased, setPurchased] = useState(false);
    const [products, setProducts] = useState({});

    console.log('purchased', purchased);

    const validate = async (receipt) => {
        const receiptBody = {
            "receipt-data": receipt,
            "password": "0b4325f3b3e942b1ae81964461e223db"
        }
        await IAP.validateReceiptIos(receiptBody, true).catch(err => console.log(err))
            .then((receipt) => {
                try {
                    console.log('res', receipt)
                    const renewalHistory = receipt.latest_receipt_info;
                    console.log('new', renewalHistory)
                    const expiration = renewalHistory[renewalHistory.length - 1].expires_date_ms;
                    let expired = Date.now() < expiration;
                    console.log('expir', expiration)
                    console.log('expir', expired)
                    console.log(Date.now())
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
                    console.log(res)
                })
            IAP.getPurchaseHistory().catch(() => {

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

    let subscriptionId = userData.subscriptionId

    const changeAbonnement = async (abonnement) => {
        await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                abonnement: abonnement
            })
    };

    const updateSubscriptionUser = async (subscription) => {
        await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                subscriptionId: subscription
            })
    };

    const desabonnement = async () => {
        setLoading(true)
        try {
            const stripeResponse = await axios.post('https://your-redzone.herokuapp.com/paymentdelete', {
                subscriptionId : subscriptionId
            })


            if(stripeResponse){
                console.log('stripe', stripeResponse)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
                    await changeAbonnement("free")
                    setLoading(false)
                    props.navigation.navigate("ConfirmationDesabonnementScreen")
                } else{
                    setPaymentStatus('pas ok')
                }
                console.log(stripeResponse)

            }} catch (error) {
            console.log(error)
        }
    }

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
                    await updateSubscriptionUser(stripeResponse.data.id)
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
                    await updateSubscriptionUser(stripeResponse.data.id)
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
                    await updateSubscriptionUser(stripeResponse.data.id)
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

    const onCheckStatusPremiumReduit = async (paymentResponse) => {
        setPaymentStatus('Votre paiement est en cours de traitement')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        console.log('paymentresponse', paymentResponse)
        // perform operation to check payment status

        try {

            const stripeResponse = await axios.post('https://your-redzone.herokuapp.com/payment', {
                email: userData.email,
                authToken: jsonResponse,
                planId: 'price_1KJ3fAH8PB1EJ6ZTR9wbARno',
            })

            console.log('TSRIPE RESPONSE', stripeResponse)

            if(stripeResponse){

                console.log(stripeResponse.data.items.data[0].plan.active)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
                    await updateSubscriptionUser(stripeResponse.data.id)
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

    const [promoCode, setPromoCode] = useState("");
    const [goodPromoCode, setGoodPromoCode] = useState(false);

    const paymentUI = (props) => {
        if (!makePaymentMuscu && !makePaymentPremium && !makePaymentDrill && !makePaymentPremiumRed) {
            if (userData.abonnement === 'free') {
                if (params === "muscu") {
                    return (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

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

                                     {goodPromoCode ?
                                         <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                             setMakePaymentPremiumRed(true)
                                         }}>
                                             <Image
                                                 style={styles.imageCard}
                                                 source={{
                                                     uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2Fpremium.png?alt=media&token=8c0a0ef8-2a62-454e-97b3-d0d75469df4e"
                                                 }}
                                             >
                                             </Image>
                                         </TouchableOpacity> : <TouchableOpacity style={styles.recetteCard} onPress={() => setMakePaymentPremium(true)}>
                                             <Image
                                                 style={styles.imageCard}
                                                 source={{
                                                     uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                                 }}
                                             >
                                             </Image>
                                         </TouchableOpacity>
                                     }

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

                                <TextInput
                                    placeholder="Entrez code promo"
                                    placeholderTextColor="white"
                                    onChangeText={(e) => setPromoCode(e)}
                                    style={styles.textInput}
                                />
                                <TouchableOpacity onPress={() => {
                                    if (promoCode === "YRZ50") {
                                        setGoodPromoCode(true)
                                    }
                                }}
                                                  style={styles.buttonContainer}
                                >
                                    <Text style={styles.validate}>Valider</Text>
                                </TouchableOpacity>

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


                                    {goodPromoCode ?
                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            setMakePaymentPremiumRed(true)
                                        }}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2Fpremium.png?alt=media&token=8c0a0ef8-2a62-454e-97b3-d0d75469df4e"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity> : <TouchableOpacity style={styles.recetteCard} onPress={() => setMakePaymentPremium(true)}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity>
                                    }

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

                                <TextInput
                                    placeholder="Entrez code promo"
                                    placeholderTextColor="white"
                                    onChangeText={(e) => setPromoCode(e)}
                                    style={styles.textInput}
                                />
                                <TouchableOpacity onPress={() => {
                                    if (promoCode === "YRZ50") {
                                        setGoodPromoCode(true)
                                    }
                                }}
                                                  style={styles.buttonContainer}
                                >
                                    <Text style={styles.validate}>Valider</Text>
                                </TouchableOpacity>

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

                                    {goodPromoCode ?
                                        <TouchableOpacity style={styles.recetteCard} onPress={() => {
                                            setMakePaymentPremiumRed(true)
                                        }}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2Fpremium.png?alt=media&token=8c0a0ef8-2a62-454e-97b3-d0d75469df4e"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity> : <TouchableOpacity style={styles.recetteCard} onPress={() => setMakePaymentPremium(true)}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{
                                                    uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F1%5B1%5D.png?alt=media&token=34951170-dd34-462b-809e-5a6842c3505d"
                                                }}
                                            >
                                            </Image>
                                        </TouchableOpacity>
                                    }

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
                                <TouchableOpacity style={styles.abonnementCard} onPress={async () => {
                                    await desabonnement()
                                }}>
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

                                <TouchableOpacity style={styles.abonnementCard} onPress={async () => {
                                    await desabonnement()
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
                        <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                            <Text style={styles.inscriptionBigText}>{t('actuel')} {userData.abonnement}</Text>

                            <ScrollView style={styles.scrollView}>

                                <TouchableOpacity style={styles.abonnementCard} onPress={async () => {
                                    await desabonnement()
                                }}>
                                    <Text style={styles.abonnementText}>{t("desabonnement")}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </ImageBackground>
                    </View>
                )
            }
        }

        if (makePaymentMuscu && !makePaymentDrill && !makePaymentPremium && !makePaymentPremiumRed) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
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

        if (!makePaymentMuscu && makePaymentDrill && !makePaymentPremium && !makePaymentPremiumRed) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
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

        if (!makePaymentMuscu && !makePaymentDrill && makePaymentPremium && !makePaymentPremiumRed) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

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

        if (!makePaymentMuscu && !makePaymentDrill && !makePaymentPremium && makePaymentPremiumRed) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

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
                return <PaymentView onCheckStatus={onCheckStatusPremiumReduit} product={"Abonnement Premium"} amount={15}/>
            }
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
    } else {
        return (<View style={styles.container}>
            {Platform.OS === "ios" ? <View>

            </View> : paymentUI(props)}

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
    }
})
export default GererAbonnementScreen;
