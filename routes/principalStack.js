import Principal from '../principal/principal';
import Login from '../screens/login'
import React from 'react';
// import Home from '../screens/home';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import Details from '../principal/Details';
import AddTeacher from '../principal/addTeacher';
import MoneyGenerated from '../principal/moneyGenerated';
import MoneySpent from '../principal/moneySpent';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
//  Home: {
//   screen: Home,
//   navigationOptions: ({ navigation }) => {
//     return {
//       headerTitle: () => <Header title='Sample App' navigation={navigation} />
//     }
//   },
// },

Login: {
  screen: Login,
  navigationOptions: ({ navigation }) => {
    return {
     // title:'login',

    }
  },
  // navigationOptions:({ navigation })=>{}{
  //   title:'login',
  // },
},
    Principal: {
        screen: Principal,
        navigationOptions: ({ navigation }) => {
          return {
           // title:'login',
  
          }
        },
        // navigationOptions:({ navigation })=>{}{
        //   title:'login',
        // },
      },
    
    
  
      // AddTeacher:
      // {
      //     screen: AddTeacher,
      //     navigationOptions: {
      //       title: 'AddStaff',
      //       //headerStyle: { backgroundColor: '#eee' }
      //     }
      
      // },
      AddTeacher:
{
    screen: AddTeacher,
    // navigationOptions: {
    //   title: 'AddStaff',
    //   //headerStyle: { backgroundColor: '#eee' }
    // }
    navigationOptions: ({ navigation }) => {
      return {
       // title:'login',
       title: 'AddStaff',
      }
    },
},

Details:
{
    screen: Details,
    navigationOptions:({navigation})=> {
      return{
      title: 'Details',
      //headerStyle: { backgroundColor: '#eee' }
    }
  },
},
      MoneyGenerated:
      {
          screen: MoneyGenerated,
          navigationOptions: {
            title: 'Money Generated',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      MoneySpent:
      {
          screen: MoneySpent,
          navigationOptions: {
            title: 'MoneySpent',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
  }


const PrincipalStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default PrincipalStack;