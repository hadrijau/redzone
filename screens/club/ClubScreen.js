import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    TextInput,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";

const ClubScreen = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [clubs, setClubs] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredClubs, setFilteredClubs] = useState([]);
    const [images, setImages] = useState([]);
    const [image, setImage] = useState('');
    const [fullData, setFullData] = useState([]);
    useEffect(() => {
        firebase.firestore()
            .collection('clubs')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    setClubs(prevState => [...prevState, doc.data().club])
                    setImages(prevState => [...prevState, doc.data().image])
                    setFullData(prevState => [...prevState, doc.data()])
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [image]);

    const getImage = (club) => {
        console.log('hey')
        console.log('club', club)
        firebase
            .firestore()
            .collection('clubs')
            .where("club", "==", club)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setImage(doc.data().image)
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

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
                console.log('item', item)
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

    console.log('image', image);
    console.log('search', search);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="height"
            >
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <TextInput
                        style={styles.textInput}
                        placeholder="Rechercher mon club"
                        value={search}
                        onChangeText={(text) => searchFilterFunction(text)}
                />
                {image ?  <Image
                    style={styles.imageClub}
                    source={{
                        uri: image
                    }}/> : <Text/>}

                {!filteredClubs.includes(search) ?    <FlatList
                    data={filteredClubs}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={itemData => {
                        return (
                            <TouchableOpacity onPress={async () => {
                                setSearch(itemData.item)
                                getImage(itemData.item)
                            }}>
                                <Text style={styles.itemStyle}>{itemData.item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                /> : <Text/>}

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
});

export default ClubScreen;
