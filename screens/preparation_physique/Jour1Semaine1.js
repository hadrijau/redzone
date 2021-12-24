import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import Stopwatch from "../../components/Stopwatch";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Jour1Semaine1 = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [video0, setVideo0] = useState(true);
    const [video1, setVideo1] = useState(false);
    const [video2, setVideo2] = useState(false);
    const [video3, setVideo3] = useState(false);
    const [video4, setVideo4] = useState(false);
    const [video5, setVideo5] = useState(false);
    const [video6, setVideo6] = useState(false);

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                {video0 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2FAdductor%20PLank.mp4?alt=media&token=fcdc0259-571a-4eca-b642-73e4965e87d1"}}
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
                        <Text style={styles.difficultyText}>Adductor Plank</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Temps : 30s</Text>
                    </View>

                </View> : <Text/>}

                {video1 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2FBand%20TKE.mp4?alt=media&token=87da3d78-dd49-4219-ad14-63bda05b2b98"}}
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
                        <Text style={styles.difficultyText}>Bank TKE</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 222</Text>
                        <Text style={styles.difficultyText}>Séries : 2*15/  1*12 </Text>
                    </View>

                </View> : <Text/>}

                {video2 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2FDB%20SA%20Floor.mp4?alt=media&token=a32c709d-10f2-4a88-b2b0-76324ea51d55"}}
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
                        <Text style={styles.difficultyText}>DB SA Floor</Text>
                    </View>


                </View> : <Text/>}

                {video3 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2FDB%20incline.mp4?alt=media&token=0b5c8f8e-da01-4907-92f2-e95cdf46b298"}}
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
                        <Text style={styles.difficultyText}>DB Incline</Text>
                    </View>

                </View> : <Text/>}


                {video4 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2FDL%20Calf%20Raise.mp4?alt=media&token=c047e07c-7b44-497d-9cf1-891a307c0566"}}
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
                        <Text style={styles.difficultyText}>DL Calf Raise</Text>
                    </View>

                </View> : <Text/>}


                {video5 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2FInt_Ext%20Iso%2090%C2%B0%20Flexion.mp4?alt=media&token=366a4693-dc1e-49f0-8def-5dc4b06e27a0"}}
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
                        <Text style={styles.difficultyText}>Int_Ext Iso 90° Flexion</Text>
                    </View>

                    <View>
                        <Text style={styles.difficultyText}>Tempo : 121</Text>
                        <Text style={styles.difficultyText}>Séries : 3*10 par bras</Text>
                        <Text style={styles.difficultyText}>Articulation travaillée : Omoplates</Text>
                    </View>

                </View> : <Text/>}


                {video6 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Pr%C3%A9paration%20Physique%20g%C3%A9n%C3%A9ral%20tout%20poste%20confondu%2FSemaine%201%2FJour%201%2FKneeling%20Band%20Punch.mp4?alt=media&token=d787db27-d531-404f-8213-f1d8ae42ae23"}}
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
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>Kneeling Band Punch</Text>
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

export default Jour1Semaine1;
