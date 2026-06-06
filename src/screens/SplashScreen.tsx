import React, { useEffect, useRef } from "react";
import { Animated, Image, View } from "react-native";
import { appStyles } from "../styles/appStyles";

export const SplashScreen = () => {
  const opacity = useRef<Animated.Value>(new Animated.Value(0)).current;
  const scale = useRef<Animated.Value>(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, scale]);

  return (
    <View style={appStyles.splashContainer}>
      <Animated.View
        style={[
          appStyles.splashContent,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Image
          source={require("../../assets/images/logo-publicaia.png")}
          style={appStyles.splashLogo}
        />
      </Animated.View>
    </View>
  );
};