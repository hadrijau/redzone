import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Picker = ({options, changeModalVisibility, setData}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const choices = options;

    const onPressItem = (option) => {
        changeModalVisibility(false);
        setData(option)
    };

    const choice = choices.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return (
       <TouchableOpacity
            onPress={() => changeModalVisibility(false)}
            style={styles.container}
       >
            <View style={[styles.modal, {width: width/2, height: height/4}]}>
                <ScrollView>
                    {choice}
                </ScrollView>
            </View>
       </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    option: {
        alignItems: 'flex-start'
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default Picker;
