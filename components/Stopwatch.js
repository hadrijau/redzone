import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

// importing library to use Stopwatch and Timer
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

const App = (props) => {

    const {isStopwatchStart, resetStopwatch, setIsStopwatchStart, setResetStopwatch} = props

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Entypo name="controller-play" size={45} color="red" style={styles.playIcon} onPress={() => setIsStopwatchStart(true)}/>
                    <Stopwatch
                        laps
                        msecs
                        start={isStopwatchStart}
                        // To start
                        reset={resetStopwatch}
                        // To reset
                        options={options}
                        // Options for the styling
                        getTime={(time) => {
                            console.log(time);
                        }}
                    />
                    <AntDesign name="pausecircleo" size={45} color="red" style={styles.pause} onPress={() => setIsStopwatchStart(false)}/>

                    {/* <TouchableHighlight
                        onPress={() => {
                            setIsStopwatchStart(!isStopwatchStart);
                            setResetStopwatch(false);
                        }}>

                        <Text style={styles.buttonText}>
                            {!isStopwatchStart ? 'START' : 'STOP'}
                        </Text>

                    </TouchableHighlight>
                    */}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pause: {
        marginLeft: 20
    },
    playIcon: {
        marginRight: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 20,
    },
    sectionStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: 20,
        marginTop: 10,
        color: 'white',
    },
});

const options = {
    container: {
        backgroundColor: '#FF0000',
        padding: 5,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: 7,
    },
};
