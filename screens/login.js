import React, { useState } from 'react';
import 'localstorage-polyfill';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry, TabBarIOS } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from 'react-navigation-stack';
// import { SecureStore } from 'expo';
import * as SecureStore from 'expo-secure-store';

export function Login({ navigation }, token) { }
export default class App extends React.Component {

  state = {
    email: '',
    otp: ""
  }
  fun() { <Text>{this.props.navigation.getParam('status')}</Text> }
  constructor(){

    super();
    
  // global.SampleVar = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWtldGgiLCJyb2xlIjoiUk9MRV9hZG1pbiIsInNjaG9vbElkIjoyLCJleHAiOjE1OTM4NDI1OTUsImlhdCI6MTU5MTc2ODk5NX0.pB4PV7TG4Cr54xbpJkYMrMkbkHvd4y_Dm2_txt2iSPs"
  
  global.SampleVar =  this.getData().then(value => global.token = value);
  
  // console.log(JSON.parse(global.SampleVar))

  }

   storeData = async (token) => {
    try {
      await AsyncStorage.setItem('jwtToken', token)
      console.log("storeData is called ")
    } catch (e) {
      // saving error
    }
  }
  
  
getData = async () => {
  try {
    const value = await AsyncStorage.getItem('jwtToken')
    if(value !== null) {
      console.log(value)
      console.log("getData in login is called ")
      return JSON.stringify(value)
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }

}

  jwtToken(token) {
    
    const setToken = async (token) => {
      await SecureStore.setItemAsync('secure_token', token);
    };

    const getToken = async () => {
      return await SecureStore.getItemAsync('secure_token');
    };

    setToken(token);
    getToken().then(token => console.log(token)); // output '#your_secret_token'
    return token
  }

  test(token) {
    // console.log(token)

    // var emailId = this.state.email
    // var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/user/test";
    // // var url2 = url.concat(emailId);
    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: "Bearer" + " " + token
    //   },
    //   // params: emailId,

    //   //Request Type 
    // })
    //   .then((response) => response.json())
    //   //If response is in json then in success
    //   .then((responseJson) => {

    //     alert(JSON.stringify(responseJson));
    //     var res = responseJson
    //     console.log(res)
    //     this.props.navigation.navigate('Home', res)

    //   })


    //   //If response is not in json then in error
    //   .catch((error) => {
    //     //Error 
    //     alert(JSON.stringify(error));
    //     console.error(error);
    //   });
    // Alert.alert('You are redirected to register page! Please Wait')

    // verifyOTP
  }
  getDataUsingPost() {

    var password = this.state.otp
    var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/verifyOTP";

    var user = this.props.navigation.getParam('userName')
    const requestBody = { userName: user, password: password }
    // console.log(requestBody)


    fetch(url, {
      // method: 'POST',
      method: "POST",//Request Type 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
      // },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        // alert(JSON.stringify(responseJson));
        // console.log(responseJson);
        var res = responseJson
        var token = res.data.jwString
        // console.log(typeof (res.data.jwString))
        if (res.status == 200) {
          this.setState = { isLoading: false, }

          // this.jwtToken(token)
          // this.test(token)
          this.storeData(token)
        //  this.getData()
          this.props.navigation.navigate('Principal', res)

        }
      })

  }

  render() {
    return (
      <View style={styles.container}>

        {(() => {
          if (this.props.navigation.getParam('status') == 200) {
            return (
              // this.fun()
              <View>
                <Text style={styles.logo}>Welcome</Text>
                {/* <Text>{ this.props.navigation.getParam('status') }</Text> */}
                <View style={styles.inputView} >
                  <TextInput
                    secureTextEntry
                    style={
                      { padding: 50, height: 500, }}
                    placeholder="Enter Otp"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({ otp: text })}
                    keyboardType={'numeric'}
                  />
                </View>
                <TouchableOpacity onPress={() => console.log("welcome")} style={{
                  width: "80%",
                  backgroundColor: "#fb5b5a",
                  borderRadius: 25,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 40,
                  marginBottom: 10
                }}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('SampleNav', text)} style={styles.loginBtn}> */}

                  <Text style={{ color: "white", padding: 80 }} onPress={() => { this.getDataUsingPost(); }}>LOGIN</Text>
                </TouchableOpacity>

              </View>
              //  <div>someCase</div>
            )
          }
          // else if (otherCase) {
          //   return (
          //     <div>otherCase</div>
          //   )
          // }
          else {
            return (
              <Text style={styles.logo1}> Improper mail or id </Text>
            )
          }
        })()}



      </View >
    );
  }
}
const styles = StyleSheet.create({
  ff: {
    backgroundColor: 'white',
  },
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
  logo1: {
    fontWeight: "bold",
    fontSize: 20,
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
    color: "black",
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