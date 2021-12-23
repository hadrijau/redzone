import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from "react-native";
import {LineChart} from 'react-native-chart-kit'
import firebase from "firebase";
import {useTranslation} from "react-i18next";

const screenWidth = Dimensions.get('window').width;

const ProgressScreen = (props) => {

    const [yards, setYards] = useState([]);
    const [broadJump, setBroadJump] = useState([]);
    const [shuttle, setShuttle] = useState([]);
    const [loading, setLoading] = useState(true);
    const { i18n, t } = useTranslation();
    useEffect(() => {
        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setYards(doc.data().Yards)
                    setBroadJump(doc.data().BroadJump)
                    setShuttle(doc.data().Shuttle)
                    setLoading(false)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    console.log(shuttle)

    if (!loading) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/bigLogo.jpg')} resizeMode="cover" style={styles.image}>
                    <ScrollView>
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
                                <Text style={styles.seTesterText}>{t("tester")}</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.testText}>40 Yards</Text>
                            <LineChart
                                data={{
                                    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
                                    datasets: [{
                                        data: yards
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
                        </View>

                        <View>
                            <Text style={styles.testText}>Broad Jump</Text>
                            <LineChart
                                data={{
                                    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
                                    datasets: [{
                                        data: broadJump
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
                        </View>

                        <View>
                            <Text style={styles.testText}>Shuttle</Text>
                            <LineChart
                                data={{
                                    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
                                    datasets: [{
                                        data: shuttle
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
                        </View>

                    </ScrollView>
                </ImageBackground>
            </View>
        )
    } else {
        return (
            <View>
                <ActivityIndicator/>
            </View>
        )
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
    },
    testText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    }
});

export default ProgressScreen;
