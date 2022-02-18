import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux'

import { MainStacks } from "./screens";
import store from "./store";

const NavContainer = () => {

  return (
    <NavigationContainer>
      <MainStacks />
    </NavigationContainer>
  );
};

// Корневой компонент приложения
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider
        style={{ backgroundColor: 'white', position: 'relative' }}
      >
          <StatusBar
            barStyle="dark-content"
            backgroundColor={'white'}
          />
          <NavContainer />
      </SafeAreaProvider>
    </Provider>
  );
}
