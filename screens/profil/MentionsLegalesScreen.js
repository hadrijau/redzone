import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {WebView} from "react-native-webview";

const MentionsLegalesScreen = () => {
    const [url, setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Documents%2FCGV.pdf?alt=media&token=5f5f4306-8168-458b-901c-1115b3ae3006');
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

export default MentionsLegalesScreen;