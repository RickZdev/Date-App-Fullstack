import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'

const OnSplashScreen = ({ navigation }) => {
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      value !== null ? navigation.navigate('LoginScreen') : navigation.navigate('OnboardingScreen')
    } catch (error) {
      console.log('Error @checkOnboarding: ', error)
    }
  }

  const checkUserToken = async () => {
    try {
      const hasUserToken = await AsyncStorage.getItem('userToken');
      hasUserToken !== null ? navigation.replace('HomeScreen') : checkOnboarding();
    } catch (error) {
      console.log('Error @checkUserToken: ', error.message);
    }
  }

  useEffect(() => {
    SplashScreen.hide();
    checkUserToken();
  }, [])
}

export default OnSplashScreen