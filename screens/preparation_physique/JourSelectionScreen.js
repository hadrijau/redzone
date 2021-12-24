import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";
import i18next from "i18next";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const JourSelectionScreen = ({navigation, route}) => {

    const semaine = route.params.semaine

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                {semaine === 1 ? <View>
                    <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('Jour1Semaine1')}>
                        {i18next.language === "en" ?  <ImageBackground
                            source={require('../../assets/Day_1.png')}
                            style={styles.imageBackground}
                        >
                        </ImageBackground>:
                            <ImageBackground
                                source={require('../../assets/Jour_1.png')}
                                style={styles.imageBackground}
                            >
                            </ImageBackground>}

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('Jour2Semaine1')}>
                        {i18next.language === "en" ?   <ImageBackground
                            source={require('../../assets/Day2.png')}
                            style={styles.imageBackground}
                        >
                        </ImageBackground> :
                            <ImageBackground
                                source={require('../../assets/Jour_2.png')}
                                style={styles.imageBackground}
                            >
                            </ImageBackground>}

                    </TouchableOpacity>
                </View> :
                    <View>
                        <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('Jour1Semaine2')}>
                            {i18next.language === "en" ?  <ImageBackground
                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%202%2FJour%203%2FDay%203.png?alt=media&token=dc5364d8-7327-48c8-b639-8674c3bf3562"}}
                                style={styles.imageBackground}
                            >
                            </ImageBackground> :
                                <ImageBackground
                                    source={require('../../assets/Jour_3.png')}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground>}

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('Jour2Semaine2')}>
                            {i18next.language === "en" ? <ImageBackground
                                source={require('../../assets/day4.png')}
                                style={styles.imageBackground}
                            >
                            </ImageBackground> :
                                <ImageBackground
                                    source={require('../../assets/Jour_4.png')}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground>}

                        </TouchableOpacity>
                    </View>
                }

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

export default JourSelectionScreen;
