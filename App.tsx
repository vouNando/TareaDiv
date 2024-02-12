import 'react-native-gesture-handler';
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';



const App = () => {
  return (
   <View>
      <NavigationContainer>
        <StackNavigator/>

      </NavigationContainer>

   </View>
  )
}

export default App
