import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
//import Home from '../home/Home.js'
import Login from '../components/Login.js';
import Settings from '../components/Settings.js';


const Routes = () => (  
   
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
         //<Scene key = "settings" component = {Settings} title = "Settings" />
      </Scene>
      
   
);
export default Routes