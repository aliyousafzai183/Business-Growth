import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../themes/colors';
import RouteName from '../routes/RouteName';
import styles from '../styles/CalculateScreenStyles';

const CalculateScreen = ({ navigation }) => {
  const [revenue, setRevenue] = useState('');
  const [expenses, setExpenses] = useState('');

  const handlePress = () => {
    const revenueNum = parseInt(revenue);
    const expensesNum = parseInt(expenses);

    let result = false;
    if(revenueNum > expensesNum ){
      result = true;
    }

    if (!isNaN(revenueNum) && !isNaN(expensesNum)) {
      navigation.navigate(RouteName.RESULT_SCREEN, {
        isSuccess: result,
        parent : false
      });
    }
  };

  return (
    <LinearGradient colors={[colors.top, colors.center, colors.bottom]} style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Business Growth</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Monthly Revenue:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Revenue"
            keyboardType="numeric"
            placeholderTextColor={colors.center}
            value={revenue}
            onChangeText={(text) => setRevenue(text)}
            />
          <Text style={{ ...styles.inputLabel, marginTop: 20 }}>Monthly Expenses:</Text>
          <TextInput
            placeholderTextColor={colors.center}
            style={styles.textInput}
            placeholder="Expenses"
            keyboardType="numeric"
            value={expenses}
            onChangeText={(text) => setExpenses(text)}
          />
        </View>
          <TouchableOpacity style={styles.checkButton} onPress={handlePress}>
            <Text style={styles.checkButtonText}>Check Progress</Text>
          </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CalculateScreen;