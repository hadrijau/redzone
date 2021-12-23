import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput, TouchableOpacity, ImageBackground
} from "react-native";
import {Formik} from "formik";
import firebase from "firebase";
import {useTranslation} from "react-i18next";


const ForgotPasswordScreen = (props) => {
    const initialValues = {
        email: "",
    };

    const [received, setReceived] = useState(false);
    const { i18n, t } = useTranslation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>{`${t("forgotPassword")}`}</Text>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                        console.log(values);
                        firebase.auth().sendPasswordResetEmail(values.email)
                            .then(() => {
                                setReceived(true)
                                console.log('okay')
                            })
                            .catch((error) => {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                console.log(errorMessage)
                                // ..
                            });
                    }}
                >
                    {(props) => (
                        <View style={styles.formContainer}>
                            <View>
                                <Text style={styles.text}>{`${t("enterEmail")}`}</Text>
                                <TextInput
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    autoCompleteType="email"
                                    placeholderTextColor="white"
                                    value={props.values.email}
                                    style={styles.textInput}
                                    onChangeText={props.handleChange("email")}
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={props.handleSubmit}
                            >
                                <Text style={styles.createCompte}>{`${t("mdp")}`}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>

                {received ?      <View style={styles.receivedEmail}>
                    <Text style={styles.receivedText}>{`${t("rei")}`}</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate('LoginScreen')}>
                        <Text style={styles.createCompte}>{`${t("return")}`}</Text>
                    </TouchableOpacity>
                </View> : <Text/>}

                </ImageBackground>
            </KeyboardAvoidingView>
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
    receivedEmail: {
        marginTop: 25,
        width: '80%',
        alignSelf: 'center'
    },
    receivedText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 27,
        marginTop: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    textInput: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
        paddingVertical: "4%",
        marginTop: 10,
        paddingLeft: "8%",
    },
    buttonContainer: {
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1,
        shadowColor: "grey",
        width: "100%",
        paddingVertical: "5%",
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 10
    },
    err: {
        color: "black",
        fontSize: 15,
        textAlign: "center",
        marginTop: 20,
    },
    createCompte: {
        color: "black",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        color: "white",
        fontSize: 18,
        marginTop: 35,
        textAlign: 'center'
    },
    connecteContainer: {
        display: "flex",
        flexDirection: "row",
    },
    formContainer: {
        width: "70%",
        alignSelf: 'center'
    },
    connecte: {
        marginBottom: "1%",
    },
});

export default ForgotPasswordScreen;

