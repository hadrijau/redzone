import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const ViewVideoScreen = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.inscriptionBigText}>Drill</Text>

                <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/roundpower-88ef9.appspot.com/o/FitPower%2FTuto%2011.mp4?alt=media&token=7305b523-0b31-4d3a-966c-05f39aaa8b7d'}}
                            useNativeControls
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                    </View>

                    {!status.isPlaying ?        <TouchableOpacity style={styles.playButton} onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }>
                        <AntDesign name="playcircleo" size={50} color="black" />
                    </TouchableOpacity> : <Text />}


                    <View>
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View>
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
    }
});

export default ViewVideoScreen;