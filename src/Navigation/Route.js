
import Home from '../Screens/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../Screens/MainScreen/MainScreen';
import Login from '../Screens/Login/Login';
import LoginSuccess from '../Screens/LoginSuccess/LoginSuccess';
import navigationStrings from './navigationStrings';

export default function Route() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.MAIN_SCREEN} component={MainScreen} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
        
       
        <Stack.Screen name={navigationStrings.LOGIN_SUCESS}component={LoginSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
