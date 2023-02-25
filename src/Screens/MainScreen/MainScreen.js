import React from 'react';
import {Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import Home from '../Home/Home';
import styles from './styles';
import Login from '../Login/Login';

export default function ({navigation}) {
  return (
    <View style={styles.viewStyling}>
      <View>
        <Text style={{...styles.textStyle}}>Welcome </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{...styles.buttonStyling}}
          onPress={() => navigation.navigate(Home)}>
          <Image
            style={{...styles.imageStyling}}
            source={require('/Users/naseebuddinzakhil/Desktop/reactnative/newreact/Navigation/ReactNavi/ReactNavi/src/assets/icone/house.png')}
          />
          <Text style={{...styles.homeTextStyle}}>To Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.buttonStyling}}
          onPress={() => navigation.navigate(Login)}>
          <Image
            style={{...styles.imageStyling}}
            source={require('/Users/naseebuddinzakhil/Desktop/reactnative/newreact/Navigation/ReactNavi/ReactNavi/src/assets/icone/login.png')}
          />
          <Text style={{...styles.homeTextStyle}}>To Login</Text>
        </TouchableOpacity>
        <View style={{...styles}}>
          <Text style={{...styles.orTextStyle}}>_______ Or ________</Text>
         <View style={{...styles.socialMediaIconeStyelView}}>
         <Image style={{...styles.socialMediaIconeStyel}} source={require('/Users/naseebuddinzakhil/Desktop/reactnative/newreact/Navigation/ReactNavi/ReactNavi/src/assets/icone/twitter-sign.png')}/>
         <Image style={{...styles.socialMediaIconeStyel}} source={require('/Users/naseebuddinzakhil/Desktop/reactnative/newreact/Navigation/ReactNavi/ReactNavi/src/assets/icone/google-plus-logo-on-black-background.png')}/>
         <Image style={{...styles.socialMediaIconeStyel}} source={require('/Users/naseebuddinzakhil/Desktop/reactnative/newreact/Navigation/ReactNavi/ReactNavi/src/assets/icone/facebook.png')}/>
         <Image style={{...styles.socialMediaIconeStyel}} source={require('/Users/naseebuddinzakhil/Desktop/reactnative/newreact/Navigation/ReactNavi/ReactNavi/src/assets/icone/apple.png')}/>


         </View>
          

        </View>
      </View>
    </View>
  );
}
