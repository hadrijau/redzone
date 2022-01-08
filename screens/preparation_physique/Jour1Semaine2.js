import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import Stopwatch from "../../components/Stopwatch";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Jour1Semaine2 = ({route}) => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [video0, setVideo0] = useState(true);
    const [video1, setVideo1] = useState(false);
    const [video2, setVideo2] = useState(false);
    const [video3, setVideo3] = useState(false);
    const [video4, setVideo4] = useState(false);
    const [video5, setVideo5] = useState(false);
    const [video6, setVideo6] = useState(false);
    const [video7, setVideo7] = useState(false);
    const [video8, setVideo8] = useState(false);
    const [video9, setVideo9] = useState(false);
    const [video10, setVideo10] = useState(false);
    const [video11, setVideo11] = useState(false);

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

    const [videoList, setVideoList] = useState([]);

    let entrainement;
    if (route.params) {
        entrainement = route.params.entrainement;
    }

    useEffect(() => {
        firebase.firestore()
            .collection(`${entrainement}`)
            .doc('Jour1Semaine1')
            .collection("ListeVideos")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setVideoList(prevState => [...prevState, doc.data()])
                });
            });
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                {video0 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F1%20-%20Band%20Rot%2B%20TD.mp4?alt=media&token=ce730a84-97e2-4004-9738-e9f4fe2edf17"}}
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
                        <Text style={styles.difficultyText}>Band Rotation</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetitions : 10</Text>
                    </View>

                </View> : <Text/>}

                {video1 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F2%20-%20Scap%20%2B%20Reg%20Push%20Up.mp4?alt=media&token=57744b44-96bd-40d2-9387-fe7bdbf27b8b"}}
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
                        <Text style={styles.difficultyText}>Scapulas + regular…</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetitions : 10</Text>
                    </View>

                </View> : <Text/>}

                {video2 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F3%20-%20Inverted%20Retract.mp4?alt=media&token=f90016c3-121c-4017-820e-82017a959f0e"}}
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
                        <Text style={styles.difficultyText}>Inverted retraction</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetitions : 10</Text>
                    </View>

                </View> : <Text/>}

                {video3 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F4%20-%20Kneeling%20Band%20Punch.mp4?alt=media&token=1921d295-1461-4b57-9010-18f39f6dd3bd"}}
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
                        <Text style={styles.difficultyText}>Kneeling Band Puch</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetitions : 3*10</Text>
                    </View>

                </View> : <Text/>}


                {video4 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F5%20-%20DB%20SA%20Floor.mp4?alt=media&token=2cd8e023-b964-4a5e-97fd-ea379851d364"}}
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
                        <Text style={styles.difficultyText}>DB SA FLOOR</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 411</Text>
                        <Text style={styles.difficultyText}>Repetitions : 2*12</Text>
                    </View>

                </View> : <Text/>}


                {video5 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F6%20-%20Prone%20T%20up.mp4?alt=media&token=1eb404c6-6504-44e4-9203-57ff6ab29a73"}}
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
                        <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                            setVideo5(false)
                            setVideo6(true)
                        }}/>
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>Prone T Up</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 111</Text>
                        <Text style={styles.difficultyText}>Repetitions : 4*10</Text>
                        <Text style={styles.difficultyText}>Articulation travaillée : Omoplates</Text>
                    </View>

                </View> : <Text/>}


                {video6 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F7%20-%20DB%20Incline.mp4?alt=media&token=1dd588ad-ea9e-49f9-ab5e-d9efc80688a6"}}
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
                                       setVideo5(true)
                                       setVideo6(false)
                                   }}
                        />
                        <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                            setVideo6(false)
                            setVideo7(true)
                        }}/>
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>DB Incline</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 411</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*10</Text>
                    </View>

                </View> : <Text/>}


                {video7 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F8%20-%20Chin%20Up%20Neutre%2090%C2%B0.mp4?alt=media&token=e57b4850-98da-440e-842d-3f12ffe9d748"}}
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
                                       setVideo6(true)
                                       setVideo7(false)
                                   }}
                        />
                        <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                            setVideo7(false)
                            setVideo8(true)
                        }}/>
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>Chin Up Neutre 90°</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 111</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*12</Text>
                    </View>

                </View> : <Text/>}

                {video8 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F9%20-%20Int_Ext%20Iso%2090%C2%B0%20Flexion.mp4?alt=media&token=93a74418-f2ff-4877-9e53-5844b0980a44"}}
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
                                       setVideo7(true)
                                       setVideo8(false)
                                   }}
                        />
                        <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                            setVideo8(false)
                            setVideo9(true)
                        }}/>
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>Int_Ext Iso 90° Flexion</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 121</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*10 par bras</Text>
                    </View>

                </View> : <Text/>}

                {video9 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F10%20-%20Band%20TKE.mp4?alt=media&token=0df19d10-8376-480a-8e5e-2b747a1520fa"}}
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
                                       setVideo8(true)
                                       setVideo9(false)
                                   }}
                        />
                        <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                            setVideo9(false)
                            setVideo10(true)
                        }}/>
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>Bank TKE</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 222</Text>
                        <Text style={styles.difficultyText}>Repetitions : 2*15</Text>
                    </View>

                </View> : <Text/>}

                {video10 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F7%20-%20DB%20Incline.mp4?alt=media&token=1dd588ad-ea9e-49f9-ab5e-d9efc80688a6"}}
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
                                       setVideo9(true)
                                       setVideo10(false)
                                   }}
                        />
                        <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                            setVideo10(false)
                            setVideo11(true)
                        }}/>
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>Adductor Plank</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Temps : 30sec</Text>
                    </View>

                </View> : <Text/>}

                {video11 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2F12%20-%20DL%20Calf%20Raise.mp4?alt=media&token=48f69438-be1d-4acf-b306-722bcea3211f"}}
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
                                       setVideo10(true)
                                       setVideo11(false)
                                   }}
                        />
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>DL Calf Raise</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 111</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*15</Text>
                    </View>

                </View> : <Text/>}


                <Stopwatch
                    isStopwatchStart={isStopwatchStart}
                    resetStopwatch={resetStopwatch}
                    setIsStopwatchStart={setIsStopwatchStart}
                    setResetStopwatch={setResetStopwatch}
                />

            </ImageBackground>
        </View>
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
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 80,
        marginTop: -100
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
        fontSize: 20,
        maxWidth: '90%',
        marginLeft: 15,
        marginTop: 10,
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

export default Jour1Semaine2;
