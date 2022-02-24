import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {WebView} from "react-native-webview";

const CGUScreen = () => {
    const [url, setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Documents%2FCGU.pdf?alt=media&token=7c73f249-63a7-4ac2-82a4-3765d0a96aa1');
    const PdfReader = ({ url: uri }) => <WebView style={{ flex: 1 }} source={{ uri }} />
    return (
        <View style={styles.container}>
            {url && (
                <PdfReader
                    url={url}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CGUScreen;