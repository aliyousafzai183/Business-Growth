import React, { useEffect } from 'react';
import { Text, View, Alert, BackHandler } from 'react-native';

const HomeScreen = ({ navigation }) => {

  useEffect(() => {
    // add event listener for back button press
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // remove event listener when component unmounts
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
}

export default HomeScreen;
