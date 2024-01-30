import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  Image
} from 'react-native';
import axios from 'axios';

import { useSelector } from 'react-redux'

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 2.5; // Initial width for 3 columns

const HomeProducts = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState(2);
  const [key, setKey] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item, navigation)} >
      <View style={columns > 1 ? styles.listItem : styles.gridItem}>

        <Image source={{uri: item.image}} 
          style={columns > 1 ? styles.itemImage : styles.itemImage2}/>
        <View>
          <Text style={styles.itemTitle} numberOfLines={4} ellipsizeMode="tail">{item.title}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );

  const handleItemPress = (item, navigation) => {
    // Handle item press as needed
    navigation.navigate('Details', { selectedItem: item });
    console.log('Item pressed:', item);
  };

  const coinFloat = useSelector( (state) => state.MyCoins.value);
  const coin = Math.round(coinFloat * 100) / 100;

  const myProducts = useSelector((state) => state.MyProducts.myPurchased) || [];
  const unpurchasedProducts = data.filter( (product) => !(myProducts.includes(product.id)) );

  return (
    <View>
      <View style={styles.coinContainer}>
        <Text style={styles.coin}>${coin}</Text>
        <Text style={styles.coinT}>My Coins</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Available Products</Text>
        <TouchableOpacity
          onPress={() => {
            setColumns(columns === 2 ? 1 : 2);
            setKey(key + 1);
          }}
          style={styles.switchContainer}
          >
          {columns > 1 ? (
            <Image
              style={styles.switch}
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/rounded-basics/24/svg-rounded_list-512.png',
              }}
            />
          ) : (
            <Image
              style={styles.switch}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3941/3941250.png',
              }}
            />
          )}

        </TouchableOpacity>
      </View>

      {unpurchasedProducts.length > 0 ? (
        <FlatList
          key={key}
          numColumns={columns}
          data={unpurchasedProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No purchased products yet.</Text>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center',
    gap: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  coinContainer: {
    // position: 'absolute',
    // top: -40,
    // right: 0,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  coin: {
    color: '#6400FF', 
    fontWeight: 'bold', 
    fontSize: 20,
    marginRight: 5, 
  },
  coinT: {
    fontSize: 14,
    color: '#000', 
  },
  button: {
    backgroundColor: '#6400FF', 
    borderRadius: 20,
  },
  listItem: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    height: 300,
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    elevation: 8,
  },
  gridItem: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 8,
  },
  switchContainer:{
    alignItems: 'flex-end', 
  },
  switch: {
    backgroundColor: 'white', 
    margin: 10,
    padding: 10,
    borderRadius: 20,
    width: 50,
    height: 50,
  },
  itemTitle:{
    width: 140,
    marginBottom: 10,
  },
  itemPrice:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemImage:{
    marginBottom: 10,
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  itemImage2:{
    marginRight: 15,
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 8,
  },
});

export default HomeProducts;
