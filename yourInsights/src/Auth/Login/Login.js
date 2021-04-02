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
      <Text style={LoginStyle.your}>Your</Text>
      <Text style={LoginStyle.insight}>Insight</Text>
      <View>
        <View style={LoginStyle.outerView}>
          <View style={LoginStyle.insideView}>
            <TextInput
              placeholder="Your email"
              style={{borderBottomColor: 'gray', borderBottomWidth: 0.7}}
            />
            <TextInput
              placeholder="Your password"
              style={{borderBottomColor: 'gray', borderBottomWidth: 0.7}}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginTop: moderateScale(-35),
          }}>
          <View style={LoginStyle.loginButton}>
            <AntDesign
              name="arrowright"
              color="white"
              size={moderateScale(14)}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: moderateScale(30),
          alignSelf: 'center',
        }}>
        <Text style={{color: 'gray'}}>
          Not joined us yet? Get your daily inspiration{' '}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'gray',
              textDecorationLine: 'underline',
            }}>
            here
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{marginTop: moderateScale(135), alignSelf: 'center'}}>
        {'\u00A9'}Dewangga, 2021.
      </Text>
    </View>
  );
}
