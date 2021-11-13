import React, {useEffect} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";

const MusculationScreen = ({navigation}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser);

    if (userData) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <ScrollView>
                        <Text style={styles.inscriptionBigText}>Musculation</Text>

                        <View style={styles.scrollView}>

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('MuscuVideoDay1')}>
                                <ImageBackground
                                    source={require('../../assets/Day_1.png')}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('MuscuVideoDay2')}>
                                <ImageBackground
                                    source={require('../../assets/Day_2.png')}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('MuscuVideoDay3')}>
                                <ImageBackground
                                    source={require('../../assets/Day_3.png')}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground>
                            </TouchableOpacity>

                            {userData.abonnement !== "Musculation" || userData.abonnement !== "Premium" ?
                                <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('GererAbonnementScreen')}>
                                    <ImageBackground
                                        source={require('../../assets/préparation_physique_verrou.png')}
                                        style={styles.imageBackground}
                                    >
                                    </ImageBackground>
                                </TouchableOpacity> : <Text/>
                            }

                            {userData.abonnement !== "Musculation" || userData.abonnement !== "Premium" ?
                                <TouchableOpacity style={styles.abonnementButton}
                                                  onPress={() => navigation.navigate('GererAbonnementScreen')}>
                                    <Text style={styles.abonnementText}>Pour profiter pleinement de l'application, souscrivez à l'abonnement musculation ! </Text>
                                </TouchableOpacity> : <Text/>
                            }
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    } else {
        return <View>
            <ActivityIndicator/>
        </View>
    }

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
})
export default MusculationScreen;
