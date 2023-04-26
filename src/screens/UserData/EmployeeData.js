import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import { Picker } from '@react-native-picker/picker';

const EmployeeData = ({ navigation }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleNumberOfEmployeesChange = (value) => {
    setNumberOfEmployees(value);
    setIsValid(value.length > 0);
  }

  const handleNextPress = () => {
    if (isValid) {
      navigation.navigate(RouteName.REVENUE_DATA_SCREEN);
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
            <Ionicons name="people-outline" size={30} color={colors.text} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>How many employees work at your business?</Text>
            <Picker
              style={styles.input}
              selectedValue={numberOfEmployees}
              onValueChange={handleNumberOfEmployeesChange}>
              <Picker.Item label="Select number of employees" value="" />
              <Picker.Item label="1-100" value="1-100" />
              <Picker.Item label="101-500" value="101-500" />
              <Picker.Item label="501-1000" value="501-1000" />
              <Picker.Item label="1001-5000" value="1001-5000" />
              <Picker.Item label="5001+" value="5001+" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.nextButton, !isValid && { opacity: 0.5 }]}
              disabled={!isValid}
              onPress={handleNextPress}>
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

export default EmployeeData;