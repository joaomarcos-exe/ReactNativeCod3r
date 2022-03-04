import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native'

//arquivos criados
import params from './src/params';
import Flag from './src/components/Flag';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import {
  createMinedBoard,
  clonedBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
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
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const board = clonedBoard(this.state.board)
    openField(board, row, column)
    const lost  = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeeu!', 'A vida é feita de derrotas playboy.')
    }

    if(won){
      Alert.alert('Parabés!', 'Agora tire uma printe e mostre para seus amigos que vc sabe jogar campo minado.')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = clonedBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won) {
      Alert.alert('Parabés!', 'Agora tire uma printe e mostre para seus amigos que vc sabe jogar campo minado.')
    }

    this.setState({board, won})
  }

  onLevelSelected = level =>{
    params.difficultLevel = level
    this.setState(this.createState)
  }

  render(){
    return(
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection} onLevelSelected={this.onLevelSelected} onCancel={() => this.setState({showLevelSelection:false})} />
        <Header flagLeft={this.minesAmount() - flagsUsed(this.state.board)}
        onNewGame={() => this.setState(this.createState())} onFlagPress={() =>this.setState({showLevelSelection: true})}/>
        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
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
