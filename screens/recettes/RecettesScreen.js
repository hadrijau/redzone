import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import RecetteCard from "./components/RecetteCard";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import firebase from "firebase";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecettesScreen = ({navigation}) => {

    const { i18n, t } = useTranslation();

    const [recettes, setRecettes] = useState([]);
    const [recettesEnglish, setRecettesEnglish] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection("RecetteFrench")
            .get().then((querySnapshot) => {
                const recettes = [];
            querySnapshot.forEach((doc) => {
                recettes.push(doc.data())
            })
            setRecettes(recettes);
        });
        firebase
            .firestore()
            .collection("RecetteEnglish")
            .get().then((querySnapshot) => {
            const recettes = [];
            querySnapshot.forEach((doc) => {
                recettes.push(doc.data())
            })
            setRecettesEnglish(recettes);
        });
    }, []);

    console.log('recettes', recettes);

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                {i18next.language === "en" ?
                <ScrollView style={styles.scrollView}>

                    {recettesEnglish.map((recette, index) => {
                        return (
                            <RecetteCard
                                key={index}
                                handlePress={() => navigation.navigate('RecetteDetailScreen', {
                                    name: recette.name,
                                    image: recette.imageTemps,
                                    ingredient1: recette.ingredient1,
                                    ingredient2: recette.ingredient2,
                                    ingredient3: recette.ingredient3,
                                    ingredient4: recette?.ingredient4,
                                    ingredient5: recette?.ingredient5,
                                    ingredient6: recette?.ingredient6,
                                    ingredient7: recette?.ingredient7,
                                    recette: recette.recette
                                })}
                                name={recette.name}
                                image={recette.image}
                                recette={recette.recette}
                                ingredient1={recette.ingredient1}
                                ingredient2={recette.ingredient2}
                                ingredient3={recette.ingredient3}
                                ingredient4={recette?.ingredient4}
                                ingredient5={recette?.ingredient5}
                                ingredient6={recette?.ingredient6}
                                ingredient7={recette?.ingredient7}
                                imageTemps={recette.imageTemps}
                            />
                        )
                    })}

                </ScrollView> : <ScrollView style={styles.scrollView}>

                        {recettes.map((recette, index) => {
                            return (
                                <RecetteCard
                                    key={index}
                                    handlePress={() => navigation.navigate('RecetteDetailScreen', {
                                        name: recette.name,
                                        image: recette.imageTemps,
                                        ingredient1: recette.ingredient1,
                                        ingredient2: recette.ingredient2,
                                        ingredient3: recette.ingredient3,
                                        ingredient4: recette?.ingredient4,
                                        ingredient5: recette?.ingredient5,
                                        ingredient6: recette?.ingredient6,
                                        ingredient7: recette?.ingredient7,
                                        recette: recette.recette
                                    })}
                                    name={recette.name}
                                    image={recette.image}
                                    recette={recette.recette}
                                    ingredient1={recette.ingredient1}
                                    ingredient2={recette.ingredient2}
                                    ingredient3={recette.ingredient3}
                                    ingredient4={recette?.ingredient4}
                                    ingredient5={recette?.ingredient5}
                                    ingredient6={recette?.ingredient6}
                                    ingredient7={recette?.ingredient7}
                                    imageTemps={recette.imageTemps}
                                />
                            )
                        })}
                    </ScrollView>}

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
        flex: 1,
    },
    abonnementFreeText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 145
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
