// import Home from './screens/home';
// import About from './screens/about';
// //import Navigator from './routes/homeStack';
// import React, { useState } from 'react';
// import Navigator from './routes/drawer';
// //import Navigator from './routes/drawer';
// //import React, { useState } from 'react';
// import { AsyncStorage } from 'react-native';

// export default function App() {
	
	  
//   return (
//    // <Home/>
// <Navigator/>
// // getData()
//    );

// }



//////



import Home from './screens/home';
import Staff from './staff/staff';
import About from './screens/about';

import Principal from './principal/principal';
import {globalStyles} from './styles/global';
// import Navigator from './routes/homeStack';
import React, { useState, Component } from 'react';
import Navigator from './routes/drawer';
// import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createStackNavigator } from 'react-navigation'
//import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeArea, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry, TabBarIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AboutStack from './routes/aboutStack';
export default class App extends React.Component {

	pressHandler = () => {
		//navigation.navigate('ReviewDetails');
		const { navigate } = this.props.navigation;
		navigation.push('About');
	  }
	
		constructor(){
			super();
		//   global.SampleVar = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWtldGgiLCJyb2xlIjoiUk9MRV9hZG1pbiIsInNjaG9vbElkIjoyLCJleHAiOjE1OTM4NDI1OTUsImlhdCI6MTU5MTc2ODk5NX0.pB4PV7TG4Cr54xbpJkYMrMkbkHvd4y_Dm2_txt2iSPs"
		  global.jwtToken =  this.getData().then(value => global.token =value)
		// global.token = null	  
	}
		 getData = async () => {
			try {
			  const value = await AsyncStorage.getItem('jwtToken')
			  if(value !== null) {
				// console.log(value)
				console.log("getData in App is called " + value)
				return value
				// value previously stored
			  }
			  else{
				  console.log('value is null')
			  }
			} catch(e) {
			  // error reading value
			}
		  }
		render() {
			const { navigation } = this.props.navigation;

		return (	  
            // <Navigator/>
			<View style={globalStyles.container}>
				
			{(() => {
		if (global.token !== null) {
			return(
			<Home/>	
			);
				
			}
			  else {
				return (
					<About/>
				)
			  }
			})()}
			</View >
		);
		
	  }
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

		// const styles = StyleSheet.create({
		// 	container: {
		// 	  flex: 1,
		// 	  backgroundColor: '#003f5c',
		// 	  alignItems: 'center',
		// 	  justifyContent: 'center',
		// 	},
		// 	logo: {
		// 	  fontWeight: "bold",
		// 	  fontSize: 50,
		// 	  color: "#fff",
		// 	  marginBottom: 40
		// 	},
		// 	inputView: {
		// 	  width: "80%",
		// 	  backgroundColor: "#fff",
		// 	  borderRadius: 25,
		// 	  height: 50,
		// 	  marginBottom: 20,
		// 	  justifyContent: "center",
		// 	  padding: 20
		// 	},
		// 	inputText: {
		// 	  height: 50,
		// 	  color: "black"
		// 	},
		// 	forgot: {
		// 	  color: "white",
		// 	  fontSize: 11
		// 	},
		// 	loginBtn: {
		// 	  width: "80%",
		// 	  backgroundColor: "#fb5b5a",
		// 	  borderRadius: 25,
		// 	  height: 50,
		// 	  alignItems: "center",
		// 	  justifyContent: "center",
		// 	  marginTop: 40,
		// 	  marginBottom: 10
		// 	},
		// 	loginText: {
		// 	  color: "white"
		// 	}
		//   });

		///////////


		// import React from 'react';
		// import { View, StyleSheet } from 'react-native';
		// import {
		//   DrawerItem,
		//   DrawerContentScrollView,
		// } from '@react-navigation/drawer';
		// import {
		//   useTheme,
		//   Avatar,
		//   Title,
		//   Caption,
		//   Paragraph,
		//   Drawer,
		//   Text,
		//   TouchableRipple,
		//   Switch,
		// } from 'react-native-paper';
		// import { MaterialCommunityIcons } from '@expo/vector-icons';
		
