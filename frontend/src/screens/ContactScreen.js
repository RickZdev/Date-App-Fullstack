import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton, { CustomSkipButton } from '../components/CustomButton'

const ContactScreen = ({ navigation }) => {
  return (
    <View className='flex-1 bg-primary-1 p-10'>
      <CustomSkipButton withBackButton={false} />
      <View className='flex-1 justify-center items-center w-full h-44'>
        <Image
          source={require('../assets/images/contact-screen.png')}
          resizeMode='cover'
          className='w-full h-full rounded-3xl'
        />
      </View>
      <View className='flex-1 justify-center items-start space-y-3 '>
        <Text className='font-skModernistBold text-2xl text-primary-0 self-center'>Search friends</Text>
        <Text className='font-skModernistRegular text-sm text-primary-0 text-center'>You can find friends from your contact lists to connected.</Text>
      </View>
      <View className='flex-1 justify-end items-center'>
        <CustomButton onPress={() => navigation.replace('NotificationScreen')} text={'Access to a contact list'} textSize='text-sm' backgroundColor='bg-primary-0' />
      </View>
    </View>
  )
}

export default ContactScreen