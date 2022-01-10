import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";
import firebase from "firebase";
import Stopwatch from "../../components/Stopwatch";
import i18next from "i18next";

const windowWidth = Dimensions.get('window').width;


const ViewVideoScreen = ({route}) => {

    let name;
    if (route.params) {
        name = route.params.name;
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.fetchUser());
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser)
    const videoRef = React.useRef(null);

    const [videoDrill, setVideoDrill] = useState([]);
    const length = videoDrill.length;
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

    useEffect(() => {
        let data = [];
        console.log('poste', userData.poste)
        const getDrillVideo = async () => {
            await firebase.firestore()
                .collection(`${name}`)
                .doc(`${userData.poste}`)
                .collection("ListeVideos")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log('data', doc.data())
                        data.push(doc.data())
                    });
                });
            setVideoDrill(data);
        }
        getDrillVideo()
    }, []);


    const [currentVideo, setCurrentVideo] = useState(0);

    const previousVideo = (index) => {
        setCurrentVideo(Math.max(0, index-1))
    }
    console.log("current", currentVideo)
    const nextVideo = (index) => {
        setCurrentVideo(Math.min(index + 1, length - 1));
    }

    if (videoDrill.length === 0) {
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

                    {videoDrill.map((video, index) => {
                        console.log('video', video)
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
                                        {video.serie != "4" && i18next.language === "en" ? <Text style={styles.difficultyText}>Series : {video.serieEn}</Text> :
                                            <Text style={styles.difficultyText}>Series : {video.serie}</Text>
                                        }
                                        {video.instruction ? <Text style={styles.difficultyText}>Instructions :  {i18next.language === "en" ? video.instructionEn : video.instruction}</Text> : <Text/> }
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
    },
    incoming: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});

export default ViewVideoScreen;
