import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

const CustomButton = ({ onPress, text, backgroundColor, textSize, textColor, additionalStyle, children }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${backgroundColor} justify-center items-center rounded-xl ${additionalStyle} w-full`} style={{ height: 62 }}>
      {children}
      <Text className={`${textSize ? textSize : 'text-lg'} ${textColor ? textColor : 'text-white'} font-skModernistBold`}>{text}</Text>
    </TouchableOpacity>
  )
}

const CustomGenderButton = ({ onPress, text, backgroundColor, textSize, textColor, additionalStyle, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${backgroundColor} justify-between items-center rounded-xl ${additionalStyle} w-full flex-row`} style={{ height: 62 }}>
      <Text className={`${textSize ? textSize : 'text-lg'} ${textColor ? textColor : 'text-white'} font-skModernistBold`}>{text}</Text>
      <Feather name={icon} size={18} className='text-white' color='white' />
    </TouchableOpacity>
  )
}

const CustomSkipButton = ({ withBackButton = true }) => {
  const navigation = useNavigation();
  return (
    <View className={`flex-1 flex-row items-start ${withBackButton ? 'justify-between' : 'justify-end'}`}>
      {
        withBackButton &&
        <TouchableOpacity onPress={() => navigation.goBack()} className='bg-white p-3 rounded-xl '>
          <ChevronLeftIcon size={22} color='#E94057' />
        </TouchableOpacity>
      }
      <TouchableOpacity>
        <Text className='text-primary-0 font-skModernistBold text-base'>Skip</Text>
      </TouchableOpacity>
    </View>
  )
}

const CustomNextButton = ({ text, onPress }) => {
  <View className='flex-1 justify-end items-center'>
    <CustomButton onPress={onPress} text={text} backgroundColor='bg-primary-0' />
  </View>
}

export default CustomButton
export { CustomGenderButton, CustomSkipButton, CustomNextButton }