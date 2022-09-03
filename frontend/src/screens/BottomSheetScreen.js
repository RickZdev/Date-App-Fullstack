import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { Slider } from '@miblanchard/react-native-slider'

import COLORS from '../global/COLORS';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { useState } from 'react';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const BottomSheetScreen = ({ navigation }) => {
  const interestData = ['Women', 'Men', 'Others'];
  const [gender, setGender] = useState(0);
  const [distance, setDistance] = useState(40);
  const [age, setAge] = useState([18, 60]);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['80%'], []);

  const handleGetGender = (index) => {
    setGender(index);
  }

  const handleClearFilters = () => {
    setGender(0);
    setDistance(40);
    setAge([18, 60]);
  }

  const handleConfirmButton = async () => {
    await AsyncStorage.setItem('filters', JSON.stringify({ gender, distance, age }));
    navigation.goBack();
  }

  useEffect(() => {
    const getFilter = async () => {
      const value = await AsyncStorage.getItem('filters');
      if (value !== null) {
        const { gender, distance, age } = JSON.parse(value);
        setGender(gender);
        setDistance(distance);
        setAge(age);
      }
    }

    getFilter();
  }, [])

  return (
    <View className='flex-1'>
      <View className='w-full h-full bg-black opacity-75 absolute' />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => navigation.goBack()}
        animateOnMount={true}
        backgroundStyle={{ backgroundColor: COLORS.primary[1] }}
        handleIndicatorStyle={{ backgroundColor: 'white' }}
      >
        <View className='flex-1 px-5 py-5'>
          <View className='flex-1 flex-row justify-between items-start'>
            <Text className='font-skModernistBold text-base text-primary-1'>Clear</Text>
            <Text className='font-skModernistBold text-2xl text-primary-0'>Filters</Text>
            <TouchableOpacity onPress={handleClearFilters}>
              <Text className='font-skModernistBold text-lg text-primary-0'>Clear</Text>
            </TouchableOpacity>
          </View>
          <View className='flex-1 justify-start'>
            <Text className='mb-3 font-skModernistBold text-primary-0 text-base'>Interested in</Text>

            <View className='flex-row'>
              {
                interestData.map((item, index) => (
                  <TouchableOpacity key={index} onPress={() => handleGetGender(index)} activeOpacity={.9} className={`${index === gender ? 'bg-primary-0' : 'bg-white'} ${index === 0 && 'rounded-l-xl'} ${index === 2 && 'rounded-r-xl'} justify-center items-center py-5 w-[33%]`}>
                    <Text className={`${index === gender ? 'text-white' : 'text-black'} font-skModernistBold `}>{item}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>
          <View className='flex-1 justify-center '>
            <View className='border-2 rounded-xl border-white'>
              <View className='bg-primary-1 absolute -top-3 left-5 px-2'>
                <Text className='text-primary-0 font-skModernistRegular text-sm'>Location</Text>
              </View>
              <TouchableOpacity className={`flex-row justify-between px-5 py-4 font-skModernistRegular text-white `}>
                <Text className='font-skModernistRegular text-primary-0 text-base'>Chicago, USA</Text>
                <ChevronRightIcon size={22} color={COLORS.primary[0]} />
              </TouchableOpacity>
            </View>
          </View>
          <View className='flex-1 '>
            <View className='flex-row justify-between items-center'>
              <Text className='mb-3 font-skModernistBold text-primary-0 text-base'>Distance</Text>
              <Text className='mb-3 font-skModernistBold text-white text-base'>{distance}km</Text>
            </View>
            <Slider
              value={distance}
              onValueChange={
                (sliderValue) => setDistance(sliderValue)
              }
              animateTransitions
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={COLORS.primary[0]}
              maximumTrackTintColor={COLORS.white}
              thumbTouchSize={{ width: 70, height: 70 }}
              thumbTintColor={COLORS.primary[0]}
              thumbStyle={{ borderColor: 'white', borderWidth: 3, width: 30, height: 30, borderRadius: 15 }}
              step={1}
            />
          </View>
          <View className='flex-1  '>
            <View className='flex-row justify-between items-center'>
              <Text className='mb-3 font-skModernistBold text-primary-0 text-base'>Age</Text>
              <Text className='mb-3 font-skModernistBold text-white text-base'>{age[0]} - {age[1]}</Text>
            </View>
            <Slider
              value={age}
              onValueChange={
                (sliderValue) => setAge(sliderValue)
              }
              minimumValue={18}
              maximumValue={60}
              thumbTintColor={COLORS.primary[0]}
              minimumTrackTintColor={COLORS.primary[0]}
              maximumTrackTintColor={COLORS.white}
              thumbTouchSize={{ width: 70, height: 70 }}
              thumbStyle={{ borderColor: 'white', borderWidth: 3, width: 30, height: 30, borderRadius: 15 }}
              step={1}
            />
          </View>
          <View className='flex-1 justify-end items-center'>
            <CustomButton text='Confirm' onPress={() => handleConfirmButton()} backgroundColor={'bg-primary-0'} />
          </View>

        </View>
      </BottomSheet>
    </View>
  )
}

export default BottomSheetScreen

