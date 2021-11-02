import React, {useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {Formik} from "formik";
import firebase from "firebase";
import axios from 'axios';
import {PaymentView} from "../../components/PaymentView";

const AbonnementScreen = (props) => {

    const [response, setResponse ] = useState()
    const [annuel, setAnnuel] = useState(false);
    const [ makePayment, setMakePayment ] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')
    const [ makePaymentMuscu, setMakePaymentMuscu ] = useState(false);
    const [ makePaymentDrill, setMakePaymentDrill ] = useState(false);
    const [ makePaymentPremium, setMakePaymentPremium ] = useState(false);

    const onCheckStatusMuscu = async (paymentResponse) => {
        setPaymentStatus('Votre paiement est en cours de traitement')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        console.log('paymentresponse', paymentResponse)
        // perform operation to check payment status

        try {

            const stripeResponse = await axios.post('https://stopgene.herokuapp.com/payment', {
                email: email,
                authToken: jsonResponse,
                planId: 'price_1Imf3rE4O07UQhcfasxQsjQA',
            })

            console.log('TSRIPE RESPONSE', stripeResponse)

            if(stripeResponse){

                console.log(stripeResponse)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
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

            const stripeResponse = await axios.post('https://stopgene.herokuapp.com/payment', {
                email: email,
                authToken: jsonResponse,
                planId: 'price_1Imf3rE4O07UQhcfasxQsjQA',
            })

            console.log('TSRIPE RESPONSE', stripeResponse)

            if(stripeResponse){

                console.log(stripeResponse.data.items.data[0].plan.active)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
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

            const stripeResponse = await axios.post('https://stopgene.herokuapp.com/payment', {
                email: email,
                authToken: jsonResponse,
                planId: 'price_1Imf4HE4O07UQhcfRSK3AcP6',
            })

            console.log('TSRIPE RESPONSE', stripeResponse)

            if(stripeResponse){

                console.log(stripeResponse.data.items.data[0].plan.active)
                const paid = stripeResponse.data.items.data[0].plan.active;
                if(paid === true){
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
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                        <Text style={styles.inscriptionBigText}>Abonnements</Text>

                        <ScrollView style={styles.scrollView}>

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => {
                                setMakePaymentMuscu(true)
                            }}>
                                <Text style={styles.abonnementText}>Musculation</Text>
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
                return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    {paymentStatus === 'Votre paiement est en cours de traitement' ?
                        <View>
                            <Text style={styles.paymentStatusText}>{ paymentStatus}</Text>
                            <ActivityIndicator />
                        </View> : <Text></Text>}

                    {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                        <View>
                            <View style={styles.finContainer}>
                                <Text style={styles.paymentStatusText2}>Votre paiement a été validé ! Votre numéro de téléphone est désormais disponible !</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('ChoiceScreen')} style={styles.button}>
                                <Text style={styles.buttonText}>Retour au menu principal</Text>
                            </TouchableOpacity>
                        </View> : <Text></Text>}
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatusMuscu} product={"Abonnement Muscu"} amount={10}/>
            }
        }

        if (!makePaymentMuscu && makePaymentDrill && !makePaymentPremium) {
            if(response !== undefined){
                return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    {paymentStatus === 'Votre paiement est en cours de traitement' ?
                        <View>
                            <Text style={styles.paymentStatusText}>{ paymentStatus}</Text>
                            <ActivityIndicator />
                        </View> : <Text></Text>}

                    {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                        <View>
                            <View style={styles.finContainer}>
                                <Text style={styles.paymentStatusText2}>Votre paiement a été validé ! Votre numéro de téléphone est désormais disponible !</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('ChoiceScreen')} style={styles.button}>
                                <Text style={styles.buttonText}>Retour au menu principal</Text>
                            </TouchableOpacity>
                        </View> : <Text></Text>}
                </View>

            }else{
                return <PaymentView onCheckStatus={onCheckStatusDrill} product={"Abonnement Drill"} amount={10}/>
            }
        }

        if (!makePaymentMuscu && !makePaymentDrill && makePaymentPremium) {
            if(response !== undefined){
                return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
                    {paymentStatus === 'Votre paiement est en cours de traitement' ?
                        <View>
                            <Text style={styles.paymentStatusText}>{ paymentStatus}</Text>
                            <ActivityIndicator />
                        </View> : <Text></Text>}

                    {paymentStatus === 'Votre paiement a été validé ! Bienvenue chez RoundPower' ?
                        <View>
                            <View style={styles.finContainer}>
                                <Text style={styles.paymentStatusText2}>Votre paiement a été validé ! Votre numéro de téléphone est désormais disponible !</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('ChoiceScreen')} style={styles.button}>
                                <Text style={styles.buttonText}>Retour au menu principal</Text>
                            </TouchableOpacity>
                        </View> : <Text></Text>}
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
})
export default AbonnementScreen;
