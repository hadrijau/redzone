import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";


const windowWidth = Dimensions.get('window').width;

const EquipementSportifCard = ({image, handleNavigation, description1, description2, description3, lien, prix, titre}) => {

    return (
        <View>
            <TouchableOpacity style={styles.recetteCard} onPress={handleNavigation}>
                <ImageBackground source={{uri: image}} resizeMode="cover" style={styles.imageBackground}/>
            </TouchableOpacity>
            <Text style={styles.product}>{titre}</Text>
            <Text style={styles.product}>Prix : {prix} €</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    recetteCard: {
        width: windowWidth/2.5,
        borderColor: 'lightgrey',
        borderWidth: 3,
        height: 150,
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

export default EquipementSportifCard;
