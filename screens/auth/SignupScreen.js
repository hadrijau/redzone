import React from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from "formik";
import firebase from 'firebase';
import * as Yup from "yup";
import {useTranslation} from "react-i18next";

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
        email: '',
        password: '',
        passwordConfirm: ''
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .required('Ce champ est requis'),
        password: Yup.string()
            .required('Ce champ est requis'),
        passwordConfirm: Yup.string()
            .required('Ce champ est requis')

    });

    console.log(age, sexe, poids, taille, poste)
    const { i18n, t } = useTranslation();

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
                    onSubmit={async (values) => {
                        await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                            .then(result => {
                                firebase.firestore().collection("users")
                                    .doc(firebase.auth().currentUser.uid)
                                    .set({
                                        taille,
                                        poids,
                                        prenom,
                                        email: values.email,
                                        age,
                                        sexe,
                                        poste,
                                        phone,
                                        nom,
                                        BroadJump: [0],
                                        Yards: [0],
                                        Shuttle: [0],
                                        regionClub: '',
                                        adresseClub: '',
                                        siteClub: '',
                                        mailClub: '',
                                        licence: '',
                                        phoneClub: '',
                                        imageClub: '',
                                        abonnement: 'free'
                                    })
                            })
                    }}
                >
                    {props => (
                        <View style={styles.formContainer}>
                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>{`${t("mail")}`}</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        value={props.values.email}
                                        style={styles.textInput}
                                        onChangeText={props.handleChange('email')}
                                    />
                                </View>
                            </View>

                            {props.errors.email && props.touched.email ? (
                                <Text style={styles.errors}>{props.errors.email}</Text>
                            ) : null}

                            <View style={styles.inscriptionInnerForm}>
                                <View style={styles.textInscriptionContainer}>
                                    <Text style={styles.label}>{`${t("password")}`}</Text>
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
                                    <Text style={styles.label}>{`${t("confirmPassword")}`}</Text>
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
                                <Text style={styles.inscriptionText}>{`${t("signup")}`}</Text>
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