		// export function DrawerContent(props) {
		//   return (
		// 	<DrawerContentScrollView {...props}>
		// 	  <View
		// 		style={
		// 		  styles.drawerContent,
		// 		}
		// 	  >
		// 		<View style={styles.userInfoSection}>
		// 		  <Avatar.Image
		// 			source={{
		// 			  uri:
		// 				'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
		// 			}}
		// 			size={50}
		// 		  />
		// 		  <Title style={styles.title}>Dawid Urbaniak</Title>
		// 		  <Caption style={styles.caption}>@trensik</Caption>
		// 		  <View style={styles.row}>
		// 			<View style={styles.section}>
		// 			  <Paragraph style={[styles.paragraph, styles.caption]}>
		// 				202
		// 			  </Paragraph>
		// 			  <Caption style={styles.caption}>Following</Caption>
		// 			</View>
		// 			<View style={styles.section}>
		// 			  <Paragraph style={[styles.paragraph, styles.caption]}>
		// 				159
		// 			  </Paragraph>
		// 			  <Caption style={styles.caption}>Followers</Caption>
		// 			</View>
		// 		  </View>
		// 		</View>
		// 		<Drawer.Section style={styles.drawerSection}>
		// 		  <DrawerItem
		// 			icon={({ color, size }) => (
		// 			  <MaterialCommunityIcons
		// 				name="account-outline"
		// 				color={color}
		// 				size={size}
		// 			  />
		// 			)}
		// 			label="Profile"
		// 			onPress={() => {}}
		// 		  />
		// 		  <DrawerItem
		// 			icon={({ color, size }) => (
		// 			  <MaterialCommunityIcons name="tune" color={color} size={size} />
		// 			)}
		// 			label="Preferences"
		// 			onPress={() => {}}
		// 		  />
		// 		  <DrawerItem
		// 			icon={({ color, size }) => (
		// 			  <MaterialCommunityIcons
		// 				name="bookmark-outline"
		// 				color={color}
		// 				size={size}
		// 			  />
		// 			)}
		// 			label="Bookmarks"
		// 			onPress={() => {}}
		// 		  />
		// 		</Drawer.Section>
		// 		<Drawer.Section title="Preferences">
		// 		  <TouchableRipple onPress={() => {}}>
		// 			<View style={styles.preference}>
		// 			  <Text>Dark Theme</Text>
		// 			  <View pointerEvents="none">
		// 				<Switch value={false} />
		// 			  </View>
		// 			</View>
		// 		  </TouchableRipple>
		// 		  <TouchableRipple onPress={() => {}}>
		// 			<View style={styles.preference}>
		// 			  <Text>RTL</Text>
		// 			  <View pointerEvents="none">
		// 				<Switch value={false} />
		// 			  </View>
		// 			</View>
		// 		  </TouchableRipple>
		// 		</Drawer.Section>
		// 	  </View>
		// 	</DrawerContentScrollView>
		//   );
		// }
		
		// const styles = StyleSheet.create({
		//   drawerContent: {
		// 	flex: 1,
		//   },
		//   userInfoSection: {
		// 	paddingLeft: 20,
		//   },
		//   title: {
		// 	marginTop: 20,
		// 	fontWeight: 'bold',
		//   },
		//   caption: {
		// 	fontSize: 14,
		// 	lineHeight: 14,
		//   },
		//   row: {
		// 	marginTop: 20,
		// 	flexDirection: 'row',
		// 	alignItems: 'center',
		//   },
		//   section: {
		// 	flexDirection: 'row',
		// 	alignItems: 'center',
		// 	marginRight: 15,
		//   },
		//   paragraph: {
		// 	fontWeight: 'bold',
		// 	marginRight: 3,
		//   },
		//   drawerSection: {
		// 	marginTop: 15,
		//   },
		//   preference: {
		// 	flexDirection: 'row',
		// 	justifyContent: 'space-between',
		// 	paddingVertical: 12,
		// 	paddingHorizontal: 16,
		//   },
		// });