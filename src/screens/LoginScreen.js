import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
      console.log('Error @clearOnboarding: ', error);
    }
  }

  return (
    <View className='bg-yellow-300 flex-1'>
      <TouchableOpacity onPress={clearOnboarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen