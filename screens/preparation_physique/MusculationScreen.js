import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import firebase from "firebase";

const MusculationScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser);

    const [preparationPhysique, setPreparationPhysique] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection("PreparationPhysique")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setPreparationPhysique(prevState => [...prevState, doc.data()])
                });
            });
    }, []);


    const photoNormal = ({ item }) => {
        return (
            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('PreparationPhysiqueScreen', {
            entrainement: item.name
        })}>
           <ImageBackground
                source={{uri: i18next.language === "en" ? item.photoEn : item.photo}}
                style={styles.imageBackground}
            />
        </TouchableOpacity>
        )
    }

    const photoLocked = ({ item }) => {
        return (
            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('GererAbonnementScreen', {
                entrainement: "muscu"
            })}>
                <ImageBackground
                    source={{uri: i18next.language === "en" ? item.photoLockEn : item.photoLock}}
                    style={styles.imageBackground}
                />
            </TouchableOpacity>
        )
    }

    if (userData) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <ScrollView>

                        <View style={styles.scrollView}>


                            {userData.abonnement === "Musculation" || userData.abonnement === "Premium" ?
                                <FlatList
                                    data={preparationPhysique}
                                    renderItem={photoNormal}
                                    keyExtractor={item => item.id}
                                />
                             :   <FlatList
                                    data={preparationPhysique}
                                    renderItem={photoLocked}
                                    keyExtractor={item => item.id}
                                />
                            }

                            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('ChooseDaysScreen')}>
                                {i18next.language === "en" ? <ImageBackground
                                    source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FBody%20weight.png?alt=media&token=f07c575c-c26e-4378-bb20-0a6e036eec1b"}}
                                    style={styles.imageBackground}
                                >
                                </ImageBackground> :
                                    <ImageBackground
                                        source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FPoids%20du%20corps.png?alt=media&token=079bafe0-a252-4618-b87a-632cba2c69f5"}}
                                        style={styles.imageBackground}
                                    >
                                    </ImageBackground>}

                            </TouchableOpacity>

                            {userData.abonnement !== "Musculation" && userData.abonnement !== "Premium" ?
                                <TouchableOpacity style={styles.abonnementButton}
                                                  onPress={() => navigation.navigate('GererAbonnementScreen', {
                                                      entrainement: "muscu"
                                                  })}>
                                    <Text style={styles.abonnementText}>{`${t("profiter")}`}</Text>
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
