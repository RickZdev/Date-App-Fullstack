import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../store/features/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken, numOfUsers, username } = useSelector(state => state.user);

  const removeToken = async () => {
    await AsyncStorage.removeItem('userToken');
    dispatch(userAction.logoutUser());
    navigation.replace('LoginScreen');
  }

  const addUser = () => {
    dispatch(userAction.addUser());
  }

  const removeUser = () => {
    dispatch(userAction.removeUser());
  }

  return (
    <View className='flex-1 bg-white'>
      <Text className='text-[21px]'>{username}</Text>
      <Button title="REMOVE TOKEN" onPress={removeToken} />
      <Text>{numOfUsers}</Text>
      <Button title="add user" onPress={addUser} />
      <Button title="remove user" onPress={removeUser} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})