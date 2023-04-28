import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RouteName from '../../routes/RouteName';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import styles from '../../styles/userData/RevenueScreenStyle';

const RevenueDataScreen = ({route, navigation}) => {
  const [revenue, setRevenue] = useState('');
  const [isValid, setIsValid] = useState(true);


  const handleRevenueChange = (text) => {
    setRevenue(text);
    setIsValid(text.length > 0);
  }

  const handleNextPress = () => {
    if (revenue.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      navigation.replace(RouteName.EXPENSE_DATA_SCREEN, {isRevenue: revenue});
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
          <Text style={styles.label}>What's your average monthly revenue?</Text>
          <TextInput
            placeholder="Enter your business revenue"
            placeholderTextColor={colors.placeholderColor}
            style={styles.input}
            value={revenue}
            onChangeText={handleRevenueChange}
            keyboardType='numeric'
          />
          {!isValid && (
            <Text style={styles.error}>Please provide a valid revenue</Text>
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

export default RevenueDataScreen;