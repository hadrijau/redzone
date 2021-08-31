import React from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from "formik";

const LoginScreen = ({navigation}) => {

    const initialValues = {
        email: '',
        password: ''
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {props => (
                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Identifiant</Text>
                                <TextInput
                                    value={props.values.email}
                                    style={styles.textInput}
                                />
                                <Text style={styles.label}>Mot de passe</Text>
                                <TextInput
                                    value={props.values.password}
                                    style={styles.textInput}
                                />

                                <TouchableOpacity style={styles.passwordForgot}>
                                    <Text style={styles.passwordForgotText}>Mot de passe oublié</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text>Se connecter</Text>
                                </TouchableOpacity>
                            </View>
                        )}



                    </Formik>

                    <TouchableOpacity style={styles.inscriptionButton} onPress={() => navigation.navigate('InformationsScreen')}>
                        <Text style={styles.inscriptionText}>S'inscrire</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '5%',
        marginTop: '15%'
    },
    passwordForgot: {
        marginLeft: '33%',
        marginTop: '5%'
    },
    passwordForgotText: {
        color: 'white'
    },
    inscriptionText: {
        color: 'red',
        fontSize: 25
    },
    textInput: {
        backgroundColor: 'white',
        height: 50,
        width: '80%',
        marginLeft: '10%'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    inscriptionButton: {
        textAlign: 'center',
        marginLeft: '37%'
    },
});

export default LoginScreen;