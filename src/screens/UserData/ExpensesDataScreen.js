import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';

const ExpensesDataScreen = ({navigation}) => {
  const [expenses, setExpenses] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleExpensesChange = (text) => {
    setExpenses(text);
    setIsValid(text.length > 0);
  }

  const handleNextPress = () => {
    if (expenses.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      navigation.navigate(RouteName.RESULT_SCREEN);
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

export default ExpensesDataScreen;