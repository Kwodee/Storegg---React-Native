import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  Image, 
  Dimensions, 
  Alert 
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux'
import { decrementByAmount } from '../redux/myCoinSlice';
import { addProduct } from '../redux/myProductsSlice';

export 
const DetailsScreen = ({ navigation }) => {
  const route = useRoute();
  //yes tidak perlu pakai parameter, this is where the magic happens
  const selectedItem = route.params?.selectedItem || null;

  const SCREEN_WIDTH = Dimensions.get('window').width/2;
  const SCREEN_HEIGHT = Dimensions.get('window').height/2.5;

  const coinFloat = useSelector( (state) => state.MyCoins.value);
  const coin = Math.round(coinFloat * 100) / 100;
  
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyCoins: {coin}</Text>
      <Text>- PRODUCT DETAIL -</Text>
      <Text>Title: {selectedItem.title}</Text>
      <Text>Price: {selectedItem.price}</Text>
      <Image
        source={{
          uri: selectedItem.image,
        }}
        style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}
      />
      <Button title="ADD TO CART" color="#6400FF" onPress={() => {
          dispatch(decrementByAmount(selectedItem.price)) 
          dispatch(addProduct(selectedItem.id)) 
          
          Alert.alert(  
            'Thank You',  
            'Product Purchased Successfuly!!',  
            [  
                {
                  text: 'OK', onPress: () => navigation.goBack()
                },  
            ]  
        );  
      }}
      
      />
      <Button title="Go back" onPress={() => navigation.goBack()} color="#6400FF"/>

    </View>
  );
};

export 
const DetailsScreenOptions = {
  headerStyle: {
    // backgroundColor: '#FF00FF',
  },
};
