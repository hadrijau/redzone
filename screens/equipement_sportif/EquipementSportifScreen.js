import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, Image, FlatList, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import EquipementSportifCard from "./components/EquipementSportifCard";
import firebase from "firebase";
import {useTranslation} from "react-i18next";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const EquipementSportifScreen = ({navigation}) => {

    const [ridge, setRidge] = useState([]);
    const [sportus, setSportus] = useState([]);

    const { i18n, t } = useTranslation();

    useEffect(() => {
        let getPartenaires = async () => {
            await firebase
                .firestore()
                .collection('Partenaires')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());
                    });
                })
        }

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
        getPartenaires()
    }, []);

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>

                    <View style={styles.imageRidgeContainer}>
                        <Image source={require('../../assets/logoRidge.png')} style={styles.imageRidge}/>
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : `${t("Equipements1.2")}`,
                                description2: `${t("Equipements1.3")}`,
                                description3: `${t("Equipements1.4")}`,
                                description4: `${t("Equipements1.5")}`,
                                description5: `${t("Equipements1.6")}`,
                                description6: `${t("Equipements1.7")}`,
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
                                description1 : `${t("Equipements2.1")}`,
                                description2: `${t("Equipements2.2")}`,
                                description3: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements3.2")}`,
                                description2: `${t("Equipements3.3")}`,
                                description3: `${t("Equipements3.4")}`,
                                description4: `${t("Equipements3.5")}`,
                                description5: `${t("Equipements2.3")}`,
                                lien : 'https://ridge-sports.com/produit/prime-socks/',
                                prix : 16,
                                titre : 'CHAUSSETTES PRIME',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fsocks.jpg?alt=media&token=cc054b37-c601-438f-a1b7-82c8cd6cc382"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fsocks.jpg?alt=media&token=cc054b37-c601-438f-a1b7-82c8cd6cc382"
                            prix={16}
                            titre={t("Equipements3.1")}
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : `${t("Equipements4.2")}`,
                                description2: `${t("Equipements4.3")}`,
                                description3: `${t("Equipements4.4")}`,
                                description4: `${t("Equipements4.5")}`,
                                description5: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements5.1")}`,
                                description2: `${t("Equipements5.2")}`,
                                description3: `${t("Equipements5.3")}`,
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
                                description1 : `${t("Equipements6.2")}`,
                                description2: `${t("Equipements6.3")}`,
                                description3: `${t("Equipements6.4")}`,
                                description4: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements7.2")}`,
                                description2: `${t("Equipements7.3")}`,
                                description3: `${t("Equipements7.4")}`,
                                description4: `${t("Equipements7.5")}`,
                                description6: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements8.2")}`,
                                description2: `${t("Equipements8.3")}`,
                                description3: `${t("Equipements8.4")}`,
                                description4: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements9.2")}`,
                                description2: `${t("Equipements9.3")}`,
                                description3: `${t("Equipements9.4")}`,
                                description4: `${t("Equipements9.5")}`,
                                description5: `${t("Equipements9.6")}`,
                                description6: `${t("Equipements2.3")}`,
                                lien : 'https://ridge-sports.com/produit/short-sleeve-hoodie/',
                                prix : 35,
                                titre : `${t("Equipements9.1")}`,
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fshort-sleeve-hoodie.jpg?alt=media&token=09bf506b-57b6-403e-99b4-5b55bc155297"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Catalogue%20ridge%2Fshort-sleeve-hoodie.jpg?alt=media&token=09bf506b-57b6-403e-99b4-5b55bc155297"
                            prix={35}
                            titre={t("Equipements9.1")}
                        />
                    </View>

                    <View style={styles.imageRidgeContainer}>
                        <Image source={require('../../assets/logoSportusCompany.png')} style={styles.imageRidge}/>
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('EquipementDetailScreen', {
                                description1 : `${t("Equipements10.2")}`,
                                description2: `${t("Equipements10.3")}`,
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
                                description1 : `${t("Equipements11.2")}`,
                                description2: `${t("Equipements11.3")}`,
                                description3: `${t("Equipements11.4")}`,
                                description4: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements12.2")}`,
                                description2: `${t("Equipements12.3")}`,
                                description3: `${t("Equipements12.4")}`,
                                description4: `${t("Equipements12.5")}`,
                                description5: `${t("Equipements12.6")}`,
                                description6: `${t("Equipements12.7")}`,
                                description7: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements13.2")}`,
                                description2: `${t("Equipements13.3")}`,
                                description3: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements12.2")}`,
                                description2: `${t("Equipements12.3")}`,
                                description3: `${t("Equipements12.4")}`,
                                description4: `${t("Equipements12.5")}`,
                                description5: `${t("Equipements12.6")}`,
                                description6: `${t("Equipements12.7")}`,
                                description7: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements12.2")}`,
                                description2: `${t("Equipements12.3")}`,
                                description3: `${t("Equipements12.4")}`,
                                description4: `${t("Equipements12.5")}`,
                                description5: `${t("Equipements12.6")}`,
                                description6: `${t("Equipements12.7")}`,
                                description7: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements12.2")}`,
                                description2: `${t("Equipements12.3")}`,
                                description3: `${t("Equipements12.4")}`,
                                description4: `${t("Equipements12.5")}`,
                                description5: `${t("Equipements12.6")}`,
                                description6: `${t("Equipements12.7")}`,
                                description7: `${t("Equipements2.3")}`,
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
                                description1 : `${t("Equipements17.2")}`,
                                description2: `${t("Equipements17.3")}`,
                                description3: `${t("Equipements17.4")}`,
                                description4: `${t("Equipements17.5")}`,
                                description5: `${t("Equipements17.6")}`,
                                description6: `${t("Equipements17.7")}`,
                                description7: `${t("Equipements17.8")}`,
                                description8: `${t("Equipements17.9")}`,
                                description9: `${t("Equipements17.10")}`,
                                description10: `${t("Equipements17.11")}`,
                                description11: `${t("Equipements17.12")}`,
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
                                description1 : `${t("Equipements18.2")}`,
                                description3: `${t("Equipements18.3")}`,
                                description4: `${t("Equipements18.4")}`,
                                description5: `${t("Equipements18.5")}`,
                                description6: `${t("Equipements18.6")}`,
                                description7: `${t("Equipements18.7")}`,
                                description8: `${t("Equipements18.8")}`,
                                description9: `${t("Equipements18.9")}`,
                                description10: `${t("Equipements18.10")}`,
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
                                description1 : `${t("Equipements12.2")}`,
                                description2: `${t("Equipements12.3")}`,
                                description3: `${t("Equipements12.4")}`,
                                description4: `${t("Equipements12.5")}`,
                                description5: `${t("Equipements12.6")}`,
                                description6: `${t("Equipements12.7")}`,
                                description7: `${t("Equipements2.3")}`,
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
