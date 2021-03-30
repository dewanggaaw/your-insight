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
  secondBuble: {
    backgroundColor: '#61edc8',
    width: moderateScale(300),
    height: moderateScale(300),
    borderRadius: 200,
    position: 'absolute',
    marginTop: moderateScale(-140),
    marginLeft: moderateScale(170),
  },
});
