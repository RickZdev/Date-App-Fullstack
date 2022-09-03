import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { CalendarIcon, CameraIcon } from 'react-native-heroicons/solid'
import { useSelector, useDispatch } from 'react-redux';

import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import { addUser, getUser, deleteUser } from '../database/db'
import { userAction } from '../store/features/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileDetailsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, userToken } = useSelector((state) => state.user);

  const handleGetUser = async () => {
    // getUser(setUsers);
    // addUser(firstName, lastName);
    // deleteUser('630e150c56b7f367e8cc61ed');
    // navigation.navigate('HomeScreen');
    navigation.navigate('GenderScreen');

    // dispatch(userAction.loginUser({ token: 'zxc', firstName, lastName }));
  }

  useEffect(() => {
    console.log(userToken);
    const retrieveToken = async () => {
      if (userToken !== null) {
        await AsyncStorage.setItem('userToken', userToken);
        navigation.navigate('HomeScreen');
      } else {
        console.log('NO TOKEN FOUND!');
      }
    }

    retrieveToken();
  }, [userToken])

  return (
    <View className='flex-1 bg-primary-1'>
      <ScrollView className='p-10' showsVerticalScrollIndicator={false}>
        <View className='space-y-3 pb-10'>
          <Text className='font-skModernistBold text-base text-primary-0 text-right'>Skip</Text>
          <Text className='font-skModernistBold text-4xl text-primary-0'>Profile details</Text>
        </View>
        <View className='justify-center items-center pb-5'>
          <View className='w-28 h-28'>
            <Image
              source={require('../assets/images/model/model-3.jpg')}
              resizeMode='cover'
              className='w-full h-full rounded-3xl'
            />
            <View className='absolute -bottom-2 -right-1 rounded-full bg-primary-0 justify-center items-center z-10 p-1.5 border-white border-2'>
              <CameraIcon size={22} color='white' />
            </View>
          </View>
        </View>
        <View className='space-y-3 pt-5'>
          <View>
            <CustomTextInput label='First name' onChangeText={(text) => setFirstName(text)} />
          </View>
          <View>
            <CustomTextInput label='Last name' onChangeText={(text) => setLastName(text)} />
          </View>
          <TouchableOpacity className='mb-10'>
            <View className={`opacity-20 bg-primary-0 rounded-xl w-full`} style={{ height: 62 }} />
            <View className='flex-row absolute pl-5 w-full h-full justify-start items-center'>
              <CalendarIcon size={24} color='#E94057' />
              <Text className={`pl-3 text-sm text-primary-0 font-skModernistBold`}>Choose birthday date</Text>
            </View>
          </TouchableOpacity>
          <CustomButton onPress={handleGetUser} text='Confirm' backgroundColor='bg-primary-0' />
        </View>
      </ScrollView >
    </View >
  )
}

export default ProfileDetailsScreen