import React from 'react';
// AUTH
import Login from '../../Auth/Login/Login';
import Register from '../../Auth/Register/Register';

// SCREENS
import Home from '../../Screens/Home/Home';
import Notes from '../../Screens/Notes/Notes';
import Profile from '../../Screens/Profile/Profile';
import Favorites from '../../Screens/Favorites/Favorites';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {moderateScale} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function AuthNav(props) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

// export function myReviewStack() {
//   return (
//     <Stack.Navigator initialRouteName="User Review">
//       <Stack.Screen name="User Review" component={UserReview} />
//       <Stack.Screen name="Reviews" component={Reviews} />
//     </Stack.Navigator>
//   );
// }

function bottomTab(props) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={moderateScale(20)} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="heart" size={moderateScale(20)} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons
              name="notebook"
              size={moderateScale(20)}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="person" size={moderateScale(20)} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Auth" headerMode="none">
      <Stack.Screen name="Main" component={bottomTab} />
      <Stack.Screen name="Auth" component={AuthNav} />
    </Stack.Navigator>
  );
}
