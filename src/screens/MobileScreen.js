import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'

const MobileScreen = () => {
  return (
    <View className='flex-1 justify-center space-y-16'>
      <View className='justify-center px-9 space-y-2'>
        <Text className='font-skModernistBold text-4xl text-primary-0'>My mobile</Text>
        <Text className='font-skModernistRegular text-base text-primary-0 mb-6'>Please enter your valid phone number. We will send you a 4-digit code to verify your account.</Text>
        <View className='space-y-14'>
          <CustomTextInput label='Mobile Number' />
          <TouchableOpacity className={`bg-primary-0 justify-center items-center rounded-xl w-full`} style={{ height: 62 }}>
            <Text className={`text-lg text-white font-skModernistBold `}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MobileScreen

const styles = StyleSheet.create({})