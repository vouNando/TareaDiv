import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../navigator/StackNavigator'

interface Props extends StackScreenProps < RootStackParamList,'Bienvenidos'>{}

const Bienvenidos = ( {navigation} : Props) => {
  return (
    <View>
        <Text style= {style.text} >Bienvenido</Text>
        <Image style={style.imagen1} source={{uri:'https://iconecta.es/blog/wp-content/uploads/2019/12/2.jpg'}}  />
        <Button title='Division' onPress={() => navigation.navigate('Formulario')}/>

    </View>
  )
}

export default Bienvenidos

const style = StyleSheet .create ({
    
    imagen1:{
        width:300,
        height:300,
       marginVertical:50,
       alignSelf:'center',
       borderRadius:10
      
    },
    text:{
        fontSize:30,
        textAlign:'center',
        color:'#FFA447',
        marginTop:50
    },
   
    
})
