import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/userData/EmployeeDataStyles';

const EmployeeData = ({ navigation }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleNumberOfEmployeesChange = (value) => {
    setNumberOfEmployees(value);
    setIsValid(value.length > 0);
  }

  const handleNextPress = () => {
    if (isValid) {
      navigation.replace(RouteName.REVENUE_DATA_SCREEN);
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

export default EmployeeData;