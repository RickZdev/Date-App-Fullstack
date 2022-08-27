import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import OnSplashScreen from '../screens/OnSplashScreen';
import MobileScreen from '../screens/MobileScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={OnSplashScreen}>
      <Stack.Screen name="OnSplashScreen" component={OnSplashScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="MobileScreen" component={MobileScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  )
}

export default AuthStack