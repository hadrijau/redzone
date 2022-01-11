import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {Formik} from "formik";
import firebase from "firebase";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";

import {PaymentView} from "../../components/PaymentView";

const AbonnementScreen = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser)

    console.log(userData);

    const [response, setResponse ] = useState()
    const [annuel, setAnnuel] = useState(false);
    const [ makePayment, setMakePayment ] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')
    const [ makePaymentMuscu, setMakePaymentMuscu ] = useState(false);
    const [ makePaymentDrill, setMakePaymentDrill ] = useState(false);
    const [ makePaymentPremium, setMakePaymentPremium ] = useState(false);

    const changeAbonnement = async (abonnement) => {
        await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                abonnement: abonnement
            })
    };

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

    const paymentUI = (props) => {
        if (!makePaymentMuscu && !makePaymentPremium && !makePaymentDrill) {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                        <Text style={styles.inscriptionBigText}>Abonnements</Text>

                        <ScrollView style={styles.scrollView}>

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => {
                                setMakePaymentMuscu(true)
                            }}>
                                <Text style={styles.abonnementText}>Préparation physique</Text>
                                <Text style={styles.abonnementTextInner}>10€/mois</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => {
                                setMakePaymentDrill(true)
                            }}>
                                <Text style={styles.abonnementText}>Drill</Text>
                                <Text style={styles.abonnementTextInner}>10€/mois</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => {
                                setMakePaymentPremium(true)
                            }}>
                                <Text style={styles.abonnementText}>Premium</Text>
                                <Text style={styles.abonnementTextInner}>15€/mois</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </ImageBackground>
                </View>
            )
        }

        if (makePaymentMuscu && !makePaymentDrill && !makePaymentPremium) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    {paymentStatus === 'Votre paiement est en cours de traitement' ?
                        <View>
                            <Text style={styles.paymentStatusText}>{ paymentStatus}</Text>
                            <ActivityIndicator />
                        </View> : <Text></Text>}

                    {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                        <View>
                            <View style={styles.finContainer}>
                                <Text style={styles.paymentStatusText2}>Votre paiement a été validé ! Profitez de vos nouvelles vidéos !</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('AccueilScreen')} style={styles.button}>
                                <Text style={styles.buttonText}>Retour au menu principal</Text>
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
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    {paymentStatus === 'Votre paiement est en cours de traitement' ?
                        <View>
                            <Text style={styles.paymentStatusText}>{ paymentStatus}</Text>
                            <ActivityIndicator />
                        </View> : <Text></Text>}

                    {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                        <View>
                            <View style={styles.finContainer}>
                                <Text style={styles.paymentStatusText2}>Votre paiement a été validé ! Profitez de vos nouvelles vidéos !</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('AccueilScreen')} style={styles.button}>
                                <Text style={styles.buttonText}>Retour au menu principal</Text>
                            </TouchableOpacity>
                        </View> : <Text></Text>}
                    </ImageBackground>
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatusDrill} product={"Abonnement Drill"} amount={10}/>
            }
        }

        if (!makePaymentMuscu && !makePaymentDrill && makePaymentPremium) {
            if(response !== undefined){
                return <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                    {paymentStatus === 'Votre paiement est en cours de traitement' ?
                        <View>
                            <Text style={styles.paymentStatusText}>{ paymentStatus}</Text>
                            <ActivityIndicator />
                        </View> : <Text></Text>}

                    {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                        <View>
                            <View style={styles.finContainer}>
                                <Text style={styles.paymentStatusText2}>Votre paiement a été validé ! Profitez de vos nouvelles vidéos !</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('AccueilScreen')} style={styles.button}>
                                <Text style={styles.buttonText}>Retour au menu principal</Text>
                            </TouchableOpacity>
                        </View> : <Text></Text>}
                    </ImageBackground>
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatusPremium} product={"Abonnement Premium"} amount={15}/>
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
        fontSize: 50,
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
export default AbonnementScreen;
