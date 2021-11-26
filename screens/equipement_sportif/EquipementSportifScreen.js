import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, Image, FlatList, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import EquipementSportifCard from "./components/EquipementSportifCard";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const EquipementSportifScreen = ({navigation}) => {

    const [ridge, setRidge] = useState([]);
    const [sportus, setSportus] = useState([]);

    useEffect(() => {
        let getRidge = async () => {
            await firebase
                .firestore()
                .collection('Ridge')
                .get()
                .then(snapshot => {
                    let productsBoosted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setRidge(productsBoosted)
                })
        }
        let getSportus = async () => {
            await firebase
                .firestore()
                .collection('SportusCompany')
                .get().then(snapshot => {
                    let productsBoosted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setSportus(productsBoosted)
                })
        }
        getRidge()
        getSportus()
    }, []);

    console.log('ridge', ridge);
    console.log('sportus', sportus)

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>

                    <View style={styles.imageRidgeContainer}>
                        <Image source={require('../../assets/logoRidge.png')} style={styles.imageRidge}/>
                    </View>

                    <FlatList
                        columnWrapperStyle={{justifyContent: 'space-around'}}
                        data={ridge}
                        numColumns={2}
                        renderItem={({item}) => {
                            console.log(item)
                            return (
                                <EquipementSportifCard image={item.image} handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                    description : item.description, lien : item.lien, prix : item.prix, titre : item.article, image: item.image
                                })} description={item.description} prix={item.prix} titre={item.article}/>
                            );
                        }}
                    />

                    <View style={styles.imageRidgeContainer}>
                        <Image source={require('../../assets/logoSportusCompany.png')} style={styles.imageRidge}/>
                    </View>

                    <FlatList
                        columnWrapperStyle={{justifyContent: 'space-around'}}
                        data={sportus}
                        numColumns={2}
                        renderItem={({item}) => {
                            console.log(item)
                            return (
                                <EquipementSportifCard image={item.image} handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                    description : item.description, lien : item.lien, prix : item.prix, titre : item.article, image: item.image
                                })} description={item.description} prix={item.prix} titre={item.article}/>
                            );
                        }}
                    />
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
        height: 150,
        padding: '4%'
    },
    scrollView: {
        flex: 1,
    },
    imageRidge: {
        width: '90%',
        padding: 5,
        height: 60,
        alignSelf: 'center'
    },
    imageRidgeContainer: {
        backgroundColor: 'white',
        width: windowWidth/1.1,
        paddingTop: '10%',
        paddingBottom: '2%',
        paddingHorizontal: '2%',
        alignSelf: 'center',
        marginBottom: '5%'
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
