import { createStackNavigator } from '@react-navigation/stack';
import Bienvenidos from '../screens/Bienvenidos';
import { Formulario } from '../screens/Formulario';

export type RootStackParamList = {
  Bienvenidos: undefined,
  Formulario: undefined,
}
const Stack = createStackNavigator< RootStackParamList>();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bienvenidos" component={Bienvenidos } />
      <Stack.Screen name="Formulario" component={Formulario } />
     
    </Stack.Navigator>
  );
}