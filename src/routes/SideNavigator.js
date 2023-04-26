import React from 'react';
import RouteName from './RouteName';
// import {
//   HomeScreen, CalculateScreen, QuoteScreen, SettingScreen, TipsScreen
// } from '../screens';
// screens
import HomeScreen from '../screens/HomeScreen';
import CalculateScreen from '../screens/CalculateScreen';
import QuoteScreen from '../screens/QuoteScreen';
import SettingScreen from '../screens/SettingScreen';
import TipsScreen from '../screens/TipsScreen';

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const SideNavigator = props => {
  return (
    <Drawer.Navigator screenOptions={{
      // headerShown: false,
      drawerStyle: {
        width: 240,
      }
    }} >
      <Drawer.Screen
        name={RouteName.HOME_SCREEN} component={HomeScreen}
      />
      <Drawer.Screen
        name={RouteName.QUOTE_SCREEN} component={QuoteScreen}
      />
      <Drawer.Screen
        name={RouteName.TIPS_SCREEN} component={TipsScreen}
      />
      <Drawer.Screen
        name={RouteName.CALCULATE_SCREEN} component={CalculateScreen}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN} component={SettingScreen}
      />
    </Drawer.Navigator>
  );
}
export default SideNavigator;