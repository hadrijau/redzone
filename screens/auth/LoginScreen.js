import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from "formik";
import firebase from "firebase";

const LoginScreen = ({navigation}) => {

    const initialValues = {
        email: '',
        password: ''
    }

    const [err, setErr] = useState(null);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
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
                                <Text style={styles.label}>Mot de passe</Text>
                                <TextInput
                                    value={props.values.password}
                                    style={styles.textInput}
                                    onChangeText={props.handleChange('password')}
                                />

                                {err ? (
                                    <Text style={styles.err}>Vos identifiants sont incorrects</Text>
                                ) : (
                                    <Text />
                                )}
                                <TouchableOpacity style={styles.passwordForgot} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                                    <Text style={styles.passwordForgotText}>Mot de passe oublié</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.inscriptionButton} onPress={props.handleSubmit}>
                                    <Text style={styles.inscriptionText}>Se connecter</Text>
                                </TouchableOpacity>
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
