import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from "firebase";
import {NavigationContainer} from "@react-navigation/native";
import {AuthNavigator} from "./navigation/AppNavigator";
import {TabNavigator} from "./navigation/AppNavigator";
import ReduxThunk from 'redux-thunk'
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import userReducer from "./store/reducers/users";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "i18next";
import * as en from './translations/en.json';
import * as fr from './translations/fr.json';
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const rootReducer = combineReducers({
    user: userReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  const [loaded, setIsLoaded] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);

  const resources = {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  };

  useEffect(() => {
    const launch = async () => {
      await AsyncStorage.setItem("lang", "fr");
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          setIsLoaded(true);
          setIsLoggedIn(false)
        } else {
          setIsLoaded(true);
          setIsLoggedIn(true)
        }
      })
      const lang = await AsyncStorage.getItem("lang");
      await i18n.use(initReactI18next).init({
        resources,
        //language to use if translations in user language are not available
        fallbackLng: lang,
        interpolation: {
          escapeValue: false, // not needed for react!!
        },
      });
    }
    launch()
  }, []);

  if (!loaded) {
    return <ActivityIndicator/>
  }

  return (
      <Provider store={store}>
        <NavigationContainer>
          {loggedIn ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
      </Provider>
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
