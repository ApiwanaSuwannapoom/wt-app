import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component{
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end'
              }}>
                  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 25 
    },
    backdrop: {width: '100%', height: '100%'},
  }); 
