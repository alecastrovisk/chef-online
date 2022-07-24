import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  Nunito_400Regular, 
  Nunito_700Bold 
} from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Login } from './src/screens/Login';

import theme from './src/styles/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Nunito_400Regular,
          Nunito_700Bold
        });
      } catch (error) {
        console.warn(error);
      }finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>    
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </View>
  );
}
