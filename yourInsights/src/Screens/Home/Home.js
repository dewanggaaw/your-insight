import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Home() {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#06d19b',
          borderBottomLeftRadius: moderateScale(15),
          borderBottomRightRadius: moderateScale(15),
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Feather
            name="home"
            size={moderateScale(20)}
            style={{margin: moderateScale(10)}}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Fontisto
            name="person"
            size={moderateScale(20)}
            style={{margin: moderateScale(10)}}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignSelf: 'center',
          padding: moderateScale(50),
          paddingBottom: moderateScale(20),
          backgroundColor: '#98f5d6',
          borderRadius: moderateScale(20),
          marginTop: moderateScale(30),
        }}>
        <View
          style={{
            alignSelf: 'center',
            width: moderateScale(150),
            backgroundColor: 'whitesmoke',
            padding: moderateScale(30),
            borderRadius: moderateScale(10),
          }}>
          <Text>
            An arrow needs a strong bow, good rod, good feathers, and good
            point.
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Entypo
              name="chevron-small-down"
              size={moderateScale(20)}
              style={{margin: moderateScale(10)}}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="heart"
              size={moderateScale(20)}
              style={{margin: moderateScale(10)}}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
