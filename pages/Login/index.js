import React from 'react';
import { Image } from 'react-native';
import { View, Input, Item, Text, Button, H1 } from 'native-base';


import { LogoInalum } from '../../assets/icon';
import Session4 from '../Session4';

const Login = ({ navigation }) => {
  return(
    <View>
      <Image style={{marginTop:60, alignSelf:'center'}} source={LogoInalum} />
          <Item rounded style={{marginTop:30,  paddingLeft:60, marginHorizontal:32, left:15, right:15}}>
            <Input placeholder='Masukan Username Anda'/>
          </Item>
          <Item rounded style={{marginTop:30, paddingLeft:60,  marginHorizontal:32, left:15, right:15}}>
            <Input placeholder='Masukan Password Anda' secureTextEntry={true}/>
          </Item>
          <Button rounded block style={{marginTop:20,  marginHorizontal:22}}
          onPress={() => navigation.push("Session4")} >
                <Text>Masuk</Text>
                
            </Button>
        
    </View>
    
  )
}
export default Login;
