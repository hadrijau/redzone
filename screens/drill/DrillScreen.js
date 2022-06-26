import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import {useTranslation} from "react-i18next";
import firebase from "firebase";


const DrillScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    const [videoDrill, setVideoDrill] = useState([]);


    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser);

    useEffect(() => {
        let data = [];
        const getPhotoDrill = async () => {
            await firebase.firestore()
                .collection("Drill")
                .where("poste", "==", "All")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log("jkdfjdjfdkls")
                        console.log('data', doc.data())
                        data.push(doc.data())
                    });
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            await firebase.firestore()
                .collection("Drill")
                .where("poste", "==", `${userData.poste}`)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log('data', doc.data())
                        data.push(doc.data())
                    });
                });
            setVideoDrill(data)
        }
        getPhotoDrill()
    }, []);

    console.log("videos", videoDrill)
    const photoNormal = ({ item }) => {
        return (
            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('ViewVideoScreen', {
                poste: item.poste,
                name: item.name
            })}>
                <ImageBackground
                    source={{uri: item.photo}}
                    style={styles.imageBackground}
                />
            </TouchableOpacity>
        )
    }

    const photoLocked = ({ item }) => {
        return (
            <TouchableOpacity style={styles.abonnementCard} onPress={() => navigation.navigate('GererAbonnementScreen', {
                entrainement: "drill"
            })}>
                <ImageBackground
                    source={{uri: item.photoLock}}
                    style={styles.imageBackground}
                />
            </TouchableOpacity>
        )
    }


    if (userData.poste) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                    <View style={styles.scrollView}>

                        {(userData.abonnement !== "Drill" && userData.abonnement !== "Premium") ?
                            <>
                            <FlatList
                                data={videoDrill}
                                renderItem={photoLocked}
                                keyExtractor={item => item.id}
                            />

                                <TouchableOpacity style={styles.abonnementButton}
                                                  onPress={() => navigation.navigate('GererAbonnementScreen', {
                                                      entrainement: "drill"
                                                  })}>
                                    <Text style={styles.abonnementText}>{t("profiter2")}</Text>
                                </TouchableOpacity>
                            </>:

                            <FlatList
                                data={videoDrill}
                                renderItem={photoNormal}
                                keyExtractor={item => item.id}
                            />
                        }

                    </View>
                </ImageBackground>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.chosePoste}>Veuillez choisir un poste dans votre profil afin que nous choisissions les meilleures vidéos adaptées pour vous</Text>
                </ImageBackground>
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
    chosePoste: {
      color: 'white',
      textAlign: 'center',
        fontSize: 20
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
        marginBottom: 0
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
