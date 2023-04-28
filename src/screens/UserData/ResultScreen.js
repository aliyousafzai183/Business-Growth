import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import RouteName from '../../routes/RouteName';
import styles from '../../styles/userData/ResultScreenStyles';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultScreen = ({ route, navigation }) => {
  const { isSuccess } = route.params;
  const { parent } = route.params;

  const handleButtonPress = () => {
    navigation.replace(RouteName.MAIN_HOME_SCREEN);
    handleOnboardingComplete();
  };

  const handleOnboardingComplete = async () => {
    try {
        await AsyncStorage.setItem('@app:onboarding', 'true');
        setShowOnboarding(false);
    } catch (error) {
        // Handle error
    }
};

  return (
    <LinearGradient colors={[colors.top, colors.center, colors.bottom]} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={isSuccess ? 'check-circle' : 'error'} size={150} color={isSuccess ? colors.top : colors.error} />
        </View>
        <Text style={[styles.title, { color: isSuccess ? colors.buttonBackground : colors.error }]}>{isSuccess ? 'Your business is running well!' : 'Your business is not running well.'}</Text>
        {parent
          ?
          <Text style={styles.subTitle}>{isSuccess ? 'Let`s improve your business more and more to increase revenue and decrease expenses' : 'Let`s try to recover your loss and increase you revenue'}</Text>
          :
          <Text style={styles.subTitle}>{isSuccess ? 'Good Job! Your business is doing well! Keep following our tips to grow your business more' : 'Don`t be sad. Try following our new tips to grow your business'}</Text>
        }
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={[styles.button, { backgroundColor: isSuccess ? colors.buttonBackground : colors.error }]} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>{parent? "Let's start" : 'Continue to app'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ResultScreen;