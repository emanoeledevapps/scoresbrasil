import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Campeonato } from '../screens/Campeonato';
import { Tabela } from '../screens/Tabela';

export function AppRoutes(){
    const {Navigator, Screen} = createNativeStackNavigator();

    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='home' component={Home}/>
            <Screen name='campeonato' component={Campeonato}/>
            <Screen name='tabela' component={Tabela}/>
        </Navigator>
    )
}