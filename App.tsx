import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {View, Text} from 'react-native';
import BottomTab from './src/Navigation/BottomTab';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
export default App;
