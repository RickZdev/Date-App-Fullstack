import { ActivityIndicator, FlatList, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { CustomSkipButton } from '../components/CustomButton'
import COLORS from '../global/COLORS'
import { BackspaceIcon } from 'react-native-heroicons/outline'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const VerificationScreen = ({ navigation }) => {
  const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'S', '0', 'X'];
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const [tempOtp, setTempOtp] = useState([]);

  const inputRef = useRef(null);

  const handleKeypad = (item) => {
    let text = '';
    if (item === 'X') {
      setActiveOtpIndex(activeOtpIndex + 2);
    } else {
      text = item;
    }

    const newOTP = [...otp];
    newOTP[activeOtpIndex] = text.substring(text.length - 1);

    if (!text) {
      setActiveOtpIndex(activeOtpIndex - 1);
    } else {
      setActiveOtpIndex(activeOtpIndex + 1);
    }

    setOtp(newOTP);
  }

  useEffect(() => {
    let temp = [];
    temp = otp.filter(item => {
      return item;
    })

    setTempOtp(temp)

  }, [activeOtpIndex]);

  useEffect(() => {
    if (activeOtpIndex === -1) {
      setActiveOtpIndex(0)
    }

    if (tempOtp.length === otp.length) {
      navigation.replace('ActivityIndicatorScreen', { data: otp });
    }
  }, [tempOtp])

  // if (otp.length === tempOtp.length) {
  //   setTimeout(() => {
  //     navigation.replace('ProfileDetailsScreen');
  //   }, 3000)

  //   return (
  //     <View className='flex-1 bg-black opacity-50 justify-center items-center'>
  //       <ActivityIndicator size={'large'} />
  //     </View>
  //   )
  // }

  const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <HideKeyboard>
      <View className='flex-1 bg-primary-1 p-10'>
        <CustomSkipButton withSkipButton={false} />
        <View className='flex-1 justify-center items-center px-10 space-y-4'>
          <Text className='font-skModernistBold text-3xl text-primary-0'>00:42</Text>
          <Text className='font-skModernistRegular text-lg text-primary-0 text-center'>Type the verification code we've sent you</Text>
        </View>
        <View className='flex-1 flex-row justify-center space-x-3 items-center py-8'>
          {otp?.map((item, index) => (
            <TextInput
              key={index}
              ref={index === activeOtpIndex ? inputRef : null}
              className={`${otp[index] !== '' ? 'bg-primary-0' : 'bg-white'} ${activeOtpIndex === index ? 'border-primary-0 border-2' : null} text-white w-16 h-16 rounded-xl text-start text-3xl font-skModernistBold pl-[22px]`}
              placeholder='0'
              placeholderTextColor={activeOtpIndex === index ? '#e3889c' : '#c7c3c4'}
              value={otp[index]}
              editable={false}
              selectTextOnFocus={false}
              keyboardType={'phone-pad'}
            />
          ))}
        </View>
        <FlatList
          contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'center' }}
          data={keypad}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity className={`mx-12 my-3 justify-center items-center w-4`} onPress={() => handleKeypad(item)}>
              {
                item === 'X' ? <BackspaceIcon color={COLORS.primary[0]} size={30} />
                  : <Text className={`text-primary-0 text-2xl font-skModernistRegular ${item === 'S' ? 'opacity-0' : null}`}>{item}</Text>
              }
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity className='flex-1 justify-end items-center' onPress={async () => await AsyncStorage.removeItem('@viewedWelcomeStack')}>
          <Text className='font-skModernistBold text-primary-0 text-base'>Send again</Text>
        </TouchableOpacity>
      </View>
    </HideKeyboard>
  )
}

export default VerificationScreen
