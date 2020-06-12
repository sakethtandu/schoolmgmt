// import { StyleSheet, View, Text,Button } from 'react-native';
// import {globalStyles} from '../styles/global';
// import React from 'react'; 

// export default function SampleNav({navigation}) {
//     const pressHandler = () => {
//         navigation.goBack();
//       }
    
//   return (
//     <View style={globalStyles.container}>
//       <Text>Student Screen</Text>
//       {/* <Button title='back to home screen' onPress={pressHandler} /> */}
//     </View>
//   );
// }
// import { StyleSheet, View, Text,Button } from 'react-native';


// import {globalStyles} from '../styles/global';
// import React from 'react'; 

// export default function SampleNav({navigation}) {
//     const pressHandler = () => {
//         navigation.goBack();
//       }
    
//   return (
//     <View style={globalStyles.container}>
//       <Text>Staff Screen</Text>
//       {/* <Button title='back to home screen' onPress={pressHandler} /> */}
//     </View>
//   );
// }
import { StyleSheet, View, Text,Button,TouchableOpacity, FlatList  } from 'react-native';

import {globalStyles} from '../styles/global';
import React,{useState} from 'react'; 
import Card from '../shared/card';

import Details from '../principal/Details'
export default function Student({navigation}) {
    const [menu, setMenu] = useState([
       
        { title: 'Attendance', key: '1' },
        { title: 'Report', key: '2' },
        { title: 'Assignments', key: '3' },
        { title: 'Complaints', key: '4' },
        { title: 'Fee Details', key: '5' },
        { title: 'Feedback', key: '6' },
        { title: 'Subjects', key: '7' },
      ]);
    
    const pressHandler = () => {
        navigation.goBack();
      }
     const fun=(item)=>
      {
        {(() => {
          if (item.title=='Subjects') {
            return (
           // console.log('classes')
            navigation.navigate('Subjects')
            //  <div>someCase</div>
            )
           }
         
          else if (item.title=='Complaints') {
            return (
              navigation.navigate('Complaints')
            )
          }
          else if (item.title=='Attendance') {
            return (
              navigation.navigate('Attendance')
            )
          }
          else if (item.title=='Report') {
            return (
              navigation.navigate('Report')
            )
          }
          else if (item.title=='Assignments') {
            return (
              navigation.navigate('Assignments')
            )
          }
          else if (item.title=='Fee Details') {
            return (
              navigation.navigate('FeeDetails')
            )
          }
          else if (item.title=='Feedback') {
            return (
              navigation.navigate('Feedback')
            )
          }
           else {
            return (
              //  <Text style={styles.logo1}> Improper mail or id </Text>
              console.log('other route')
            )
          }
        })()}
      }
    
  return (
    <View style={globalStyles.container}>
    <FlatList data={menu} renderItem={({ item }) => (
      <TouchableOpacity onPress={() => fun(item)}>
        <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </Card>
      </TouchableOpacity>
    )} />
    <View style={styles.bott}>
      <Button title='sample nav'
      onPress={() => navigation.navigate('Details')} />
      </View>
  </View>

    // <View style={globalStyles.container}>
    //   <Text>Principal Screen</Text>
    //   {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    // </View>
  );
}
const styles = StyleSheet.create({
    bott:
      {
        //flexDirection:
        // flexDirection: 'column',
        // justifyContent:'space-between',
        position: 'absolute',
        bottom:0,
        left:0,
      },
      input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      
      contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },
      footer: {
        height: 100
    }
    });