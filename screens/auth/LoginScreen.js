import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from "formik";
import firebase from "firebase";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useTranslation} from "react-i18next";

const LoginScreen = ({navigation}) => {

    const initialValues = {
        email: '',
        password: ''
    }

    const [err, setErr] = useState(null);
    const { i18n, t } = useTranslation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={async (values) => {
                            console.log(values);
                            try {
                                await firebase
                                    .auth()
                                    .signInWithEmailAndPassword(values.email, values.password);
                            } catch (err) {
                                console.log(err);
                                setErr(err);
                            }
                        }}
                    >
                        {props => (
                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    value={props.values.email}
                                    style={styles.textInput}
                                    onChangeText={props.handleChange('email')}
                                />
                                <Text style={styles.label}>{`${t("password")}`}</Text>
                                <TextInput
                                    value={props.values.password}
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    onChangeText={props.handleChange('password')}
                                />

                                {err ? (
                                    <Text style={styles.err}>{`${t("incorrect")}`}</Text>
                                ) : (
                                    <Text />
                                )}
                                <TouchableOpacity style={styles.passwordForgot} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                                    <Text style={styles.passwordForgotText}>{`${t("forgotPassword")}`}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.inscriptionButton} onPress={props.handleSubmit}>
                                    <Text style={styles.inscriptionText}>{`${t("connecter")}`}</Text>
                                </TouchableOpacity>

                                <View style={styles.viewFlex}>
                                    <Text style={styles.connexionText}>{`${t("pasencore")}`}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                                        <Text style={[styles.connexionText, styles.underline]}>{`${t("signup")}`}</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )}



                    </Formik>

                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    label: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '5%',
        marginTop: '15%'
    },
    passwordForgot: {
        marginTop: '5%'
    },
    passwordForgotText: {
        color: 'white',
        textAlign: 'center'
    },
    inscriptionText: {
        color: 'red',
        fontSize: 25,
        textAlign: 'center'
    },
    textInput: {
        backgroundColor: 'white',
        height: 50,
        width: '80%',
        marginLeft: '10%'
    },
    connexionText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginRight: 10
    },
    underline: {
        textDecorationLine: 'underline'
    },
    viewFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '25%'
    },
    inscriptionButton: {
        textAlign: 'center',
        alignSelf: 'center'
    },
    err: {
        color: "red",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
    },
});

export default LoginScreen;
