import React from 'react';
import {Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;

const RecetteCard = ({
                         navigation,
                         ingredient1,
                         ingredient2,
                         ingredient3,
                         ingredient4,
                         ingredient5,
                         ingredient6,
                         ingredient7,
                        recette,
    imageTemps,
    image,
    name,
    handlePress
}) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.recetteCard}>
            <Image
                style={styles.imageCard}
                source={{uri: image}}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    recetteCard: {
        width: windowWidth,
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
})
export default RecetteCard;
