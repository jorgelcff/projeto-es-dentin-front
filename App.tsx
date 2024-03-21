import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { fontsLoadedConfig } from "./src/constants/Constants";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes/routes";
import { PaperProvider } from "react-native-paper";
import { View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts(fontsLoadedConfig);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <View onLayout={onLayoutRootView} />
        <Routes />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
