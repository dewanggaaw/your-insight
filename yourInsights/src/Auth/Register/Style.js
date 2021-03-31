import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const RegisterStyle = StyleSheet.create({
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
  outerView: {
    backgroundColor: 'whitesmoke',
    width: moderateScale(250),
    borderRadius: moderateScale(20),
    marginTop: moderateScale(50),
    padding: moderateScale(15),
    alignItems: 'center',
    alignSelf: 'center',
  },
  insideView: {
    backgroundColor: 'white',
    width: moderateScale(200),
    borderRadius: moderateScale(20),
    padding: moderateScale(15),
  },
  loginButton: {
    backgroundColor: '#35f2c0',
    padding: moderateScale(10),
    borderRadius: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
