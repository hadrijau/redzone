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
import {useTranslation} from "react-i18next";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const NutritionDetailScreen = ({navigation, route}) => {

    const description1 = route.params.description1
    const description2 = route.params.description2
    const description3 = route.params.description3
    const description4 = route.params?.description4
    const description5 = route.params?.description5
    const description6 = route.params?.description6
    const description7 = route.params?.description7
    const description8 = route.params?.description8
    const description9 = route.params?.description9
    const description10 = route.params?.description10
    const description11 = route.params?.description11
    const description12 = route.params?.description12
    const description13 = route.params?.description13
    const description14 = route.params?.description14
    const description15 = route.params?.description15

    const lien = route.params.lien
    const prix = route.params.prix
    const titre = route.params.titre
    const image = route.params.image

    const [browser, setBrowser] = useState(false);

    console.log(lien)
    const loadInBrowser = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    const { i18n, t } = useTranslation();
    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    <TouchableOpacity style={styles.recetteCard}>
                        <Image
                            style={styles.imageCard}
                            source={{
                                uri: image
                            }}
                        />
                    </TouchableOpacity>

                    <Text style={styles.abonnementFreeTextBig}>{titre}</Text>
                    <Text style={styles.infoNutrition}>Description</Text>

                    <View style={styles.ingredientList}>
                        <Text style={styles.ingredientText}>{description1}</Text>
                        <Text style={styles.ingredientText}>{description2}</Text>
                        <Text style={styles.ingredientText}>{description3}</Text>
                        {description4 && <Text style={styles.ingredientText}>{description4}</Text>}
                        {description5 &&                             <Text style={styles.ingredientText}>{description5}</Text>
                        }
                        {description6 &&                             <Text style={styles.ingredientText}>{description6}</Text>
                        }
                        {description7 &&                             <Text style={styles.ingredientText}>{description7}</Text>
                        }
                        {description8 &&                             <Text style={styles.ingredientText}>{description8}</Text>
                        }
                        {description9 &&                             <Text style={styles.ingredientText}>{description9}</Text>
                        }
                        {description10 &&                             <Text style={styles.ingredientText}>{description10}</Text>
                        }
                        {description11 &&                             <Text style={styles.ingredientText}>{description11}</Text>
                        }
                        {description12 &&                             <Text style={styles.ingredientText}>{description12}</Text>
                        }
                        {description13 &&                             <Text style={styles.ingredientText}>{description13}</Text>
                        }
                        {description14 &&                             <Text style={styles.ingredientText}>{description14}</Text>
                        }
                        {description15 &&                             <Text style={styles.ingredientText}>{description15}</Text>
                        }
                    </View>


                    <View style={styles.ingredientList}>
                        <Text style={styles.ingredientText}>{t('prix')} : {prix} €</Text>
                    </View>

                    <TouchableOpacity style={styles.acheter} onPress={() => loadInBrowser(lien)}>
                        <Text style={styles.ingredientText}>{t("acheter")}</Text>
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
        width: windowWidth/1.1,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        marginBottom: 10,
        position: 'relative',
        height: 340,
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

export default NutritionDetailScreen;
