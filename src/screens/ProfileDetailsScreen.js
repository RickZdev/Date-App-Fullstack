import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { CalendarIcon, CameraIcon } from 'react-native-heroicons/solid'

import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'

const ProfileDetailsScreen = () => {
  return (
    <View className='flex-1 bg-primary-1'>
      <ScrollView className='px-11 py-10' showsVerticalScrollIndicator={false}>
        <View className='space-y-3 pb-10'>
          <Text className='font-skModernistBold text-base text-primary-0 text-right'>Skip</Text>
          <Text className='font-skModernistBold text-4xl text-primary-0'>Profile details</Text>
        </View>
        <View className='justify-center items-center pb-5'>
          <View className='w-28 h-28'>
            <Image
              source={require('../assets/images/model/model-3.jpg')}
              resizeMode='cover'
              className='w-full h-full rounded-3xl'
            />
            <View className='absolute -bottom-2 -right-1 rounded-full bg-primary-0 justify-center items-center z-10 p-1.5 border-white border-2'>
              <CameraIcon size={22} color='white' />
            </View>
          </View>
        </View>
        <View className='space-y-3 pt-5'>
          <View>
            <CustomTextInput label='First name' />
          </View>
          <View>
            <CustomTextInput label='Last name' />
          </View>
          <TouchableOpacity className='mb-10'>
            <View className={`opacity-20 bg-primary-0 rounded-xl w-full`} style={{ height: 62 }} />
            <View className='flex-row absolute pl-5 w-full h-full justify-start items-center'>
              <CalendarIcon size={24} color='#E94057' />
              <Text className={`pl-3 text-sm text-primary-0 font-skModernistBold`}>Choose birthday date</Text>
            </View>
          </TouchableOpacity>
          <CustomButton text='Confirm' backgroundColor='bg-primary-0' />
        </View>
      </ScrollView >
    </View >
  )
}

export default ProfileDetailsScreen