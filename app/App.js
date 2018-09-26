// app/index.js

import React, { PureComponent, Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
//import { AppRegistry, Image } from 'react-native'; //For images ^^
import { Router, Scene } from 'react-native-router-flux'; //routing

//App Pages
import Login from './components/Login.js';
import Settings from './components/Settings.js';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Login"
          component={Login}
          title="Login"
          initial
        />
        <Scene
          key="settings"
          component={Settings}
          title="Settings"
        />
      </Scene>
    </Router>
  );
}

export default App;

// class App extends Component {  
// 
//   render() {    
//     // let pic = {
//     //   uri: 'https://www.nbcsports.com/bayarea/sites/csnbayarea/files/styles/article_hero_image/public/2018/07/02/web_warriors_sign_cousins.jpg?itok=25y4wgjs'
//     // };
//     return (   
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to the Demo!
//         </Text>
//       </View>   
//       // <View style={styles.container}>
//       //   <Text>Open up App.js to start working on your app!</Text>
//       //   <Image source={pic} style={{width: 193, height: 110}}/> 
//       //   <View style={styles.container}> 
//       //     <Text>Time for some ABG sauce!</Text>
//       //   </View>     
//       // </View>  
// 
//       //<Routes/> //Testing routing     
//     )
//   }
// }


// 
// export default App
// AppRegistry.registerComponent('App', () => App)


//name of file is App.js
// export default App
// AppRegistry.registerComponent('App', () ⇒ App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//works too

const header = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

