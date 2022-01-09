import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import Stopwatch from "../../components/Stopwatch";
import firebase from "firebase";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Jour1Semaine2 = ({route}) => {

    const videoRef = React.useRef(null);

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

    const [videoList, setVideoList] = useState([]);

    let entrainement;
    if (route.params) {
        entrainement = route.params.entrainement;
    }
    const length = videoList.length;


    useEffect(() => {
        const getData = async () => {
            let videos = [];
            await firebase.firestore()
                .collection(`${entrainement}`)
                .doc('Jour1Semaine1')
                .collection("ListeVideos")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log('data', doc.data())
                        videos.push(doc.data())
                    });
                    console.log("videos", videos)
                });
            console.log("videos2", videos)
            setVideoList(videos)
        }
        getData()
    }, []);

    const [currentVideo, setCurrentVideo] = useState(0);

    const previousVideo = (index) => {
        setCurrentVideo(Math.max(0, index-1))
    }
    console.log("current", currentVideo)
    const nextVideo = (index) => {
        setCurrentVideo(Math.min(index + 1, length - 1));
    }

    if (videoList.length === 0) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <Text style={styles.incoming}>A venir...</Text>
                </ImageBackground>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>

                    {videoList.map((video, index) => {
                        if (index === currentVideo) {
                            return (
                                <View style={styles.videoContainer} key={index}>
                                    <View style={styles.imageContainer}>
                                        <Video
                                            ref={videoRef}
                                            style={styles.imageVideo}
                                            source={{uri: video.video}}
                                            useNativeControls
                                            resizeMode="contain"
                                            isLooping
                                            shouldPlay={true}
                                        />
                                    </View>

                                    <View style={styles.playStatus}>
                                        {currentVideo !== 0 ? <AntDesign name="stepbackward" size={24} color="white" onPress={() => {
                                            previousVideo(index)
                                        }}
                                        /> : <Text/> }

                                        {currentVideo !== length - 1 && <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                                            nextVideo(index)
                                        }}/>}

                                    </View>

                                    <View>
                                        <Text style={styles.difficultyText}>{video.name}</Text>
                                    </View>

                                    <View>
                                        <Text style={styles.difficultyText}>Repetitions : {video?.repetition}</Text>
                                    </View>

                                </View>
                            )
                        } else {
                            return (
                                <>
                                </>
                            )

                        }

                    })}

                    <Stopwatch
                        isStopwatchStart={isStopwatchStart}
                        resetStopwatch={resetStopwatch}
                        setIsStopwatchStart={setIsStopwatchStart}
                        setResetStopwatch={setResetStopwatch}
                    />

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
    },
    incoming: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});

export default Jour1Semaine2;
