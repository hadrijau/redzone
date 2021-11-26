import React, {useState} from 'react';
import {
    View,
    Linking,
    Text,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const EquipementDetailScreen = ({navigation, route}) => {


    const description = route.params.description
    const lien = route.params.lien
    const prix = route.params.prix
    const titre = route.params.titre
    const image = route.params.image

    const [browser, setBrowser] = useState(false);

    console.log(lien)
    const loadInBrowser = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };


    return (
        <View style={styles.container}>
             <ScrollView>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <TouchableOpacity style={styles.recetteCard}>
                        <Image
                            style={styles.imageCard}
                            source={{
                                uri: image
                            }}
                        />
                    </TouchableOpacity>

                    <Text style={styles.abonnementFreeTextBig}>{titre}</Text>
                    <View>
                        <Text style={styles.infoNutrition}>Description</Text>

                        <View style={styles.ingredientList}>
                            <Text style={styles.ingredientText}>{description}</Text>
                        </View>

                    </View>


                    <View>

                        <View style={styles.ingredientList}>
                            <Text style={styles.ingredientText}>{prix}</Text>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.acheter} onPress={() => loadInBrowser(lien)}>
                        <Text style={styles.ingredientText}>Acheter</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
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
    acheter: {
        backgroundColor: 'red',
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: 20,
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    addition: {
        textAlign: 'center',
        marginTop: 20
    },
    recetteCard: {
        width: windowWidth,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        position: 'relative',
        height: 250,
        justifyContent: 'center',
    },
    recetteCardMini: {
        width: windowWidth/2,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        height: 120,
        padding: '4%'
    },
    infoNutrition: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    portion: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20
    },
    imageCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    abonnementFreeTextBig: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    ingredientText: {
        color: 'white',
        fontSize: 18
    },
    ingredientList: {
        padding: "4%"
    },
    infoContainer: {
        display: 'flex',
        width: '95%',
        bottom: 5,
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    redText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    abonnementFreeText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    recette: {
        color: 'white',
        marginTop: 10,
        fontSize: 18,
    },
    recetteContainer: {
        marginBottom: '10%',
        padding: '4%'
    },
});

export default EquipementDetailScreen;
