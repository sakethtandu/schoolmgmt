import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
//import R
import React from 'react';
import SampleNav from '../screens/sampleNav';
import Header from '../shared/header';
//import Home from '../screens/home';
//import ReviewDetails from '../screens/reviewDetails';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
  // Home: {
  //   screen: Home,
  //   navigationOptions: {
  //     title: 'sample',
  //     //headerStyle: { backgroundColor: '#eee' }
  //   }

  // },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Sample App' navigation={navigation} />
      }
    },
  },

//   ReviewDetails: {
//     screen: ReviewDetails,
//   },
SampleNav:
{
    screen: SampleNav,
    navigationOptions: {
      title: 'Details',
      //headerStyle: { backgroundColor: '#eee' }
    }

}
};


// home stack navigator screens
//const HomeStack = createStackNavigator(screens);
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;
//export default createAppContainer(HomeStack);
