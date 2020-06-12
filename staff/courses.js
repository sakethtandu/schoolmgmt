import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import React from 'react';

export default function moneyGenerated({navigation}) {
    const pressHandler = () => {
        navigation.goBack();
      }
    
  return (
    <View style={globalStyles.container}>
      <Text>Courses Screen</Text>
      {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    </View>
  );
}
