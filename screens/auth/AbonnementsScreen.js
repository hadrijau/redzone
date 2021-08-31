import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import {Formik} from "formik";


const AbonnementsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <Text style={styles.inscriptionBigText}>Abonnements</Text>

                <ScrollView style={styles.scrollView}>


                <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('AccueilScreen')}>
                    <Text style={styles.abonnementFreeText}>Free</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('AccueilScreen')}>
                    <Text style={styles.abonnementText}>Musculation</Text>
                    <Text style={styles.abonnementTextInner}>10€/mois</Text>
                    <Text style={styles.abonnementTextInner}>100€/an</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('AccueilScreen')}>
                    <Text style={styles.abonnementText}>Drill</Text>
                    <Text style={styles.abonnementTextInner}>10€/mois</Text>
                    <Text style={styles.abonnementTextInner}>100€/an</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('AccueilScreen')}>
                    <Text style={styles.abonnementText}>Premium</Text>
                    <Text style={styles.abonnementTextInner}>15€/mois</Text>
                    <Text style={styles.abonnementTextInner}>170€/an</Text>
                </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        </View>
    );
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
        marginTop: 150,
        marginBottom: 30
    },
})
export default AbonnementsScreen;