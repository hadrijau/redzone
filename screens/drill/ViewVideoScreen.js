import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const ViewVideoScreen = () => {


    const dispatch = useDispatch();

    const [drillDB, setDrillDB] = useState([]);
    const [drillDL, setDrillDL] = useState([]);
    const [drillLBSF, setDrillLBSF] = useState([]);
    const [drillOL, setDrillOL] = useState([]);
    const [drillQB, setDrillQB] = useState([]);
    const [drillRB, setDrillRB] = useState([]);
    const [drillWR, setDrillWR] = useState([]);

    useEffect(() => {
        dispatch(userActions.fetchUser());
        firebase.firestore().collection("DrillDB").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDrillDB(prevState => [...prevState, doc.data()])
                console.log(doc.id, " => ", doc.data());
            });
        });
        firebase.firestore().collection("DrillDL").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDrillDL(prevState => [...prevState, doc.data()])
                console.log(doc.id, " => ", doc.data());
            });
        });
        firebase.firestore().collection("DrillLBSF").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDrillLBSF(prevState => [...prevState, doc.data()])
                console.log(doc.id, " => ", doc.data());
            });
        });
        firebase.firestore().collection("DrillOL").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDrillOL(prevState => [...prevState, doc.data()])
                console.log(doc.id, " => ", doc.data());
            });
        });
        firebase.firestore().collection("DrillQB").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDrillQB(prevState => [...prevState, doc.data()])
                console.log(doc.id, " => ", doc.data());
            });
        });
        firebase.firestore().collection("DrillRB").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDrillRB(prevState => [...prevState, doc.data()])
                console.log(doc.id, " => ", doc.data());
            });
        });
        firebase.firestore().collection("DrillWR").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDrillWR(prevState => [...prevState, doc.data()])
                console.log(doc.id, " => ", doc.data());
            });
        });
    }, [dispatch]);

    console.log(drillDL)
    const userData = useSelector(state => state.user.currentUser)
    console.log(userData)
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [video0, setVideo0] = useState(true);
    const [video1, setVideo1] = useState(false);
    const [video2, setVideo2] = useState(false);
    const [video3, setVideo3] = useState(false);
    const [video4, setVideo4] = useState(false);
    const [video5, setVideo5] = useState(false);
    const [video6, setVideo6] = useState(false);

    console.log(drillDB)

    if (!drillWR) {
        return <ActivityIndicator/>
    }
    if (userData) {
        if (userData.poste === 'Offensive Linemen') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillOL[0].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>

                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"

                                />

                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo0(false)
                                    setVideo1(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillOL[0].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillOL[1].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>

                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo0(true)
                                               setVideo1(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo1(false)
                                    setVideo2(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillOL[1].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillOL[2].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo1(true)
                                               setVideo2(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo2(false)
                                    setVideo3(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillOL[2].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillOL[3].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo2(true)
                                               setVideo3(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo3(false)
                                    setVideo4(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillOL[3].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillOL[4].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo3(true)
                                               setVideo4(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo4(false)
                                    setVideo5(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillOL[4].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillOL[5].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo4(true)
                                               setVideo5(false)
                                           }}
                                />
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillOL[5].name}</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Defensive Back') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDB[0].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"

                                />

                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo0(false)
                                    setVideo1(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDB[0].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDB[1].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo0(true)
                                               setVideo1(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo1(false)
                                    setVideo2(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDB[1].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDB[2].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo1(true)
                                               setVideo2(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo2(false)
                                    setVideo3(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDB[2].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDB[3].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo2(true)
                                               setVideo3(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo3(false)
                                    setVideo4(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDB[3].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDB[4].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo3(true)
                                               setVideo4(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo4(false)
                                    setVideo5(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDB[4].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDB[5].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo4(true)
                                               setVideo5(false)
                                           }}
                                />
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDB[5].name}</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Defensive Linemen' && drillDL.length !==0) {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDL[0]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"

                                />

                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo0(false)
                                    setVideo1(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDL[0]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDL[1]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo0(true)
                                               setVideo1(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo1(false)
                                    setVideo2(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDL[1]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDL[2]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo1(true)
                                               setVideo2(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo2(false)
                                    setVideo3(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDL[2]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDL[3]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo2(true)
                                               setVideo3(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo3(false)
                                    setVideo4(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDL[3]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDL[4]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo3(true)
                                               setVideo4(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo4(false)
                                    setVideo5(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDL[4]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillDL[5]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo4(true)
                                               setVideo5(false)
                                           }}
                                />
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillDL[5]?.name}</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Linebacker') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillLBSF[0]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"

                                />

                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo0(false)
                                    setVideo1(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillLBSF[0]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillLBSF[1]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo0(true)
                                               setVideo1(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo1(false)
                                    setVideo2(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillLBSF[1]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillLBSF[2]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo1(true)
                                               setVideo2(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo2(false)
                                    setVideo3(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillLBSF[2]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillLBSF[3]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo2(true)
                                               setVideo3(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo3(false)
                                    setVideo4(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillLBSF[3]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillLBSF[4]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo3(true)
                                               setVideo4(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo4(false)
                                    setVideo5(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillLBSF[4]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillLBSF[5]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo4(true)
                                               setVideo5(false)
                                           }}
                                />
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillLBSF[5]?.name}</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Quaterback') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillQB[0]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"

                                />

                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo0(false)
                                    setVideo1(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillQB[0]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillQB[1]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo0(true)
                                               setVideo1(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo1(false)
                                    setVideo2(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillQB[1]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillQB[2]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo1(true)
                                               setVideo2(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo2(false)
                                    setVideo3(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillQB[2]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillQB[3]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo2(true)
                                               setVideo3(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo3(false)
                                    setVideo4(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillQB[3]?.video}</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillQB[4]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo3(true)
                                               setVideo4(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo4(false)
                                    setVideo5(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillQB[4]?.name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillQB[5]?.video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo4(true)
                                               setVideo5(false)
                                           }}
                                />
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillQB[5]?.name}</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Running back') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillRB[0].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"

                                />

                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo0(false)
                                    setVideo1(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillRB[0].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillRB[1].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo0(true)
                                               setVideo1(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo1(false)
                                    setVideo2(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillRB[1].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillRB[2].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo1(true)
                                               setVideo2(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo2(false)
                                    setVideo3(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillRB[2].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillRB[3].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo2(true)
                                               setVideo3(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo3(false)
                                    setVideo4(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillRB[3].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillRB[4].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo3(true)
                                               setVideo4(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo4(false)
                                    setVideo5(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillRB[4].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillRB[5].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo4(true)
                                               setVideo5(false)
                                           }}
                                />
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillRB[5].name}</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Wide receiver') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillWR[0].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"

                                />

                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo0(false)
                                    setVideo1(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillWR[0].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillWR[1].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo0(true)
                                               setVideo1(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo1(false)
                                    setVideo2(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillWR[1].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillWR[2].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo1(true)
                                               setVideo2(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo2(false)
                                    setVideo3(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillWR[2].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillWR[3].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo2(true)
                                               setVideo3(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo3(false)
                                    setVideo4(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillWR[3].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillWR[4].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo3(true)
                                               setVideo4(false)
                                           }}
                                />
                                <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                    setVideo4(false)
                                    setVideo5(true)
                                }}/>
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillWR[4].name}</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: drillWR[5].video}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    shouldPlay={true}
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                            </View>


                            <View style={styles.playStatus}>
                                <AntDesign name="stepbackward" size={24} color="white"
                                           onPress={() => {
                                               setVideo4(true)
                                               setVideo5(false)
                                           }}
                                />
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>{drillWR[5].name}</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        else {
            return (
                <ActivityIndicator/>
            )
        }
    }

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
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 80,
        marginTop: -200
    },
    videoContainer: {
        width: windowWidth
    },
    imageContainer: {
        width: windowWidth,
        height: 200,
        position: 'relative'
    },
    imageVideo: {
        width: windowWidth,
        height: '100%'
    },
    difficultyText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    playButton: {
        position: 'absolute',
        top: '30%',
        left: '45%'
    },
    playStatus: {
        width: windowWidth,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ViewVideoScreen;
