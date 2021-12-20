import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, Image, FlatList, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import EquipementSportifCard from "./components/EquipementSportifCard";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const EquipementSportifScreen = ({navigation}) => {

    const [ridge, setRidge] = useState([]);
    const [sportus, setSportus] = useState([]);

    useEffect(() => {
        let getRidge = async () => {
            await firebase
                .firestore()
                .collection('Ridge')
                .get()
                .then(snapshot => {
                    let productsBoosted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setRidge(productsBoosted)
                })
        }
        let getSportus = async () => {
            await firebase
                .firestore()
                .collection('SportusCompany')
                .get().then(snapshot => {
                    let productsBoosted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id;
                        return {id, ...data}
                    })
                    setSportus(productsBoosted)
                })
        }
        getRidge()
        getSportus()
    }, []);

    console.log('ridge', ridge);
    console.log('sportus', sportus)

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>

                    <View style={styles.imageRidgeContainer}>
                        <Image source={require('../../assets/logoRidge.png')} style={styles.imageRidge}/>
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Chaussure de loisirs très confortable, parfaite pour le coaching ou le matériel de voyage",
                                description2: "- CoolKnit® 2.0 supérieur",
                                description3: "- Œillets en silicone et renforts avant des chaussures",
                                description4: "- Semelle extérieure en EVA,",
                                description5: "Couleur : - Noir",
                                description6: " Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/edge-trunners/',
                                prix : 69,
                                titre : 'EDGE TRUNNERS',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2FEdge%20(1).jpg?alt=media&token=fdf9e213-aa3e-479d-bb8c-cf4a4f392ea6"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2FEdge%20(1).jpg?alt=media&token=fdf9e213-aa3e-479d-bb8c-cf4a4f392ea6"
                            prix={69}
                            titre="EDGE TRUNNERS"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Chaussures très légères conçues pour la vitesse et la flexibilité,",
                                description2: " Couleur : - Marine - Orange - Rouge - Blanc",
                                description3: " Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/cleats-glide/',
                                prix : 69,
                                titre : 'CRAMPONS RIDGE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fcleats.jpg?alt=media&token=a1762199-ff5c-4e3b-8ace-98c371a71989"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fcleats.jpg?alt=media&token=a1762199-ff5c-4e3b-8ace-98c371a71989"
                            prix={69}
                            titre="CRAMPONS RIDGE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "– Zones clés renforcées : cheville,sous le pied et le talon",
                                description2: "– Maille sur le dessus du pied",
                                description3: "– Mélange coton/polyamide",
                                description4: "– Tissu à séchage rapide et anti-odeur",
                                description5: "Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/prime-socks/',
                                prix : 16,
                                titre : 'CHAUSSETTES PRIME',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fsocks.jpg?alt=media&token=cc054b37-c601-438f-a1b7-82c8cd6cc382"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fsocks.jpg?alt=media&token=cc054b37-c601-438f-a1b7-82c8cd6cc382"
                            prix={16}
                            titre="CHAUSSETTES PRIME"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Couleurs : - GRIS/NOIR - ORANGE/NOIR - PIX CAMO ROUGE/NOIR",
                                description2: "- PIX CAMO BLANC/NOIR\n" +
                                    "- BLANC/ORANGE",
                                description3: " - ROUGE/NOIR - VEGAS OR/NOIR - BLANC/VEGAS OR",
                                description4: " - BLANC/ROUGE - BLANC/JAUNE - YELLOW/NOIR",
                                description5: "Code d'achat ( en remplacement du code promo ): YRZ40\n",
                                lien : 'https://ridge-sports.com/produit/ridge-skill-players-prime-1-0-gloves/',
                                prix : 39,
                                titre : 'PRIME 1.0 GANTS',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fgloves-prime.jpg?alt=media&token=35a7db70-636f-44db-ae87-08144384fb85"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fgloves-prime.jpg?alt=media&token=35a7db70-636f-44db-ae87-08144384fb85"
                            prix={39}
                            titre="PRIME 1.0 GANTS"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Logo avant 3D Construction à 6 panneaux arrière maillés",
                                description2: "Fermeture Snapback OSFM",
                                description3: "Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/mesh-hat/',
                                prix : 25,
                                titre : 'CASQUETTE RIDGE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fmesh-hat.jpg?alt=media&token=b6eb49a0-66c8-4238-9051-c254064bb38e"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fmesh-hat.jpg?alt=media&token=b6eb49a0-66c8-4238-9051-c254064bb38e"
                            prix={25}
                            titre="CASQUETTE RIDGE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Polyester tissé,",
                                description2: "cordon de serrage,",
                                description3: "logo, 3D US taille",
                                description4: "Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/trianing-shorts/',
                                prix : 35,
                                titre : 'SHORT RIDGE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2FWoven-shorts-navy.jpg?alt=media&token=3bcbba2e-d458-4a40-b321-0a5f5e12e26c"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2FWoven-shorts-navy.jpg?alt=media&token=3bcbba2e-d458-4a40-b321-0a5f5e12e26c"
                            prix={35}
                            titre="SHORT RIDGE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Tissu épais avec mousse haute densité et ceinture en caoutchouc,",
                                description2: " Tailles USA",
                                description3: "En doute entre 2 tailles",
                                description4: "prenez la plus petite taille car le tissu est très élastique",
                                description5: "En doute entre 2 tailles, prenez la plus petite taille car le tissu est très élastique ",
                                description6: "Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/girdle/',
                                prix : 45,
                                titre : 'GIRDLE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fgirdle-2.jpg?alt=media&token=75b219af-c46a-4624-bc6c-2585b0f432bc"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fgirdle-2.jpg?alt=media&token=75b219af-c46a-4624-bc6c-2585b0f432bc"
                            prix={45}
                            titre="GIRDLE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Polyester tissé,",
                                description2: "cordon de serrage,",
                                description3: "logo, 3D US taille",
                                description4: "Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/trianing-shorts/',
                                prix : 35,
                                titre : 'SHORT RIDGE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2FWoven-shorts.jpg?alt=media&token=ca21d6a4-4465-434d-b2e4-013e2f97e789"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2FWoven-shorts.jpg?alt=media&token=ca21d6a4-4465-434d-b2e4-013e2f97e789"
                            prix={35}
                            titre="SHORT RIDGE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "100% Moisutre mèche polyester",
                                description2: "Poches latérales, zippées",
                                description3: "Capuche avec cordon de serrage",
                                description4: "Côté bosselé pour une meilleure amplitude de mouvement",
                                description5: "Dimensionnement européen",
                                description6: "Code d'achat ( en remplacement du code promo ): YRZ40",
                                lien : 'https://ridge-sports.com/produit/short-sleeve-hoodie/',
                                prix : 35,
                                titre : 'Sweat à capuche',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fshort-sleeve-hoodie.jpg?alt=media&token=09bf506b-57b6-403e-99b4-5b55bc155297"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fshort-sleeve-hoodie.jpg?alt=media&token=09bf506b-57b6-403e-99b4-5b55bc155297"
                            prix={35}
                            titre="Sweat à capuche"
                        />
                    </View>

                    <View style={styles.imageRidgeContainer}>
                        <Image source={require('../../assets/logoSportusCompany.png')} style={styles.imageRidge}/>
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Serviette GATORADE, la même qu’utilise les joueurs pro en NFL ou NCAA,",
                                description2: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/serviette-gatorade-on-field/',
                                prix : 23,
                                titre : 'SERVIETTE GATORADE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fserviette%20gatorade.jpg?alt=media&token=63805573-2ac0-4747-bdc9-45a605f2af82"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fserviette%20gatorade.jpg?alt=media&token=63805573-2ac0-4747-bdc9-45a605f2af82"
                            prix={23}
                            titre="SERVIETTE GATORADE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Démarque toi sur le bord du terrain avec ta gourde GATORADE GX.",
                                description2: "Conçue pour être utilisé avec les PODS GX que vous devez ajouter en choix de personnalisation, il s'agit du goût, elle est aussi compatible avec la poudre classique GATORADE.",
                                description3: "Contenance d'environ 1L",
                                description4: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/gourde-gatorade-gx/',
                                prix : 35,
                                titre : 'GOURDE GATORADE GX',
                                image : "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fgourde%20gatorade%20GX.png?alt=media&token=d68aea9e-c6d8-4606-b1cb-a3733686f31d"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fgourde%20gatorade%20GX.png?alt=media&token=d68aea9e-c6d8-4606-b1cb-a3733686f31d"
                            prix={35}
                            titre="GOURDE GATORADE GX"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La NIKE VAPOR CREW SOCKS 2.0 est LA paire de chaussette que tout joueur de FOOTBALL AMERICAIN devrait porter. ",
                                description2: "Montante mi mollet avec un double élastique, elle est épaisse sur tout le pied et plus légère sur la voûte plantaire pour un confort exceptionnel.",
                                description3: "Renforcé sur le tendon d’Achille pour protéger votre cheville.",
                                description4: "En training et en match elle sera votre meilleure alliée.",
                                description5: "MEDIUM = 37 à 42\n" +
                                    "\tLARGE = 42 à 46\n" +
                                    "\tXLARGE = 46 et +\n",
                                description6: "\tRétrécie après de nombreux lavage donc ne pas hésiter à prendre une taille juste au dessus si vous êtes dans la taille haute\n" +
                                    "\t( exemple si tu chausses du 44.5 ou 45 , prends une paire en XL)\n",
                                description7: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/nike-socks-vapor-crew-2-0/',
                                prix : 8,
                                titre : 'NIKE SOCKS VAPOR',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20rouge.jpg?alt=media&token=6ed71f50-ac4d-425c-ba2c-914050a267b7"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20rouge.jpg?alt=media&token=6ed71f50-ac4d-425c-ba2c-914050a267b7"
                            prix={8}
                            titre="NIKE SOCKS VAPOR"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Gourde gatorade squeeze / ne coule pas, modèle identique au modèle NFL et NCAA",
                                description2: "Contenance d'environ 1L",
                                description3: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/gourde-gatorade-squeeze/',
                                prix : 15,
                                titre : 'GOURDE GATORADE',
                                image : "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fgourde%20gatorade%20squeeze.jpg?alt=media&token=61102e77-0211-41c6-9ee2-9a9e20d62873"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fgourde%20gatorade%20squeeze.jpg?alt=media&token=61102e77-0211-41c6-9ee2-9a9e20d62873"
                            prix={15}
                            titre="GOURDE GATORADE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La NIKE VAPOR CREW SOCKS 2.0 est LA paire de chaussette que tout joueur de FOOTBALL AMERICAIN devrait porter. ",
                                description2: "Montante mi mollet avec un double élastique, elle est épaisse sur tout le pied et plus légère sur la voûte plantaire pour un confort exceptionnel.",
                                description3: "Renforcé sur le tendon d’Achille pour protéger votre cheville.",
                                description4: "En training et en match elle sera votre meilleure alliée.",
                                description5: "MEDIUM = 37 à 42\n" +
                                    "\tLARGE = 42 à 46\n" +
                                    "\tXLARGE = 46 et +\n",
                                description6: "\tRétrécie après de nombreux lavage donc ne pas hésiter à prendre une taille juste au dessus si vous êtes dans la taille haute\n" +
                                    "\t( exemple si tu chausses du 44.5 ou 45 , prends une paire en XL)\n",
                                description7: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/nike-socks-vapor-crew-2-0/',
                                prix : 8,
                                titre : 'NIKE SOCKS VAPOR',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20blanche.jpg?alt=media&token=c52a514c-f6f6-43cd-9c0b-6a75178f157e"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20blanche.jpg?alt=media&token=c52a514c-f6f6-43cd-9c0b-6a75178f157e"
                            prix={8}
                            titre="NIKE SOCKS VAPOR"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La NIKE VAPOR CREW SOCKS 2.0 est LA paire de chaussette que tout joueur de FOOTBALL AMERICAIN devrait porter. ",
                                description2: "Montante mi mollet avec un double élastique, elle est épaisse sur tout le pied et plus légère sur la voûte plantaire pour un confort exceptionnel.",
                                description3: "Renforcé sur le tendon d’Achille pour protéger votre cheville.",
                                description4: "En training et en match elle sera votre meilleure alliée.",
                                description5: "MEDIUM = 37 à 42\n" +
                                    "\tLARGE = 42 à 46\n" +
                                    "\tXLARGE = 46 et +\n",
                                description6: "\tRétrécie après de nombreux lavage donc ne pas hésiter à prendre une taille juste au dessus si vous êtes dans la taille haute\n" +
                                    "\t( exemple si tu chausses du 44.5 ou 45 , prends une paire en XL)\n",
                                description7: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/nike-socks-vapor-crew-2-0/',
                                prix : 8,
                                titre : 'NIKE SOCKS VAPOR',
                                image : "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20bleu.jpg?alt=media&token=147ce023-c9a5-421d-8266-945b4c981fd6"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20bleu.jpg?alt=media&token=147ce023-c9a5-421d-8266-945b4c981fd6"
                            prix={8}
                            titre="NIKE SOCKS VAPOR"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La NIKE VAPOR CREW SOCKS 2.0 est LA paire de chaussette que tout joueur de FOOTBALL AMERICAIN devrait porter. ",
                                description2: "Montante mi mollet avec un double élastique, elle est épaisse sur tout le pied et plus légère sur la voûte plantaire pour un confort exceptionnel.",
                                description3: "Renforcé sur le tendon d’Achille pour protéger votre cheville.",
                                description4: "En training et en match elle sera votre meilleure alliée.",
                                description5: "MEDIUM = 37 à 42\n" +
                                    "\tLARGE = 42 à 46\n" +
                                    "\tXLARGE = 46 et +\n",
                                description6: "\tRétrécie après de nombreux lavage donc ne pas hésiter à prendre une taille juste au dessus si vous êtes dans la taille haute\n" +
                                    "\t( exemple si tu chausses du 44.5 ou 45 , prends une paire en XL)\n",
                                description7: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/nike-socks-vapor-crew-2-0/',
                                prix : 8,
                                titre : 'NIKE SOCKS VAPOR',
                                image : "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20verte.jpg?alt=media&token=abafab7a-5ed2-4a1a-9f4c-85be8b876a76"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20verte.jpg?alt=media&token=abafab7a-5ed2-4a1a-9f4c-85be8b876a76"
                            prix={8}
                            titre="NIKE SOCKS VAPOR"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La Formule est basée sur la recherche datant de 1967 et contient les électrolytes et les glucides nécessaires pour aider les athlètes à atteindre leur meilleure performance en leur garantissant une meilleure récupération et une meilleure hydratation. GATORADE aide à maintenir une performance maximale.",
                                description2: "GATORADE est rapidement absorbé dans la circulation sanguine pour aider à prévenir la déshydratation, hyperthermie et la fatigue musculaire lors d’un effort physique prolongé.",
                                description3: "Choisissez parmi les différents goûts disponibles:",
                                description4: "- ORANGE",
                                description5: "- LEMON-LIME",
                                description6: "- FRUIT PUNCH",
                                description7: "- GLACIER FREEZE",
                                description8: "- RIPTIDE RUSH",
                                description9: "6 gallon = 22.71 Litres",
                                description10: "Achetez votre gourde gatorade 1L et faites votre mélange avant le training !",
                                description11: "1 sachet de 6 gallon vous offrira 23 gourde\n" +
                                    "à raison d une gourde par training soit 12 semaines /3 mois d entraînement !!\n",
                                description12: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/gatorade-sachet-6-gallon/',
                                prix : 40,
                                titre : 'GATORADE SACHET',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fgatorade%20sachet%206%20gallon.jpg?alt=media&token=aff5c1d3-a176-4b1c-804f-a6625dcfc350"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fgatorade%20sachet%206%20gallon.jpg?alt=media&token=aff5c1d3-a176-4b1c-804f-a6625dcfc350"
                            prix={40}
                            titre="GATORADE SACHET"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "Donnez du goût à votre entraînement et apportez une hydratation complémentaire à vos muscles.",
                                description3: "Les PODS GX sont un concentrés de Gatorade à mélanger avec de l’eau.",
                                description4: "Utilisable uniquement avec la GOURDE GATORADE GX",
                                description5: "Chaque paquet contient 4 PODS du même goût.",
                                description6: "- KIWI / STRAWBERRY",
                                description7: "- STRAWBERRY / RASPBERRY",
                                description8: "- FRUIT PUNCH",
                                description9: "- GLACIER FREEZE",
                                description10: "PRODUIT SUR COMMANDE AVEC UN DELAI D’ATTENTE DE 2 SEMAINES MINIMUM",
                                lien : 'https://sportuscompany.com/produit/pods-gx-gatorade/',
                                prix : 12,
                                titre : 'PODS GX GATORADE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fpods%20GX%20gatorade.jpeg?alt=media&token=dacc4878-ed81-4d9b-8005-d8cb0defe1ad"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fpods%20GX%20gatorade.jpeg?alt=media&token=dacc4878-ed81-4d9b-8005-d8cb0defe1ad"
                            prix={12}
                            titre="PODS GX GATORADE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : "La NIKE VAPOR CREW SOCKS 2.0 est LA paire de chaussette que tout joueur de FOOTBALL AMERICAIN devrait porter. ",
                                description2: "Montante mi mollet avec un double élastique, elle est épaisse sur tout le pied et plus légère sur la voûte plantaire pour un confort exceptionnel.",
                                description3: "Renforcé sur le tendon d’Achille pour protéger votre cheville.",
                                description4: "En training et en match elle sera votre meilleure alliée.",
                                description5: "MEDIUM = 37 à 42\n" +
                                    "\tLARGE = 42 à 46\n" +
                                    "\tXLARGE = 46 et +\n",
                                description6: "\tRétrécie après de nombreux lavage donc ne pas hésiter à prendre une taille juste au dessus si vous êtes dans la taille haute\n" +
                                    "\t( exemple si tu chausses du 44.5 ou 45 , prends une paire en XL)\n",
                                description7: "Code d'achat ( en remplacement du code promo ): YRZ23",
                                lien : 'https://sportuscompany.com/produit/nike-socks-vapor-crew-2-0/',
                                prix : 8,
                                titre : 'NIKE SOCKS VAPOR',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20bleu.jpg?alt=media&token=147ce023-c9a5-421d-8266-945b4c981fd6"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/catalogue%20SportUs%20Compagny%2Fchaussette%20nike%20bleu.jpg?alt=media&token=147ce023-c9a5-421d-8266-945b4c981fd6"
                            prix={8}
                            titre="NIKE SOCKS VAPOR"
                        />
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
        width: windowWidth/2.5,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        height: 150,
        padding: '4%'
    },
    scrollView: {
        flex: 1,
    },
    imageRidge: {
        width: '90%',
        padding: 5,
        height: 60,
        alignSelf: 'center'
    },
    imageRidgeContainer: {
        backgroundColor: 'white',
        width: windowWidth/1.1,
        paddingTop: '10%',
        paddingBottom: '2%',
        paddingHorizontal: '2%',
        alignSelf: 'center',
        marginBottom: '5%'
    },
    abonnementFreeText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 25
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inscriptionBigText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 30
    },
    product: {
        color: 'white',
        textAlign: 'center'
    }

})
export default EquipementSportifScreen;
