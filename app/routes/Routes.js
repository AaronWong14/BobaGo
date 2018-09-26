import React from 'react';
import { Scene } from 'react-native-router-flux';
//import Home from '../home/Home.js'
import Router from 'Router.js';
import Login from '../components/Login.js';
import Settings from '../components/Settings.js';


const Routes = () => (  
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "settings" component = {Settings} title = "Settings" />
      </Scene>
  </Router>
      
   
);
export default Routes