import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
//import { AppRegistry, Image } from 'react-native'; //For images

export default class App extends React.Component {
  render() {
    
    let pic = {
      uri: 'https://www.nbcsports.com/bayarea/sites/csnbayarea/files/styles/article_hero_image/public/2018/07/02/web_warriors_sign_cousins.jpg?itok=25y4wgjs'
    };
    return (      
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/> 
        <View style={styles.container}> 
          <Text>Time for some ABG sauce!</Text>
        </View>
      </View>  
      
    );
  }
}

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
});

