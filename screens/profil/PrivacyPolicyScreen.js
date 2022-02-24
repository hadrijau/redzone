import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {WebView} from "react-native-webview";

const PrivacyPolicyScreen = () => {
    const [url, setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/redzone-86a3f.appspot.com/o/Documents%2FPolitique%20de%20confidentialit%C3%A9.pdf?alt=media&token=c07402c9-db6b-490e-8a62-042fbc80f649');
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

export default PrivacyPolicyScreen;