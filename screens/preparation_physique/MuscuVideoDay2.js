import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import Stopwatch from "../../components/Stopwatch";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const MuscuVideoDay2 = () => {

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

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.png')} resizeMode="cover" style={styles.image}>

                {video0 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2FPompes%20%C3%A9paule.mp4?alt=media&token=36326b35-eb76-4d51-831c-1d313a432c66"}}
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
                        <Text style={styles.difficultyText}>Séries : 4</Text>
                        <Text style={styles.difficultyText}>Répétitions : 6-12</Text>
                        <Text style={styles.difficultyText}>Récupération : 1m30</Text>
                    </View>

                </View> : <Text/>}

                {video1 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2FPompes%20Diamant.mp4?alt=media&token=a930f569-994e-459a-8fb9-5585a6e1b6a7"}}
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
                        <Text style={styles.difficultyText}>Séries : 4</Text>
                        <Text style={styles.difficultyText}>Répétitions : 6-12</Text>
                        <Text style={styles.difficultyText}>Récupération : 1m30</Text>
                    </View>
                </View> : <Text/>}


                {video2 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2FTraction.mp4?alt=media&token=06599c10-f429-4eee-b395-ed3ef730a411"}}
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
                        <Text style={styles.difficultyText}>Séries : 4</Text>
                        <Text style={styles.difficultyText}>Répétitions : 6-10</Text>
                        <Text style={styles.difficultyText}>Récupération : 1m30</Text>
                    </View>
                </View> : <Text/>}


                {video3 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2FThruster%20avec%20Poids.mp4?alt=media&token=a0062d04-5e09-4205-ae55-ea7d2f8d5589"}}
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
                        <Text style={styles.difficultyText}>Séries : 4</Text>
                        <Text style={styles.difficultyText}>Répétitions : 15</Text>
                        <Text style={styles.difficultyText}>Récupération : 1m</Text>
                    </View>
                </View> : <Text/>}


                {video4 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2FGainage%20coude.mp4?alt=media&token=8ebde1bd-75cc-4eec-a51f-6f51f22d2c1d"}}
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
                        <Text style={styles.difficultyText}>Séries : 3</Text>
                        <Text style={styles.difficultyText}>Temps : 30s</Text>
                        <Text style={styles.difficultyText}>Récupération : 1m</Text>
                    </View>
                </View> : <Text/>}


                {video5 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2FCriss%20Cross%20ABS.mp4?alt=media&token=0f835c90-8a23-4838-919e-cefad324e4f1"}}
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
                        <Text style={styles.difficultyText}>Séries : 3</Text>
                        <Text style={styles.difficultyText}>Temps : 30s</Text>
                        <Text style={styles.difficultyText}>Récupération : 1m</Text>
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

export default MuscuVideoDay2;
