import react from 'react';
import {Text, View} from 'react-native';
import Home from '../Screens/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../Screens/MainScreen/MainScreen';
import Login from '../Screens/Login/Login';
import LoginSuccess from '../Screens/SignUp/LoginSuccess';
export default function Route() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
