import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../themes/colors';
import RouteName from '../routes/RouteName';

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
          <Text style={styles.title}>Rehman Plaza</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Monthly Revenue:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Revenue"
            keyboardType="numeric"
            value={revenue}
            onChangeText={(text) => setRevenue(text)}
          />
          <Text style={{ ...styles.inputLabel, marginTop: 20 }}>Monthly Expenses:</Text>
          <TextInput
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center'
  },
  gradient: {
    flex: 1,
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    borderRadius: 10,
    alignItems:'center',
    backgroundColor:colors.center,
    padding:50,
    borderRadius:100
  },
  inputLabel: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
    color:colors.text
  },
  textInput: {
    backgroundColor: colors.text,
    padding: 10,
    borderRadius:30,
    textAlign:'center',
    color:colors.buttonBackground
  },
  checkButton: {
    backgroundColor: colors.top,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    width:'40%',
    alignSelf:'flex-end',
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30
  },
  checkButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight:'bold'
  },
});

