import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar, Text, View} from 'react-native';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return <RestaurantsScreen />;
}
