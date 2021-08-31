import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import {Formik} from "formik";

const DrillScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <Text style={styles.inscriptionBigText}>Drill</Text>

                <View style={styles.scrollView}>

                    <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('ViewVideoScreen')}>
                        <Text style={styles.abonnementFreeText}>DRILL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('AccueilScreen')}>
                        <Text style={styles.abonnementText}>DRILL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('AccueilScreen')}>
                        <Text style={styles.abonnementText}>DRILL</Text>
                    </TouchableOpacity>

                </View>
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
        height: 170,
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
        marginBottom: '40%'
    },
    abonnementFreeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 55
    },
    abonnementText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 55
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
export default DrillScreen;