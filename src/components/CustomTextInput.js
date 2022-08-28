import { Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({ label, keyboardType, additionalStyle, children }) => {
  return (
    <View className='border-2 rounded-xl border-white'>
      <View className='bg-primary-1 absolute -top-3 left-5 px-2'>
        <Text className='text-primary-0 font-skModernistRegular text-sm'>{label}</Text>
      </View>
      <TextInput className={`pl-5 py-4 font-skModernistRegular text-white ${additionalStyle}`} style={{ height: 62 }} keyboardType={keyboardType} />
      {children}
    </View>
  )
}

export default CustomTextInput