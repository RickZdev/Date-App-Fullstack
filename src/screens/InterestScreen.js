import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

import CustomButton, { CustomSkipButton } from '../components/CustomButton'

const InterestScreen = ({ navigation }) => {
  const [interests, setInterests] = useState([]);

  const data = [
    {
      id: 0,
      interest: 'Photography',
      icon: 'camera',
    },
    {
      id: 1,
      interest: 'Shopping',
      icon: 'shopping-bag',
    },
    {
      id: 2,
      interest: 'Karaoke',
      icon: 'mic',
    },
    {
      id: 3,
      interest: 'Yoga',
      icon: 'hand',
    },
    {
      id: 4,
      interest: 'Cooking',
      icon: 'bowl',
    },
    {
      id: 5,
      interest: 'Tennis',
      icon: 'dribbble',
    },
    {
      id: 6,
      interest: 'Run',
      icon: 'man',
    },
    {
      id: 7,
      interest: 'Swimming',
      icon: 'air',
    },
    {
      id: 8,
      interest: 'Art',
      icon: 'brush',
    },
    {
      id: 9,
      interest: 'Travelling',
      icon: 'aircraft',
    },
    {
      id: 10,
      interest: 'Extreme',
      icon: 'hair-cross',
    },
    {
      id: 11,
      interest: 'Music',
      icon: 'music',
    },
    {
      id: 12,
      interest: 'Drink',
      icon: 'drink',
    },
    {
      id: 13,
      interest: 'Video games',
      icon: 'game-controller',
    },
  ]

  const handleAddInterest = (item) => {
    const tempDb = [...interests];
    if (interests.includes(item.interest)) {
      const index = tempDb.indexOf(item.interest);
      tempDb.splice(index, 1);
    } else {
      tempDb.push(item.interest);
    }

    setInterests(tempDb);
  }

  return (
    <View className='flex-1 bg-primary-1 p-10'>
      <CustomSkipButton />
      <View className='flex-1 justify-start items-start space-y-2 '>
        <Text className='font-skModernistBold text-3xl text-primary-0'>Your interests</Text>
        <Text className='font-skModernistRegular text-sm text-primary-0 '>
          Select a few of your interests and let everyone know what you're passionate about.
        </Text>
      </View>
      <View className='flex-1 justify-end'>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleAddInterest(item)} className={`${interests.includes(item.interest) ? 'bg-primary-0 border-primary-0' : 'bg-primary-1 border-white'} border-2 pl-3 mr-4 mb-2 justify-start items-center rounded-xl flex-row`} style={{ height: 42, width: '47%' }}>
              <Entypo name={item.icon} size={22} color={interests.includes(item.interest) ? 'white' : '#E94057'} />
              <Text className={`pl-2 text-xs text-whitefont-skModernistRegular text-white`}>{item.interest}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View className='flex-1 justify-end items-center'>
        <CustomButton onPress={() => navigation.navigate('ContactScreen')} text={'Continue'} backgroundColor='bg-primary-0' />
      </View>
    </View>
  )
}

export default InterestScreen

const styles = StyleSheet.create({})