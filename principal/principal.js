import { StyleSheet, View, Text,Button,TouchableOpacity, FlatList  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {globalStyles} from '../styles/global';
import React,{useState} from 'react'; 
import Card from '../shared/card';
import Details from '../principal/Details'
export default function SampleNav({navigation}) {
  // getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('jwtToken')
  //     if(value !== null) {
  //       console.log(value)
  //       console.log("getData in principal is called ")
  //       return value
  //       // value previously stored
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }
  
  // }
  const j=   navigation.getParam('data').jwString;
// const j=7;
    const [menu, setMenu] = useState([
        { title: 'Add student',  key: '1' },
        { title: 'Add Staff', key: '2' },
        { title: 'Money Generated', key: '3' },
        { title: 'Money Spent', key: '4' },
      ]);
      
  //    const { userName, userRole } = params ? params: null;
  //const [ss, setSS]=useState([{navigation.getParam(data)}])
    const pressHandler = () => {
        navigation.goBack();
      }
     const fun=(item)=>
      {
        {(() => {
          if (item.title=='Add student') {
            return (
            
             navigation.navigate('Details',j)
            //  <div>someCase</div>
            )
           }
          else if (item.title=='Add Staff') {
            // this.getData()

            return (
              // <View><Text> {global.MyVar} </Text></View>
                            
           console.log(global.SampleVar),
              
              navigation.navigate('AddTeacher',j)
            )
           
          }
          else if (item.title=='Money Generated') {
            return (
              navigation.navigate('MoneyGenerated')
            )
          }
          else if (item.title=='Money Spent') {
            return (
              navigation.navigate('MoneySpent')
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

   
   // const { title, body } = params ? params: null;
    <View style={globalStyles.container}>
      
           <Text>
             {/* { navigation.getParam('name') } */}
             {/* itemId: {JSON.stringify(navigation.getParam('item', 'NO-ID'))} */}
             {/* {navigation.getParam('item')} */}
            {/* {userName} res.data.jwString*/}
            {/* {navigation.getParam('jwString')} */}
            {/* {navigation.getParam('data').getParam('jwString')} */}
            {/* {navigation.getParam('data').jwString}
            {navigation.getParam('data').userName} */}
            {/* {navigation.state.params} */}
           </Text>
    <FlatList data={menu} renderItem={({ item }) => (
      <TouchableOpacity onPress={() => fun(item)}>
        <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
          {/* <Text>{navigation.getParam('data') }</Text> */}
        </Card>
        <Text></Text>
      
      </TouchableOpacity>
    )} />
    {/* <View style={styles.bott}>
      <Button title='sample nav'
      // onPress={() => {console.log(navigation.getparam('jwString'))}} />
      onPress={() => {console.log('ki')}} />
      
      </View> */}
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