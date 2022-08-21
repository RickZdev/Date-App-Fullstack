import 'react-native-gesture-handler';
import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import { StyleSheet, } from 'react-native';
import OnboardingScreen from './src/screens/OnboardingScreen';

const App = () => {
  return (
    <TailwindProvider>
      <OnboardingScreen />
    </TailwindProvider>
  );
};

const styles = StyleSheet.create({

})

export default App;
