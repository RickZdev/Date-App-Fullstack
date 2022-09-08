import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ActivityIndicatorScreen = ({ navigation, route }) => {
  const { data } = route.params;
  useEffect(() => {
    setTimeout(async () => {
      let temp = [];
      let answer = ["5", "5", "5", "5"]
      temp = data.filter((item, index) => {
        if (item === answer[index]) {
          return item;
        }
      })

      const value = await AsyncStorage.getItem('@viewedWelcomeStack');
      console.log(value);
      if (!value) {
        navigation.replace('WelcomeStack');
      } else {
        navigation.replace('HomeStack');
      }

      // if (temp.length !== 4) {
      //   navigation.replace('VerificationScreen');
      // } else {
      //   if (!value) {
      //     navigation.replace('HomeStack');
      //   } else {
      //     navigation.replace('WelcomeStack');
      //   }
      // }

    }, 3000)

  }, [])
  return (
    <View className='flex-1 bg-black opacity-50 justify-center items-center'>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

export default ActivityIndicatorScreen
