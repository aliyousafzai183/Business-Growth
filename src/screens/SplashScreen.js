import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import RouteName from '../routes/RouteName';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(RouteName.YOUR_NAME_SCREEN)
        }, 2100);
    }, []);
    
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SplashScreen!</Text>
    </View>
  );
}

export default SplashScreen;
