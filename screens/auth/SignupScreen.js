import React from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from "formik";
import firebase from 'firebase';
import * as Yup from "yup";

const SignupScreen = (props) => {


    const age = props.route.params.age
    const nom = props.route.params.nom
    const prenom = props.route.params.prenom
    const sexe = props.route.params.sexe
    const poids = props.route.params.poids
    const taille = props.route.params.taille
    const poste = props.route.params.poste
    const phone = props.route.params.poste

    const initialValues = {
        mail: '',
        password: '',
        passwordConfirm: ''
    }

    const SignupSchema = Yup.object().shape({
        mail: Yup.string()
            .required('Ce champ est requis'),
        password: Yup.string()
            .required('Ce champ est requis'),
        passwordConfirm: Yup.string()
            .required('Ce champ est requis')

    });

    console.log(age, sexe, poids, taille, poste)

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
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        props.navigation.navigate('AbonnementsScreen', {
                            nom: nom,
                            prenom: prenom,
                            phone: phone,
                            age: age,
                            sexe: sexe,
                            poids: poids,
                            taille: taille,
                            poste: poste,
                            email: values.mail,
                            password: values.password
                        })
                    }}
                >
                    {props => (
                        <View style={styles.formContainer}>
                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Adresse Email</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.mail}
                                        style={styles.textInput}
                                        onChangeText={props.handleChange('mail')}
                                    />
                                </View>
                            </View>

                            {props.errors.mail && props.touched.mail ? (
                                <Text style={styles.errors}>{props.errors.mail}</Text>
                            ) : null}

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Mot de passe</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.password}
                                        style={styles.textInput}
                                        secureTextEntry={true}
                                        onChangeText={props.handleChange('password')}
                                    />
                                </View>
                            </View>

                            {props.errors.password && props.touched.password ? (
                                <Text style={styles.errors}>{props.errors.password}</Text>
                            ) : null}

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>Confirmation du mot de passe</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.passwordConfirm}
                                        style={styles.textInput}
                                        secureTextEntry={true}
                                        onChangeText={props.handleChange('passwordConfirm')}
                                    />
                                </View>
                            </View>

                            {props.errors.passwordConfirm && props.touched.passwordConfirm ? (
                                <Text style={styles.errors}>{props.errors.passwordConfirm}</Text>
                            ) : null}

                            <TouchableOpacity style={styles.inscriptionButton} onPress={props.handleSubmit}>
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
        marginTop: '10%',
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
    errors: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 70,
        marginTop: -10
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