import React, {useState} from 'react';
import {View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
    Image
} from 'react-native';
import {Formik} from "formik";
import * as Yup from 'yup';
import Picker from "../../components/Picker";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";

const InformationsScreen = (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [selectedPoste, setSelectedPoste] = useState('');
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
        nom: Yup.string()
            .required('Ce champ est requis'),
        prenom: Yup.string()
            .required('Ce champ est requis'),
    });

    const [sexe, setSexe] = useState('Choisir');
    const [poste, setPoste] = useState('Choisir');
    const [isModalSexeVisible, setIsModalSexeVisible] = useState(false);
    const [isModalPosteVisible, setIsModalPosteVisible] = useState(false);

    const changeModalSexeVisibility = (bool) => {
        setIsModalSexeVisible(bool)
    }

    const changeModalPosteVisibility = (bool) => {
        setIsModalPosteVisible(bool)
    }

    const setDataPoste = (option) => {
        setSexe(option)
    }

    const setDataSexe = (option) => {
        setPoste(option)
    }

    const [errorSexe, setErrorSexe] = useState(false);
    const [errorPoste, setErrorPoste] = useState(false);

    const { i18n, t } = useTranslation();

    return (
        <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAwareScrollView
                    style={styles.container}
                >
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                        <Text style={styles.inscriptionBigText}>Informations</Text>

                        <View style={styles.flagContainer}>
                            <TouchableOpacity onPress={() => i18n.changeLanguage("fr")}>
                                <Image source={require('../../assets/flag-fr.png')} style={styles.flag}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
                                <Image source={require('../../assets/flag-en.jpg')} style={styles.flag}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignSelf: 'center', marginVertical: 10}}>
                            <Text style={styles.alreadyAccount}>{`${t("account")}`}</Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')}>
                                <Text style={styles.connect}>{`${t("connect")}`}</Text>
                            </TouchableOpacity>
                        </View>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={InformationsSchema}
                            onSubmit={(values) => {
                                if (sexe === 'Choisir' || poste === 'Choisir') {
                                    setErrorPoste(true)
                                    setErrorSexe(true)
                                } else {
                                    props.navigation.navigate('SignupScreen', {
                                        nom: values.nom,
                                        prenom: values.prenom,
                                        phone: values.phone,
                                        age: values.age,
                                        sexe: poste,
                                        poids: values.poids,
                                        taille: values.taille,
                                        poste: sexe
                                    })
                                }
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
                                        <TouchableOpacity
                                            style={styles.inputContainer}
                                            onPress={() => changeModalSexeVisibility(true)}
                                        >
                                            <Text style={[styles.textPicker, styles.textInput]}>{poste}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Modal
                                        transparent={true}
                                        animationType='fade'
                                        visible={isModalSexeVisible}
                                        nRequestClose={() => changeModalSexeVisibility(false)}
                                    >
                                        <Picker
                                            changeModalVisibility={changeModalSexeVisibility}
                                            setData={setDataSexe}
                                            options={['Homme', 'Femme']}
                                        />
                                    </Modal>

                                    {errorSexe ? (
                                        <Text style={styles.errors}>Veuillez remplir ce champ</Text>
                                    ) : null}

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Poids</Text>
                                        </View>
                                        <View style={styles.poidsContainer}>
                                            <TextInput
                                                value={props.values.poids}
                                                keyboardType="numeric"
                                                style={styles.textInput}
                                                onChangeText={props.handleChange('poids')}
                                            />
                                            <Text style={styles.poidsText}>
                                                kg
                                            </Text>
                                        </View>
                                    </View>

                                    {props.errors.poids && props.touched.poids ? (
                                        <Text style={styles.errors}>{props.errors.poids}</Text>
                                    ) : null}

                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Taille</Text>
                                        </View>
                                        <View style={styles.poidsContainer}>
                                            <TextInput
                                                value={props.values.taille}
                                                style={styles.textInput}
                                                keyboardType="numeric"
                                                onChangeText={props.handleChange('taille')}
                                            />
                                            <Text style={styles.poidsText}>
                                                cm
                                            </Text>
                                        </View>
                                    </View>

                                    {props.errors.taille && props.touched.taille ? (
                                        <Text style={styles.errors}>{props.errors.taille}</Text>
                                    ) : null}


                                    <View style={styles.inscriptionInnerForm}>
                                        <View style={styles.textInscriptionContainer}>
                                            <Text style={styles.label}>Poste</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={styles.inputContainer}
                                            onPress={() => changeModalPosteVisibility(true)}
                                        >
                                            <Text style={[styles.textPicker, styles.textInput]}>{sexe}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Modal
                                        transparent={true}
                                        animationType='fade'
                                        visible={isModalPosteVisible}
                                        nRequestClose={() => changeModalPosteVisibility(false)}
                                    >
                                        <Picker
                                            changeModalVisibility={changeModalPosteVisibility}
                                            setData={setDataPoste}
                                            options={['Defensive Back', 'Defensive Linemen', 'Linebacker', 'Offensive Linemen', 'Quaterback', 'Running back', 'Wide receiver']}
                                        />
                                    </Modal>

                                    {errorPoste ? (
                                        <Text style={styles.errors}>Veuillez remplir ce champ</Text>
                                    ) : null}

                                    <TouchableOpacity style={styles.inscriptionButton} onPress={props.handleSubmit}>
                                        <Text style={styles.inscriptionText}>Suivant</Text>
                                    </TouchableOpacity>


                                </View>
                            )}



                        </Formik>


                    </ImageBackground>

                </View>

                </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
    picker: {
        backgroundColor: 'white',
        width: 200,
        paddingTop: 0
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
    poidsContainer: {
        width: '30%',
        marginLeft: 10,
        display: 'flex',
        marginTop: 5,
        flexDirection: 'row'
    },
    poidsText: {
        color: 'white',
        marginTop: 18,
        marginLeft: 10
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
    textPicker: {
        paddingLeft:5,
        paddingTop: 4
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    inscriptionButton: {
        textAlign: 'center',
        marginLeft: '37%',
        marginBottom: 50
    },
    checkboxInner: {
        display: 'flex',
        flexDirection: 'row',
    },
    alreadyAccount: {
        color: 'white',
        fontSize: 20
    },
    connect: {
        color: 'red',
        fontSize: 20
    },
    flagContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-around'
    },
    flag: {
        height: 50,
        width: 100
    }
});

export default InformationsScreen;
