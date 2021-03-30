import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const LoginStyle = StyleSheet.create({
  firstBubble: {
    backgroundColor: '#06d19b',
    width: moderateScale(230),
    height: moderateScale(230),
    borderRadius: 130,
    position: 'absolute',
    marginTop: moderateScale(-100),
    marginLeft: moderateScale(-40),
  },
});
