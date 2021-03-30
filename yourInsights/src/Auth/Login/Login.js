import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import {LoginStyle} from './Style';

export default function Login() {
  return (
    <View style={{backgroundColor: '#baf5e5', flex: 1}}>
      <View style={LoginStyle.firstBubble} />
      <View style={LoginStyle.secondBuble} />
      <Text
        style={{
          fontFamily: 'DancingScript-Bold',
          fontSize: moderateScale(50),
          marginTop: moderateScale(160),
          marginLeft: moderateScale(85),
          color: 'gray',
        }}>
        Your
      </Text>
      <Text
        style={{
          fontFamily: 'DancingScript-Bold',
          fontSize: moderateScale(50),
          marginLeft: moderateScale(145),
          marginTop: moderateScale(-15),
          color: 'gray',
        }}>
        Insight
      </Text>
      <View
        style={{
          backgroundColor: 'whitesmoke',
          width: moderateScale(250),
          borderRadius: moderateScale(20),
          margin: moderateScale(20),
          padding: moderateScale(15),
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: moderateScale(30),
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: moderateScale(200),
            borderRadius: moderateScale(20),
            padding: moderateScale(15),
          }}>
          <TextInput
            placeholder="Your email"
            style={{borderBottomColor: 'gray', borderBottomWidth: 0.7}}
          />
          <TextInput
            placeholder="Your password"
            style={{borderBottomColor: 'gray', borderBottomWidth: 0.7}}
          />
        </View>
        <TouchableOpacity
          style={{position: 'absolute', marginTop: moderateScale(135)}}>
          <View
            style={{
              backgroundColor: '#35f2c0',
              padding: moderateScale(10),
              borderRadius: moderateScale(50),
              // width: moderateScale(20),
              // height: moderateScale(20),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign
              name="arrowright"
              color="white"
              size={moderateScale(14)}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
