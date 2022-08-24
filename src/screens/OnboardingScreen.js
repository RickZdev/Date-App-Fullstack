import { FlatList, Image, Text, View, useWindowDimensions, Animated, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Svg, { G, Circle } from 'react-native-svg';
import { ArrowRightIcon, EyeIcon } from 'react-native-heroicons/solid'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = ({ navigation }) => {
  const navig = useNavigation();
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const scrollTo = async () => {
    if (currentIndex < dummyData.length - 1) {
      slidesRef.current.scrollToIndex({
        index: currentIndex + 1
      });

    } else {
      try {
        navig.replace('LoginScreen');
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (error) {
        console.log('Error @setItem: ', error);
      }
    }
  }

  return (
    <View className='flex-1 justify-center items-center bg-primary-1 py-10'>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OnboardingItem data={item} />}
        horizontal={true}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: {
              x: scrollX
            }
          }
        }], {
          useNativeDriver: false,
        })}
      />

      <OnboardingPaginator data={dummyData} scrollX={scrollX} />
      {/* <OnboardingButton percentage={(currentIndex + 1) * (100 / dummyData.length)} scrollTo={scrollTo} currentIndex={currentIndex} /> */}
      <OnboardingCustomButton scrollTo={scrollTo} currentIndex={currentIndex} />
    </View>

  )
}

const OnboardingItem = ({ data }) => {
  const { width } = useWindowDimensions();
  return (
    <View className="justify-center items-center " style={{ width: width }} >
      <View className='justify-center items-center'>
        <View style={{ width: 250, height: 300, borderRadius: 20, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={data.image}
            resizeMode='cover'
            style={{ width: '100%', height: '100%' }}
            className='rounded-sm'
          />
        </View>
      </View>
      <View className='pt-10 pb-5' style={{ width: '72%' }}>
        <Text className='text-center text-primary-0 font-skModernistBold text-2xl'>{data.title}</Text>
        <Text className='text-center text-primary-0 font-skModernistRegular text-opacity-0 py-3'>{data.description}</Text>
      </View>
    </View>
  )
}

const OnboardingPaginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View className='flex-row h-16 justify-center'>
      {data.map((item, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 15, 10],
          extrapolate: 'clamp',
        })

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })
        return (
          <Animated.View className='h-2.5 rounded-md bg-primary-0 mx-2' style={{ width: dotWidth, opacity: dotOpacity }} key={item.id} />
        )
      })}
    </View>
  )
}

const OnboardingButton = ({ percentage, scrollTo, currentIndex }) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true
    }).start();
  }

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset: circumference - (circumference * value.value) / 100,
        });
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    }
  }, [percentage]);

  return (
    <View className='justify-center items-center'>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle stroke="white" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
          <Circle
            ref={progressRef}
            stroke="#E94057"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>

      <TouchableOpacity onPress={scrollTo} className='absolute bg-primary-0 rounded-full p-5'>
        {currentIndex !== 2 ?
          <ArrowRightIcon size={32} color='#fff' /> :
          <EyeIcon size={32} color='#fff' />
        }
      </TouchableOpacity>
    </View>
  )
}

const OnboardingCustomButton = ({ scrollTo, currentIndex }) => {
  return (
    <>
      <TouchableOpacity onPress={scrollTo} className="bg-primary-0 justify-center items-center rounded-xl" style={{ width: '72%', height: 50 }}>
        {
          currentIndex !== 2 ?
            <Text className='text-lg text-white font-skModernistBold'>Next</Text> :
            <Text className='text-base text-white font-skModernistBold '>Create an account</Text>
        }
      </TouchableOpacity>

    </>
  )
}

export default OnboardingScreen