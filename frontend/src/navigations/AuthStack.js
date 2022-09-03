import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import OnSplashScreen from '../screens/OnSplashScreen';
import MobileScreen from '../screens/MobileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import GenderScreen from '../screens/GenderScreen';
import InterestScreen from '../screens/InterestScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ContactScreen from '../screens/ContactScreen';
import { HomeStack } from './AppStack';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={OnSplashScreen}>
      <Stack.Screen name="OnSplashScreen" component={OnSplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="MobileScreen" component={MobileScreen} options={{ presentation: 'modal' }} />
      <Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="GenderScreen" component={GenderScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="InterestScreen" component={InterestScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="HomeScreen" component={HomeStack} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  )
}

export default AuthStack