import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback, Keyboard, SafeAreaView
} from "react-native";
import {Video} from "expo-av";
import {Formik} from "formik";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const windowWidth = Dimensions.get('window').width;


const CombineScreen = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const initialValues = {
        time1: '',
        time2: '',
        time3: '',
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView
                style={styles.container}
            >
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {props => (
                            <View>
                                <Text style={styles.headTitle}>40 Yards</Text>
                                <View style={styles.imageContainer}>
                                    <Video
                                        ref={video}
                                        style={styles.imageVideo}
                                        source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Combine%2F40%20yards.mp4?alt=media&token=823e5b97-9355-42c8-afc0-6f8f2b7db463'}}
                                        useNativeControls
                                        resizeMode="contain"
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />

                                    <View style={styles.timeContainer}>
                                        <Text style={styles.time}>Time :</Text>
                                        <TextInput
                                            style={styles.textInput}
                                            onChangeText={props.handleChange('time1')}
                                            value={props.values.time1}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                </View>

                                <Text style={styles.headTitle}>Broad Jump</Text>
                                <View style={styles.imageContainer}>
                                    <Video
                                        ref={video}
                                        style={styles.imageVideo}
                                        source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Combine%2FBroad%20Jump.mp4?alt=media&token=6652de83-98ba-45f9-88dc-97c08ae524ab'}}
                                        useNativeControls
                                        resizeMode="contain"
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />

                                    <View style={styles.timeContainer}>
                                        <Text style={styles.time}>Time :</Text>
                                        <TextInput
                                            style={styles.textInput}
                                            onChangeText={props.handleChange('time2')}
                                            value={props.values.time2}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                </View>

                                <Text style={styles.headTitle}>Shuttle</Text>
                                <View style={styles.imageContainer}>
                                    <Video
                                        ref={video}
                                        style={styles.imageVideo}
                                        source={{uri: 'https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Combine%2FShuttle.mp4?alt=media&token=bcededbd-4498-4e4a-8104-dad466b2c254'}}
                                        useNativeControls
                                        resizeMode="contain"
                                        isLooping
                                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                                    />

                                    <View style={styles.timeContainer}>
                                        <Text style={styles.time}>Time :</Text>
                                        <TextInput
                                            style={styles.textInput}
                                            onChangeText={props.handleChange('time3')}
                                            value={props.values.time3}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                </View>
                            </View>
                        )}

                    </Formik>
                </ScrollView>
            </ImageBackground>
        </View>
    </KeyboardAwareScrollView>
   </TouchableWithoutFeedback>
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
    headTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20
    },
    imageContainer: {
        width: windowWidth,
        height: 200,
        position: 'relative',
        marginBottom: 50
    },
    imageVideo: {
        width: windowWidth,
        height: '100%'
    },
    time: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 5
    },
    textInput: {
        borderColor: 'red',
        borderWidth: 3,
        width: 100,
        height: 30,
        marginLeft: 10,
        backgroundColor: 'white'
    },
    timeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
    }
});

export default CombineScreen;
