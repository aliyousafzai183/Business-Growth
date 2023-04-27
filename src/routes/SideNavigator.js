import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RouteName from './RouteName';
import HomeScreen from '../screens/HomeScreen';
import CalculateScreen from '../screens/CalculateScreen';
import QuoteScreen from '../screens/QuoteScreen';
import SettingScreen from '../screens/SettingScreen';
import TipsScreen from '../screens/TipsScreen';

// icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from '../themes/colors';

const Drawer = createDrawerNavigator();

const getIcon = (name) => {
  switch (name) {
    case RouteName.HOME_SCREEN:
      return <View style={{ width: '13%' }}>
        <Ionicons name='home' size={24} color={colors.text} />
      </View>;
    case RouteName.QUOTE_SCREEN:
      return <View style={{ width: '13%' }}><FontAwesome name='dollar' size={24} color={colors.text} /></View>;
    case RouteName.TIPS_SCREEN:
      return <View style={{ width: '13%' }}><FontAwesome name='lightbulb-o' size={24} color={colors.text} /></View>;
    case RouteName.CALCULATE_SCREEN:
      return <View style={{ width: '13%' }}><FontAwesome name='calculator' size={24} color={colors.text} /></View>;
    case RouteName.SETTING_SCREEN:
      return <View style={{ width: '13%' }}><Ionicons name='settings' size={24} color={colors.text} /></View>;
    default:
      return null;
  }
}

const getHeaderIcon = (name) => {
  switch (name) {
    case RouteName.HOME_SCREEN:
      return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Ionicons name='home' size={24} color={colors.text} />
        <Text style={{ fontSize: 18, marginLeft: 10, color: colors.text }}>Home</Text>
      </View>;
    case RouteName.QUOTE_SCREEN:
      return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <FontAwesome name='dollar' size={24} color={colors.text} />
        <Text style={{ fontSize: 18, marginLeft: 10, color: colors.text }}>Get a Quote</Text>
      </View>;
    case RouteName.TIPS_SCREEN:
      return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <FontAwesome name='lightbulb-o' size={24} color={colors.text} />
        <Text style={{ fontSize: 18, marginLeft: 10, color: colors.text }}>Tips and Advice</Text>
      </View>;
    case RouteName.CALCULATE_SCREEN:
      return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <FontAwesome name='calculator' size={24} color={colors.text} />
        <Text style={{ fontSize: 18, marginLeft: 10, color: colors.text }}>Progress Calculator</Text>
      </View>;
    case RouteName.SETTING_SCREEN:
      return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Ionicons name='settings' size={24} color={colors.text} />
        <Text style={{ fontSize: 18, marginLeft: 10, color: colors.text }}>Settings</Text>
      </View>;
    default:
      return null;
  }
}

const MyHeader = () => {
  const { openDrawer } = useNavigation();
  return (
    <TouchableOpacity onPress={() => openDrawer()}>
      <Ionicons name='menu' size={30} color={colors.text} />
    </TouchableOpacity>
  );
};

const SideNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 270,
        },
        headerStyle: {
          backgroundColor: colors.top,
        },
        drawerStyle: {
          backgroundColor: colors.center,
        },
        drawerInactiveTintColor: colors.text,
        drawerActiveBackgroundColor: colors.top,
        drawerActiveTintColor: colors.text,
        headerLeft: () => <MyHeader />,
      }}
    >
      <Drawer.Screen
        name={RouteName.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitleAlign: 'left',
          headerTitle: () => getHeaderIcon(RouteName.HOME_SCREEN),
          drawerIcon: ({ color, size }) => getIcon(RouteName.HOME_SCREEN),
        }}
      />
      <Drawer.Screen
        name={RouteName.QUOTE_SCREEN}
        component={QuoteScreen}
        options={{
          title: 'Get a Quote',
          headerTitle: () => getHeaderIcon(RouteName.QUOTE_SCREEN),
          drawerIcon: ({ color, size }) => getIcon(RouteName.QUOTE_SCREEN),
          headerTitleAlign: 'left'
        }}
      />
      <Drawer.Screen
        name={RouteName.TIPS_SCREEN}
        component={TipsScreen}
        options={{
          title: 'Tips and Advice',
          headerTitle: () => getHeaderIcon(RouteName.TIPS_SCREEN),
          drawerIcon: ({ color, size }) => getIcon(RouteName.TIPS_SCREEN),
        }}
      />
      <Drawer.Screen
        name={RouteName.CALCULATE_SCREEN}
        component={CalculateScreen}
        options={{
          title: 'Progress Calculator',
          headerTitle: () => getHeaderIcon(RouteName.CALCULATE_SCREEN),
          drawerIcon: ({ color, size }) => getIcon(RouteName.CALCULATE_SCREEN),
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          title: 'Settings',
          headerTitle: () => getHeaderIcon(RouteName.SETTING_SCREEN),
          drawerIcon: ({ color, size }) => getIcon(RouteName.SETTING_SCREEN),
        }}
      />
    </Drawer.Navigator>
  );
}
export default SideNavigator;