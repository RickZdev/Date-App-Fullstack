import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, backgroundColor, textSize, textColor, additionalStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${backgroundColor} justify-center items-center rounded-xl ${additionalStyle}`} style={{ width: '72%', height: 50 }}>
      <Text className={`${textSize ? textSize : 'text-lg'} ${textColor ? textColor : 'text-white'} font-skModernistBold `}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton