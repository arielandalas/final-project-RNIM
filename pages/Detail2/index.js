import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Item, Input } from 'native-base';
import Swiper from 'react-native-swiper';


const Detail2 = ({ navigation }) => {
  return(

    
    <View >

        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden", left:5 }}>
          <View>
          <Image style={{marginTop:5, left:10, width: 100, height: 100}} source={require('../../assets/icon/alloy.jpeg')} />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Produk</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Foundry Alloy
            </Text>
          </View>
        </View>

        <View>
            <Text style={{marginTop:10, left:10, color:"#f77f00"}}>Spesifikasi :</Text>
            <Image style={{alignContent:'center', marginTop:10, left:10, width: 300, height: 300}} source={require('../../assets/icon/spek-alloy2.png')} />
        </View>

        <Button style={{alignSelf:'center', marginTop: 70}} onPress={()=> navigation.push("Add")} >
                <Text>Tambah Ke Wishlist</Text>
            </Button>

    </View>  

      
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});



export default Detail2;
