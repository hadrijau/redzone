import React from 'react';
import {ImageBackground, Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecettesScreen = ({navigation}) => {

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <Text style={styles.inscriptionBigText}>Recettes</Text>
                <ScrollView style={styles.scrollView}>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('RecetteDetailScreen', {
                                name: 'Toast d\'avocat',
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da',
                                ingredient1: '100ml de vinaigre',
                                ingredient2: '1 œuf',
                                ingredient3: '60g de pain complet',
                                ingredient4: '½ avocat',
                                ingredient5: '50g de blanc de poulet/dinde cuit ( ou jambon blanc )',
                                recette: 'Répartir sur deux tranches de pain complet le demi avocat haché, le blanc de poulet/dinde ( ou jambon blanc ) et émincé l’œuf poché dessus.',
                                time: '10min'
                            })} style={styles.recetteCard}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Toast d'avocat</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen', {
                                image: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da',
                                ingredient1: '2 œufs',
                                ingredient2: '1 avocat',
                                ingredient3: '2 tranches de saumon fumé',
                                recette: 'Préchauffer le four à 180°C. Séparer les blanc du jaune, ouvrir l\'avocat en deux, mettre les jaunes d’œufs ( sans les cassés ) dans le creux des avocats, émincé les tranches de saumon fumé et recouvrir les avocats. Enfourner pendant 5min.',
                                time: '10min',
                                name: 'Avocat saumon'
                            })}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Avocat saumon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
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
                        </View>

                        <View>
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
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
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
                        </View>

                        <View>
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
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('RecetteDetailScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Bagel saumon fumé</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Pancakes rapides</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Bowlcake au chocolat</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Omelette blanc de dinde et champignons</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FBurger%20Chicken%20Tenders.png?alt=media&token=9a14b1e8-1ed4-4d57-9d60-38510ae3f5da"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Nuggets de poulet</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Chicken tender</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Escalope milanaise</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Brochette de saumon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Nouilles au saumon</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Croquettes de poisson</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Burger au poulet</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Poke bowl saumon avocat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Poke bowl poulet mangue</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Frite de patate douce</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Barres protéinées</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Energy balls</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View>
                            <TouchableOpacity style={styles.recetteCard} onPress={() => navigation.navigate('AccueilScreen')}>
                                <Image
                                    style={styles.imageCard}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Photo%20Id%C3%A9e%20Recette%2FChicken%20Tenders.png?alt=media&token=5e4a6ebd-3b75-4dd8-b092-1b558f4d2f59"
                                    }}
                                >
                                </Image>
                                <Text style={styles.abonnementFreeText}>Egg muffins</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

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
        width: windowWidth/2,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        height: 150,
    },
    imageCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 100,
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
        marginTop: 110
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
