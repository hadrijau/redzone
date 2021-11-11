import React from 'react';
import {View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity} from "react-native";
import {LineChart} from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width;

const ProgressScreen = (props) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
            <LineChart
                data={{
                    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
                    datasets: [{
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    }]
                }}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: 'black',
                    backgroundGradientFrom: 'black',
                    backgroundGradientTo: 'black',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

            <View style={styles.combineContainer}>
                <Text style={styles.combineText}>Combine</Text>
                <TouchableOpacity style={styles.seTester} onPress={() => props.navigation.navigate('CombineScreen')}>
                    <Text style={styles.seTesterText}>Se tester</Text>
                </TouchableOpacity>
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
    seTester: {
        borderColor: 'red',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginLeft: 15
    },
    combineText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    seTesterText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    combineContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    }
});

export default ProgressScreen;
