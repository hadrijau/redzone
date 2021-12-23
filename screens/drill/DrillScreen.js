import React, {useEffect} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import {useTranslation} from "react-i18next";

const DrillScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser);

    if (userData) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                    <View style={styles.scrollView}>

                        {(userData.abonnement !== "Drill" && userData.abonnement !== "Premium") ?
                            <>
                            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('GererAbonnementScreen', {
                                entrainement: "drill"
                            })}>
                                <ImageBackground
                                    source={require('../../assets/drill_verrou.png')}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground>
                            </TouchableOpacity>

                                <TouchableOpacity style={styles.abonnementButton}
                                                  onPress={() => navigation.navigate('GererAbonnementScreen', {
                                                      entrainement: "drill"
                                                  })}>
                                    <Text style={styles.abonnementText}>{t("profiter2")}</Text>
                                </TouchableOpacity>
                            </>:

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('ViewVideoScreen')}>
                                <ImageBackground
                                    source={{
                                        uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/choix%20abonnements%2F3%5B1%5D.png?alt=media&token=a57b41d0-80e5-4ebd-86f0-5c4abfa997d5'
                                    }}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground>
                            </TouchableOpacity>
                        }

                    </View>
                </ImageBackground>
            </View>
        );
    } else {
        return (
            <View>
                <ActivityIndicator/>
            </View>
        )
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
    abonnementButton: {
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 15
    },
    abonnementCard: {
        width: '100%',
        height: 170,
        borderColor: 'white',
        borderWidth: 2,
        marginBottom: '3%',
        alignItems: 'center'
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
        marginTop: 150,
        marginBottom: 30
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    }
})
export default DrillScreen;
