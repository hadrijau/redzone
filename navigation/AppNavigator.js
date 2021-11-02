import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import AbonnementScreen from "../screens/auth/AbonnementScreen";
import AccueilScreen from "../screens/accueil/AccueilScreen";
import MusculationScreen from "../screens/preparation_physique/MusculationScreen";
import DrillScreen from "../screens/drill/DrillScreen";
import RecettesScreen from "../screens/recettes/RecettesScreen";
import { FontAwesome } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { AntDesign } from '@expo/vector-icons';
import InformationsScreen from "../screens/auth/InformationsScreen";
import ViewVideoScreen from "../screens/drill/ViewVideoScreen";
import RecetteDetailScreen from "../screens/recettes/RecetteDetailScreen";
import NutritionSportiveScreen from "../screens/nutrition_sportive/NutritionSportiveScreen";
import EquipementSportifScreen from "../screens/equipement_sportif/EquipementSportifScreen";
import ProfileScreen from "../screens/profil/ProfileScreen";
import EntraineurPersonnelScreen from "../screens/others/EntraineurPersonnelScreen";
import ProgressScreen from "../screens/progress/ProgressScreen";
import MuscuVideoDay1 from "../screens/preparation_physique/MuscuVideoDay1";
import MuscuVideoDay2 from "../screens/preparation_physique/MuscuVideoDay2";
import MuscuVideoDay3 from "../screens/preparation_physique/MuscuVideoDay3";
const AuthStackNavigator = createNativeStackNavigator();
const ProfileStackNavigator = createNativeStackNavigator();
const ProgressStackNavigator = createNativeStackNavigator();
const AccueilStackNavigator = createNativeStackNavigator();
const AppTabNavigator = createBottomTabNavigator();

const CustomHeader = props => {
    return (
        <View style={{width: '100%', alignItems: 'center', paddingLeft: '5%', backgroundColor: 'black'}}>
            <Image source={require('../assets/smallLogo.jpg')} style={{height: 70, width: '80%', marginTop: 50, alignSelf: 'center', marginRight: 20}}/>
        </View>
    )
}

export const progressNavigator = () => {
    return (
        <ProgressStackNavigator.Navigator>
            <ProgressStackNavigator.Screen
                name="ProgressScreen"
                component={ProgressScreen}
            />
        </ProgressStackNavigator.Navigator>
        )
}

export const AuthNavigator = () => {
    return (
    <AuthStackNavigator.Navigator>
        <AuthStackNavigator.Screen
            name="InformationsScreen"
            component={InformationsScreen}
            options={{
                header: props => <CustomHeader title="BURNPOWER"/>,
            }}
        />

        <AuthStackNavigator.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
                header: props => <CustomHeader title="BURNPOWER"/>,
            }}
        />

        <AuthStackNavigator.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
                header: props => <CustomHeader title="BURNPOWER"/>,
            }}
        />
        <AuthStackNavigator.Screen
            name="AbonnementsScreen"
            component={AbonnementScreen}
            options={{
                header: props => <CustomHeader title="BURNPOWER"/>,
            }}
        />

        <AuthStackNavigator.Screen
            name="AccueilScreen"
            component={AccueilScreen}
            options={{
                header: props => <CustomHeader title="BURNPOWER"/>,
            }}
        />

    </AuthStackNavigator.Navigator>
    )
}

const profileNavigator = () => {
    return (
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen
                name='ProfilScreen'
                component={ProfileScreen}
                options={{
                    headerShown: false
                }}
            />

        </ProfileStackNavigator.Navigator>
        )

}

const accueilNavigator = () => {
    return (
        <AccueilStackNavigator.Navigator>
            <AccueilStackNavigator.Screen
                name="AccueilScreen"
                component={AccueilScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="AbonnementScreen"
                component={AbonnementScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="RecettesScreen"
                component={RecettesScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="MusculationScreen"
                component={MusculationScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="DrillScreen"
                component={DrillScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="ViewVideoScreen"
                component={ViewVideoScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="MuscuVideoDay1"
                component={MuscuVideoDay1}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="MuscuVideoDay2"
                component={MuscuVideoDay2}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="MuscuVideoDay3"
                component={MuscuVideoDay3}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="RecetteDetailScreen"
                component={RecetteDetailScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="NutritionSportiveScreen"
                component={NutritionSportiveScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="EquipementSportifScreen"
                component={EquipementSportifScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="EntraineurPersonnelScreen"
                component={EntraineurPersonnelScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
        </AccueilStackNavigator.Navigator>
        )
}

export const TabNavigator = () => {

    return (
        <AppTabNavigator.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                activeBackgroundColor: 'black',
                inactiveBackgroundColor: 'black'
            }}
        >
            <AppTabNavigator.Screen
                name="Accueil"
                component={accueilNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="home" size={24} color="white" />
                    ),
                }}/>

            <AppTabNavigator.Screen
                name="Progrès"
                component={progressNavigator}
                options={{
                    tabBarLabel: 'Progrès',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="line-chart" size={24} color="white" />
                    ),
                }}
            />
            <AppTabNavigator.Screen
                name="Profil"
                component={profileNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="user" size={24} color="white" />
                    ),
                }}
            />
        </AppTabNavigator.Navigator>
    )
}
