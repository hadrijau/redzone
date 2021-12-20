import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from "../screens/auth/SignupScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import AbonnementScreen from "../screens/abonnement/AbonnementScreen";
import AccueilScreen from "../screens/accueil/AccueilScreen";
import MusculationScreen from "../screens/preparation_physique/MusculationScreen";
import DrillScreen from "../screens/drill/DrillScreen";
import RecettesScreen from "../screens/recettes/RecettesScreen";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { AntDesign } from '@expo/vector-icons';
import InformationsScreen from "../screens/auth/InformationsScreen";
import ViewVideoScreen from "../screens/drill/ViewVideoScreen";
import RecetteDetailScreen from "../screens/recettes/RecetteDetailScreen";
import NutritionSportiveScreen from "../screens/nutrition_sportive/NutritionSportiveScreen";
import EquipementSportifScreen from "../screens/equipement_sportif/EquipementSportifScreen";
import ProfileScreen from "../screens/profil/ProfileScreen";
import EntraineurPersonnelScreen from "../screens/entraineur_personnel/EntraineurPersonnelScreen";
import ProgressScreen from "../screens/progress/ProgressScreen";
import MuscuVideoDay1 from "../screens/preparation_physique/MuscuVideoDay1";
import MuscuVideoDay2 from "../screens/preparation_physique/MuscuVideoDay2";
import MuscuVideoDay3 from "../screens/preparation_physique/MuscuVideoDay3";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import CombineScreen from "../screens/progress/CombineScreen";
import ClubScreen from "../screens/club/ClubScreen";
import GererAbonnementScreen from "../screens/abonnement/GererAbonnementScreen";
import EquipementDetailScreen from "../screens/equipement_sportif/EquipementDetailScreen";
import ConfirmationProgressScreen from "../screens/progress/ConfirmationProgressScreen";
import PreparationPhysiqueScreen from "../screens/preparation_physique/PreparationPhysiqueScreen";
import Jour1Semaine1 from "../screens/preparation_physique/Jour1Semaine1";
import Jour2Semaine2 from "../screens/preparation_physique/Jour2Semaine2";
import Jour1Semaine2 from "../screens/preparation_physique/Jour1Semaine2";
import JourSelectionScreen from "../screens/preparation_physique/JourSelectionScreen";
import ChooseClubScreen from "../screens/club/ChooseClubScreen";
import ConfirmationClubScreen from "../screens/club/ConfirmationClubScreen";
import ChooseDaysScreen from "../screens/preparation_physique/ChooseDaysScreen";
import CalendrierScreen from "../screens/fffa/CalendrierScreen";
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

const CustomHeaderWithReturn = props => {
    return (
        <View style={{width: '100%', alignItems: 'center', paddingLeft: '5%', backgroundColor: 'black', display: 'flex', flexDirection: 'row'}}>
            <Feather name="arrow-left" size={24} color="white" onPress={() => props.handleNavigation()} style={{marginTop: 40}}/>
            <Image source={require('../assets/smallLogo.jpg')} style={{height: 50, width: '70%', marginTop: 50, marginRight: 20, marginLeft: 20}}/>
        </View>
    )
}

export const progressNavigator = () => {
    return (
        <ProgressStackNavigator.Navigator>
            <ProgressStackNavigator.Screen
                name="ProgressScreen"
                component={ProgressScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.goBack()}/>,
                }}
            />
            <ProgressStackNavigator.Screen
                name="ConfirmationProgressScreen"
                component={ConfirmationProgressScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <ProgressStackNavigator.Screen
                name="CombineScreen"
                component={CombineScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('ProgressScreen')}/>,
                }}
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
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
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
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <ProfileStackNavigator.Screen
                name='AccueilScreen'
                component={AccueilScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
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
                name="GererAbonnementScreen"
                component={GererAbonnementScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="RecettesScreen"
                component={RecettesScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="ConfirmationProgressScreen"
                component={ConfirmationProgressScreen}
                options={{
                    header: props => <CustomHeader title="BURNPOWER"/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="MusculationScreen"
                component={MusculationScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="CalendrierScreen"
                component={CalendrierScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="DrillScreen"
                component={DrillScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="ChooseDaysScreen"
                component={ChooseDaysScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('MusculationScreen')}/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="ViewVideoScreen"
                component={ViewVideoScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('DrillScreen')}/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="MuscuVideoDay1"
                component={MuscuVideoDay1}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('MusculationScreen')}/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="MuscuVideoDay2"
                component={MuscuVideoDay2}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('MusculationScreen')}/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="MuscuVideoDay3"
                component={MuscuVideoDay3}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('MusculationScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="RecetteDetailScreen"
                component={RecetteDetailScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('RecettesScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="PreparationPhysiqueScreen"
                component={PreparationPhysiqueScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('MusculationScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="Jour1Semaine1"
                component={Jour1Semaine1}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.goBack()}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="Jour1Semaine2"
                component={Jour1Semaine2}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.goBack()}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="Jour2Semaine1"
                component={Jour1Semaine1}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.goBack()}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="Jour2Semaine2"
                component={Jour2Semaine2}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.goBack()}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="JourSelectionScreen"
                component={JourSelectionScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('PreparationPhysiqueScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="NutritionSportiveScreen"
                component={NutritionSportiveScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="EquipementDetailScreen"
                component={EquipementDetailScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('EquipementSportifScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="EquipementSportifScreen"
                component={EquipementSportifScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="EntraineurPersonnelScreen"
                component={EntraineurPersonnelScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />

            <AccueilStackNavigator.Screen
                name="ProgressScreen"
                component={ProgressScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="ClubScreen"
                component={ClubScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('AccueilScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="ChooseClubScreen"
                component={ChooseClubScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('ClubScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="ConfirmationClubScreen"
                component={ConfirmationClubScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('ClubScreen')}/>,
                }}
            />
            <AccueilStackNavigator.Screen
                name="CombineScreen"
                component={CombineScreen}
                options={{
                    header: props => <CustomHeaderWithReturn title="BURNPOWER" handleNavigation={() => props.navigation.navigate('ProgressScreen')}/>,
                }}
            />
        </AccueilStackNavigator.Navigator>
        )
}

export const TabNavigator = () => {

    return (
        <AppTabNavigator.Navigator
            screenOptions={{
                "tabBarActiveTintColor": "white",
                "tabBarActiveBackgroundColor": "black",
                "tabBarInactiveBackgroundColor": "black",
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]
            }
            }
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
