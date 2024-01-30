import React, {useState, useEffect} from 'react';
import { 
  View, 
  Text, 
  Button, 
  FlatList, 
  TouchableOpacity, 
  Dimensions, 
  StyleSheet ,
  Image
} from 'react-native';

import { useSelector } from 'react-redux'

import axios from 'axios';

export 
const MyProductsScreen = ({ navigation }) => {
  const myProducts = useSelector((state) => state.MyProducts.myPurchased) || [];

  // API axios components
  const [data, setData] = useState([]);
  const [columns] = useState(1);
  const [key] = useState(1);
  const SCREEN_WIDTH = Dimensions.get('window').width
  const ITEM_WIDTH = SCREEN_WIDTH / 2.5 // Initial width for 3 columns
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
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.gridItem}>

      <Image source={{uri: item.image}} 
        style={styles.itemImage2}/>
      <View>
        <Text style={styles.itemTitle} numberOfLines={4} ellipsizeMode="tail">{item.title}</Text>
      </View>

      </View>
    </TouchableOpacity>
  );

  const purchasedProducts = data.filter((product) => myProducts.includes(product.id));
  
  return (
    <View style={{ flex: 1, padding: 20}}>
      <Text style={styles.title}>My Products</Text>

      {purchasedProducts.length > 0 ? (
        <FlatList
          key={key}
          numColumns={columns}
          data={purchasedProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No purchased products yet.</Text>
      )}

      <Button title="Go back" onPress={() => navigation.goBack()} color="#6400FF"/>
    </View>
  );
}

export 
const MyProductsScreenOptions = ({
    headerStyle: {
        // backgroundColor: '#6400FF',
    },
    title: '',
})

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  gridItem: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 8,
  },
  itemTitle:{
    width: 140,
    marginBottom: 10,
  },
  itemPrice:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemImage2:{
    marginRight: 15,
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 8,
  },
})