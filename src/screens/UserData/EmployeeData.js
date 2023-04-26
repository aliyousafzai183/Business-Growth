import React from 'react';
import { Text, View, Button } from 'react-native';
import RouteName from '../../routes/RouteName';

const EmployeeData = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>EmployeeData!</Text>
      <Button title='Next' onPress={()=> navigation.navigate(RouteName.REVENUE_DATA_SCREEN)}/>
    </View>
  );
}

export default EmployeeData;
