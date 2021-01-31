import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import LoginScreen2 from './screens/LoginScreen2';
import LoginScreen3 from './screens/LoginScreen3';
import UserScreen from './screens/UserScreen';
import ChatScreen from './screens/ChatScreen';
import SplashScreen from './screens/SplashScreen';




import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//import firebase from 'firebase'
//import db from '../config';

export default function App() {
  return <ChatScreen />;
}
const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  LoginScreen2: { screen: LoginScreen2 },
  LoginScreen3: { screen: LoginScreen3 },
   UserScreen3: { screen: UserScreen },
});
const AppContainer = createAppContainer(switchNavigator);
