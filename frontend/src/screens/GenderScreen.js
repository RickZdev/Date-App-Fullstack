import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid'
import CustomButton, { CustomGenderButton, CustomSkipButton } from '../components/CustomButton'
import { useState } from 'react'

const GenderScreen = ({ navigation }) => {
  const [gender, setGender] = useState();

  const data = [
    {
      id: 0,
      gender: 'Woman',
      icon: 'check'
    },
    {
      id: 1,
      gender: 'Man',
      icon: 'check'
    },
    {
      id: 2,
      gender: 'Choose another',
      icon: 'chevron-right'
    },
  ]

  return (
    <View className='flex-1 bg-primary-1 p-10'>
      <CustomSkipButton />
      <View className='flex-1 justify-start items-start'>
        <Text className='font-skModernistBold text-4xl text-white'>I am a</Text>
      </View>
      <View className='flex-1 space-y-3'>
        {data.map((item, index) => (
          <View key={item.id}>
            <CustomGenderButton
              onPress={() => setGender(index)}
              text={item.gender} icon={item.icon}
              textSize='text-base'
              backgroundColor={index === gender ? 'bg-primary-0' : 'bg-primary-1'}
              additionalStyle={`font-skModernistRegular px-4 border-2 ${index !== gender ? 'border-white ' : 'border-primary-0'}`} />
          </View>
        ))}
      </View>
      <View className='flex-1 justify-end items-center'>
        <CustomButton onPress={() => navigation.navigate('InterestScreen')} text={'Continue'} backgroundColor='bg-primary-0' />
      </View>
    </View>
  )
}

export default GenderScreen

const styles = StyleSheet.create({})