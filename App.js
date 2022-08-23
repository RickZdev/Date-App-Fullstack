import 'react-native-gesture-handler';
import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";

import AuthStack from './src/navigations/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <AuthStack />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
