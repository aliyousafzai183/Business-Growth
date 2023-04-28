import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import styles from '../../styles/userData/YourNameScreenStyles';

const YourNameScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (text) => {
    setName(text);
    setIsValid(text.length > 2);
  }

  const handleNextPress = () => {
    if (name.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      navigation.replace(RouteName.ORGANIZATION_NAME_SCREEN);
    }
  }

  return (
    <LinearGradient colors={[colors.top, colors.center, colors.bottom]} style={styles.container}>

    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "none"}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Business Growth</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <AntDesign name="user" size={30} color={colors.text} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>What's your name?</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={colors.placeholderColor}
            style={styles.input}
            value={name}
            onChangeText={handleNameChange}
          />
          {!isValid && (
            <Text style={styles.error}>Please enter a valid name</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
    </LinearGradient>
  );
}

export default YourNameScreen;