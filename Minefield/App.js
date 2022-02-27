import React from 'react';
import { Text, View, StyleSheet} from 'react-native'

//arquivos criados
import params from './src/params';

export default () =>{
  return(
    <View style={style.container}>
      <Text>
        Started MineField
      </Text>
      <Text>Size: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0'
  }
})
