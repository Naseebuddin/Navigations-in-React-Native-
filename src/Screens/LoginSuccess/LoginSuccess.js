import react from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import strings from '../../contants/lang';

export default function LoginSuccess({navigation, route}) {
  console.log('route values', route);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>{strings.ENTER_YOUR_EMAIL}</Text>

        {!!route?.params ? (
          <View>
            <Text>{!!route?.params ? route?.params?.email : ''}</Text>
            <Text>{!!route?.params ? route?.params?.password : ''}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}
