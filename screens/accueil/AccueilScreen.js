import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const AccueilScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('MusculationScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/muscu.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Musculation</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('DrillScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Drill</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('RecettesScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Recettes</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => {navigation.navigate('ProfileScreen')}}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Mon profil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Mes progrès</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>FFFA</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('EquipementSportifScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Equipements</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Mon club</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('NutritionSportiveScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeTextNut}>Nutrition</Text>
                        <Text style={styles.abonnementFreeTextNut}>sportive</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.accueilCard} onPress={() => navigation.navigate('EntraineurPersonnelScreen')}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Entraineurs personnels</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accueilCard}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../assets/bigLogo.jpg')} style={styles.imageCard}/>
                        </View>
                        <Text style={styles.abonnementFreeText}>Contact</Text>
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
        fontSize: 18,
        marginTop: 10
    },
    abonnementFreeTextNut: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    accueilCard: {
        width: '27%'
    },
    iconContainer: {
        backgroundColor: '#D91830',
        width: '100%',
        alignItems: 'center',
        height: 100,
        borderRadius: 20
    },
    imageCard: {
        width: '80%',
        height: '80%',
        marginTop: 10
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