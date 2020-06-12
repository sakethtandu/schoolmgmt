import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import React from 'react';

export default function moneySpent({navigation}) {
    const pressHandler = () => {
        navigation.goBack();
      }
    console.log(navigation.getParam('title'));
  return (
    <View style={globalStyles.container}>
      <Text>Money Spent Screen</Text>
  {/* <Text>{navigation.getParam()}</Text> */}
      {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    </View>
  );
}
