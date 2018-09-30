import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    forecast: {
    main: 'main', description: 'description', temp: 0
    }
    }
    }
    render() {
        return (
        <View style={styles.container}>
        
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
        
        
        <View style={styles.layout }>
       
         <Text    style={styles.red } > Zip code is {this.props.zipCode}.</Text>
         <Forecast {...this.state.forecast} />
        </View>
        </ImageBackground>
       
      
       
      </View>

        );
        }
       }
   const styles = StyleSheet.create({
    container: { 
        paddingTop: 25, 
        
        
        
     },
     layout: {
      
        flexDirection:'column',
        alignItems: 'center',
       
        justifyContent:'space-between',
        height: 300,  opacity: 0.4, 
        backgroundColor: 'black',
        
      
     },
    red : {
      
        paddingTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        
    },
    backdrop: { width: '100%', 
    height: '100%',
  
   },
   });
   