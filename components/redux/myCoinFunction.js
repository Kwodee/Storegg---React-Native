import React from 'react'
import { 
  View, 
  Text, 
  Button 
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './myCoinSlice'

export const Coin = ({ navigation }) => {
  const coin = useSelector((state) => state.MyCoins.value);
  const dispatch = useDispatch();

  return (
      <View>
        <Button
          title="dummy"
        />
        <Button
          title="Increment value"
          onPress={() => dispatch(increment())}
        />
        <Text>{coin}</Text>
        <Button
          title="BUY"
          onPress={() => dispatch(decrementByAmount())}
        />
      </View>
  );
}