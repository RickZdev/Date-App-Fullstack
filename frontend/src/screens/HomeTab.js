import React, { useRef, useState } from 'react'
import { Text, View, Button, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../store/features/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Swiper from 'react-native-deck-swiper'
import { CustomSkipButton } from '../components/CustomButton'
import { HeartIcon, StarIcon, XIcon } from 'react-native-heroicons/solid'
import COLORS from '../global/COLORS'

const HomeTab = ({ navigation }) => {
  // Swiper
  const dummyData = [
    {
      id: 0,
      title: 'Algorithm',
      description: 'Users going through a vetting process to ensure you never match with bots.',
      image: require('../assets/images/model/model-1.jpg')
    },
    {
      id: 1,
      title: 'Matches',
      description: 'We match you with people that have a large array of similar interests.',
      image: require('../assets/images/model/model-2.jpg')
    },
    {
      id: 2,
      title: 'Premium',
      description: 'Sign up today and enjoy the first month of premium benefits on us.',
      image: require('../assets/images/model/model-3.jpg')
    },
  ]
  const swiperRef = useRef();

  // Redux
  const dispatch = useDispatch();
  const { userToken, numOfUsers, username } = useSelector(state => state.user);

  const removeToken = async () => {
    await AsyncStorage.removeItem('userToken');
    dispatch(userAction.logoutUser());
    navigation.replace('LoginScreen');
  }

  return (
    <View className='flex-1 bg-primary-1 p-10 pb-5'>
      <View>
        <CustomSkipButton onPress={() => navigation.navigate('BottomSheetScreen')} withSkipButton={false} withFilterButton={true} withDescription={true} />
      </View>
      <View className='flex-1 mt-5 justify-center items-center'>
        <Swiper
          cardStyle={{ top: 0, left: 0 }}
          ref={swiperRef}
          cards={dummyData}
          // keyExtractor={card => card.id}
          renderCard={(card) => <Card card={card} />}
          backgroundColor='transparent'
          cardIndex={0}
          onSwiped={(cardIndex) => console.log(cardIndex)}
          onSwipedAll={() => console.log('onSwipedAll')}
          onSwipedRight={() => console.log('RIGHT!')}
          infinite={true}
          stackScale={8}
          stackSeparation={14}
          stackSize={3}
          disableBottomSwipe
          disableTopSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          overlayLabels={{
            left: {
              element:
                <CardOverlay>
                  <XIcon size={32} color='gold' />
                </CardOverlay>
            },
            right: {
              element:
                <CardOverlay>
                  <HeartIcon size={37} color='#E94057' />
                </CardOverlay>
            }
          }}
        >
        </Swiper>
      </View>
      <View className='flex-1 justify-end items-center'>
        <View className='flex-row justify-evenly items-center space-x-5'>
          <TouchableOpacity onPress={() => swiperRef.current.swipeLeft()} className='bg-white p-4 rounded-full'>
            <XIcon size={25} color='gold' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => swiperRef.current.swipeRight()} className='bg-primary-0 p-4 rounded-full'>
            <HeartIcon size={50} color={COLORS.white} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => removeToken()} className='bg-white p-4 rounded-full'>
            <StarIcon size={25} color={COLORS.primary[2]} />
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

const Card = ({ card }) => {
  return (
    <TouchableOpacity onPress={() => console.log('haha')} className='w-[90%] h-[65%] rounded-xl overflow-hidden' activeOpacity={.9}>
      <ImageBackground
        source={card.image}
        resizeMode='cover'
        className='w-full h-full justify-end shadow-lg bg-black'>

        <View className='bg-black opacity-75 p-3'>
          <Text className='font-skModernistBold text-white text-3xl'>{card.title}, 23</Text>
          <Text className='font-skModernistRegular text-white text-base'>Content Creator</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const CardOverlay = ({ children }) => {
  return (
    <View className='w-[95%] h-[65%] -mt-10 -ml-8 justify-center items-center '>
      <View className='p-3 bg-white justify-center items-center rounded-full'>
        {children}
      </View>
    </View>
  )
}

export default HomeTab