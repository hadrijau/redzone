import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, Image, FlatList, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Formik} from "formik";
import EquipementSportifCard from "../equipement_sportif/components/EquipementSportifCard";
import firebase from "firebase";
import {useTranslation} from "react-i18next";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const NutritionSportiveScreen = ({navigation}) => {

    const { i18n, t } = useTranslation();


    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                <ScrollView style={styles.scrollView}>

                    <Image source={require('../../assets/CF7logo.png')} style={styles.imageRidge}/>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition1.2")}`,
                                description2: `${t("Nutrition1.3")}`,
                                description3: `${t("Nutrition1.4")}`,
                                description4: `${t("Nutrition1.5")}`,
                                description5: `${t("Nutrition1.6")}`,
                                description6: `${t("Nutrition1.7")}`,
                                description7: `${t("Nutrition1.8")}`,
                                description8: `${t("Nutrition1.9")}`,
                                description9: `${t("Nutrition1.10")}`,
                                description10: `${t("Nutrition1.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/testofull-cf7-100-caps-booster-de-testosterone/',
                                prix : 24.90,
                                titre : 'TESTOFULL CF7',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Testofull.png?alt=media&token=f610b4e3-36fc-48a4-a459-6c0b2ee055b4"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Testofull.png?alt=media&token=f610b4e3-36fc-48a4-a459-6c0b2ee055b4"
                            prix={24.90}
                            titre="TESTOFULL CF7"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition2.2")}`,
                                description2: `${t("Nutrition2.3")}`,
                                description3: `${t("Nutrition2.4")}`,
                                description4: `${t("Nutrition2.5")}`,
                                description5: `${t("Nutrition2.6")}`,
                                description6: `${t("Nutrition2.7")}`,
                                description7: `${t("Nutrition2.8")}`,
                                description8: `${t("Nutrition2.9")}`,
                                description9: `${t("Nutrition2.10")}`,
                                description10: `${t("Nutrition2.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/nutrition/arginine-full-cf7-100-caps/',
                                prix : 19.90,
                                titre : 'ARGININE FULL',
                                image : "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ArginineFull.png?alt=media&token=0b1e626c-82cb-4906-a608-0f6dc48ef11b"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ArginineFull.png?alt=media&token=0b1e626c-82cb-4906-a608-0f6dc48ef11b"
                            prix={19.90}
                            titre="ARGININE FULL"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition3.2")}`,
                                description2: `${t("Nutrition3.3")}`,
                                description3: `${t("Nutrition3.4")}`,
                                description4: `${t("Nutrition3.5")}`,
                                description5: `${t("Nutrition3.6")}`,
                                description6: `${t("Nutrition3.7")}`,
                                description7: `${t("Nutrition3.8")}`,
                                decsription8: `${t("Nutrition3.9")}`,
                                description9: `${t("Nutrition3.10")}`,
                                description10: `${t("Nutrition3.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/intra-pro-zero-500g-bcaa-glutamine/",
                                prix : 39.90,
                                titre : 'BCAA INTRA – PRO 2 EN 1',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IntraProZero.png?alt=media&token=ea9cebb1-549d-43da-82f3-5e5d3d3f814a"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IntraProZero.png?alt=media&token=ea9cebb1-549d-43da-82f3-5e5d3d3f814a"
                            prix={39.90}
                            titre="BCAA INTRA – PRO 2 EN 1"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition4.2")}`,
                                description2: `${t("Nutrition4.3")}`,
                                description3: `${t("Nutrition4.4")}`,
                                description4: `${t("Nutrition4.5")}`,
                                description5: `${t("Nutrition4.6")}`,
                                description6: `${t("Nutrition4.7")}`,
                                description7: `${t("Nutrition4.8")}`,
                                description8: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/nutrition/100-omega3-sauvage-90-softgels/',
                                prix : 24.90,
                                titre : 'SUPERFLEX-7 OVOMET',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511",
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511"
                            prix={24.90}
                            titre="SUPERFLEX-7 OVOMET"
                        />


                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition5.2")}`,
                                description2: `${t("Nutrition5.3")}`,
                                description3: `${t("Nutrition5.4")}`,
                                description4: `${t("Nutrition5.5")}`,
                                description5: `${t("Nutrition5.6")}`,
                                description6: `${t("Nutrition5.7")}`,
                                description7: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-creafull-complexe-de-deux-sources-de-creatines-500g/",
                                prix : 34.90,
                                titre : 'CF7 CREAFULL – POUDRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CreaFull.png?alt=media&token=84072e36-2f60-4d7b-b428-ece9484f8553"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CreaFull.png?alt=media&token=84072e36-2f60-4d7b-b428-ece9484f8553"
                            prix={34.90}
                            titre="CF7 CREAFULL – POUDRE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition6.2")}`,
                                description2: `${t("Nutrition6.3")}`,
                                description3: `${t("Nutrition6.4")}`,
                                description4: `${t("Nutrition6.5")}`,
                                decsription5: `${t("Nutrition6.6")}`,
                                description6: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tvcf7/casein-cf7-pronight-2kg/",
                                prix : 34.90,
                                titre : 'CASEIN MICELLAIRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CaseinProNight.png?alt=media&token=43ea1a11-ea1b-4722-8368-f718cac77afb"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_CaseinProNight.png?alt=media&token=43ea1a11-ea1b-4722-8368-f718cac77afb"
                            prix={34.90}
                            titre="CASEIN MICELLAIRE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition7.2")}`,
                                description2: `${t("Nutrition7.3")}`,
                                description3: `${t("Nutrition7.4")}`,
                                description4: `${t("Nutrition7.5")}`,
                                description5: `${t("Nutrition7.6")}`,
                                description6: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/cf7-carnifire-pure-l-carnitine-100-tabs-brule-graisses/',
                                prix : 29.90,
                                titre : 'CF7 CARNIFIRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Carnifire.png?alt=media&token=81f23803-a342-48fc-beda-9cc45da77f8b"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Carnifire.png?alt=media&token=81f23803-a342-48fc-beda-9cc45da77f8b"
                            prix={29.90}
                            titre="CF7 CARNIFIRE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition8.2")}`,
                                description2: `${t("Nutrition8.3")}`,
                                description3: `${t("Nutrition8.4")}`,
                                description4: `${t("Nutrition8.5")}`,
                                description5: `${t("Nutrition8.6")}`,
                                description6: `${t("Nutrition8.7")}`,
                                description7: `${t("Nutrition8.8")}`,
                                description8: `${t("Nutrition8.9")}`,
                                description9: `${t("Nutrition8.10")}`,
                                description10: `${t("Nutrition8.11")}`,
                                description11: `${t("Nutrition8.12")}`,
                                description12: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/nutrition/booster-entrainement/force-oxygene-booster-pre-workout-comprimes-vegetales/",
                                prix : 49.90,
                                titre : 'FORCE & OXYGENE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FPHOTO-2020-10-20-12-16-36.jpg?alt=media&token=ec6c41e1-eec0-483f-9aa0-93f4b5e53f1f"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FPHOTO-2020-10-20-12-16-36.jpg?alt=media&token=ec6c41e1-eec0-483f-9aa0-93f4b5e53f1f"
                            prix={49.90}
                            titre="FORCE & OXYGENE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition9.2")}`,
                                description2: `${t("Nutrition9.3")}`,
                                description3: `${t("Nutrition9.4")}`,
                                description4: `${t("Nutrition9.5")}`,
                                description5: `${t("Nutrition9.6")}`,
                                description6: `${t("Nutrition9.7")}`,
                                description7: `${t("Nutrition9.8")}`,
                                description8: `${t("Nutrition9.9")}`,
                                description9: `${t("Nutrition9.10")}`,
                                description10: `${t("Nutrition9.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/zmab6-60-capsules-testo-booster-qualite-du-sommeil/",
                                prix : 12.90,
                                titre : 'ZMA+B6',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ZmaB6.png?alt=media&token=766b55f2-7cf9-4e23-b60b-e648ee1da9cb"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_ZmaB6.png?alt=media&token=766b55f2-7cf9-4e23-b60b-e648ee1da9cb"
                            prix={12.90}
                            titre="ZMA+B6"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition10.2")}`,
                                description2: `${t("Nutrition10.3")}`,
                                description3: `${t("Nutrition10.4")}`,
                                description4: `${t("Nutrition10.5")}`,
                                description5: `${t("Nutrition10.6")}`,
                                description6: `${t("Nutrition10.7")}`,
                                description7: `${t("Nutrition10.8")}`,
                                description8: `${t("Nutrition10.9")}`,
                                description9: `${t("Nutrition10.10")}`,
                                decsription10: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-gold-2-0-90-caps-bruleur-de-graisses/",
                                prix : 29.90,
                                titre : `${t("Nutrition10.1")}`,
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Gold20.png?alt=media&token=803c65ba-57a7-4e64-9eba-86078fc5fe4a"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Gold20.png?alt=media&token=803c65ba-57a7-4e64-9eba-86078fc5fe4a"
                            prix={29.90}
                            titre={t("Nutrition10.1")}
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition11.2")}`,
                                description2: `${t("Nutrition11.3")}`,
                                description3: `${t("Nutrition11.4")}`,
                                description4: `${t("Nutrition11.5")}`,
                                description5: `${t("Nutrition11.6")}`,
                                description6: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/nutrition/iso-shape-pro-proteine-3-en-1/",
                                prix : 29.90,
                                titre : 'ISO SHAPE PRO',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoShapePro.png?alt=media&token=f59ee733-f3bc-424d-9873-830a5efd9c38"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoShapePro.png?alt=media&token=f59ee733-f3bc-424d-9873-830a5efd9c38"
                            prix={29.90}
                            titre="ISO SHAPE PRO"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition12.2")}`,
                                description2: `${t("Nutrition12.3")}`,
                                description3: `${t("Nutrition12.4")}`,
                                description4: `${t("Nutrition12.5")}`,
                                description5: `${t("Nutrition12.6")}`,
                                description6: `${t("Nutrition12.7")}`,
                                description7: `${t("Nutrition12.8")}`,
                                description8: `${t("Nutrition12.9")}`,
                                description9: `${t("Nutrition12.10")}`,
                                description10: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tvcf7/eaa-pro7-peptides/",
                                prix : 44.90,
                                titre : 'EAA PRO7 PEPTIDES',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_EAApro7_Bote_500g.png?alt=media&token=17c88901-4bcf-4206-8e7f-365ee44a74ea"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_EAApro7_Bote_500g.png?alt=media&token=17c88901-4bcf-4206-8e7f-365ee44a74ea"
                            prix={44.90}
                            titre="EAA PRO7 PEPTIDES"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition13.2")}`,
                                description2: `${t("Nutrition13.3")}`,
                                description3: `${t("Nutrition13.4")}`,
                                description4: `${t("Nutrition13.5")}`,
                                description5: `${t("Nutrition13.6")}`,
                                description6: `${t("Nutrition13.7")}`,
                                description7: `${t("Nutrition13.8")}`,
                                description8: `${t("Nutrition13.9")}`,
                                description9: `${t("Nutrition13.10")}`,
                                description10: `${t("Nutrition13.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/vita-full-7/",
                                prix : 19.90,
                                titre : 'VITA FULL 7',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Vitafull.png?alt=media&token=20b92c6c-22ad-45bf-abcd-2279109d368b"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Vitafull.png?alt=media&token=20b92c6c-22ad-45bf-abcd-2279109d368b"
                            prix={19.90}
                            titre="VITA FULL 7"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition14.2")}`,
                                description2: `${t("Nutrition14.3")}`,
                                description3: `${t("Nutrition14.4")}`,
                                description4: `${t("Nutrition14.5")}`,
                                description5: `${t("Nutrition14.6")}`,
                                description6: `${t("Nutrition14.7")}`,
                                description7: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/nutrition/100-omega3-sauvage-90-softgels/',
                                prix : 14.90,
                                titre : '100% OMEGA3 EPA DHA',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Omega3.png?alt=media&token=20d482f5-d021-474f-8318-23500b357356"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Omega3.png?alt=media&token=20d482f5-d021-474f-8318-23500b357356"
                            prix={14.90}
                            titre="OMEGA3 EPA DHA"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition15.2")}`,
                                description2: `${t("Nutrition15.3")}`,
                                description3: `${t("Nutrition15.4")}`,
                                description4:`${t("Nutrition15.5")}`,
                                description5: `${t("Nutrition15.6")}`,
                                description6: `${t("Nutrition15.7")}`,
                                description7: `${t("Nutrition15.8")}`,
                                description8: `${t("Nutrition15.9")}`,
                                description9: `${t("Nutrition15.10")}`,
                                description10: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/nutrition/whey-proteine/proteine-whey-isolate-gold-series-90-arla-native/",
                                prix : 34.90,
                                titre : 'WHEY ISOLATE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoGold90.png?alt=media&token=e7214216-5fcb-47cf-b703-f1eaeb9bdbba"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_IsoGold90.png?alt=media&token=e7214216-5fcb-47cf-b703-f1eaeb9bdbba"
                            prix={34.90}
                            titre="WHEY ISOLATE"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition16.2")}`,
                                description2: `${t("Nutrition16.3")}`,
                                description3: `${t("Nutrition16.4")}`,
                                description4: `${t("Nutrition16.5")}`,
                                description5: `${t("Nutrition16.6")}`,
                                description6: `${t("Nutrition16.7")}`,
                                description7: `${t("Nutrition16.8")}`,
                                description8: `${t("Nutrition16.9")}`,
                                description9: `${t("Nutrition16.10")}`,
                                description10: `${t("Nutrition16.11")}`,
                                description11: `${t("Nutrition16.12")}`,
                                description12: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/aestetic-bomb-500g-booster-bruleur-bcaa/',
                                prix : 39.90,
                                titre : 'AESTETIC BOMB 3 EN 1',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_AestetikBomb_Bote_500g.png?alt=media&token=c2032e18-f857-4730-91bd-729138209511"
                            prix={39.90}
                            titre="AESTETIC BOMB 3 EN 1"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition17.2")}`,
                                description2: `${t("Nutrition17.3")}`,
                                description3: `${t("Nutrition17.4")}`,
                                description4: `${t("Nutrition17.5")}`,
                                description5: `${t("Nutrition17.6")}`,
                                description6: `${t("Nutrition17.7")}`,
                                description8: `${t("Nutrition17.8")}`,
                                description9: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-destock-cla-pure-90-softgel/",
                                prix : 14.90,
                                titre : 'CLA – CF7 DESTOCK',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Destock.png?alt=media&token=e6749db2-82a5-4016-8e20-dd9408d19e49"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Destock.png?alt=media&token=e6749db2-82a5-4016-8e20-dd9408d19e49"
                            prix={14.90}
                            titre="CLA – CF7 DESTOCK"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition18.2")}`,
                                description2: `${t("Nutrition18.3")}`,
                                description3: `${t("Nutrition18.4")}`,
                                description4: `${t("Nutrition18.5")}`,
                                description5: `${t("Nutrition18.6")}`,
                                description6: `${t("Nutrition18.7")}`,
                                description7: `${t("Nutrition18.8")}`,
                                description8: `${t("Nutrition18.9")}`,
                                description9: `${t("Nutrition18.10")}`,
                                description10: `${t("Nutrition18.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/tous-nos-produits-cf7/rx7-booster-sans-colorants-sans-creatine/',
                                prix : 34.90,
                                titre : 'RX7 BOOSTER PRE-WORK',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F22032019-plantilla_gold_bote300g_RX7%20(Medium).png?alt=media&token=65fd7177-c374-4294-81ba-515dceb8f466"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F22032019-plantilla_gold_bote300g_RX7%20(Medium).png?alt=media&token=65fd7177-c374-4294-81ba-515dceb8f466"
                            prix={34.90}
                            titre="RX7 BOOSTER"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition19.2")}`,
                                description2: `${t("Nutrition19.3")}`,
                                description3: `${t("Nutrition19.4")}`,
                                description4: `${t("Nutrition19.5")}`,
                                description5: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/nutrition/whey-proteine/r77-whey-proteine-creatine-daa-eaa/",
                                prix : 79.90,
                                titre : 'R77 WHEY TESTO',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77-Proteina__ChocoNutd%5B1%5D.jpg?alt=media&token=0569b0d1-0ae1-4c86-b1eb-1e12dc590719"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77-Proteina__ChocoNutd%5B1%5D.jpg?alt=media&token=0569b0d1-0ae1-4c86-b1eb-1e12dc590719"
                            prix={79.90}
                            titre="R77 WHEY TESTO"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition20.1")}`,
                                description2: `${t("Nutrition20.2")}`,
                                description3: `${t("Nutrition20.3")}`,
                                description4: `${t("Nutrition20.4")}`,
                                description5: `${t("Nutrition20.5")}`,
                                description6: `${t("Nutrition20.6")}`,
                                description7: `${t("Nutrition20.7")}`,
                                description8: `${t("Nutrition20.8")}`,
                                description9: `${t("Nutrition20.9")}`,
                                description10: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/testosterone-booster-cf7-gh-full-100-caps-3-en-1/",
                                prix : 29.90,
                                titre : 'GH FULL – TESTO/GH BOOSTER',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_GHfull.png?alt=media&token=09a24509-7832-4377-a5ee-1fdbcd954bed"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_GHfull.png?alt=media&token=09a24509-7832-4377-a5ee-1fdbcd954bed"
                            prix={29.90}
                            titre="GH FULL"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition21.2")}`,
                                description2: `${t("Nutrition21.3")}`,
                                description3: `${t("Nutrition21.4")}`,
                                description4: `${t("Nutrition21.5")}`,
                                description5: `${t("Nutrition21.6")}`,
                                description6: `${t("Nutrition21.7")}`,
                                description7: `${t("Nutrition21.8")}`,
                                description8: `${t("Nutrition21.9")}`,
                                description9: `${t("Nutrition21.10")}`,
                                descirption10: `${t("Nutrition21.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/acides-amines-bcaa-10-1-1-a-croquer-250-comprimes/",
                                prix : 34.90,
                                titre : 'BCAA 10.1.1 A CROQUER',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1011.png?alt=media&token=bdbf2c4d-17b9-4680-a34a-046b04aafe13"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1011.png?alt=media&token=bdbf2c4d-17b9-4680-a34a-046b04aafe13"
                            prix={34.90}
                            titre="BCAA 10.1.1 A CROQUER"
                        />

                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition22.2")}`,
                                description2: `${t("Nutrition22.3")}`,
                                description3: `${t("Nutrition22.4")}`,
                                description4: `${t("Nutrition22.5")}`,
                                description5: `${t("Nutrition22.6")}`,
                                description6: `${t("Nutrition22.7")}`,
                                description7: `${t("Nutrition22.8")}`,
                                description8: `${t("Nutrition22.9")}`,
                                description9: `${t("Nutrition22.10")}`,
                                description10: `${t("Nutrition22.11")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/acides-amines-bcaa-12-1-1-poudre-500g/",
                                prix : 34.90,
                                titre : 'BCAA 12.1.1 – POUDRE',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1211_500g.png?alt=media&token=cd78a70a-b5f9-4a30-83ba-a2bedf052311"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_Bcaa1211_500g.png?alt=media&token=cd78a70a-b5f9-4a30-83ba-a2bedf052311"
                            prix={34.90}
                            titre="BCAA 12.1.1 – POUDRE"
                        />
                    </View>

                    <View style={styles.row}>
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition23.2")}`,
                                description2: `${t("Nutrition23.3")}`,
                                description3: `${t("Nutrition23.4")}`,
                                description4: `${t("Nutrition23.5")}`,
                                description5: `${t("Nutrition23.6")}`,
                                description6: `${t("Nutrition23.7")}`,
                                description8: `${t("Nutrition23.8")}`,
                                description9: `${t("Nutrition23.9")}`,
                                description10: `${t("Nutrition23.10")}`,
                                description11: `${t("Nutrition1.12")}`,
                                lien: "https://www.cf7.fr/tous-nos-produits-cf7/cf7-destock-cla-pure-90-softgel/",
                                prix : 39.90,
                                titre : 'PROTEINE BIO VEGGIE CF7',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_VeggieProteine%20copie.png?alt=media&token=d4f1c8d6-dfbb-41c4-9602-76e3ec5ab133"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2FCF7_VeggieProteine%20copie.png?alt=media&token=d4f1c8d6-dfbb-41c4-9602-76e3ec5ab133"
                            prix={39.90}
                            titre="PROTEINE BIO VEGGIE CF7"
                        />
                        <EquipementSportifCard
                            handleNavigation={() => navigation.navigate('NutritionDetailScreen', {
                                description1 : `${t("Nutrition24.2")}`,
                                description2: `${t("Nutrition24.3")}`,
                                description3: `${t("Nutrition24.4")}`,
                                description4: `${t("Nutrition24.5")}`,
                                description5: `${t("Nutrition24.6")}`,
                                description6: `${t("Nutrition24.7")}`,
                                description7: `${t("Nutrition24.8")}`,
                                description8: `${t("Nutrition24.9")}`,
                                description9: `${t("Nutrition24.10")}`,
                                description10: `${t("Nutrition24.11")}`,
                                description11: `${t("Nutrition24.12")}`,
                                description12: `${t("Nutrition24.13")}`,
                                description13: `${t("Nutrition24.14")}`,
                                description14: `${t("Nutrition24.15")}`,
                                description15: `${t("Nutrition1.12")}`,
                                lien : 'https://www.cf7.fr/nutrition/bruleur-de-graisse-selection-multimarques/r77-bruleur-de-graisse-action-diuretique-naturelle/',
                                prix : 49.90,
                                titre : 'R77 DRAINEUR',
                                image: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77_Bruleur_copie%5B1%5D.png?alt=media&token=350c8366-1792-4677-8988-730c39e542e3"
                            })}
                            image="https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/produit%20nutrition%2F3d_R77_Bruleur_copie%5B1%5D.png?alt=media&token=350c8366-1792-4677-8988-730c39e542e3"
                            prix={49.90}
                            titre="R77 DRAINEUR"
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
        height: 140,
        marginBottom: 20,
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
export default NutritionSportiveScreen;
