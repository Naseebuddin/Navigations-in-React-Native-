import react from 'react';
import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import TextComponen from '../../Component/TextInputComponen';
import Login from '../Login/Login';
import styles from './styles';

export default function Home({navigation}) {
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
        <TextComponen placeInput="Enter your name " marginTopInPut={40} />
        <TextComponen placeInput="Enter Emial " marginTopInPut={14} keyBoardType={"email-address"} />
        <TextComponen placeInput="Password " marginTopInPut={14} textType={true}/>
        <TextComponen placeInput="Conforim Password " marginTopInPut={14} textType={true} />
        <TouchableOpacity
          onPress={() => navigation.navigate(Login)}
          style={{...styles.RegistorButtonStyle}}>
          <Text style={{...styles.TextStyle}}>Registor Now </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{...styles.RegistorButtonStyle, marginTop: 12}}>
          <Text style={{...styles.TextStyle}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
