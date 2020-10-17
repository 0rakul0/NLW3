import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const {Screen, Navigator} = createStackNavigator();
import OrphanagesMap from './pages/OrphanagesMap'
import OrphanagesDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/CreateOphanage/OrphanageData';
import SelectMapPosition from './pages/CreateOphanage/SelectMapPosition';
import Header from './components/Header';



export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#f2f3f5'}}}>
                <Screen name="OrphanagesMap" component={OrphanagesMap}/>
                <Screen name="OrphanagesDetails" component={OrphanagesDetails} 
                options={{
                    headerShown: true,
                    header:()=><Header title="Orfanato"/>
                }}/>
                <Screen name="SelectMapPosition" component={SelectMapPosition}
                options={{
                    headerShown: true,
                    header:()=><Header showCancel={false} title="Selecione no mapa"/>
                }}/>
                <Screen name="OrphanagesData" component={OrphanageData}
                options={{
                    headerShown: true,
                    header:()=><Header title="Informe os dados"/>
                }}/>
            </Navigator>
        </NavigationContainer>
    )
}