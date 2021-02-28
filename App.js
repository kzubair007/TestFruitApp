/* eslint-disable */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './Screens/WelcomeScreen'
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator();

const App =()=>{
  return(

      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      )
}

export default App
