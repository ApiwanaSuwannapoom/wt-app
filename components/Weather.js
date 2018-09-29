import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Forecast from './Forecast';
export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    forecast: {
    main: '-', description: '-', temp: 0
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
        paddingRight: 25,
        paddingLeft: 25,
        
        
     },
     layout: {
      
        flexDirection:'row',
       
        justifyContent:'space-between',
        height: 300,  opacity: 0.4, 
        backgroundColor: 'black',
        
      
     },
    red : {
      
       
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        
    },
    backdrop: { width: '100%', 
    height: '100%',
  
   },
   });
   