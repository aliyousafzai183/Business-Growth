import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
// screens
import EmployeeData from '../screens/UserData/EmployeeData';
import ExpensesDataScreen from '../screens/UserData/ExpensesDataScreen';
import OrganizationNameScreen from '../screens/UserData/OrganizationNameScreen';
import ResultScreen from '../screens/UserData/ResultScreen';
import RevenueDataScreen from '../screens/UserData/RevenueDataScreen';
import YourNameScreen from '../screens/UserData/YourNameScreen';
import SplashScreen from '../screens/SplashScreen';

import SideNavigator from './SideNavigator';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name={RouteName.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={RouteName.YOUR_NAME_SCREEN} component={YourNameScreen} />
                <Stack.Screen name={RouteName.ORGANIZATION_NAME_SCREEN} component={OrganizationNameScreen} />
                <Stack.Screen name={RouteName.EMPLOYEE_DATA_SCREEN} component={EmployeeData} />
                <Stack.Screen name={RouteName.REVENUE_DATA_SCREEN} component={RevenueDataScreen} />
                <Stack.Screen name={RouteName.EXPENSE_DATA_SCREEN} component={ExpensesDataScreen} />
                <Stack.Screen name={RouteName.RESULT_SCREEN} component={ResultScreen} />
                <Stack.Screen name={RouteName.MAIN_HOME_SCREEN} component={SideNavigator} />

            </Stack.Navigator>
        </NavigationContainer >
    );
}
export default RootNavigator;