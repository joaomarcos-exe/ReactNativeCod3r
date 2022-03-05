import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName='TelaA'
        // screenOptions={{headerShown: false}} podemos esconder o header com o titulo
    >
        <Stack.Screen name='TelaA' 
        options={{title: 'Informações iniciais'}}// Podemos escolher o titulo do header
        >
            {props =>(
                <PassoStack {...props} avancar='TelaB'>
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name='TelaB'>
            {props =>(
                <PassoStack {...props} voltar avancar='TelaC'>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name='TelaC'>
            {props =>(
                <PassoStack {...props} voltar avancar='TelaC' >
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)
