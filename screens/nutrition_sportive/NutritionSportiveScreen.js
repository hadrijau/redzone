import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import NutritionSportiveCard from "./components/NutritionSportiveCard";



const NutritionSportiveScreen = ({navigation}) => {



    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>

                    <View style={styles.row}>
                        <NutritionSportiveCard image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F02082018-whey.jpg?alt=media&token=95481326-0c76-4300-b62c-23e8933e943f"/>
                        <NutritionSportiveCard image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F22032019-plantilla_gold_bote300g_RX7%20(Medium).png?alt=media&token=65fd7177-c374-4294-81ba-515dceb8f466"/>
                    </View>

                    <View style={styles.row}>
                        <NutritionSportiveCard image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F02082018-whey.jpg?alt=media&token=95481326-0c76-4300-b62c-23e8933e943f"/>
                        <NutritionSportiveCard image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F22032019-plantilla_gold_bote300g_RX7%20(Medium).png?alt=media&token=65fd7177-c374-4294-81ba-515dceb8f466"/>
                    </View>

                    <View style={styles.row}>
                        <NutritionSportiveCard image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F02082018-whey.jpg?alt=media&token=95481326-0c76-4300-b62c-23e8933e943f"/>
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
export default NutritionSportiveScreen;
