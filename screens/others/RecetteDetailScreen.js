import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Dimensions, StyleSheet, ScrollView} from 'react-native';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const RecetteDetailScreen = ({title, navigation}) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <TouchableOpacity style={styles.recetteCard}>
                        <Text style={styles.abonnementFreeTextBig}>Poulet Mariné</Text>
                        <View style={styles.infoContainer}>
                            <Text>5 min</Text>
                            <Text>130 Kcal</Text>
                            <Text>Facile</Text>
                        </View>
                    </TouchableOpacity>

                <Text style={styles.infoNutrition}>Informations nutritives</Text>
                <Text style={styles.portion}>Par portion</Text>

                <View style={styles.row}>
                    <View>
                        <TouchableOpacity style={styles.recetteCardMini} onPress={() => navigation.navigate('AccueilScreen')}>
                            <Text style={styles.abonnementFreeText}>Valeurs énergétiques</Text>
                            <Text style={styles.addition}><Text style={styles.redText}>130</Text> Kcal</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.recetteCardMini} onPress={() => navigation.navigate('AccueilScreen')}>
                            <Text style={styles.abonnementFreeText}>Glucides</Text>
                            <Text style={styles.addition}><Text style={styles.redText}>50</Text> g</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <TouchableOpacity style={styles.recetteCardMini} onPress={() => navigation.navigate('AccueilScreen')}>
                            <Text style={styles.abonnementFreeText}>Protéines</Text>
                            <Text style={styles.addition}><Text style={styles.redText}>30</Text> g</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.recetteCardMini} onPress={() => navigation.navigate('AccueilScreen')}>
                            <Text style={styles.abonnementFreeText}>Lipides</Text>
                            <Text style={styles.addition}><Text style={styles.redText}>10</Text> g</Text>
                        </TouchableOpacity>
                    </View>
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
    addition: {
        textAlign: 'center',
        marginTop: 20
    },
    recetteCard: {
        width: windowWidth,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 5,
        position: 'relative',
        height: 200,
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
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    abonnementFreeTextBig: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
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
    }

})
export default RecetteDetailScreen;