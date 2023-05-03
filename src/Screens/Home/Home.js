import react, {useState} from 'react';
import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import TextComponen from '../../Component/TextInputComponen';
import Login from '../Login/Login';
import styles from './styles';

export default function Home({navigation}) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  function containName(str) {
    return /\d/.test(str);
  }

  function containEmail(str) {
    return /\S+@\S+\.\S+/
  
  }

  function checkTextInput() {
    if (!inputName.trim()) {
      alert('Please enter your name');
      return;
    }
    if (containName(inputName)) {
      alert('Name only contain strings ');
      return;
    }
    if (!inputEmail.trim()) {
      
        alert('Please Enter Your Email');
        return;
    }
      if(containEmail(inputEmail))
      {
        alert('Emial only Enter')
        return;
      }
    alert('Success Registor' );
  }
  return (
    <View style={{}}>
      <View style={{...styles.ViewStyling}}>
        <Text style={{...styles.TextStyle}}>SignUp</Text>
        <Text>
          Already have acount?
          <Text
            style={{fontWeight: 'bold', fontSize: 18}}
            onPress={() => navigation.navigate(Login)}>
            Login
          </Text>
        </Text>
        <TextComponen
          placeInput="Enter your name "
          marginTopInPut={40}
          getTextInput={value => setInputName(value)}
        />
        <TextComponen
          getTextInput={value => setInputEmail(value)}
          placeInput="Enter Emial "
          marginTopInPut={14}
          keyBoardType={'email-address'}
        />
        <TextComponen
          placeInput="Password "
          marginTopInPut={14}
          textType={true}
        />
        <TextComponen
          placeInput="Conforim Password "
          marginTopInPut={14}
          textType={true}
        />
        <TouchableOpacity
          onPress={() => checkTextInput()}
          style={{...styles.RegistorButtonStyle}}>
          <Text style={{...styles.TextStyle}}>Registor Now </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => checkTextInput}
          onPress={() => navigation.navigate(Login)}
          style={{...styles.RegistorButtonStyle}}>
          <Text style={{...styles.TextStyle}}>Login Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{...styles.RegistorButtonStyle, marginTop: 12}}>
          <Text style={{...styles.TextStyle}}>Go Back</Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
    </View>
  );
}
