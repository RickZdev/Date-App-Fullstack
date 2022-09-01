import { Image, Text, View } from 'react-native'
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';
import CustomSocialButton from '../components/CustomSocialButton';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
      console.log('Error @clearOnboarding: ', error);
    }
  }

  return (
    <View className='flex-1 bg-primary-1'>
      <View className='flex-1 justify-center items-center p-16' style={{ flex: 1 }}>
        <Image
          source={require('../assets/images/logo.png')}
          resizeMode='contain'
          className='w-4/5 mt-12'
        />
      </View>
      <View className='flex-1 justify-center px-11'>
        <Text className='text-base text-primary-0 font-skModernistBold mb-7 text-center'>Sign up to continue</Text>
        <CustomButton onPress={clearOnboarding} text='Continue with email' backgroundColor='bg-primary-0' textSize={'text-base'} additionalStyle='mb-5' />
        <CustomButton onPress={() => navigation.navigate('MobileScreen')} text='Use phone number' backgroundColor='bg-white' textSize={'text-base'} textColor='text-primary-0' additionalStyle='mb-5' />
      </View>
      <View className='space-y-4 pb-10'>
        <View className='bg-black w-4/5 h-0.5 bg-opacity-25 self-center' />
        <Text className='text-center absolute -top-6 text-white bottom-0 left-0 right-0'>or sign up with</Text>
        <View className='justify-center items-center flex-row space-x-4 pt-5'>
          <View>
            <CustomSocialButton iconName={"facebook-square"} />
          </View>
          <View>
            <CustomSocialButton iconName={"google"} />
          </View>
          <View>
            <CustomSocialButton iconName={"apple1"} />
          </View>
        </View>
        <View className='flex-row justify-around pt-5'>
          <CustomButton text='Terms of use' textSize={'text-base'} textColor='text-primary-0' />
          <CustomButton text='Privacy Policy' textSize={'text-base'} textColor='text-primary-0' />
        </View>
      </View>
    </View>
  )
}

export default LoginScreen