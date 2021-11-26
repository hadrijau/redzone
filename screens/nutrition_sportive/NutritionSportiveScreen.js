import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image, FlatList
} from 'react-native';
import {Formik} from "formik";
import NutritionSportiveCard from "./components/NutritionSportiveCard";
import EquipementSportifCard from "../equipement_sportif/components/EquipementSportifCard";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const NutritionSportiveScreen = ({navigation}) => {

    const [cf, setCF] = useState([]);

    useEffect(() => {
        const getCF = async () => {
            await firebase
                .firestore()
                .collection('CF7')
                .get().then(snapshot => {
                    console.log(snapshot)
                    let productsBoosted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setCF(productsBoosted)
                }).catch(err => console.log(err))
        }
        getCF()
    }, []);

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>
                    <Image source={require('../../assets/CF7logo.png')} style={styles.imageRidge}/>
                    <FlatList
                        columnWrapperStyle={{justifyContent: 'space-around'}}
                        data={cf}
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
        height: 120,
        marginTop: 20,
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

});
export default NutritionSportiveScreen;
