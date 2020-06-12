//import About from '../screens/about';
import About from '../screens/about';
import React from 'react';
import Login from '../screens/login';
import Home from '../screens/home';
import Details from '../principal/Details';
//import AddTeacher from '../principal/addTeacher';
// import Principal from '../principal/principal';
import Principal from '../principal/principal'
import { createAppContainer } from 'react-navigation';
import AddTeacher from '../principal/addTeacher';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => {
        return { 
          // title:'home',
          headerTitle: () => <Header title='Sample App' navigation={navigation} />
        }
      },
      // navigationOptions:({ navigation })=>{}{
      //   title:'login',
      // },
    },
    
// Home: {
//   screen: Home,
//   navigationOptions: ({ navigation }) => {
//     return {
//       headerTitle: () => <Header title='Sample App' navigation={navigation} />
//     }
//   },
// },
Login:
{
    screen: Login,
    navigationOptions: {
      title: 'otp',
      //headerStyle: { backgroundColor: '#eee' }
    }

},
// AddTeacher:
// {
//     screen: AddTeacher,
//     navigationOptions: {
//       title: 'AddStaff',
//       //headerStyle: { backgroundColor: '#eee' }
//     }

// },
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
  }
// const screens = {
//   About: {
//     screen: About,
//     navigationOptions: {
//       title: 'About GameZone'
//     },
//   },
// }


const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default AboutStack;
/*import React from 'react';
import Header from '../shared/header';
import About from '../screens/about';
import { createStackNavigator } from 'react-navigation-stack';

  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {

      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />
      }
    },
  },
}
 */