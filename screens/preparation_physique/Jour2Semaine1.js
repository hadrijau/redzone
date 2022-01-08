import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import Stopwatch from "../../components/Stopwatch";
import firebase from "firebase";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Jour2Semaine1 = ({route}) => {

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
                            source={{uri: videoList[0].video}}
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
                        <Text style={styles.difficultyText}>Repetitions : {videoList[0].repetition}</Text>
                    </View>

                </View> : <Text/>}

                {video1 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[1].video}}
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
                        <Text style={styles.difficultyText}>Repetitions : {videoList[1].repetition}</Text>
                    </View>

                </View> : <Text/>}

                {video2 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[2].video}}
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
                        <Text style={styles.difficultyText}>Repetitions : {videoList[2].repetition}</Text>
                    </View>

                </View> : <Text/>}

                {video3 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[3].video}}
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
                        <Text style={styles.difficultyText}>Repetition : {videoList[3].repetition}</Text>
                    </View>
                </View> : <Text/>}


                {video4 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[4].video}}
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
                        <Text style={styles.difficultyText}>Repetitions : {videoList[4].repetition}</Text>
                    </View>

                </View> : <Text/>}


                {video5 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[5].video}}
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
                        <Text style={styles.difficultyText}>Repetition : {videoList[5].repetition}</Text>
                    </View>
                </View> : <Text/>}


                {video6 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[6].video}}
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
                        <Text style={styles.difficultyText}>Repetition : {videoList[6].repetition}</Text>
                    </View>


                </View> : <Text/>}

                {video7 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[7].video}}
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
                        <Text style={styles.difficultyText}>Repetitions : {videoList[7].repetition}</Text>
                    </View>

                </View> : <Text/>}

                {video8 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: videoList[8].video}}
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
                            source={{uri: videoList[9].video}}
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
                            source={{uri: videoList[10].video}}
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

export default Jour2Semaine1;
