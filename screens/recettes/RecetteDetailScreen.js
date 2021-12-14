import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Dimensions, StyleSheet, ScrollView, Image} from 'react-native';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecetteDetailScreen = ({title, navigation, route}) => {

    const time = route.params.time;
    const ingredient1 = route.params.ingredient1;
    const ingredient2 = route.params.ingredient2;
    const ingredient3 = route.params.ingredient3;
    const ingredient4 = route.params?.ingredient4;
    const ingredient5 = route.params?.ingredient5;
    const ingredient6 = route.params?.ingredient6;
    const recette = route.params.recette;
    const image = route.params.image;
    const name = route.params.name;

    return (
        <View style={styles.container}>
            <ScrollView>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <TouchableOpacity style={styles.recetteCard}>
                        <Image
                            style={styles.imageCard}
                            source={{
                                uri: image
                            }}
                        />
                    </TouchableOpacity>

                <View>
                    <Text style={styles.infoNutrition}>Ingrédients</Text>

                    <View style={styles.ingredientList}>
                        <Text style={styles.ingredientText}>* {ingredient1}</Text>
                        <Text style={styles.ingredientText}>* {ingredient2}</Text>
                        <Text style={styles.ingredientText}>* {ingredient3}</Text>
                        {ingredient4 ? <Text style={styles.ingredientText}>* {ingredient4}</Text> : <Text/>}
                        {ingredient5 ?  <Text style={styles.ingredientText}>* {ingredient5}</Text>: <Text/>}
                        {ingredient6 ?  <Text style={styles.ingredientText}>* {ingredient6}</Text>: <Text/>}
                    </View>

                </View>



                <View style={styles.recetteContainer}>
                    <Text style={styles.infoNutrition}>Recette</Text>

                    <Text style={styles.recette}>{recette}</Text>
                </View>

            </ImageBackground>
            </ScrollView>
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
    addition: {
        textAlign: 'center',
        marginTop: 20
    },
    recetteCard: {
        width: windowWidth,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        position: 'relative',
        height: 250,
        justifyContent: 'center',
    },
    recetteCardMini: {
        width: windowWidth/2,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        height: 120,
        padding: '4%'
    },
    infoNutrition: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    portion: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20
    },
    imageCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    abonnementFreeTextBig: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 150
    },
    ingredientText: {
        color: 'white',
        fontSize: 18
    },
    ingredientList: {
        padding: "4%"
    },
    infoContainer: {
        display: 'flex',
        width: '95%',
        bottom: 5,
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    redText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    abonnementFreeText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    recette: {
        color: 'white',
        marginTop: 10,
        fontSize: 18,
    },
    recetteContainer: {
        marginBottom: '10%',
        padding: '4%'
    },
})
export default RecetteDetailScreen;
