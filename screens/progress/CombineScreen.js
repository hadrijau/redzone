import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback, Keyboard, SafeAreaView,
    TouchableOpacity
} from "react-native";
import {Video} from "expo-av";
import {Formik} from "formik";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import firebase from "firebase";

const windowWidth = Dimensions.get('window').width;


const CombineScreen = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const initialValues = {
        time1: '',
        time2: '',
        time3: '',
    }

    const saveData = async (value1, value2, value3) => {
        await firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .update({
                BroadJump: firebase.firestore.FieldValue.arrayUnion(value1),
                Yards: firebase.firestore.FieldValue.arrayUnion(value2),
                Shuttle: firebase.firestore.FieldValue.arrayUnion(value3)
            })
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
                        onSubmit={async (values) => {
                            await saveData(values.time1, values.time2, values.time3)
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

                                <TouchableOpacity style={styles.disconnectButton} onPress={() => props.handleSubmit()}>
                                    <Text style={styles.disconnectText}>Sauvegarder mes résultats</Text>
                                </TouchableOpacity>

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
    },
    disconnectButton: {
        backgroundColor: 'red',
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginTop: '5%',
        marginBottom: '15%',
        alignSelf: 'center'
    },
    disconnectText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
});

export default CombineScreen;
