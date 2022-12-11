import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar />
    </>
  );
}
