import React from 'react'
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomSocialButton = ({ iconName }) => {
  return (
    <TouchableOpacity className='bg-white p-3 rounded-lg'>
      <AntDesign name={iconName} size={32} color='#E94057' />
    </TouchableOpacity>
  )
}

export default CustomSocialButton