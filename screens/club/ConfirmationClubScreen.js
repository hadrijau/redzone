import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

const ConfirmationClubScreen = (props) => {

    const option = props.route.params.option
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                {option === "club" ?    <Text style={styles.progressText}>
                    Votre nouveau club a bien été sauvegardé !
                </Text> :    <Text style={styles.progressText}>
                    Votre nouvelle licence a bien été sauvegardée !
                </Text>}
                <TouchableOpacity style={styles.disconnectButton} onPress={() => props.navigation.navigate('ClubScreen')}>
                    <Text style={styles.disconnectText}>Voir mon club</Text>
                </TouchableOpacity>
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
    disconnectButton: {
        backgroundColor: 'red',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginTop: '5%',
        marginBottom: '15%',
        alignSelf: 'center'
    },
    disconnectText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    progressText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});

export default ConfirmationClubScreen;
