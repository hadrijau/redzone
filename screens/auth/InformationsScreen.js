import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from "formik";
import * as Yup from 'yup';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const InformationsScreen = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const initialValues = {
        phone: '',
        age: '',
        poids: '',
        taille: '',
        poste: '',
        nom: '',
        prenom: ''
    }

    const InformationsSchema = Yup.object().shape({
        phone: Yup.string()
            .required('Ce champ est requis'),
        age: Yup.string()
            .required('Ce champ est requis'),
        poids: Yup.string()
            .required('Ce champ est requis'),
        taille: Yup.string()
            .required('Ce champ est requis'),
        poste: Yup.string()
            .required('Ce champ est requis'),
        nom: Yup.string()
            .required('Ce champ est requis'),
        prenom: Yup.string()
            .required('Ce champ est requis'),

    });
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >

                <View style={styles.container}>

                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                        <Text style={styles.inscriptionBigText}>Informations</Text>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={InformationsSchema}
                            onSubmit={(values) => {
                                props.navigation.navigate('SignupScreen', {
                                    nom: values.nom,
                                    prenom: values.prenom,
                                    phone: values.phone,
                                    age: values.age,
                                    sexe: values.sexe,
                                    poids: values.poids,
                                    taille: values.taille,
                                    poste: values.poste
                                })
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
                                                onChangeText={props.handleChange('nom')}
                                            />
                                        </View>
                                    </View>
                                    {props.errors.nom && props.touched.nom ? (
                                       <Text style={styles.errors}>{props.errors.nom}</Text>
                                    ) : null}

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

                                    {props.errors.prenom && props.touched.prenom ? (
                                        <Text style={styles.errors}>{props.errors.prenom}</Text>
                                    ) : null}

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Téléphone</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.phone}
                                                style={styles.textInput}
                                                keyboardType="numeric"
                                                onChangeText={props.handleChange('phone')}
                                            />
                                        </View>
                                    </View>

                                    {props.errors.phone && props.touched.phone ? (
                                        <Text style={styles.errors}>{props.errors.phone}</Text>
                                    ) : null}

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Age</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.age}
                                                style={styles.textInput}
                                                keyboardType="numeric"
                                                onChangeText={props.handleChange('age')}
                                            />
                                        </View>
                                    </View>

                                    {props.errors.age && props.touched.age ? (
                                        <Text style={styles.errors}>{props.errors.age}</Text>
                                    ) : null}

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Sexe</Text>
                                        </View>
                                        <View style={styles.checkBoxContainer}>
                                            <View style={styles.checkboxInner}>
                                                <BouncyCheckbox
                                                    size={25}
                                                    fillColor="red"
                                                    unfillColor="#FFFFFF"
                                                    style={styles.checkbox}
                                                    iconStyle={{ borderColor: "red" }}
                                                />
                                                <Text style={styles.textCheckBox}>Homme</Text>
                                            </View>

                                            <View style={styles.checkboxInner}>
                                                <BouncyCheckbox
                                                    size={25}
                                                    fillColor="red"
                                                    unfillColor="#FFFFFF"
                                                    style={styles.checkbox}
                                                    iconStyle={{ borderColor: "red" }}
                                                />
                                                <Text style={styles.textCheckBox}>Femme</Text>
                                            </View>
                                        </View>
                                    </View>


                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Poids</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.poids}
                                                keyboardType="numeric"
                                                placeholder="en kg"
                                                placeholderTextColor="black"
                                                style={styles.textInput}
                                                onChangeText={props.handleChange('poids')}
                                            />
                                        </View>
                                    </View>

                                    {props.errors.poids && props.touched.poids ? (
                                        <Text style={styles.errors}>{props.errors.poids}</Text>
                                    ) : null}

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Taille</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.taille}
                                                style={styles.textInput}
                                                keyboardType="numeric"
                                                placeholder="en cm"
                                                placeholderTextColor="black"
                                                onChangeText={props.handleChange('taille')}
                                            />
                                        </View>
                                    </View>

                                    {props.errors.taille && props.touched.taille ? (
                                        <Text style={styles.errors}>{props.errors.taille}</Text>
                                    ) : null}


                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Poste</Text>
                                        </View>
                                        <View style={styles.inputContainer}>
                                            <TextInput
                                                value={props.values.poste}
                                                style={styles.textInput}
                                                onChangeText={props.handleChange('poste')}
                                            />
                                        </View>
                                    </View>

                                    {props.errors.poste && props.touched.poste ? (
                                        <Text style={styles.errors}>{props.errors.poste}</Text>
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
            </ScrollView>
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
    errors: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 70,
        marginTop: -10
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
    checkbox: {
        marginTop: 10
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
    checkBoxContainer: {
        width: '55%',
        marginLeft: 20
    },
    passwordForgotText: {
        color: 'white'
    },
    inscriptionText: {
        color: 'red',
        fontSize: 25
    },
    textCheckBox: {
        color: 'white',
        fontSize: 20,
        marginTop: 10
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
    checkboxInner: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default InformationsScreen;
