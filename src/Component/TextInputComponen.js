import react, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function TextComponen({
  placeInput = '',
  marginTopInPut = '',
  textType = '',
  keyBoardType = '',
  getTextInput='',
})
{
  
  return (
    <View style={{}}>
      <TextInput
        style={{...styles.inputStyle}}
        placeholder={placeInput}
        marginTop={marginTopInPut}
        secureTextEntry={textType}
        keyboardType={keyBoardType}
        maxLength={20}
        onChangeText={getTextInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    padding: 10,
    height: 60,
    width: 290,
    borderWidth: 1,
    borderRadius: 8,
  },
});
