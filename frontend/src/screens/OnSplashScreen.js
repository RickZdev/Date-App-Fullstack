import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'

const OnSplashScreen = ({ navigation }) => {
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        navigation.navigate('LoginScreen')
      } else {
        navigation.navigate('OnboardingScreen')
      }
    } catch (error) {
      console.log('Error @checkOnboarding: ', error)
    }
  }

  useEffect(() => {
    SplashScreen.hide();
    checkOnboarding();
  }, [])

}

export default OnSplashScreen