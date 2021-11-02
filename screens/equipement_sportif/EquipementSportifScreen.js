import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import EquipementSportifCard from "./components/EquipementSportifCard";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const EquipementSportifScreen = ({navigation}) => {

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <Text style={styles.inscriptionBigText}>Equipements sportifs</Text>
                <ScrollView style={styles.scrollView}>

                    <View style={styles.row}>
                       <EquipementSportifCard
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20blanche.jpg?alt=media&token=c52a514c-f6f6-43cd-9c0b-6a75178f157e"
                       />
                        <EquipementSportifCard
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20bleu.jpg?alt=media&token=147ce023-c9a5-421d-8266-945b4c981fd6"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20noir.jpg?alt=media&token=4a407220-7a53-4120-b041-f8f524fb58a1"
                        />
                        <EquipementSportifCard
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20rouge.jpg?alt=media&token=6ed71f50-ac4d-425c-ba2c-914050a267b7"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20verte.jpg?alt=media&token=abafab7a-5ed2-4a1a-9f4c-85be8b876a76"
                        />
                        <EquipementSportifCard
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fgatorade%20sachet%206%20gallon.jpg?alt=media&token=aff5c1d3-a176-4b1c-804f-a6625dcfc350"
                        />
                    </View>

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
    recetteCard: {
        width: windowWidth/2.5,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        height: 120,
        padding: '4%'
    },
    scrollView: {
        flex: 1,
    },
    abonnementFreeText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 25
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inscriptionBigText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 30
    },
    product: {
        color: 'white',
        textAlign: 'center'
    }

})
export default EquipementSportifScreen;
