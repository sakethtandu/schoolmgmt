import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from 'react-navigation-stack';
export function About() { }
export default class App extends React.Component {
  res;
  pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    const { navigate } = this.props.navigation;
    navigation.push('Login');
  }
  state = {
    email: '',
    otp: ""
  }

  getDataUsingGet() {
    var emailId = this.state.email
    var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/sendOTP?emailId=";
    var url2 = url.concat(emailId);
    fetch(url2, {
      method: 'GET',

      //Request Type 
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        
        var res = responseJson
        console.log(res)
        this.props.navigation.navigate('Login', res)

      })


      //If response is not in json then in error
      .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  
  setItemStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem('key', 'value');
    }
    catch (error){
  
    }
    }
  
  
  getItemStorage = async (key) => {
    try {
  await AsyncStorage.getItem('key');
  if (value !== null)
  {
    return value
  
    }
  }
  catch(err){
  
  }
  }
  
  saveStorage = () => 
  {
    this.setItemStorage("jwtToken" , "jdfhajdshgkjahfukhafhaaljfshdakshga")
  }
  
  readStorage = () => {
    this.getItemStorage("jwtToken").then(result => {
      alert("result"+ result)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Mobile Number"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })}
          // keyboardType={'numeric'}
          />

        </View>
        {/* <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Otp"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ otp: text })}
            keyboardType={'numeric'}
          />
        </View> */}
        {/* <TouchableOpacity onPress={() => this.getDataUsingGet()} style={styles.loginBtn}> */}
        <TouchableOpacity onPress={() => { this.getDataUsingGet() }} style={styles.loginBtn}>

          {/* <TouchableOpacity onPress={() => navigation.navigate('SampleNav', text)} style={styles.loginBtn}> */}
         <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => Alert.alert('You are redirected to register page! Please Wait')}>
          <Text style={styles.loginText}>Signup</Text>
          {/* <Icon
            name='heart'
            color='white'
            size={45}
            style={{ marginLeft: 40 }}
            onPress={this.handleClick}
          /> */}
        {/* </TouchableOpacity> * /} */}


      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});