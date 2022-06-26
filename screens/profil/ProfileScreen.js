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
    Keyboard,
    ScrollView, Modal, Linking, Platform
} from 'react-native';
import {Formik} from "formik";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import Picker from "../../components/Picker";
import {useTranslation} from "react-i18next";

const ProfileScreen = ({navigation}) => {


    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(userActions.fetchUser())
            setUpdated(false)
        });
     return unsubscribe
    }, [dispatch, navigation]);

    const userData = useSelector(state => state.user.currentUser)

    const [poste, setPoste] = useState(userData?.poste || "");
    const [championnat, setChampionnat] = useState(userData?.championnat || "");

    console.log('poste', poste)
    console.log('userdata', userData)
    const initialValues = {
        prenom: userData?.prenom || "",
        nom: userData?.nom || "",
        age: userData?.age || "",
        poids: userData?.poids || "",
        taille: userData?.taille || "",
    }


    const logout = () => {
        firebase.auth().signOut()
    }

    const [isModalPosteVisible, setIsModalPosteVisible] = useState(false);
    const [isModalChampionnatVisible, setIsModalChampionnatVisible] = useState(false);


    const changeModalPosteVisibility = (bool) => {
        setIsModalPosteVisible(bool)
    }

    const changeModalChampionnatVisibility = (bool) => {
        setIsModalChampionnatVisible(bool)
    }

    const setDataPoste = async (option) => {
        setPoste(option)
    }

    const setDataChampionnat = async (option) => {
        setChampionnat(option)
    }

    const [updated, setUpdated] = useState(false);
    const { i18n, t } = useTranslation();
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="height"
            >
                <ScrollView style={styles.container}>

                    <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                            {!updated ? <ScrollView>
                                <Formik
                                    initialValues={initialValues}
                                    enableReinitialize
                                    onSubmit={async (values) => {
                                        await firebase.firestore()
                                            .collection("users")
                                            .doc(firebase.auth().currentUser.uid)
                                            .update({
                                                poste: poste,
                                                championnat: championnat,
                                                prenom: values.prenom,
                                                nom: values.nom,
                                                age: values.age,
                                                taille: values.taille,
                                                poids: values.poids
                                            })
                                        setUpdated(true)
                                    }}
                                >
                                    {props => (
                                        <View style={styles.formContainer}>
                                            <View style={styles.inscriptionInnerForm}>
                                                <View style={styles.textInscriptionContainer}>
                                                    <Text style={styles.label}>{t("prenom")}</Text>
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
                                                    <Text style={styles.label}>{t("nom")}</Text>
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
                                                    <Text style={styles.label}>{t("age")}</Text>
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
                                                    <Text style={styles.label}>{t("poids")}</Text>
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
                                                    <Text style={styles.label}>{t("taille")}</Text>
                                                </View>
                                                <View style={styles.inputContainer}>
                                                    <TextInput
                                                        value={props.values.taille}
                                                        style={styles.textInput}
                                                        onChange={props.handleChange('taille')}
                                                    />
                                                </View>
                                            </View>

                                            {userData?.poste || poste ?          <View style={styles.inscriptionInnerForm}>
                                                <View style={styles.textInscriptionContainer}>
                                                    <Text style={styles.label}>{t("poste")}</Text>
                                                </View>
                                                <TouchableOpacity
                                                    style={styles.inputContainer}
                                                    onPress={() => changeModalPosteVisibility(true)}
                                                >
                                                    <Text style={[styles.textPicker, styles.textInput]}>{poste ? poste : userData?.poste}</Text>
                                                </TouchableOpacity>
                                            </View> : <TouchableOpacity
                                                onPress={() => changeModalPosteVisibility(true)}
                                            >
                                                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Choisir mon poste</Text>
                                            </TouchableOpacity>}

                                            {userData?.championnat || championnat ?          <View style={styles.inscriptionInnerForm}>
                                                <View style={styles.textInscriptionContainer}>
                                                    <Text style={styles.label}>{t("championnat")}</Text>
                                                </View>
                                                <TouchableOpacity
                                                    style={styles.inputContainer}
                                                    onPress={() => changeModalChampionnatVisibility(true)}
                                                >
                                                    <Text style={[styles.textPicker, styles.textInput]}>{championnat ? championnat : userData?.championnat}</Text>
                                                </TouchableOpacity>
                                            </View> :  <TouchableOpacity
                                                onPress={() => changeModalChampionnatVisibility(true)}
                                            >
                                                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: '5%'}}>Choisir mon championnat</Text>
                                            </TouchableOpacity>}

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

                                            <Modal
                                                transparent={true}
                                                animationType='fade'
                                                visible={isModalChampionnatVisible}
                                                nRequestClose={() => changeModalChampionnatVisibility(false)}
                                            >
                                                <Picker
                                                    changeModalVisibility={changeModalChampionnatVisibility}
                                                    setData={setDataChampionnat}
                                                    options={['Division 1', 'Division 2', 'Division 3']}
                                                />
                                            </Modal>

                                            <View style={styles.flagContainer}>
                                                <TouchableOpacity onPress={() => i18n.changeLanguage("fr")}>
                                                    <Image source={require('../../assets/flag-fr.png')} style={styles.flag}/>
                                                </TouchableOpacity>

                                                <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
                                                    <Image source={require('../../assets/flag-en.png')} style={styles.flag}/>
                                                </TouchableOpacity>
                                            </View>

                                            <TouchableOpacity style={styles.inscriptionButton} onPress={props.handleSubmit}>
                                                <Text style={styles.inscriptionText}>{t("modifier")}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}

                                </Formik>
                                <TouchableOpacity style={styles.disconnectButton} onPress={() => {
                                    Platform.OS === "ios" ? Linking.openURL('https://apps.apple.com/account/subscriptions')
                                        :
                                    navigation.navigate('GererAbonnementScreen')
                                }}><Text style={styles.disconnectText}>{t("abonnement")}</Text></TouchableOpacity>

                                <TouchableOpacity style={styles.disconnectButton} onPress={logout}><Text style={styles.disconnectText}>{t("deconnect")}</Text></TouchableOpacity>
                            </ScrollView> : <View>
                                <Text style={styles.changeDone}>{t("changements")}</Text>
                                <TouchableOpacity style={styles.disconnectButton} onPress={() => navigation.navigate('AccueilScreen')}><Text style={styles.disconnectText}>{t("menu")}</Text></TouchableOpacity>
                            </View>}

                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate("MentionsLegalesScreen")}>
                                    <Text style={styles.mentionsText}>Mentions légales</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicyScreen")}>
                                    <Text style={styles.mentionsText}>Politique de confidentialité</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("CGUScreen")}>
                                    <Text style={styles.mentionsText}>Conditions générales d'utilisation</Text>
                                </TouchableOpacity>
                            </View>
                    </ImageBackground>

                </ScrollView>

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
    mentionsText: {
        color: "white",
        marginVertical: 10
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
        width: '60%',
        padding: 5,
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%'
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
        alignSelf: 'center',
        marginTop: "8%",
        marginBottom: "8%"
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
    },
    changeDone: {
        color: 'white',
        textAlign: 'center',
        marginBottom: "20%",
        fontSize: 18,
        marginTop: 40
    }
});

export default ProfileScreen;
