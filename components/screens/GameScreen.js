import React, {useState} from 'react';
import { 
  View, 
  Text, 
  Button, 
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from '../redux/myCoinSlice';

export 
const GameScreens = ({ navigation }) => {
  const [imageSource, setimageSource] = useState(require('../../assets/custom/egg-full.png'));
  var random = 0;
  const dispatch = useDispatch();

  const coinFloat = useSelector( (state) => state.MyCoins.value);
  const coin = Math.round(coinFloat * 100) / 100;
  
  const eggClick = () => {
    random = Math.floor(Math.random() * 3) + 1;
    switch(random){
      case 1:
        Alert.alert("Congratulations!!! You Won 20 coins!!!");
        dispatch(incrementByAmount(20));
        break;
      case 2:
        Alert.alert("Congratulations!!! You Won 50 coins!!!");
        dispatch(incrementByAmount(50));
        break;
      default:
        Alert.alert("Congratulations!!! You Won 100 coins!!!");
        dispatch(incrementByAmount(100));
        break;
    }
    setimageSource(require('../../assets/custom/egg-broken.png'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Text style={styles.coin}>${coin}</Text>
        <Text style={styles.coinT}>My Coins</Text>
      </View>
      <View style={styles.coinCont}>
        <Image style={styles.cImg} source={require('../../assets/custom/gold-coin.png')}/>
        <Text style={styles.cT}>100</Text>
        <Image style={styles.cImg} source={require('../../assets/custom/silver-coin.png')}/>
        <Text style={styles.cT}>50</Text>
        <Image style={styles.cImg} source={require('../../assets/custom/bronze-coin.png')}/>
        <Text style={styles.cT}>20</Text>
      </View>

      <View style={styles.gameContainer}>
        <Text style={styles.instruction}>Tap on the egg to get your price!</Text>
        <TouchableOpacity onPress={eggClick}>
          <Image style={styles.egg} source={imageSource} />
        </TouchableOpacity>
      </View>

      <Button title="Go back" onPress={() => navigation.goBack()} color="#6400FF"/>
      
    </View>
  );
};

export 
const GameScreensOptions = {
  headerStyle: {
    // backgroundColor: '#FF00FF',
  },
  title: 'Minigame',
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  coinCont: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
  },
  gameContainer:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    top: -140,
  },
  cImg: {
    width: 40,
    height: 40,
  },
  cT: {
    fontSize: 20,
  },
  instruction:{
    fontSize: 20,
    alignSelf: 'center',
  },
  egg:{
    alignSelf: 'center',
  },
  coinContainer: {
    width: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginBottom: 50,
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

})