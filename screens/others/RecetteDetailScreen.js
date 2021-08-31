import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecetteDetailScreen = ({title, navigation}) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <TouchableOpacity style={styles.recetteCard}>
                        <Text style={styles.abonnementFreeText}>Poulet Mariné</Text>
                    </TouchableOpacity>
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
        width: 500,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        height: 120,
        padding: '4%'
    },

})
export default RecetteDetailScreen;