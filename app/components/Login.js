import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


//we will import this variable called Login to routes.js
const Login = () => {
   const goToSettings = () => {
      Actions.settings()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToSettings}>
         <Text>This is LOGIN!</Text>
      </TouchableOpacity>     
      
   )
}
export default Login