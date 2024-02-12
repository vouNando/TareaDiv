import React, { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export const Formulario = () => {
  const [num1, setNum1] = useState<string>('0');
  const [num2, setNum2] = useState<string>('0');
  const [result, setResult] = useState<number | null>(null);

  const handleDivision = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (parsedNum2 !== 0) {
      setResult(parsedNum1 / parsedNum2);
    } else {
      Alert.alert('No puedes dividir por cero');
    }
  };
  return (
    <View>
    
    <Text>División de dos números</Text>
      <TextInput
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Ingrese el numerador"
      />
      <TextInput
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Ingrese el denominador"
      />
      <Button title="Dividir" onPress={handleDivision} />
      {result !== null && <Text>El resultado de la división es: {result}</Text>}
    </View>
  )
}
