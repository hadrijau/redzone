import React, {useEffect} from 'react';
import {View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import { LogBox } from 'react-native';

const AccueilScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    LogBox.ignoreAllLogs();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(userActions.fetchUser())
        });
        return unsubscribe
    }, [dispatch, navigation]);

    const userData = useSelector(state => state.user.currentUser)

    console.log(userData);

    console.log('doc', i18next.language);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('MusculationScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_muscu.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("prepaPhysique")}`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('DrillScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_drill.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("drill")}`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('RecettesScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_diet.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("recettes")}`}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('ProfileScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_profil.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("profil")}`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('ProgressScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_progres.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("progress")}`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('CalendrierScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_FFFA.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>FFFA</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('EquipementSportifScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_equipement.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("equipements")}`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('ClubScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_club.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("club")}`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('NutritionSportiveScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_nutrition_sportive.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeTextNut}>{`${t("nutrition")}`}</Text>
                        <Text style={styles.abonnementFreeTextNut}>{`${t("sportive")}`}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('EntraineurPersonnelScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/logo_entraineurs_persos.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>{`${t("entraineursPersonnels")}`}</Text>
                    </TouchableOpacity>

                </View>
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
    abonnementFreeText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 10
    },
    abonnementFreeTextNut: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
    },
    accueilCard: {
        width: 90
    },
    iconContainer: {
        backgroundColor: '#D91830',
        width: '100%',
        alignItems: 'center',
        height: 90,
        borderRadius: 20,
        overflow: 'hidden'
    },
    imageCard: {
        width: '130%',
        height: '100%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20
    }
})

export default AccueilScreen;
