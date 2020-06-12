import Home from './screens/home';
import About from './screens/about';
//import Navigator from './routes/homeStack';
import React, { useState } from 'react';
import Navigator from './routes/drawer';
//import Navigator from './routes/drawer';
//import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

export default function App() {
	
	// const getData = async () => {
	// 	try {
	// 	  const value = await AsyncStorage.getItem('jwtToken')
	// 	  if(value !== null) {
	// 		console.log(value)
	// 		console.log("getData is called ")
	// 		return value
	// 		// value previously stored
	// 	  }
	// 	} catch(e) {
	// 	  // error reading value
	// 	}
	  
	//   }
	  
  return (
   // <Home/>
<Navigator/>
// getData()
   );

}


