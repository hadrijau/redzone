import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

const ConfirmationProgressScreen = (props) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.progressText}>Vos progrès ont bien été sauvegardés ! </Text>
                <TouchableOpacity style={styles.disconnectButton} onPress={() => props.navigation.navigate('ProgressScreen')}>
                    <Text style={styles.disconnectText}>Voir mes progrès</Text>
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

export default ConfirmationProgressScreen;
