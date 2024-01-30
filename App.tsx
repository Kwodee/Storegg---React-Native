import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen, HomeScreenOptions} from './components/screens/HomeScreen';
import {MyProductsScreen, MyProductsScreenOptions} from './components/screens/MyProductScreen';
import {GameScreens, GameScreensOptions} from './components/screens/GameScreen';
import {DetailsScreen, DetailsScreenOptions} from './components/screens/DetailsScreen';

import store from './components/redux/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

const App = () => {
  return (

       <Provider store={store}>
        
        <NavigationContainer>
          <Stack.Navigator>
  
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={HomeScreenOptions}
            />
            <Stack.Screen
              name="My_Products"
              component={MyProductsScreen}
              options={MyProductsScreenOptions}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={DetailsScreenOptions}
            />
            <Stack.Screen
              name="Game"
              component={GameScreens}
              options={GameScreensOptions}
            />
  
          </Stack.Navigator>
        </NavigationContainer>
  
      </Provider>

  );
};

export default App;
