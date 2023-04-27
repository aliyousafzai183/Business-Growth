import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import RouteName from '../routes/RouteName';
import colors from '../themes/colors';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RouteName.YOUR_NAME_SCREEN);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    marginBottom: 50,
    fontSize: 24,
    color: colors.text,
  },
});

export default SplashScreen;
