import React from 'react';
import { Text, View, StyleSheet} from 'react-native'

//arquivos criados
import params from './src/params';
import Field from './src/components/Field';

export default () =>{
  return(
    <View style={style.container}>
      <Text>
        Started MineField
      </Text>
      <Text>Size: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

      <Field/>
      <Field opened/>
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={6}/>
      <Field mined/>
      <Field mined opened/>
      <Field mined opened exploded/>
      <Field flagged/>
      <Field flagged opened/>

      
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
})
