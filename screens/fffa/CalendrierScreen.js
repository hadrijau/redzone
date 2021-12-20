import React from 'react';
import {View, Text, TextInput, ImageBackground, StyleSheet} from "react-native";

const CalendrierScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.calendar}>Calendrier en construction</Text>
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
    calendar: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});

export default CalendrierScreen;
