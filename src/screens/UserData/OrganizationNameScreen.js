import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';

const OrganizationNameScreen = ({navigation}) => {
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
      navigation.navigate(RouteName.EMPLOYEE_DATA_SCREEN);
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
          <Text style={styles.label}>What's your business name?</Text>
          <TextInput
            placeholder="Enter your business name"
            placeholderTextColor={colors.placeholderColor}
            style={styles.input}
            value={name}
            onChangeText={handleNameChange}
          />
          {!isValid && (
            <Text style={styles.error}>Please enter a valid business name</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#2b2d42',
  },
  titleContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: colors.buttonBackground,
    padding: 20,
    borderRadius: 50,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 30,
    width: '100%',
  },
  label: {
    color: colors.text,
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.text,
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 50,
  },
  error: {
    color: colors.error,
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  nextButton: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  nextButtonText: {
    color: colors.text,
    fontSize: 18,
  },
});

export default OrganizationNameScreen;