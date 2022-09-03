import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HeartIcon, XIcon, SwitchVerticalIcon } from 'react-native-heroicons/solid'

const MatchTab = () => {
  const data = [
    {
      id: 0,
      name: 'Leilani',
      age: 19,
      image: require('../assets/images/model/model-1.jpg')
    },
    {
      id: 1,
      name: 'Annabelle',
      age: 20,
      image: require('../assets/images/model/model-2.jpg')
    },
    {
      id: 2,
      name: 'Reagan',
      age: 24,
      image: require('../assets/images/model/model-3.jpg')
    },
    {
      id: 3,
      name: 'Hadley',
      age: 25,
      image: require('../assets/images/model/model-2.jpg')
    },
    {
      id: 4,
      name: 'Leilani',
      age: 19,
      image: require('../assets/images/model/model-1.jpg')
    },
    {
      id: 5,
      name: 'Annabelle',
      age: 20,
      image: require('../assets/images/model/model-2.jpg')
    },
    {
      id: 6,
      name: 'Reagan',
      age: 24,
      image: require('../assets/images/model/model-3.jpg')
    },
    {
      id: 7,
      name: 'Hadley',
      age: 25,
      image: require('../assets/images/model/model-2.jpg')
    },
  ]

  return (
    <View className='flex-1 bg-primary-1 p-10 pb-[115px]'>
      <View className=' flex-row items-start justify-between pb-3'>
        <Text className='font-skModernistBold text-3xl text-white'>Matches</Text>
        <TouchableOpacity className='bg-white p-3 rounded-xl'>
          <SwitchVerticalIcon size={22} color='#E94057' />
        </TouchableOpacity>
      </View>
      <View className='pb-3'>
        <Text className='font-skModernistRegular text-white text-base'>This is a list of people who have liked you and your matches.</Text>
      </View>
      {/* <View className='pb-5'>
        <View className='border-[1px] border-white justify-center items-center' />
        <View className='bg-primary-1 px-4 absolute self-center -top-2'>
          <Text className='text-white text-center text-xs'>Today</Text>
        </View>
      </View> */}
      <View className=''>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View className='pt-5 pb-5'>
              <View className='border-[1px] border-white justify-center items-center' />
              <View className='bg-primary-1 px-4 absolute self-center top-3'>
                <Text className='text-white text-center text-xs'>Today</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const Card = ({ item }) => {
  return (
    <View className='pl-2 pb-[10px]' style={{ width: '49%' }}>
      < ImageBackground source={item.image} resizeMode='cover' className='w-full h-[200px] justify-end items-start rounded-2xl overflow-hidden' >
        <Text className='text-white font-skModernistBold pl-3 pb-2'>{item.name}, {item.age}</Text>
        <View className='flex-row'>
          <TouchableOpacity className='w-1/2 justify-center items-center bg-primary-0 border-r-2 border-white'>
            <XIcon size={22} color='white' />
          </TouchableOpacity>
          <TouchableOpacity className='w-1/2 justify-center items-center bg-primary-0 p-2'>
            <HeartIcon size={22} color='white' />
          </TouchableOpacity>
        </View>
      </ImageBackground >
    </View >
  )
}

export default MatchTab