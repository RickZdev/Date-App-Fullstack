import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MatchTab from '../screens/MatchTab';
import MessageTab from '../screens/MessageTab';
import ProfileTab from '../screens/ProfileTab';
import BottomTab from './BottomTab';
import BottomSheetScreen from '../screens/BottomSheetScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={BottomTab}>
      <Stack.Screen name="HomeStack" component={BottomTab} />
      <Stack.Screen name="BottomSheetScreen" component={BottomSheetScreen} options={{ presentation: 'transparentModal' }} />
    </Stack.Navigator>
  )
}

const MatchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={MatchTab}>
      <Stack.Screen name="MatchStack" component={MatchTab} />
    </Stack.Navigator>
  )
}

const MessageStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={MessageTab}>
      <Stack.Screen name="MessageStack" component={MessageTab} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ProfileTab}>
      <Stack.Screen name="ProfileStack" component={ProfileTab} />
    </Stack.Navigator>
  )
}

export { HomeStack, MatchStack, MessageStack, ProfileStack }