import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import {Formik} from "formik";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";

const ProfileScreen = ({navigation}) => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser)

    console.log(userData)
    const initialValues = {
        prenom: userData?.prenom,
        nom: userData?.nom,
        age: userData?.age,
        sexe: '',
        poids: userData?.poids,
        taille: userData?.taille,
        poste: ''
    }


    const logout = () => {
        firebase.auth().signOut()
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="height"
            >
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                            <Text style={styles.inscriptionBigText}>Mon profil</Text>


                        <Formik
                            initialValues={initialValues}
                            enableReinitialize
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            {props => (
                                <View style={styles.formContainer}>
                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Prénom</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.prenom}
                                                style={styles.textInput}
                                                onChangeText={props.handleChange('prenom')}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Nom</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.nom}
                                                style={styles.textInput}
                                                onChangeText={props.handleChange('nom')}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Age</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.age}
                                                style={styles.textInput}
                                                onChangeText={props.handleChange('age')}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Sexe</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.sexe}
                                                style={styles.textInput}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Poids</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.poids}
                                                style={styles.textInput}
                                                onChangeText={props.handleChange('poids')}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Taille</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.taille}
                                                style={styles.textInput}
                                                onChange={props.handleChange('taille')}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Poste</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.poste}
                                                style={styles.textInput}
                                            />
                                        </View>
                                    </View>

                                    <TouchableOpacity style={styles.inscriptionButton} onPress={() => navigation.navigate('AccueilScreen')}>
                                        <Text style={styles.inscriptionText}>Modifier</Text>
                                    </TouchableOpacity>
                                </View>
                            )}

                        </Formik>

                        <TouchableOpacity style={styles.disconnectButton} onPress={logout}><Text style={styles.disconnectText}>Se déconnecter</Text></TouchableOpacity>

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
    disconnectButton: {
        backgroundColor: 'red',
        color: 'white',
        width: '50%',
        padding: 5,
        marginLeft: '25%',
        marginTop: '5%'
    },
    inscriptionInnerForm: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '3%'
    },
    inscriptionBigText: {
        fontSize: 40,
        marginBottom: 20,
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
        marginLeft: '10%',
        paddingLeft: '3%'
    },
    disconnectText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    inscriptionButton: {
        textAlign: 'center',
        marginLeft: '37%',
        marginTop: '5%'
    },
});

export default ProfileScreen;
