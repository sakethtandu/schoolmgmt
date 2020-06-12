import Staff from '../staff/staff';
import Attendance from '../staff/attendance';
import Classes from '../staff/classes';
import Courses from '../staff/courses';
import Complaints from '../staff/cpmplaints';
import salReport from '../staff/salReport';
import Login from '../screens/login'
import React from 'react';
import Details from '../principal/Details';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
    Staff: {
        screen: Staff,
        navigationOptions: ({ navigation }) => {
          return {
           // title:'login',
  
          }
        },
     
      },
      
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
          return {
           // title:'login',
  
          }
        },
     
      },
      Classes:
      {
          screen: Classes,
          navigationOptions:({ navigation }) =>  {
            return{
            title: 'Classes',
            //headerStyle: { backgroundColor: '#eee' }
          }}
      
      },
      Courses:
      {
          screen: Courses,
          navigationOptions: {
            title: 'Courses',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      Complaints:
      {
          screen: Complaints,
          navigationOptions: {
            title: 'Complaints',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      Attendance:
      {
          screen: Attendance,
          navigationOptions: {
            title: 'Attendance',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      salReport:
      {
          screen: salReport,
          navigationOptions: {
            title: 'Salary Report',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
    
  
  }


const StaffStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default StaffStack;