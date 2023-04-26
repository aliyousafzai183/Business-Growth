import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {
    EmployeeData, ExpensesDataScreen, OrganizationNameScreen,
    ResultScreen, RevenueDataScreen, YourNameScreen

} from '../screens/UserData';
import SideNavigator from './SideNavigator';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={colorValue} >
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name={RouteName.SPLSH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={RouteName.GET_STARTED_SLIDER_SCREEN} component={GetstartedSliderscreen} />
                <Stack.Screen name={RouteName.ABOUT_SELF_SCREEN} component={AboutSelfScreen} />
                <Stack.Screen name={RouteName.AGE_SCREEN} component={AgeScreen} />
                <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
                <Stack.Screen name={RouteName.FORGOT_PASSWORD_SCREEN} component={ForgotPasswordScreen} />
                <Stack.Screen name={RouteName.SIGNUP_SCREEN} component={SignUpScreen} />
                <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVerifyScreen} />
                <Stack.Screen name={RouteName.WORKOUT_DETAIL_SCREEN} component={WorkoutDetailScreen} />
                <Stack.Screen name={RouteName.MAIN_HOME_SCREEN} component={SideNavigator} />

            </Stack.Navigator>
        </NavigationContainer >
    );
}
export default RootNavigator;