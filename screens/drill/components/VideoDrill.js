import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Video} from "expo-av";
import {AntDesign} from "@expo/vector-icons";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const VideoDrill = ({name, video}) => {

    const videoRef = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.videoContainer}>
            <View style={styles.imageContainer}>
                <Video
                    ref={videoRef}
                    style={styles.imageVideo}
                    source={{uri: video}}
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
                <Text style={styles.difficultyText}>{name}</Text>
            </View>
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

export default VideoDrill;
