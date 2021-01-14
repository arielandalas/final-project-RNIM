import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Item, Input } from 'native-base';
import Swiper from 'react-native-swiper';


const Detail3 = ({ navigation }) => {
  return(

    
    <View >

        <View style={{flexDirection: 'row', alignSelf:'center', marginTop:10}}>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden", left:5 }}>
          <View>
          <Image style={{marginTop:5, width: 330, height: 100}} source={require('../../assets/icon/billet.jpg')} />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Produk</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Aluminium Billet
            </Text>
          </View>
        </View>
        </View>

        <View>
            <Text style={{marginTop:30, left:40, color:"#f77f00"}}>Spesifikasi :</Text>
            <Image style={{marginTop:20, alignSelf:'center', width: 330, height: 160}} source={require('../../assets/icon/detail_billet.png')} />
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



export default Detail3;
