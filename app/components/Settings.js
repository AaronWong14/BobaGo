import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'


//we will import this variable called Settings to routes.js
const Settings = () => {
   const goToAppJs = () => {
      Actions.login()
   } 
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAppJs}>
         <Text>This is SETTINGS</Text>
      </TouchableOpacity>
   )
}
export default Settings