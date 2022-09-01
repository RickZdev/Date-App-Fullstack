import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton, { CustomSkipButton } from '../components/CustomButton'

const NotificationScreen = ({ navigation }) => {
  return (
    <View className='flex-1 bg-primary-1 p-10'>
      <CustomSkipButton withBackButton={false} />
      <View className='flex-1 justify-center items-center w-full h-44'>
        <Image
          source={require('../assets/images/notification-screen.png')}
          resizeMode='contain'
          className='w-full h-full rounded-3xl'
        />
      </View>
      <View className='flex-1 justify-center items-start space-y-3 '>
        <Text className='font-skModernistBold text-2xl text-primary-0 self-center'>Enable notifications</Text>
        <Text className='font-skModernistRegular text-sm text-primary-0 text-center'>Get push-notification when you get the match or received a message.</Text>
      </View>
      <View className='flex-1 justify-end items-center'>
        <CustomButton onPress={() => navigation.navigate('HomeStack')} text={'I want to be notified'} textSize='text-sm' backgroundColor='bg-primary-0' />
      </View>
    </View>
  )
}

export default NotificationScreen