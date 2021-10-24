import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from "firebase";
import {NavigationContainer} from "@react-navigation/native";
import {AuthNavigator} from "./navigation/AppNavigator";
import {TabNavigator} from "./navigation/AppNavigator";

const firebaseConfig = {
  apiKey: "AIzaSyBmckJtSmZNsuU-200xoo3acPAB2VNrDCU",
  authDomain: "redzone-86a3f.firebaseapp.com",
  projectId: "redzone-86a3f",
  storageBucket: "redzone-86a3f.appspot.com",
  messagingSenderId: "432227406425",
  appId: "1:432227406425:web:f7ab6ef72d02e2e6e39748",
  measurementId: "G-ZDG6HF8DDL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  const [loaded, setIsLoaded] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setIsLoaded(true);
        setIsLoggedIn(false)
      } else {
        setIsLoaded(true);
        setIsLoggedIn(true)
      }
    })
  })

  if (!loaded) {
    return <ActivityIndicator/>
  }

  return (
        <NavigationContainer>
          {loggedIn ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
