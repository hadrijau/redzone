import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';


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

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.inscriptionBigText}>Muscu Day 2</Text>

                {video0 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2Fpistol%20squat%20jump.mp4?alt=media&token=e02c0a4b-b3f1-411d-ac6a-8cf7d4a0e047'}}
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
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2Fplanche%20claqu%C3%A9.mp4?alt=media&token=2e31adea-e150-4b6f-8979-d5a508afaa58'}}
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


                {video2 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2Fpompe%20sur%C3%A9lev%C3%A9.mp4?alt=media&token=14b15a03-96fd-4082-8b36-8f65c1aa822a'}}
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
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View> : <Text/>}


                {video3 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2Fpompe.mp4?alt=media&token=cd6c5e9b-b3dd-4f9c-ab7f-f835e7957153'}}
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
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View> : <Text/>}


                {video4 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2Frelev%C3%A9%20bassin%201%20jambe.mp4?alt=media&token=dd50f2d5-1ff2-42b6-a6c7-0baf8ce30a2d'}}
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
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View> : <Text/>}


                {video5 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2Frussian%20twist.mp4?alt=media&token=b9e849b4-21e1-4629-b742-a72f9a3275a7'}}
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
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View> : <Text/>}


                {video6 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2Fsquat%20bulgare.mp4?alt=media&token=0ea5cacd-8076-4aaa-b4bc-fc3bfe4ba375'}}
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
                        <Text style={styles.difficultyText}>Entrainements</Text>
                    </View>
                </View> : <Text/>}


                {video7 ?        <View style={styles.videoContainer}>
                    <View style={styles.imageContainer}>
                        <Video
                            ref={video}
                            style={styles.imageVideo}
                            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/musculation%20free%2FDays%202%2F%C3%A9levaton%20%C3%A9paule.mp4?alt=media&token=bb8bd8e5-ae28-41c8-9c5d-7a47572994e5'}}
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
                                       setVideo6(true)
                                       setVideo7(false)
                                   }}
                        />
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
