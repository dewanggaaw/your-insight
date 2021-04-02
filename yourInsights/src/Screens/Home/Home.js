import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

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
            padding: moderateScale(20),
            borderRadius: moderateScale(10),
          }}>
          <TouchableOpacity>
            <Feather
              name="heart"
              size={moderateScale(20)}
              style={{
                marginLeft: moderateScale(78),
                marginBottom: moderateScale(10),
                marginTop: moderateScale(-10),
              }}
              color="gray"
            />
          </TouchableOpacity>
          <Text style={{alignSelf: 'center'}}>
            An arrow needs a strong bow, good rod, good feathers, and good
            point.
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Collapse>
            <CollapseHeader style={{alignSelf: 'center'}}>
              <Entypo
                name="chevron-small-down"
                size={moderateScale(20)}
                style={{margin: moderateScale(10)}}
                color="white"
              />
            </CollapseHeader>
            <CollapseBody
              style={{width: moderateScale(150), justifyContent: 'center'}}>
              <Text
                style={{
                  backgroundColor: 'whitesmoke',
                  padding: moderateScale(15),
                  borderRadius: moderateScale(10),
                }}>
                How far did you feel that you fall behind your friends,
                relatives, or even your siblings?
              </Text>
            </CollapseBody>
          </Collapse>
        </View>
      </View>
    </View>
  );
}
