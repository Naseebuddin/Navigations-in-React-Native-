import {StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  ButtonStyle: {
    width: moderateScale(100),
    height: verticalScale(40),
  },
  iconestyle: {
    width: 40,
    height: 40,
  },
  ViewStyling: {
    height: '100%',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'rgb(255,245,238)',
  },

  TextStyle: {
    fontSize: scale(26),
    fontWeight: 'bold',
    color: 'blcak',
    padding: moderateScale(10),
  },
  TextInputStyle: {},
  RegistorButtonStyle: {
    backgroundColor: 'rgb(230,230,250)',
    marginTop: moderateVerticalScale(30),
    borderWidth: 1,
    borderRadius: 8,
    width: moderateScale(200),
    alignItems: 'center',
  },
});
