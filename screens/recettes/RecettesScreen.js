import React from 'react';
import {ImageBackground, Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import {useTranslation} from "react-i18next";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecettesScreen = ({navigation}) => {

    const { i18n, t } = useTranslation();

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>


                            <TouchableOpacity onPress={() => navigation.navigate('RecetteDetailScreen', {
                                name: `${t("Recettes1.1")}`,
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FToast%20avocat%20oeuf.png?alt=media&token=663f2eaa-82ac-4bae-a6f3-4d77cabdda41',
                                ingredient1: `${t("Recettes1.2")}`,
                                ingredient2: `${t("Recettes1.3")}`,
                                ingredient3: `${t("Recettes1.4")}`,
                                ingredient4: `${t("Recettes1.5")}`,
                                recette: `${t("Recettes1.6")}`,
                                time: '10min'
                            })} style={styles.recetteCard}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/ToastAvocatOeuflarge.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FAvocat%20oeuf%20saumon.png?alt=media&token=62fea7fc-5a23-425d-88ba-e899b2d04b42',
                                ingredient1: `${t("Recettes2.2")}`,
                                ingredient2: `${t("Recettes2.3")}`,
                                ingredient3: `${t("Recettes2.4")}`,
                                recette: `${t("Recettes2.5")}`,
                                time: '10min',
                                name: `${t("Recettes2.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/AvocatOeufSaumonlarge.jpg.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FDome%20avocat%20saumon.png?alt=media&token=056f310a-7682-458a-978b-3db199d5d465',
                                ingredient1: `${t("Recettes3.2")}`,
                                ingredient2: `${t("Recettes3.3")}`,
                                ingredient3: `${t("Recettes3.4")}`,
                                ingredient4: `${t("Recettes3.5")}`,
                                ingredient5: `${t("Recettes3.6")}`,
                                recette: `${t("Recettes3.7")}`,
                                time: '10min',
                                name: `${t("Recettes3.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/Dome_avocat_saumon_large.png')}
                                >
                                </Image>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FWrap%20Thon%20Fromage.png?alt=media&token=43f9dbe9-f62a-499c-b0bc-cd10c817e32a',
                                ingredient1: `${t("Recettes4.2")}`,
                                ingredient2: `${t("Recettes4.3")}`,
                                ingredient3: `${t("Recettes4.4")}`,
                                ingredient4: `${t("Recettes4.5")}`,
                                ingredient5: `${t("Recettes4.6")}`,
                                ingredient6: `${t("Recettes4.7")}`,
                                ingredient7: `${t("Recettes4.8")}`,
                                recette: `${t("Recettes4.9")}`,
                                time: '10min',
                                name: `${t("Recettes4.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FWrap%20Thon%20Fromage%20large.png?alt=media&token=f2b11ad6-cf24-4552-b986-16af496bb49e"
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>

                    <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                        image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FWrap%20blanc%20de%20dinde.png?alt=media&token=7da9c12d-12e4-47ad-92fc-2fe29ff11c20',
                        ingredient1: `${t("Recettes5.2")}`,
                        ingredient2: `${t("Recettes5.3")}`,
                        ingredient3: `${t("Recettes5.4")}`,
                        ingredient4: `${t("Recettes5.5")}`,
                        recette: `${t("Recettes5.6")}`,
                        time: '10min',
                        name: `${t("Recettes5.1")}`
                    })}>
                        <Image
                            style={styles.imageCard}
                            source={{
                                uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FWrap%20blanc%20de%20dinde%20large.png?alt=media&token=cc3b0fff-3602-4931-9289-97bf9231c172"
                            }}
                        >
                        </Image>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FWrap%20Saumon.png?alt=media&token=4a1dda0e-80f4-470c-9bf0-66dfdb19bfdc',
                                ingredient1: `${t("Recettes6.2")}`,
                                ingredient2: `${t("Recettes6.3")}`,
                                ingredient3: `${t("Recettes6.4")}`,
                                ingredient4: `${t("Recettes6.5")}`,
                                recette: `${t("Recettes6.6")}`,
                                time: '5min',
                                name: `${t("Recettes6.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2Fwrap%20saumon%20fromage%20large.png?alt=media&token=70771e8e-1eb7-445a-b04c-cc10743cb359"
                                    }}
                                >
                                </Image>
                    </TouchableOpacity>


                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FBagel%20saumon.png?alt=media&token=58342f30-b1e0-4992-8ac2-10ff4f57dce4',
                                ingredient1: `${t("Recettes7.2")}`,
                                ingredient2: `${t("Recettes7.3")}`,
                                ingredient3: `${t("Recettes7.4")}`,
                                ingredient4: `${t("Recettes7.5")}`,
                                recette: `${t("Recettes7.6")}`,
                                time: '5min',
                                name: `${t("Recettes7.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/BagelauSaumonlarge.jpg.png')}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FBagel%20Thon.png?alt=media&token=0a280a48-d4fa-4d2b-a43a-d51d1c033734",
                                ingredient1: `${t("Recettes8.2")}`,
                                ingredient2: `${t("Recettes8.3")}`,
                                ingredient3: `${t("Recettes8.4")}`,
                                ingredient4: `${t("Recettes8.5")}`,
                                recette: `${t("Recettes8.6")}`,
                                time: '10min',
                                name: `${t("Recettes8.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/BagelauThonlarge.jpg.png')}
                                />
                            </TouchableOpacity>




                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FSalade%20Ch%C3%A8vre%20Chaud.png?alt=media&token=48d0e33e-4eb7-4e78-bee6-4ce208d68a51',
                                ingredient1: `${t("Recettes9.2")}`,
                                ingredient2: `${t("Recettes9.3")}`,
                                ingredient3: `${t("Recettes9.4")}`,
                                ingredient4: `${t("Recettes9.5")}`,
                                ingredient5: `${t("Recettes9.6")}`,
                                ingredient6: `${t("Recettes9.7")}`,
                                recette: `${t("Recettes9.8")}`,
                                time: '10min',
                                name: `${t("Recettes9.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/SaladeChèvreChaudlarge.png')}
                                />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FQuiche%20thon%20champignon.png?alt=media&token=72d231c0-7265-4c75-93cc-e5ff6ed2a3f0",
                                ingredient1: `${t("Recettes10.2")}`,
                                ingredient2: `${t("Recettes10.3")}`,
                                ingredient3: `${t("Recettes10.4")}`,
                                ingredient4: `${t("Recettes10.5")}`,
                                ingredient5: `${t("Recettes10.6")}`,
                                ingredient6: `${t("Recettes10.7")}`,
                                recette: `${t("Recettes10.8")}`,
                                time: '20min',
                                name: `${t("Recettes10.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Quichethonchampignonlarge.png')}
                                />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FNuggets.png?alt=media&token=75c0a1f9-7809-4170-a588-291e7b0d8d06",
                                ingredient1: `${t("Recettes11.2")}`,
                                ingredient2: `${t("Recettes11.3")}`,
                                ingredient3: `${t("Recettes11.4")}`,
                                ingredient4: `${t("Recettes11.5")}`,
                                recette: `${t("Recettes11.6")}`,
                                time: '30min',
                                name: `${t("Recettes11.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Nuggetslarge.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FPoulet%20tenders.png?alt=media&token=37ab14af-5f38-432d-8003-64400adf7835",
                                ingredient1: `${t("Recettes12.2")}`,
                                ingredient2: `${t("Recettes12.3")}`,
                                ingredient3: `${t("Recettes12.4")}`,
                                ingredient4: `${t("Recettes12.5")}`,
                                recette: `${t("Recettes12.6")}`,
                                time: '30min',
                                name: `${t("Recettes12.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Chickentenderslarge.png')}
                                />
                            </TouchableOpacity>

                    <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                        image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FNouilles%20au%20poulet.png?alt=media&token=c5b3d4bd-9138-4bef-95fb-8e9c8a5b3755",
                        ingredient1: `${t("Recettes13.2")}`,
                        ingredient2: `${t("Recettes13.3")}`,
                        ingredient3: `${t("Recettes13.4")}`,
                        ingredient4: `${t("Recettes13.5")}`,
                        ingredient5: `${t("Recettes13.6")}`,
                        ingredient6: `${t("Recettes13.7")}`,
                        ingredient7: `${t("Recettes13.8")}`,
                        recette: `${t("Recettes13.9")}`,
                        time: '25min',
                        name: `${t("Recettes13.1")}`
                    })}>
                        <Image
                            style={styles.imageCard}
                            source={require("../../assets/Nouilles_au_poulet_large.png")}
                        >
                        </Image>
                    </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FBurger%20poulet%20tenders.png?alt=media&token=f261994c-e973-4878-8f0c-600307f56eb4",
                                ingredient1: `${t("Recettes14.2")}`,
                                ingredient2: `${t("Recettes14.3")}`,
                                ingredient3: `${t("Recettes14.4")}`,
                                ingredient4: `${t("Recettes14.5")}`,
                                ingredient5: `${t("Recettes14.6")}`,
                                ingredient6: `${t("Recettes14.7")}`,
                                recette: `${t("Recettes14.8")}`,
                                time: '20min',
                                name: `${t("Recettes14.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/burgerchickentenderslarge.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FPoke%20bowl%20poulet%20avocat%20saumon.png?alt=media&token=7fb2ecf5-9e89-401b-9fd4-7c23ffe29120",
                                ingredient1: `${t("Recettes15.2")}`,
                                ingredient2: `${t("Recettes15.3")}`,
                                ingredient3: `${t("Recettes15.4")}`,
                                ingredient4: `${t("Recettes15.5")}`,
                                ingredient5: `${t("Recettes15.6")}`,
                                ingredient6: `${t("Recettes15.7")}`,
                                ingredient7: `${t("Recettes15.8")}`,
                                recette: `${t("Recettes15.9")}`,
                                time: '20min',
                                name: `${t("Recettes15.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/PokeBowlPouletAvocat-Melonlarge.png')}
                                />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FFrite%20patate%20douce.png?alt=media&token=164edc23-4d4b-43ba-98eb-efa0fdcbdeac",
                                ingredient1: `${t("Recettes16.2")}`,
                                ingredient2: `${t("Recettes16.3")}`,
                                ingredient3: `${t("Recettes16.4")}`,
                                ingredient4: `${t("Recettes16.5")}`,
                                ingredient5: `${t("Recettes16.6")}`,
                                recette: `${t("Recettes16.7")}`,
                                time: '30min',
                                name: `${t("Recettes16.1")}`
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Fritepatatedoucelarge.png')}
                                />
                            </TouchableOpacity>


                    <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                        image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2Fboules%20fromage.png?alt=media&token=7c7d4c6a-55fd-4e57-8686-8e6a2dc3df54',
                        ingredient1: `${t("Recettes17.2")}`,
                        ingredient2: `${t("Recettes17.3")}`,
                        ingredient3: `${t("Recettes17.4")}`,
                        ingredient4: `${t("Recettes17.5")}`,
                        recette: `${t("Recettes17.6")}`,
                        time: '5min',
                        name: `${t("Recettes17.1")}`
                    })}>
                        <Image
                            style={styles.imageCard}
                            source={require('../../assets/Boule_fromage_chevre_large.png')}
                        >
                        </Image>
                    </TouchableOpacity>

                </ScrollView>

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
    recetteCard: {
        width: windowWidth/1,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 2,
        height: 180,
        marginBottom: 3
    },
    imageCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        flex: 1,
    },
    abonnementFreeText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 145
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    inscriptionBigText: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 30
    },

})
export default RecettesScreen;
