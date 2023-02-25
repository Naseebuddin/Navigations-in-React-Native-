import react from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function LoginSuccess({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>you login successfully</Text>
      </TouchableOpacity>
    </View>
  );
}
