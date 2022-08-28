import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ onPress, text, backgroundColor, textSize, textColor, additionalStyle, children }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${backgroundColor} justify-center items-center rounded-xl ${additionalStyle} w-full`} style={{ height: 62 }}>
      {children}
      <Text className={`${textSize ? textSize : 'text-lg'} ${textColor ? textColor : 'text-white'} font-skModernistBold`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton