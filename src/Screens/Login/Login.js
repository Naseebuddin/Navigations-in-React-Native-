import react, {useState} from 'react';
import {Image, Text, TouchableOpacity, View,Switch} from 'react-native';
import styles from './styles';
import TextComponen from '../../Component/TextInputComponen';
import navigationStrings from '../../Navigation/navigationStrings';
import en from '../../contants/lang/en';
import imagePath from '../../contants/imagePath';
import strings from '../../contants/lang';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';


export default function Login({navigation}) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setinputPassword] = useState('');

  const goToScreen = screeName => {

    let sendingData = {
      email: inputEmail,
      password: inputPassword
    }

    navigation.navigate(screeName, sendingData);
  };


  const changeLang = () =>{
    strings.setLanguage('hi')
  }

  return (
    <View style={{}}>


      <View style={{...styles.ViewStyling}}>
        <Text style={{...styles.TextStyle}}>{strings.LOGIN}</Text>
        <Image source={imagePath.icHome} />
        <Text>{strings.DONT_HAVE_AN_ACCOUNT}<Text
            style={{fontWeight: 'bold', fontSize: scale(18)}}
            onPress={() => navigation.goBack()}>
            {' '}
            {strings.SIGNUP}
          </Text>
        </Text>
        <TextComponen
          getTextInput={value => setInputEmail(value)}
          placeInput={strings.ENTER_YOUR_EMAIL}
          marginTopInPut={moderateVerticalScale(40)}
          keyBoardType={'email-address'}
        />
        <TextComponen
          placeInput={strings.ENTER_YOUR_PASSWORD}
          marginTopInPut={moderateVerticalScale(14)}
          textType={true}
          getTextInput={value => setinputPassword(value)}
        />


        <TouchableOpacity
          onPress={() => goToScreen(navigationStrings.LOGIN_SUCESS)}
          style={{...styles.RegistorButtonStyle}}>
          <Text style={{...styles.TextStyle}}>{strings.LOGIN}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={changeLang}
          style={{...styles.RegistorButtonStyle}}>
          <Text style={{...styles.TextStyle}}>{strings.CHANGE_LANGUAGE}</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
