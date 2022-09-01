import 'react-native-gesture-handler';
import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import configStore from './src/store/configStore';
import AuthStack from './src/navigations/AuthStack';

const App = () => {
  return (
    <NavigationContainer theme={{ colors: { background: '#231429' } }}>
      <Provider store={configStore}>
        <TailwindProvider>
          <AuthStack />
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
