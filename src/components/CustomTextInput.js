import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ChevronDownIcon } from 'react-native-heroicons/solid'

const CustomTextInput = ({ label }) => {
  return (
    <View className='border-2 rounded-xl border-white'>
      <View className='bg-primary-1 absolute -top-3 left-5 px-2'>
        <Text className='text-primary-0 font-skModernistRegular text-sm'>{label}</Text>
      </View>
      <TextInput className='pl-24 py-4 font-skModernistRegular text-white' style={{ height: 62 }} keyboardType='phone-pad' />
      <Text className='text-white font-skModernistRegular absolute left-6 top-6'>(+91)         | </Text>
      <ChevronDownIcon size={18} color='#fff' style={{ position: 'absolute', top: 23, left: 60 }} />
    </View>
  )
}

export default CustomTextInput
