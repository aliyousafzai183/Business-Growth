import React from 'react';
import { Text, View, Button } from 'react-native';

import RouteName from '../../routes/RouteName';

const YourNameScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>YourNameScreen!</Text>
      <Button title='Next' onPress={()=> navigation.navigate(RouteName.MAIN_HOME_SCREEN)}/>
    </View>
  );
}

export default YourNameScreen;
