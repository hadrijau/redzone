import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;

const NutritionSportiveCard = ({image, navigation}) => {

    return (
        <View>
            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                <ImageBackground source={{uri: image}} resizeMode="cover" style={styles.imageBackground}/>
            </TouchableOpacity>
            <Text style={styles.product}>produit</Text>
            <Text style={styles.product}>prix</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    recetteCard: {
        width: windowWidth/2.5,
        borderColor: 'lightgrey',
        borderWidth: 3,
        height: 120,
        padding: '4%'
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    product: {
        color: 'white',
        textAlign: 'center'
    }
});

export default NutritionSportiveCard;
