import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { AuthProvider, useAuth } from "../context/AuthContext";
import { SplashScreen } from "../screens/SplashScreen";
import { AuthNavigator } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";

const SPLASH_DURATION = 7000;

const AppNavigationContent = () => {
  const { user, isAuthReady } = useAuth();
  const [isSplashFinished, setIsSplashFinished] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashFinished(true);
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, []);

  if (!isSplashFinished || !isAuthReady) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export const AppNavigator = () => {
  return (
    <AuthProvider>
      <AppNavigationContent />
    </AuthProvider>
  );
};