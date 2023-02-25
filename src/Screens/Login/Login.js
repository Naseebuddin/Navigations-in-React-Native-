import react from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import TextComponen from '../../Component/TextInputComponen';
import LoginSuccess from '../SignUp/LoginSuccess';

export default function Login({navigation}) {
  return (
    <View style={{}}>
      <View style={{...styles.ViewStyling}}>
        <Text style={{...styles.TextStyle}}>Login</Text>
        <Text>
          Don't have an acount?
          <Text
            style={{fontWeight: 'bold', fontSize: 18}}
            onPress={() => navigation.goBack()}>
            {' '}
            SignUp
          </Text>
        </Text>
        <TextComponen
         placeInput="Enter yoour Emial" 
        marginTopInPut={40} 
        keyBoardType={"email-address"}
        />
        <TextComponen
          placeInput="Password "
          marginTopInPut={14}
          textType={true}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate(LoginSuccess)}
          style={{...styles.RegistorButtonStyle}}>
          <Text style={{...styles.TextStyle}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
