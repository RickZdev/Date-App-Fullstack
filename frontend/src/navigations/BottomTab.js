import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeartIcon, ColorSwatchIcon, ChatIcon, UserIcon } from "react-native-heroicons/solid";

import { MatchStack, MessageStack, ProfileStack } from './AppStack'
import COLORS from '../global/COLORS'
import HomeTab from '../screens/HomeTab';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeTab}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.primary[1],
          borderTopColor: COLORS.gray,
          borderWidth: 2,
          height: 69,
          // display: 'flex',
          // justifyContent: 'flex-start',
          // alignItems: 'flex-start',
          // paddingTop: 5
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary[0],
        tabBarInactiveTintColor: COLORS.gray,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ColorSwatchIcon color={color} size={size} />
          ),
        }} />

      <Tab.Screen name="MatchTab" component={MatchStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HeartIcon color={color} size={size} />
          ),
        }} />

      <Tab.Screen name="MessageTab" component={MessageStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ChatIcon color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="ProfileTab" component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default BottomTab