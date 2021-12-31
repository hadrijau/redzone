import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Video, AVPlaybackStatus} from "expo-av";
import { AntDesign } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import * as userActions from "../../store/actions/users";


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const ViewVideoScreen = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.fetchUser())
    }, [dispatch]);

    const userData = useSelector(state => state.user.currentUser)
    console.log(userData)
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [video0, setVideo0] = useState(true);
    const [video1, setVideo1] = useState(false);
    const [video2, setVideo2] = useState(false);
    const [video3, setVideo3] = useState(false);
    const [video4, setVideo4] = useState(false);
    const [video5, setVideo5] = useState(false);
    const [video6, setVideo6] = useState(false);

    if (userData) {
        if (userData.poste === 'Offensive Linemen') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20OL%2F20%20yds%20sideways%20travel.mp4?alt=media&token=2478d85c-e6e2-4204-93c4-60b3fb32321d'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20OL%2FBag%20jump.mp4?alt=media&token=5b9b082f-8f8e-46ea-adfa-7bb57d589dc2'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20OL%2FBlock%26Drive%20drill.mp4?alt=media&token=00d200ce-a035-453b-bd39-9f4e36eecd14'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20OL%2FKnee%20Rise%20drill.mp4?alt=media&token=2b343a67-9ff3-476a-a2b3-d2fae78885c8'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20OL%2FLateral%20displacement.mp4?alt=media&token=6be9ce63-816a-42fd-adb5-97881c344aa0'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20OL%2FOline%20separation.mp4?alt=media&token=a1728071-6bf9-493c-a0f2-34782d5fae53'}}
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
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Defensive Back') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DB%2FBack%20Directionel.mp4?alt=media&token=c53ff98b-879a-4ebb-b46b-80f582259714'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DB%2FDirectional%20Backwaerd%20Movement.mp4?alt=media&token=dd38f95f-7ac4-4496-978e-8e74c7a02ddb'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DB%2FLadder%20DB.mp4?alt=media&token=9a3e26b2-1072-4cdc-a99c-e160b39af2dd'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DB%2FW%20Drill.mp4?alt=media&token=0e2c65d5-f677-40be-a674-d01835daa6eb'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DB%2FX%20Drill.mp4?alt=media&token=38fc005d-1e7f-4b4d-aa3b-4f75cd02519c'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DB%2FY%20Drill.mp4?alt=media&token=1cb292dd-3eee-4159-ae7a-ac8ee01cd3bf'}}
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
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Defensive Linemen') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DL%2FAgility%20Mouv.mp4?alt=media&token=06e36556-c020-4ffe-8b22-bd8c0a99a7a0'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DL%2FEight%20drill.mp4?alt=media&token=bf7a1dca-56e9-4e19-8162-d6354c078da5'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DL%2FKnee%20Rise%20drill.mp4?alt=media&token=7c3b4eff-4788-47f0-8353-a451b5ac5d7b'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DL%2FPush%20in%20circles%20drill.mp4?alt=media&token=6a89b9e8-835c-4ab1-b88d-f89dd1237d69'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DL%2FSeparation%20circles.mp4?alt=media&token=23b0c54d-c4d9-4985-adcb-9e8e178f0340'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20DL%2Fdline%20separation.mp4?alt=media&token=3a24f839-3029-4b5c-b2b6-2b6a338ed39c'}}
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
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Linebacker') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20LB%20-%20SF%2FLateral%20Displacement.mp4?alt=media&token=a53c0577-85b6-4a4f-b925-aa96ca563234'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20LB%20-%20SF%2FLateral%20Ladder.mp4?alt=media&token=eb8c0454-fb02-4351-8f14-9e2eb5e8b673'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20LB%20-%20SF%2FMagic%20Square.mp4?alt=media&token=83171066-fc40-4ad4-9346-4d4592555321'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20LB%20-%20SF%2FMagic%20Triangle.mp4?alt=media&token=00b62208-2771-45ad-9a45-2231babc4f25'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20LB%20-%20SF%2FSide%20Knee%20Rise.mp4?alt=media&token=43ef0da2-d7cb-45aa-8e29-09ca4a1f9753'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20LB%20-%20SF%2FW%20Drill.mp4?alt=media&token=e763b9c8-f5b3-435c-932f-de6a718d8392'}}
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
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Quaterback') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20QB%2F10%20Yards%20QB.mp4?alt=media&token=67ff0cc5-24a6-4a70-ac02-1bc89d9b66e9'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20QB%2FL%20Drill%20QB.mp4?alt=media&token=0401aedd-d292-49e9-a6fd-f2e63cd8dba7'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20QB%2FLateral%20Displacement%20QB.mp4?alt=media&token=e126e265-f91e-40f5-9645-5c612bd7f568'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20QB%2FSquare%20Drill.mp4?alt=media&token=69563cc7-7929-4361-ac95-f2d19ded758c'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20QB%2FW%20Drill.mp4?alt=media&token=cf0e35fd-20b4-49e9-9fb0-9eaf6a912419'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20QB%2FX%20Drill.mp4?alt=media&token=d9a82192-05bf-478a-82d0-5a062ca39620'}}
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
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Running back') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20RB%2FBalance%20Drill.mp4?alt=media&token=2387a2ca-c0da-4552-bbe8-3f229d1e2c6e'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20RB%2FLateral%20Displacement.mp4?alt=media&token=6738112d-f6a8-4ca4-a203-f65f7249865f'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20RB%2FLateral%20Knee%20Lift%20RB.mp4?alt=media&token=0c703069-bd77-4243-8d08-6a6c2a352255'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20RB%2FLateral%20Sprint.mp4?alt=media&token=b6a19d8a-77a4-492b-8c1f-8eff28b1d4e7'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20RB%2FSewing%20machine%20drill.mp4?alt=media&token=6a5e5fa7-1130-4d51-a839-32f9d2792328   '}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20RB%2FTurn%20on%20Yourseld%20Drill.mp4?alt=media&token=d08ddae4-fbf0-48b5-9afe-a7c08a3108d7'}}
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
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
        if (userData.poste === 'Wide receiver') {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>


                        {video0 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20WR%2FBreak%20drill.mp4?alt=media&token=89b24eaf-8d9e-4fea-8a3e-ad489e17eb6c'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video1 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20WR%2FDrill%20echelle.mp4?alt=media&token=2dc8286d-4c37-45e7-8fd3-0088d36e4c7e'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video2 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20WR%2FI%20%26%20Fade%20drill.mp4?alt=media&token=aae487ed-1611-40a0-a384-05f5e2b8f0f4'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video3 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20WR%2FSewing%20machine%20drill.mp4?alt=media&token=79751a93-d2c1-4815-b3c5-4375b11c29b8'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video4 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20WR%2FT%20Drill.mp4?alt=media&token=f3b64c57-380b-4d03-a18e-83172bf084a7'}}
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
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}


                        {video5 ?        <View style={styles.videoContainer}>
                            <View style={styles.imageContainer}>
                                <Video
                                    ref={video}
                                    style={styles.imageVideo}
                                    source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Drill%2FDrill%20WR%2FW%20Break%20Drill.mp4?alt=media&token=d5fba535-172b-41f1-b995-047d83e0e913'}}
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
                            </View>


                            <View>
                                <Text style={styles.difficultyText}>Entrainements</Text>
                            </View>
                        </View> : <Text/>}

                    </ImageBackground>
                </View>
            )
        }
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
    }
});

export default ViewVideoScreen;
