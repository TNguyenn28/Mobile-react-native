import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notify from '../screens/Notify';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: ({focused}) => (
              <Icon name="home" size={30} color="black" />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="NotifyTab"
        component={Notify}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Notify'}
                </Text>
              );
            },
            tabBarIcon: () => <Icon name="bell-o" size={30} color="black" />,
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ChatTab"
        component={Chat}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Chat'}</Text>
              );
            },
            tabBarIcon: () => <Icon name="heart-o" size={30} color="black" />,
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="ProfileTab"
        component={Profile}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Profile'}
                </Text>
              );
            },
            tabBarIcon: () => <Icon name="user" size={30} color="black" />,
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
