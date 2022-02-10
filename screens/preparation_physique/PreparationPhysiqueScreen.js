import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";
import i18next from "i18next";



const PreparationPhysiqueScreen = ({navigation, route}) => {

    let entrainement;
    if (route.params) {
        entrainement = route.params.entrainement;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('JourSelectionScreen', {semaine: 1, entrainement: entrainement})}>
                    {i18next.language === "en" ?  <ImageBackground
                        source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2Fweek%201.png?alt=media&token=39210f38-7de6-4d22-aca1-6afbfc48efe6"}}
                        style={styles.imageBackground}
                    >
                    </ImageBackground> :
                        <ImageBackground
                            source={require('../../assets/semaine_1.png')}
                            style={styles.imageBackground}
                        >
                        </ImageBackground>

                    }
                </TouchableOpacity>

                <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('JourSelectionScreen', {semaine: 2, entrainement: entrainement})}>
                    {i18next.language === "en" ?
                        <ImageBackground
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%202%2Fweek%202.png?alt=media&token=9bb59cc6-297f-45d1-bbf5-bcb9924e7484"}}
                            style={styles.imageBackground}
                        >
                        </ImageBackground>:

                        <ImageBackground
                            source={require('../../assets/semaine_2.png')}
                            style={styles.imageBackground}
                        >
                        </ImageBackground>}

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
    abonnementCard: {
        width: '100%',
        height: 170,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: '3%',
        alignItems: 'center'
    },
    abonnementButton: {
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 15
    },
    abonnementTextInner: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    scrollView: {
        marginBottom: '40%'
    },
    abonnementFreeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 55
    },
    abonnementText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    inscriptionBigText: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
        marginBottom: 30
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    }
});


export default PreparationPhysiqueScreen;
