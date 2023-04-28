import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import RouteName from '../routes/RouteName';
import colors from '../themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/SplashScreenstyles';

const SecondSplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RouteName.MAIN_HOME_SCREEN);
    }, 2100);
  }, []);

  return (
    <LinearGradient colors={[colors.bottom, colors.center, colors.bottom]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../images/splashLogo.png')} style={styles.logo} />
      </View>
      <Text style={styles.text}>Business Growth</Text>
    </LinearGradient>
  );
};

export default SecondSplashScreen;
