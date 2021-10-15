import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const EquipementSportifScreen = ({navigation}) => {

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <Text style={styles.inscriptionBigText}>Equipements sportifs</Text>
                <ScrollView style={styles.scrollView}>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen')}>
                                <Text style={styles.abonnementFreeText}></Text>
                            </TouchableOpacity>
                            <Text style={styles.product}>produit</Text>
                            <Text style={styles.product}>prix</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}></Text>
                            </TouchableOpacity>
                            <Text style={styles.product}>produit</Text>
                            <Text style={styles.product}>prix</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}></Text>
                            </TouchableOpacity>
                            <Text style={styles.product}>produit</Text>
                            <Text style={styles.product}>prix</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}></Text>
                            </TouchableOpacity>
                            <Text style={styles.product}>produit</Text>
                            <Text style={styles.product}>prix</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}></Text>
                            </TouchableOpacity>
                            <Text style={styles.product}>produit</Text>
                            <Text style={styles.product}>prix</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}></Text>
                            </TouchableOpacity>
                            <Text style={styles.product}>produit</Text>
                            <Text style={styles.product}>prix</Text>
                        </View>
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