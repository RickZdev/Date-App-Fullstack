import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const ActivityIndicatorScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('ProfileDetailsScreen');
    }, 3000)
  }, [])
  return (
    <View className='flex-1 bg-black opacity-50 justify-center items-center'>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

export default ActivityIndicatorScreen
