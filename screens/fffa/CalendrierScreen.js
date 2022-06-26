import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, StyleSheet, ScrollView, FlatList} from "react-native";
import { useEffect } from "react";
import axios from 'axios';
import {useSelector} from "react-redux";
import moment from 'moment';

moment.locale('fr');

const CalendrierScreen = () => {

    const userData = useSelector(state => state.user.currentUser)
    let poules = []
    if (userData.championnat) {
        if (userData.championnat === 'Division 1') {
            poules=[934, 935, 1010, 1011, 1012]
        }
        else if (userData.championnat === 'Division 2') {
            poules=[936, 937, 938, 939, 1013, 1014, 1015, 1087]
        } else {
            poules=[957, 958, 959, 960, 961, 962, 1088, 1089, 1017, 1018]
        }
    }
    let token = 'gajuHvT2Ih%2F6J4SjnpRbDfy3z3rCB4LhT3RNgbomYnC0noYHUvHtEqGoeUyCdTYRKsh%2BePlBALjgosACyIhP%2FeEU3yulVVyluUrheBdKVbR8rlW0jiyui%2FeiTfWbjbk7'
    let saisons = [];
    const [joursIds, setJoursIds] = useState([]);
    let rencontresInter = [];
    let jourdIds = []
    const [rencontres, setRencontres] = useState([]);

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://federation.licences-fffa.org/ws/rest/Calendar/GetToken?sessionIdentite=LbDAVldfa87Kc6FnoEqCH0zPOiWU1kpM&password=202206261335',
            headers: {
                'Accept': 'application/json'
            }
        };
        const getToken = async () => {
            try {
                const response = await axios(config)
                console.log('resgfponse', response.data.Response.token)
                token = JSON.stringify(response.data.Response.token).replace(/['"]+/g, '')
            } catch (err) {
                console.log(err)
            }
        }
        getToken().then(async () => {
            console.log('tosdk', token)
            for (let data of poules) {
                var configChampionnats = {
                    method: 'get',
                    url: `http://federation.licences-fffa.org/ws/rest/Calendar/ListerJournees?token=${token}&PouleId=${data}`,
                    headers: {
                        'Accept': 'application/json',
                        "cache-control": "no-cache, must-revalidate",
                        "content-type": "application/json",
                        "expires": "0",
                        "pragma": "public"
                    }
                };
                    try {
                        const response = await axios(configChampionnats)
                        saisons.push(JSON.parse(JSON.stringify(response.data.Response.Reponse)))
                        console.log('saisons', saisons)
                    } catch (err) {
                        console.log(err)
                    }
            }

            for (let data of saisons) {
                for (let data2 of Object.values(data)) {
                    jourdIds.push({
                        jourId: data2.JourId,
                        jourDate: data2.JourDate
                    })
                }
            }

            for (let data of jourdIds) {
                console.log('data', data)
                var configRencontres = {
                    method: 'get',
                    url: 'http://federation.licences-fffa.org/ws/rest/Calendar/ListerRencontres?token=gajuHvT2Ih%252F6J4SjnpRbDfy3z3rCB4LhT3RNgbomYnC0noYHUvHtEqGoeUyCdTYRKsh%252BePlBALjgosACyIhP%252FeEU3yulVVyluUrheBdKVbR8rlW0jiyui%252FeiTfWbjbk7&JourId=3392',
                    headers: {
                        'Accept': 'application/json'
                    }
                };
                try {
                    const response = await axios(configRencontres)
                    rencontresInter.push(JSON.parse(JSON.stringify(response.data.Response.Reponse)))
                } catch(err) {
                    console.log(err)
                }
            }

            for (let data of rencontresInter) {
                for (let data2 of Object.values(data)) {
                    rencontres.push({
                        jourId: data2.JourId,
                        equipe1: data2.Eqp1StructureNom,
                        equipe2: data2.Eqp2StructureNom,
                        jourDate: data2.JourDate,
                        rencId: data2.RencId
                    })
                }
            }
            setRencontres(rencontres.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.rencId === value.rencId
                ))).sort((a,b) => new Date(a.jourDate) - new Date(b.jourDate)))
        })
    }, [])

    console.log('saisons', saisons)
    console.log('rencontres', rencontres)

    if (!userData.poste) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.calendar}>Veuillez choisir un championnat dans votre profil</Text>
                </ImageBackground>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>
                    <FlatList
                        data={rencontres}
                        numColumns={2}
                        style={styles.flatlist}
                        keyExtractor={(item) => item.rencId}
                        renderItem={({item}) => {
                        return (
                            <View style={styles.cardMatch}>
                                <View style={styles.bordureCard}>
                                    <Text style={{color: 'white'}}>Date : {moment(item.jourDate).locale("fr-ch").format("L")} </Text>
                                </View>
                                <Text>{item.equipe1.toUpperCase()} VS {item.equipe2.toUpperCase()}</Text>
                            </View>
                        )}} />

                </ImageBackground>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    flatlist: {
        width: '100%'
    },
    cardMatch: {
        borderColor: 'white',
        borderWidth: 2,
        marginVertical: 5,
        backgroundColor: 'white',
        width: '45%',
        marginHorizontal: "2.5%"
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    calendar: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    bordureCard: {
        backgroundColor: 'grey'
    }

});

export default CalendrierScreen;
