import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import { appStyles } from "../styles/appStyles";

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 5,
          useNativeDriver: false,
        }),
      ]),

      Animated.delay(2200),

      Animated.timing(opacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start(() => {
      onFinish();
    });
  }, [opacity, scale, onFinish]);

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

        <Text style={appStyles.splashAppName}>Publica IA</Text>
      </Animated.View>
    </View>
  );
};