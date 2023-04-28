import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import styles from '../../styles/userData/ExpensesDataStyles';

const ExpensesDataScreen = ({route, navigation}) => {
  const [expenses, setExpenses] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { isRevenue } = route.params;

  const isCompanyDoingWell = (revenue, expenses) => {
    if (Number(revenue) > Number(expenses)) {
      return true;
    } else {
      return false;
    }
  }

  const handleExpensesChange = (text) => {
    setExpenses(text);
    setIsValid(text.length > 0);
  }

  const handleNextPress = () => {
    const validExpenses = expenses.trim().length > 0;
    const isCompanyGood = isCompanyDoingWell(isRevenue, expenses);

    setIsValid(validExpenses);
    if(isValid){
      navigation.replace(RouteName.RESULT_SCREEN, { isSuccess: isCompanyGood, parent: true });
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
          <MaterialIcons name="attach-money" size={30} color={colors.text} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>What's your average monthly expenses?</Text>
          <TextInput
            placeholder="Enter your business expenses"
            placeholderTextColor={colors.placeholderColor}
            style={styles.input}
            value={expenses}
            onChangeText={handleExpensesChange}
            keyboardType='numeric'
          />
          {!isValid && (
            <Text style={styles.error}>Please provide a valid expenses</Text>
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

export default ExpensesDataScreen;