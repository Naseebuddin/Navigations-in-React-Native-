import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Route from './src/Navigation/Route';
import MainScreen from './src/Screens/MainScreen/MainScreen';
import Login from './src/Screens/Login/Login';
import LoginSuccess from './src/Screens/LoginSuccess/LoginSuccess';
import Home from './src/Screens/Home/Home';
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(255,228,225)'}}>
      <View style={{flex: 1}}>
        <Route />
      </View>
    </SafeAreaView>
  );
}
