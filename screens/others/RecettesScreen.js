import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecettesScreen = ({navigation}) => {



    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <Text style={styles.inscriptionBigText}>Recettes</Text>
                <ScrollView style={styles.scrollView}>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen')}>
                                <Text style={styles.abonnementFreeText}>Toast d'avocat</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Avocat saumon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Dôme avocat saumon</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Wraps avocat thon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Wrap saumon</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Boule de fromage</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Bagel saumon fumé</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Pancakes rapides</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Bowlcake au chocolat</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Omelette blanc de dinde et champignons</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Nuggets de poulet</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Chicken tender</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Escalope milanaise</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Brochette de saumon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Nouilles au saumon</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Croquettes de poisson</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Burger au poulet</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Poke bowl saumon avocat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Poke bowl poulet mangue</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Frite de patate douce</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Barres protéinées</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Energy balls</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Text style={styles.abonnementFreeText}>Egg muffins</Text>
                            </TouchableOpacity>
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
        width: windowWidth/2,
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
    },
    inscriptionBigText: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 30
    },

})
export default RecettesScreen;
