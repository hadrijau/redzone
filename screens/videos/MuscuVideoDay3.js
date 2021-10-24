import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const MuscuVideoDay3 = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [video0, setVideo0] = useState(true);
    const [video1, setVideo1] = useState(false);
    const [video2, setVideo2] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.inscriptionBigText}>Muscu Day 3</Text>

                {video0 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%203%2Fbicyclette%20abdominale.mp4?alt=media&token=756589b1-e470-4d09-9394-b62a49642ffe'}}
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

                    <View style={styles.playStatus}>
                        <AntDesign name="stepbackward" size={24} color="white"

                        />

                        <AntDesign name="stepforward" size={24} color="white" onPress={() => {
                            setVideo0(false)
                            setVideo1(true)
                        }}/>
                    </View>


                    <View>
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View> : <Text/>}

                {video1 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%203%2Ffente%20avant.mp4?alt=media&token=2a9097eb-b2fa-4594-b1e3-5786cae7215c'}}
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
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View> : <Text/>}


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

export default MuscuVideoDay3;
