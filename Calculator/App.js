import React, {Component} from "react";
import { Platfor, StyleSheet, Text, View, Dimensions } from "react-native";

import Button from "./src/components/Button";

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        
        <View style={styles.button}>
          <Button label='AC'/>
          <Button label='1/2'/>
          <Button label='%'/>
          <Button label='/'/>
          <Button label='7'/>
          <Button label='8'/>
          <Button label='9'/>
          <Button label='X'/>
          <Button label='4'/>
          <Button label='5'/>
          <Button label='6'/>
          <Button label='-'/>
          <Button label='1'/>
          <Button label='2'/>
          <Button label='3'/>
          <Button label='+'/>
          <Button label='0'/>
          <Button label=','/>
          <Button label='='/>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  button:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonZ:{
    fontSize: 40,
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  }
})