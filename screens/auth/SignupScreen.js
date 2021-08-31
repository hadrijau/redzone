import React from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from "formik";

const SignupScreen = ({navigation}) => {

    const initialValues = {
        email: '',
        password: ''
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="height"
            >
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                <Text style={styles.inscriptionBigText}>Inscription</Text>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {props => (
                        <View style={styles.formContainer}>
                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Nom</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.nom}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Prénom</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.prenom}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Adresse Email</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.mail}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Téléphone</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.phone}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Pseudo</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.pseudo}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Mot de passe</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.password}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Confirmation du mot de passe</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.passwordConfirm}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>

                            <TouchableOpacity style={styles.inscriptionButton} onPress={() => navigation.navigate('AbonnementsScreen')}>
                                <Text style={styles.inscriptionText}>S'inscrire</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                </Formik>



            </ImageBackground>
        </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        width: '100%'
    },
    label: {
        color: 'white',
        fontSize: 20,
        textAlign: 'right',
        marginBottom: '5%',
        marginTop: '15%',
    },
    textInscriptionContainer: {
        width : '35%',
        textAlign: 'right'
    },
    inputContainer: {
        width: '55%'
    },
    passwordForgot: {
        marginLeft: '33%',
        marginTop: '5%'
    },
    inscriptionInnerForm: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '3%'
    },
    inscriptionBigText: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
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
        height: 30,
        borderRadius: 5,
        marginTop: 15,
        width: '100%',
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

export default SignupScreen;