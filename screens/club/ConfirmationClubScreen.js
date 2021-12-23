import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {useTranslation} from "react-i18next";

const ConfirmationClubScreen = (props) => {

    const { i18n, t } = useTranslation();
    const option = props.route.params.option
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                {option === "club" ?    <Text style={styles.progressText}>
                    {t("save1")}
                </Text> :    <Text style={styles.progressText}>
                    {t("save2")}
                </Text>}
                <TouchableOpacity style={styles.disconnectButton} onPress={() => props.navigation.navigate('ClubScreen')}>
                    <Text style={styles.disconnectText}>{t("club1")}</Text>
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
