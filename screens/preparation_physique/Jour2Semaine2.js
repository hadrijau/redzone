import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import Stopwatch from "../../components/Stopwatch";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Jour2Semaine2 = ({route}) => {

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
            .doc('Jour2Semaine1')
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
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F1%20-%20Band%20Lat%20March%20AV%20AR.mp4?alt=media&token=d485f65f-df2f-4314-8439-33092a08eca9"}}
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
                        <Text style={styles.difficultyText}>Band Lat March AV AR </Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetitions : 10 par exercice</Text>
                    </View>

                </View> : <Text/>}

                {video1 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F2%20-%20Infant%20Squat.mp4?alt=media&token=2fe30248-1dfc-46d6-9d21-e04b5344604a"}}
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
                        <Text style={styles.difficultyText}>Infant Squat</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetitions : 5</Text>
                    </View>

                </View> : <Text/>}

                {video2 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F3%20-%20DL%20Drop%20Landing.mp4?alt=media&token=4df7066a-a780-4815-8fdd-9633322f8a83"}}
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
                        <Text style={styles.difficultyText}>DL Landing drop</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetitions : 3*6</Text>
                    </View>

                </View> : <Text/>}

                {video3 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F4%20-%20Goblet%20box%20Squat.mp4?alt=media&token=1970bad6-8497-49d1-834d-34ff8579ce7d"}}
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
                        <Text style={styles.difficultyText}>Goblet box Squat</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 411</Text>
                        <Text style={styles.difficultyText}>Séries x répétitions : 2*12 / 2*10</Text>
                    </View>
                </View> : <Text/>}


                {video4 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F5%20-%20Side%20Lying%20Abd.mp4?alt=media&token=94b3e315-ff8b-4d12-93c3-618d97120106"}}
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
                        <Text style={styles.difficultyText}>Side Lying abd</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 111</Text>
                        <Text style={styles.difficultyText}>Repetitions : 4*10 par jambe</Text>
                    </View>

                </View> : <Text/>}


                {video5 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F6%20-%20Hip%20Bridge%20ISo.mp4?alt=media&token=e7ffad51-76c3-431d-a8ac-11a3483e8c6a"}}
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
                        <Text style={styles.difficultyText}>Hip Bridge</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Repetition : 3*1</Text>
                    </View>
                </View> : <Text/>}


                {video6 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F7%20-%20Goblet%20Split%20Sq.mp4?alt=media&token=668fd43e-fcfb-4988-a777-de232f032bec"}}
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
                        <Text style={styles.difficultyText}>Goblet split squat </Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 211</Text>
                        <Text style={styles.difficultyText}>Repetition : 3*8 par jambe</Text>
                    </View>


                </View> : <Text/>}

                {video7 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F8%20-%20Standing%20leg%20curl%206''%20iso.mp4?alt=media&token=d032c09a-8b86-4954-a296-01fbb97143eb"}}
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
                        <Text style={styles.difficultyText}>Standing Leg Curl 6” Iso</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 161</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*5 par jambe</Text>
                    </View>

                </View> : <Text/>}

                {video8 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F9%20-%20Band%20Triceps%203%20ways.mp4?alt=media&token=dd3a3165-572c-407d-9263-a05148fd4a5e"}}
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
                        <Text style={styles.difficultyText}>Band Triceps 3 ways</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 111</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*8 par exercice</Text>
                    </View>

                </View> : <Text/>}

                {video9 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F10%20-%20Invert%20Body%20row.mp4?alt=media&token=e67602a4-7369-44cb-ab03-0c23af3e14a6"}}
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
                        <Text style={styles.difficultyText}>Invert Body Row</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 411</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*15</Text>
                    </View>

                </View> : <Text/>}

                {video10 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%202%2F11%20-%20SA%20DB%20Shrug%20seat.mp4?alt=media&token=c22855b7-8de8-45bc-b3d4-7ff2a7ced628"}}
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
                        <Text style={styles.difficultyText}>SA DB Shrug seat</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 111</Text>
                        <Text style={styles.difficultyText}>Repetitions : 3*12 par bras</Text>
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
        marginTop: 25,
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

export default Jour2Semaine2;
