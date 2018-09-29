import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.red}>{this.props.main}</Text>
            <Text style={styles.red}>{this.props.description}</Text>
            <Text style={styles.red}>{this.props.temp}</Text>
            <Text style={styles.red}>°C</Text>
               
              </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 25 ,
        paddingRight: 25 ,
        paddingLeft: 25,
   
    },
    red : {
        
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    backdrop: {width: '100%', height: '100%'},
  }); 
