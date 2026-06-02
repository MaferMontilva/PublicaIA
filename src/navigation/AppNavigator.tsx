import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { SplashScreen } from "../screens/SplashScreen";
import { MainNavigator } from "./MainNavigator";

export const AppNavigator = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};