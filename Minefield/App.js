import React, {Component} from 'react';
import { Text, View, StyleSheet} from 'react-native'

//arquivos criados
import params from './src/params';
import Flag from './src/components/Flag';
import MineField from './src/components/MineField';
import {
  createMinedBoard
} from './src/function'
import Mine from './src/components/Mine';


export default class App extends Component{

  constructor(props){
    super(props)
    this.state = this.createState()
  }
  minesAmount = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols*rows * params.difficultLevel)
  }

  createState = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return{
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <Text>
          Started MineField
        </Text>
        <Text>Size: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>
        
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  board:{
    alignItems:'center',
    backgroundColor:'#AAA'
  }
})
