import Student from '../student/student';
import Login from '../screens/login';
import Assignments from '../student/assignments';
import Attendance from '../student/attendance';
import Complaints from '../student/complaints';
import Feedback from '../student/feedback';
import FeeDetails from '../student/feeDetails';
import Report from '../student/report';
import Subjects from '../student/subjects';
import Details from '../principal/Details';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
    Student: {
        screen: Student,
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
      Assignments:
      {
          screen: Assignments,
          navigationOptions: {
            title: 'Assignments',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      Feedback:
      {
          screen: Feedback,
          navigationOptions: {
            title: 'Feedback',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      FeeDetails:
      {
          screen: FeeDetails,
          navigationOptions: {
            title: 'Fee Details',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      Report:
      {
          screen: Report,
          navigationOptions: {
            title: 'Report',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
      Subjects:
      {
          screen: Subjects,
          navigationOptions: {
            title: 'Subjects',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
  }


const StudentStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default StudentStack;