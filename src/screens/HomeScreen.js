import React, { useEffect, useState } from 'react';
import { Text, View, Alert, BackHandler, ScrollView, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import colors from '../themes/colors';
import RouteName from '../routes/RouteName';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const [quotes, setQuotes] = useState([]);
  const [internet, setInternet] = useState(false);

  useEffect(() => {
    // add event listener for back button press
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // remove event listener when component unmounts
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }

  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let lang = "en";
      axios.get(`https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=${lang}`)
        .then(response => {
          setQuotes([response.data]);
          setInternet(true);
        })
        .catch(error => {
          setInternet(false);
          ToastAndroid.show(error.message, ToastAndroid.SHORT);
        });

    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleBackPress = () => {
    Alert.alert(
      'Confirm Exit',
      'Are you sure you want to exit the app?',
      [
        { text: 'Cancel', onPress: () => false },
        { text: 'OK', onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  }

  return (
    <LinearGradient colors={[colors.top, colors.center, colors.bottom]} style={styles.container}>
      {internet && quotes.map((quote, index) => (
        <View style={styles.sliderContainer} key={index}>
          <TouchableOpacity style={styles.slide} onPress={() => navigation.navigate(RouteName.QUOTE_SCREEN)}
          >
            <MaterialCommunityIcons name="comment-quote-outline" size={30} color={colors.text} style={styles.quoteIcon} />
            <Text style={styles.quoteText}>{quote.quoteText}</Text>
            <Text style={styles.authorText}>- {quote.quoteAuthor}</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 0 })}
        style={styles.mainSectionContainer}
      >
        <Text style={styles.sectionTitle}>Expert Advice </Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.contentContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 1 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Leadership and Management </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 2 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Marketing and Sales</Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 3 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Productivity and Time Management </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 4 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Financial Planning and Budgeting </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 5 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Customer Service and Satisfaction </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 6 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>HR and Employee Relations </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 7 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Business Strategy and Planning </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 8 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Technology and Innovation </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 9 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Networking and Relationship Building </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.TIPS_SCREEN, { category: 10 })}
          style={styles.sectionContainer}
        >
          <Text style={styles.listTitle}>Personal Development and Growth </Text>
          <MaterialIcons name="navigate-next" size={30} color={colors.text} style={styles.quoteIcon} />
        </TouchableOpacity>

      </ScrollView>
    </LinearGradient>
  );
}

export default HomeScreen;