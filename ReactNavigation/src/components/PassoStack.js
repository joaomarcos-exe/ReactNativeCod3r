import React from "react";
import {View, Text, Button} from 'react-native'

export default props =>(
    <View style={{flex:1,}}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            {props.voltar ? 
                    <Button 
                        title='Voltar'
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                    : false
            }
            {props.avancar ? 
                <Button 
                title='Avançar'
                onPress={() => {
                    props.navigation.push(props.avancar,
                        {
                            numero: parseInt(Math.random() *100)
                        } )// se eu estiver na tela e quiser avaçar ele vaia para essa tela mesmo ja estando nela e podemos perceber pela animação
                    // props.navigation.navigate(props.avancar) se tiver na tela e tetar navegar para essa tela não acontece nada
                }}
                />
                : false
            }
            
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View>
    </View>
)