import React from 'react';
import { 
  View, 
  Text, 
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import HomeProducts from './HomeProducts';

export 
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <View style={styles.productsContainer}>
        <HomeProducts navigation={navigation}  /> 
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Game')} style={styles.button}>
          {/* <Text style={styles.buttonText}>EGG GAME</Text> */}
          <Image
              style={styles.buttonImg}
              source={require('../../assets/custom/egg-full.png')}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export 
const HomeScreenOptions = ({ navigation }) => ({
    title: '',
    headerStyle: {
      backgroundColor: '#6400FF',
    },
    headerLeft: () => (
      <View style={{width: 350}}>
        <SearchBar
          containerStyle={{ marginTop: 10, marginBottom: 10 }}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={''}
        />

        <Button
          onPress={() => navigation.navigate('My_Products')}
          title="My Products >"
          color="#000"
          containerStyle={{ flex: 1 }}
        />
        
      </View>
    ),
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      // backgroundColor: '#61dafb',
    },
    productsContainer:{
      height: 550,
    },
    myProductsButton:{

    },
    buttonContainer:{
      flex: 1,
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
      margin: 16, 
    },
    button: {
      backgroundColor: 'white', 
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 8,
      width: 80,
      height: 80,
      elevation: 8,
    },
    buttonText: {
      // color: 'white',
      // fontSize: 18,
    },
    buttonImg: {
      backgroundColor: 'white', 
      margin: 10,
      padding: 10,
      borderRadius: 20,
      width: 40,
      height: 40,
    }
  });