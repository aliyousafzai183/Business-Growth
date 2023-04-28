import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import colors from '../themes/colors';

// screens
import EmployeeData from '../screens/UserData/EmployeeData';
import ExpensesDataScreen from '../screens/UserData/ExpensesDataScreen';
import OrganizationNameScreen from '../screens/UserData/OrganizationNameScreen';
import ResultScreen from '../screens/UserData/ResultScreen';
import RevenueDataScreen from '../screens/UserData/RevenueDataScreen';
import YourNameScreen from '../screens/UserData/YourNameScreen';
import SplashScreen from '../screens/SplashScreen';
import TipDetailScreen from '../screens/TipDetailScreen';
import SecondSplashScreen from '../screens/SecondSplashScreen';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import SideNavigator from './SideNavigator';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    const [showOnboarding, setShowOnboarding] = useState(false);

    useEffect(() => {
        async function checkOnboardingStatus() {
            try {
                const value = await AsyncStorage.getItem('@app:onboarding');
                setShowOnboarding(value === null);
            } catch (error) {
                // Handle error
            }
        }
        checkOnboardingStatus();
    }, []);

    if (showOnboarding) {
        return (
            <NavigationContainer >
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: colors.top
                        },
                        headerTintColor: colors.text
                    }}
                >

                    <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} />
                    <Stack.Screen name={RouteName.YOUR_NAME_SCREEN} component={YourNameScreen} />
                    <Stack.Screen name={RouteName.ORGANIZATION_NAME_SCREEN} component={OrganizationNameScreen} />
                    <Stack.Screen name={RouteName.EMPLOYEE_DATA_SCREEN} component={EmployeeData} />
                    <Stack.Screen name={RouteName.REVENUE_DATA_SCREEN} component={RevenueDataScreen} />
                    <Stack.Screen name={RouteName.EXPENSE_DATA_SCREEN} component={ExpensesDataScreen} />
                    <Stack.Screen name={RouteName.RESULT_SCREEN} component={ResultScreen} />
                    <Stack.Screen name={RouteName.MAIN_HOME_SCREEN} component={SideNavigator} />
                    <Stack.Screen
                        name={RouteName.TIP_DETAIL_SCREEN}
                        component={TipDetailScreen}
                        options={{
                            headerShown: true,
                            title: 'Tip Description',
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer >
        );

    }

    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: colors.top
                    },
                    headerTintColor: colors.text
                }}
            >

                <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SecondSplashScreen} />
                <Stack.Screen name={RouteName.RESULT_SCREEN} component={ResultScreen} />
                <Stack.Screen name={RouteName.MAIN_HOME_SCREEN} component={SideNavigator} />
                <Stack.Screen
                    name={RouteName.TIP_DETAIL_SCREEN}
                    component={TipDetailScreen}
                    options={{
                        headerShown: true,
                        title: 'Tip Description',
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer >
    );


}
export default RootNavigator;