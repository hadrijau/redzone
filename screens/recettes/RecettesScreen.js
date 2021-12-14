import React from 'react';
import {ImageBackground, Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecettesScreen = ({navigation}) => {

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>


                            <TouchableOpacity onPress={() => navigation.navigate('RecetteDetailScreen', {
                                name: 'Toast d\'avocat',
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FToast%20Avocat%20Oeuf.png?alt=media&token=876236cc-956e-4f8a-9506-db8e24f22f10',
                                ingredient1: '1 œuf',
                                ingredient2: '60g de pain complet',
                                ingredient3: '½ avocat',
                                ingredient4: '50g de blanc de poulet/dinde cuit ( ou jambon blanc )',
                                recette: 'Répartir sur deux tranches de pain complet le demi avocat haché, le blanc de poulet/dinde ( ou jambon blanc ) et émincé l’œuf poché dessus.',
                                time: '10min'
                            })} style={styles.recetteCard}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/ToastAvocatOeuflarge.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FAvocat%20Oeuf%20Saumon.jpg?alt=media&token=68e895fa-8c21-4729-b9e8-11b5872ea969',
                                ingredient1: '2 œufs',
                                ingredient2: '1 avocat',
                                ingredient3: '2 tranches de saumon fumé',
                                recette: 'Préchauffer le four à 180°C. Séparer les blanc du jaune, ouvrir l\'avocat en deux, mettre les jaunes d’œufs ( sans les cassés ) dans le creux des avocats, émincé les tranches de saumon fumé et recouvrir les avocats. Enfourner pendant 5min.',
                                time: '10min',
                                name: 'Avocat saumon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/AvocatOeufSaumonlarge.jpg.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FDome%20avocat%20saumon.png?alt=media&token=056f310a-7682-458a-978b-3db199d5d465',
                                ingredient1: '4 tranches de saumon fumé',
                                ingredient2: '2 avocats',
                                ingredient3: '2 œufs',
                                ingredient4: '2 toasts de pain complet',
                                ingredient5: '1 cuillère a café de citron',
                                recette: 'Prendre deux bols tapisser le fond des tranches de saumon.\n' +
                                    'Dans un bol mettre les avocats et écrasé avec une fourchette en rajoutant le citron.\n' +
                                    'Prendre une casserole et faire des œufs pochés.\n' +
                                    'Prendre les tranches de pain complet et les découper a la forme des bols.\n' +
                                    'Une fois les œufs pochés fais,les déposés au fond des bols, recouvrir du guacamole puis mettre les tranches de pain complet par dessus puis retourner le tout sur une assiette.\n',
                                time: '10min',
                                name: 'Dôme avocat saumon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/Dome_avocat_saumon_large.png')}
                                >
                                </Image>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/recette-temps%2FWrap%20Thon%20Fromage.png?alt=media&token=43f9dbe9-f62a-499c-b0bc-cd10c817e32a',
                                ingredient1: '200g de thon',
                                ingredient2: '1 cuillère à soupe de fromage blanc',
                                ingredient3: '½ cuillère à café de romarin',
                                ingredient4: '2 tortilla de blé complet',
                                ingredient5: '½ avocat',
                                ingredient6: '1 citron vert',
                                ingredient7: '4 feuilles de salade',
                                recette: 'Écraser et mélanger le thon avec le fromage blanc, le romain et le jus de citron.\n' +
                                    'Disposer les feuilles de salade au centre de la tortilla, déposer la préparation au thon, ajouter par-dessus des lamelles d\'avocats puis rouler le wrap.\n',
                                time: '10min',
                                name: 'Wrap salade thon'
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
                        ingredient1: '200g de blanc de dinde',
                        ingredient2: '1 cuillère à soupe de fromage blanc',
                        ingredient4: '2 tortilla de blé complet',
                        ingredient7: '4 feuilles de salade',
                        recette: 'Déposez le fromage blanc sur les tortilla.\n' +
                            'Disposer les feuilles de salade au centre de la tortilla, roulez une tranche de blanc de dinde, puis rouler le wrap.\n',
                        time: '10min',
                        name: 'Wrap blanc de dinde'
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
                                ingredient1: '200gr de saumon fumé',
                                ingredient2: '2 tortilla de blé complet',
                                ingredient3: '1 carré de fromage à tartiner',
                                ingredient4: '4 feuilles de salade',
                                recette: 'Etaler le carré de fromage à tartiner sur les tortillas, déposer la salade verte par dessus le fromage à tartiner et mettre le saumon fumé couper en dés par dessus.\n' +
                                    'Rouler et déguster\n',
                                time: '5min',
                                name: 'Wrap saumon'
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
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2Fboules%20fromage.png?alt=media&token=7c7d4c6a-55fd-4e57-8686-8e6a2dc3df54',
                                ingredient1: '200gr de saumon fumé',
                                ingredient2: '2 tortilla de blé complet',
                                ingredient3: '1 carré de fromage à tartiner',
                                ingredient4: '4 feuilles de salade',
                                recette: 'Etaler le carré de fromage à tartiner sur les tortillas, déposer la salade verte par dessus le fromage à tartiner et mettre le saumon fumé couper en dés par dessus.\n' +
                                    'Rouler et déguster\n',
                                time: '5min',
                                name: 'Wrap saumon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBoule%20fromage%20chevre%20large.png?alt=media&token=3faf56c9-facb-4005-a0b1-5cc5e7706837"
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBagel%20au%20Saumon.jpg?alt=media&token=4046dc58-edcd-4d57-a8b3-9f4ccbc20d51',
                                ingredient1: '1 oeuf',
                                ingredient2: '1 bagel',
                                ingredient3: '1 carré de fromage frais',
                                ingredient4: '2 tranches de saumon fumé',
                                recette: 'Faire cuire un œuf sur le plat dans la poêle. Couper le bagel en deux et le faire chauffer quelques minute dans le grille-pain. Tartiner une tranches de bagel avec le fromage frais,puis la salade lavée, les tranches de saumon fumés, l’œuf et refermer avec la seconde tranche de bagel.',
                                time: '5min',
                                name: 'Bagel saumon fumé'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/BagelauSaumonlarge.jpg.png')}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBagel%20au%20Thon.jpg?alt=media&token=0bf61b42-eb72-46f0-87fc-f0d251a15b76',
                                ingredient1: '1 oeuf',
                                ingredient2: '1 bagel',
                                ingredient3: '1 carré de fromage frais',
                                ingredient4: '1/2 boite de thon',
                                recette: '\n' +
                                    'Faire cuire un œuf sur le plat dans la poêle\n' +
                                    'Couper le bagel en deux et le faire chauffer quelques minute dans le grille-pain.\n' +
                                    'Tartiner une tranches de bagel avec le fromage frais,puis ajouter la salade lavée, le thon émietté, l’œuf et refermer avec la seconde tranche de bagel.\n',
                                time: '10min',
                                name: 'Bagel au thon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/BagelauThonlarge.jpg.png')}
                                />
                            </TouchableOpacity>




                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FSalade%20Ch%C3%A8vre%20Chaud.png?alt=media&token=4b93846c-5aea-4e90-82b0-d8129093d350',
                                ingredient1: 'Feuilles de salade',
                                ingredient2: 'Dés de jambon de dinde',
                                ingredient3: 'Tranche de pain',
                                ingredient4: '1/2 bûche de fromage de chèvre',
                                ingredient5: "1 cuillère à soupe de Miel\n" +
                                    "1 cuillère à soupe d'huile d'olive\n" +
                                    "1 cuillère à soupe de vinaigre\n",
                                ingredient6: "1 tomate",
                                recette: 'Couper des rondelles de fromage de chèvre et disposer les sur les tranches de pain, mettre au four pendant 10min.\n' +
                                    'Préparer dans une assiette les feuilles de salade, la tomate couper en morceaux, les champignons émincer ainsi que les dès de jambon de dinde. Assaisonné d\'une cuillère à souper d\'huile d\'olive et de vinaigre, saler poivrer.\n' +
                                    'Sortir du four des tranches de pain avec le chèvre et déposez les la salade, badigeonner d\'une cuillère à soupe de miel.\n',
                                time: '10min',
                                name: 'Salade de chèvre chaud'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/SaladeChèvreChaudlarge.png')}
                                />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FQuiche%20thon%20champignon.png?alt=media&token=5d29bb42-45e7-4797-8328-073ba69fd8f2',
                                ingredient1: '1 pâte à quiche',
                                ingredient2: '150g de thon',
                                ingredient3: '150g de champignons de Paris',
                                ingredient4: '3 oeufs',
                                ingredient5: "20 cl de crème légère",
                                ingredient6: "Sel et poivre",
                                recette: 'Préchauffer le four a 180°\n' +
                                    '\n' +
                                    'Mettre la pâte dans un plat a quiche et faire des empreintes de fourchette dans le fond. Émincer les champignons de paris et le thon, déposez-les sur le fond de la quiche. Battre dans un bol les 3 œufs avec une pincer de sel, de poivre et la crème légère. Mettre le tout dans la quiche et enfourner pendant 15min\n',
                                time: '20min',
                                name: 'Quiche Thon Champignons'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Quichethonchampignonlarge.png')}
                                />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FNuggets.png?alt=media&token=9b8ddbe0-7ece-4925-9575-1ffc8a05f7fc',
                                ingredient1: "3 blancs d'oeuf",
                                ingredient2: '50g de corn-flakes',
                                ingredient3: '260g de filet de poulet',
                                ingredient4: 'Sel et poivre',
                                recette: 'Préchauffer le four à 180°C.\n' +
                                    '\n' +
                                    'Préparer 2 bols pour constituer la panure. Dans le premier bol, mettre le jaune d \' œuf Saler généreusement et poivrer. Dans le deuxième bol, verser et écraser les Corn-flakes .\n' +
                                    '\n' +
                                    'Préparer le blanc de poulet en retirant les parties blanches, puis le découper en lamelles d\'environ 1 ou 2cm d\'épaisseur.\n' +
                                    '\n' +
                                    'Tremper tour à tour les lamelles de poulet dans le jaune  d\'œufs, puis dans les corn-flakes afin de bien les recouvrir. Les déposer délicatement dans un grand plat et enfourner 20 à 25 min.\n',
                                time: '30min',
                                name: 'Nuggets de Poulet'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Nuggetslarge.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59",
                                ingredient1: "2 blancs de poulet",
                                ingredient2: '1 oeuf',
                                ingredient3: '150g de corn flakes natures',
                                ingredient4: 'Sel et poivre',
                                recette: 'Préchauffer le four à 180°C.\n' +
                                    '\n' +
                                    'Découpez les blancs de poulet en batons de 1 cm de large environ.\n' +
                                    'Dans un bol, battez le jaune d\'œuf.\n' +
                                    'Dans un saladier, écrasez bien finement le corn flakes avec le sel et le poivre.\n' +
                                    'Trempez les émincés de poulet dans le mélange liquide, puis dans les céréales et déposez-les sur une plaque de four.\n',
                                time: '30min',
                                name: 'Chicken tender'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Chickentenderslarge.png')}
                                />
                            </TouchableOpacity>

                    <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                        image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FNouilles%20au%20poulet.png?alt=media&token=c5b3d4bd-9138-4bef-95fb-8e9c8a5b3755",
                        ingredient1: "250G de poulet",
                        ingredient2: '250G de nouilles',
                        ingredient3: "2 courgettes",
                        ingredient4: "1 citron vert",
                        ingredient5: "½ oignon",
                        ingredient6: "huile",
                        ingredient7: "coriandre",
                        recette: 'Faire cuire le poulet coupé en dés.\n' +
                            'Coupez les courgettes en dés, pelez puis ciselez le demi-oignon.\n' +
                            'Faire bouillir une casserole d\'eau pour les nouilles.\n' +
                            'Égouttez et disposez les nouilles dans un bol.\n' +
                            'Faire chauffer une cuillère à soupe d\'huile d\'olive dans un wok sur feu moyen à vif, ajouter l\'oignon et faite revenir pendant 3 min. Ajoutez les dés de courgettes et faire revenir pendant 1 min, ajoutez les nouilles et mélangez bien pendant 30 sec.\n' +
                        'Émiettez le saumon au-dessus du wok et servez avec la coriandre ciselée et me citron.\n',
                        time: '25min',
                        name: 'Nouilles au poulet'
                    })}>
                        <Image
                            style={styles.imageCard}
                            source={{
                                uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FNouilles%20au%20poulet%20large.png?alt=media&token=35ab3996-e53f-4c79-947b-9a46eec81c51"
                            }}
                        >
                        </Image>
                    </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da",
                                ingredient1: "170g de filet de poulet",
                                ingredient2: "Salade verte",
                                ingredient3: "65g à 85g de pain burger au blé complet",
                                ingredient4: "½ tomate",
                                ingredient5: "2 poulet tenders fait maison",
                                ingredient6: "Sel et poivre",
                                recette: 'Préparer et faire chauffer au four vos tenders de poulet, pendant ce temps, faire chauffer les pains burger au grille-pain.\n' +
                                    'Superposer 1 tranche de pain burger, le tenders de poulet ( sauce au choix ), des feuilles de salade et quelques tranches de tomate, placer la seconde tranche de pain sur le dessus pour fermer le burger.\n',
                                time: '20min',
                                name: 'Burger au poulet tenders'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/burgerchickentenderslarge.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FPoke%20Bowl%20Poulet%20Avocat-Melon.png?alt=media&token=b343da6d-7e4f-43d1-bfb4-2ddeac830535",
                                ingredient1: "1 filet de poulet",
                                ingredient2: "2 cuillières à soupe de sauce soja",
                                ingredient3: "Graines de sésame",
                                ingredient4: "Riz à sushi cuit et refroidi",
                                ingredient5: "Tranche de concombre",
                                ingredient6: "Melon coupé en dés.",
                                ingredient7: "Tranches d'avocat\n",
                                recette: 'Coupez le pavé de saumon en dés, faire cuire a feu doux avec 1 cuillère à soupe de sauce soja et des graines de sésame.\n' +
                                    'Placez le riz au fond d\'un bol, ajoutez des graines de sésame, des tranches de concombre, le melon, des tranches d\'avocat et le saumon assaisonné.\n',
                                time: '20min',
                                name: 'Poke bowl poulet avocat/melon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/PokeBowlPouletAvocat-Melonlarge.png')}
                                />
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FPoke%20Bowl%20Poulet%20Avocat-Melon.png?alt=media&token=b343da6d-7e4f-43d1-bfb4-2ddeac830535",
                                ingredient1: "1 patate douce",
                                ingredient2: "2 cuillère à soupe d'huile d'olive",
                                ingredient3: "1 cuillère à soupe de romarin",
                                ingredient4: "1 cuillère à café de sel",
                                ingredient5: "1 cuillère à café de poivre",
                                recette: 'Préchauffer le four a 220°C\n' +
                                    'Coupez la patate douce en frites et mélangez-les dans un saladier avec l\'huile d\'olive, le romain, le sel et le poivre.\n' +
                                    'Disposez en une couche sur une plate recouverte de papier cuisson.\n' +
                                    'Faite cuire 20-25min, en retournant à mi-cuisson.\n',
                                time: '30min',
                                name: 'Frites de patate douce'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={require('../../assets/photos-recettes/Fritepatatedoucelarge.png')}
                                />
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
