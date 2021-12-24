import React from 'react';
import {
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    TextInput,
    SafeAreaView, TouchableWithoutFeedback, Keyboard
} from "react-native";
import {Formik} from "formik";
import axios from 'axios';
import {useTranslation} from "react-i18next";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const EntraineurPersonnelScreen = (props) => {

    const initialValues = {
        nom: '',
        email: '',
        sujet: '',
        message: ''
    }

    const { i18n, t } = useTranslation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAwareScrollView
                    style={styles.container}
                >
                    <View style={styles.container}>

                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                    <ScrollView>

                    <Image source={require('../../assets/photo_coach.jpg')} style={styles.img}/>

                    <Text style={styles.presentation}>{t("Entraineur1")}</Text>
                    <Text style={[styles.presentation, styles.marginBottom]}>Train Like A Pro</Text>

                    <View>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={async values => {
                                await axios.post(
                                    "https://your-redzone.herokuapp.com/send",
                                    {
                                        subject: `${values.sujet}`,
                                        html_output: `<div><p><br></p> 
<p>Message : ${values.message}</p>
<p>Mail : ${values.email}</p>
<p>Nom : ${values.nom}</p>
<hr>
</div>`
                            })
                                props.navigation.navigate("ConfirmationEmailScreen")
                            }}
                        >
                            {props => (
                                <View>
                                    <View style={styles.formContainer}>
                                        <View style={styles.inscriptionInnerForm}>
                                                <Text style={styles.label}>{t("nom")}</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    value={props.values.nom}
                                                    style={styles.textInput}
                                                    onChangeText={props.handleChange('nom')}
                                                />
                                            </View>
                                        </View>

                                        {props.errors.mail && props.touched.mail ? (
                                            <Text style={styles.errors}>{props.errors.mail}</Text>
                                        ) : null}

                                        <View style={styles.inscriptionInnerForm}>
                                                <Text style={styles.label}>{t("mail2")}</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    value={props.values.email}
                                                    style={styles.textInput}
                                                    onChangeText={props.handleChange('email')}
                                                />
                                            </View>
                                        </View>

                                        {props.errors.password && props.touched.password ? (
                                            <Text style={styles.errors}>{props.errors.password}</Text>
                                        ) : null}

                                        <View style={styles.inscriptionInnerForm}>
                                                <Text style={styles.label}>{t("sujet")}</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    value={props.values.sujet}
                                                    style={styles.textInput}
                                                    onChangeText={props.handleChange('sujet')}
                                                />
                                            </View>
                                        </View>

                                        {props.errors.passwordConfirm && props.touched.passwordConfirm ? (
                                            <Text style={styles.errors}>{props.errors.passwordConfirm}</Text>
                                        ) : null}


                                        <View style={styles.inscriptionInnerForm}>
                                                <Text style={styles.label}>Message :</Text>
                                            <View style={styles.inputContainer}>
                                                <TextInput
                                                    value={props.values.message}
                                                    style={styles.textInput2}
                                                    multiline={true}
                                                    onChangeText={props.handleChange('message')}
                                                />
                                            </View>
                                        </View>


                                        <TouchableOpacity style={styles.inscriptionButton} onPress={props.handleSubmit}>
                                            <Text style={styles.inscriptionText}>{t("demande")}</Text>
                                        </TouchableOpacity>


                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                    </ScrollView>
                </ImageBackground>
            </View>
                </KeyboardAwareScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
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
    inscriptionBigText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 30
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    presentation: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    },
    textInput: {
        backgroundColor: 'white',
        height: 30,
        borderRadius: 5,
        marginTop: 15,
        width: '70%',
        marginLeft: '22%',
        marginBottom: 40,
    },
    marginBottom: {
        marginBottom: 20
    },
    textInput2: {
        backgroundColor: 'white',
        height: 150,
        borderRadius: 5,
        marginTop: 15,
        width: '70%',
        marginLeft: '22%'
    },
    label: {
        color: 'white',
        marginBottom: -35,
        marginLeft: 5
    },
    inscriptionButton: {
        textAlign: 'center',
        marginLeft: '20%',
        marginTop: 30,
        marginBottom: 50
    },
    inscriptionText: {
        color: 'red',
        fontSize: 25
    },
})
export default EntraineurPersonnelScreen;
