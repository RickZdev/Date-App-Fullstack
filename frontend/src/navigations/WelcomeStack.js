import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import GenderScreen from '../screens/GenderScreen';
import InterestScreen from '../screens/InterestScreen';
import ContactScreen from '../screens/ContactScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ProfileDetailsScreen}>
      <Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} options={{ presentation: 'modal' }} />
      <Stack.Screen name="GenderScreen" component={GenderScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="InterestScreen" component={InterestScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ presentation: 'transparentModal' }} />
    </Stack.Navigator>
  )
}

export { WelcomeStack }