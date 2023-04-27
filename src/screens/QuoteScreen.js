import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import colors from '../themes/colors';

const QuoteScreen = () => {
  const [quote, setQuote] = useState('');
  const [internet, setInternet] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setInternet(true);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      setInternet(false);
    }
  };

  const handleGetQuote = () => {
    fetchQuote();
  };

  return (
    <LinearGradient
      colors={[colors.top, colors.center, colors.bottom]}
      style={styles.container}
    >
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{
          internet
          ?
          quote
          :
          "No Internet! Try connecting to the internet to avail that service"
        }</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGetQuote}>
        <Text style={styles.buttonText}>{
          internet
          ?
          "Get a Quote"
          :
          "Retry"
        }</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  quoteContainer: {
    backgroundColor: colors.bottom,
    padding: 20,
    borderRadius: 10,
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    color: colors.buttonBackground
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.buttonBackground,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
});

export default QuoteScreen;
