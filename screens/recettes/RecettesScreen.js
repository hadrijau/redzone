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
                                ingredient2: '1 œuf',
                                ingredient3: '60g de pain complet',
                                ingredient4: '½ avocat',
                                ingredient5: '50g de blanc de poulet/dinde cuit ( ou jambon blanc )',
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
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da',
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
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Dôme avocat saumon</Text>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da',
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
                                name: 'Wraps avocat thon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Wraps avocat thon</Text>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da',
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
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Wrap saumon</Text>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Boule de fromage</Text>
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
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59",
                                ingredient1: "Fleur de sel",
                                ingredient2: '1 filet de poulet',
                                ingredient3: "20g de flocon d'avoine",
                                ingredient4: "1 cuillère à café d'herbe de Provence\n" +
                                    "1 cuillère à café d'ail en poudre\n",
                                ingredient5: "Poivre",
                                ingredient6: "25g de fromage râpé",
                                ingredient7: "Farine",
                                ingredient8: "1 oeuf",
                                ingredient9: "5g d'huile de coco",
                                recette: 'Aplatir le filet de poulet avec un rouleau à pâtisserie pour former une escalope.\n' +
                                    'Mélanger dans une assiette les flocons d\'avoine, les herbes de Provence, l\'ail en poudre, le poivre et 20g de fromage râpé pour faire la panure. Place la farine dans un bol. Battre les œufs dans l\'autre bol.\n' +
                                    'Passer tour à tour le filet de poulet dans la farine, dans l’œuf, puis dans la panure.\n' +
                                    'Faire chauffer l\'huile de coco et faire cuire le poulet 5 min à feu vif, retourner à mi-cuisson.\n' +
                                    'Couvrir 5 à 7 min pour finir la cuisson.\n',
                                time: '20min',
                                name: 'Escalope milanaise'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Escalope milanaise</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59",
                                ingredient1: "1 pavé de saumon",
                                ingredient2: "1 cuillière à soupe d'huile d'olive",
                                ingredient3: "½ cuillère à d'ail en poudre",
                                ingredient4: "1 cuillère à café de piment en poudre",
                                ingredient5: "½ cuillère à café de paprika\n" +
                                    "½ cuillère à café de gingembre en poudre\n" +
                                    "¼ d'oignon rouge\n",
                                ingredient6: "½ poivron",
                                ingredient7: "Poivre",
                                recette: 'Préchauffer le four à 200°C\n' +
                                    '\n' +
                                    'Retirer la peau du saumon et le découper en gros dés.\n' +
                                    'Préparer la marinade: mélanger l\'huile d\'olive avec l\'ail, les épices, le gingembre et l\'oignon épluché et émincé. Faire mariner quelque minutes le saumon. Couper le poivron en carrés.\n' +
                                    'Former  des brochettes en piquant successivement un dés de saumon et un carré de poivron.\n' +
                                    'Enfourner 9 min.\n',
                                time: '25min',
                                name: 'Brochette de saumon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Brochette de saumon</Text>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59",
                                ingredient1: "3 pavés de saumon",
                                ingredient2: "250g de nouilles",
                                ingredient3: "2 courgettes",
                                ingredient4: "1 citron vert",
                                ingredient5: "½ oignon",
                                ingredient6: "huile",
                                ingredient7: "coriandre",
                                recette: 'Faire cuire les pavés de saumon à la vapeur.\n' +
                                    'Coupez les courgettes en dés, pelez puis ciselez le demi-oignon.\n' +
                                    'Faire bouillir une casserole d\'eau pour les nouilles.\n' +
                                    'Égouttez et disposez les nouilles dans un bol.\n' +
                                    'Faire chauffer une cuillère à soupe d\'huile d\'olive dans un wok sur feu moyen à vif, ajouter l\'oignon et faite revenir pendant 3 min. Ajoutez les dés de courgettes et faire revenir pendant 1 min, ajoutez les nouilles et mélangez bien pendant 30 sec.\n' +
                                    'Émiettez le saumon au-dessus du wok et servez avec la coriandre ciselée et me citron.\n' +
                                    '\n',
                                time: '25min',
                                name: 'Nouilles au saumon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Nouilles au saumon</Text>
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
                                ingredient1: "1 pavé de saumon coupé en dès",
                                ingredient2: "2 cuillières à soupe de sauce soja",
                                ingredient3: "Graines de sésame",
                                ingredient4: "Riz à sushi cuit et refroidi",
                                ingredient5: "Tranche de mangue",
                                ingredient6: "Fèves",
                                ingredient7: "Tranches de concombre",
                                ingredient8: "Une cuillière à soupe de miel",
                                recette: 'Coupez le filet de poulet en dés, puis les faire revenir avec un filet de sauce soja sur feu doux entre 5 et 6min.\n' +
                                    'Coupez la mangue et le concombre en tranche.\n' +
                                    'Placez le riz à sushi cuit et refroidi au fond d\'un bol, ajoutez des graines de sésame, des tranches de mangue, des tranches de concombre, des fèves et le poulet.\n' +
                                    'Mettre un filet d\'huile de soja.\n',
                                time: '20min',
                                name: 'Poke bowl saumon mangue'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Poke bowl saumon mangue</Text>
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
