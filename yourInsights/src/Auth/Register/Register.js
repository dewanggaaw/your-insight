import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import {RegisterStyle} from './Style';

export default function Register() {
  return (
    <View style={{backgroundColor: '#baf5e5', flex: 1}}>
      <View style={RegisterStyle.firstBubble} />
      <View style={RegisterStyle.secondBuble} />
      <Text
        style={{
          marginTop: moderateScale(200),
          fontSize: moderateScale(20),
          alignSelf: 'center',
          color: 'gray',
        }}>
        We are happy to welcome you~
      </Text>
      <View style={RegisterStyle.outerView}>
        <View style={RegisterStyle.insideView}>
          <TextInput
            placeholder="Your name"
            style={{borderBottomColor: 'gray', borderBottomWidth: 0.7}}
          />
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
          style={{position: 'absolute', marginTop: moderateScale(185)}}>
          <View style={RegisterStyle.loginButton}>
            <AntDesign
              name="arrowright"
              color="white"
              size={moderateScale(14)}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{marginTop: moderateScale(290), alignSelf: 'center'}}>
        {'\u00A9'}Dewangga, 2021.
      </Text>
    </View>
  );
}
