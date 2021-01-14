import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Item, Input } from 'native-base';
import Swiper from 'react-native-swiper';

const Detail1 = ({ navigation }) => {

  return(

    
    <View >

        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden", left:5 }}>
          <View>
          <Image style={{marginTop:5, left:10, width: 100, height: 100}} source={require('../../assets/icon/ingot1.jpg')} />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Produk</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Aluminium Ingot
            </Text>
          </View>
        </View>

        <View style={{left:15, right:20, width:400}}>
            <Text style={{marginTop:10, left:10, color:"#f77f00"}}>Spesifikasi :</Text>
            <Text style={{marginTop:20}}>Aluminium Batangan (ingot) PT INALUM (Persero) memiliki berat per batangnya 22,7 kg dengan 2 (dua) jenis kualitas produk, yaitu 99,90% dan 99,70%. Aluminium Batangan PT INALUM (Persero) terdaftar pada London Metal Exchange (LME) tanggal 23 September 1987</Text>
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
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default Detail1;
