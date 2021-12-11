import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    TextInput,
    FlatList,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";

const ClubScreen = ({navigation}) => {

    const [clubs, setClubs] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredClubs, setFilteredClubs] = useState([]);
    const [image, setImage] = useState('');
    const [adresse, setAdresse] = useState('');
    const [site, setSite] = useState('jdfjd');
    const [mail, setMail] = useState('dfdd');
    const [phone, setPhone] = useState('dfdf');
    const [region, setRegion] = useState('dfd');

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(userActions.fetchUser())
        });
        return unsubscribe
    }, [dispatch, navigation]);

    const userData = useSelector(state => state.user.currentUser)

    useEffect(() => {
        firebase.firestore()
            .collection('clubs')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    setClubs(prevState => [...prevState, doc.data().name])
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [image]);

    const getImage = (club) => {
        firebase
            .firestore()
            .collection('clubs')
            .where("name", "==", club)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setImage(doc.data().logo)
                    setRegion(doc.data().region)
                    setAdresse(doc.data().adresse)
                    setSite(doc.data().internet)
                    setMail(doc.data().mail)
                    setPhone(doc.data().phone)
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    };

    const saveClub = (region, adresse, site, mail, phone, image) => {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .update({
                regionClub: region,
                adresseClub: adresse,
                siteClub: site,
                mailClub: mail,
                phoneClub: phone,
                imageClub: image
            }).then(() => {
                console.log("done")
        }).catch(err => console.log(err))
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = clubs.filter(function (item) {
                const itemData = item
                    ? item.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredClubs(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredClubs(clubs);
            setSearch(text);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="height"
            >
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                        <ScrollView>
                            {userData.phoneClub ? <View>
                                <Image
                                    style={styles.imageClub}
                                    source={{
                                        uri: userData.imageClub ? userData.imageClub : image
                                    }}/>
                                <Text style={styles.infoClub}>Région : {userData.regionClub ? userData.regionClub : region}</Text>
                                <Text style={styles.infoClub}>Adresse : {userData.adresseClub ? userData.adresseClub : adresse}</Text>
                                <Text style={styles.infoClub}>Site : {userData.siteClub ? userData.siteClub : site}</Text>
                                <Text style={styles.infoClub}>Mail : {userData.mailClub ? userData.mailClub : mail}</Text>
                                <Text style={styles.infoClub}>Téléphone : {userData.phoneClub ? userData.phoneClub : phone}</Text>


                                <TouchableOpacity style={styles.inscriptionButton} onPress={() => navigation.navigate('ChooseClubScreen')}>
                                    <Text style={styles.inscriptionText}>Changer de club</Text>
                                </TouchableOpacity>
                            </View> : <View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Rechercher mon club"
                                    value={search}
                                    onChangeText={(text) => searchFilterFunction(text)}
                                />
                                {!filteredClubs.includes(search) ?    <FlatList
                                    data={filteredClubs}
                                    keyExtractor={(item, index) => index.toString()}
                                    ItemSeparatorComponent={ItemSeparatorView}
                                    renderItem={itemData => {
                                        return (
                                            <TouchableOpacity onPress={async () => {
                                                console.log('item', itemData.item)
                                                setSearch(itemData.item)
                                                await getImage(itemData.item)
                                            }}>
                                                <Text style={styles.itemStyle}>{itemData.item}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}
                                /> : <Text/>}
                                {image ? <View>
                                    <Image
                                        style={styles.imageClub}
                                        source={{
                                            uri: userData.imageClub ? userData.imageClub : image
                                        }}/>
                                    <Text style={styles.infoClub}>Région : {userData.regionClub ? userData.regionClub : region}</Text>
                                    <Text style={styles.infoClub}>Adresse : {userData.adresseClub ? userData.adresseClub : adresse}</Text>
                                    <Text style={styles.infoClub}>Site : {userData.siteClub ? userData.siteClub : site}</Text>
                                    <Text style={styles.infoClub}>Mail : {userData.mailClub ? userData.mailClub : mail}</Text>
                                    <Text style={styles.infoClub}>Téléphone : {userData.phoneClub ? userData.phoneClub : phone}</Text>


                                    <TouchableOpacity style={styles.inscriptionButton} onPress={async() => {
                                        await saveClub(region, adresse, site, mail, phone, image)
                                        navigation.navigate("ConfirmationClubScreen")
                                    }}>
                                        <Text style={styles.inscriptionText}>Sauvegarder mes données</Text>
                                    </TouchableOpacity>
                                </View>  : <Text/>}
                            </View> }


                        </ScrollView>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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
    textInput: {
        width: '90%',
        backgroundColor: "white",
        alignSelf: 'center',
        paddingLeft: 10,
        height: 35,
        borderRadius: 10
    },
    imageClub: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 40
    },
    itemStyle: {
        padding: 10,
        color: 'white'
    },
    infoClub: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    inscriptionButton: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    inscriptionText: {
        color: 'red',
        fontSize: 25
    },
});

export default ClubScreen;
