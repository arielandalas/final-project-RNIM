import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const Detail = ({navigation}) => {
  const [data, setData] = useState();

  useEffect(() => {
    firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const listProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(listProducts);
      });
  }, []);

  let deleteData = firestore().collection('products');

  const deleteProduct = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('Product purchased successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{alignSelf:'center', fontSize: 30, fontWeight:'bold', color:'#14213d', marginTop: 20, marginBottom: 20}}>Wishlist</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <View>
                  <Text> Product : {item.productName}</Text>
                  <Text> Quantity : {item.quantity}</Text>
                  <Text> Grade : {item.price}</Text>
                </View>
              </View>
              <Button style={{marginTop: 30}} onPress={() => deleteProduct(item.id)} title="Buy"></Button>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: '#2e2e2e',
    padding: 20,
  },
});

export default Detail;
