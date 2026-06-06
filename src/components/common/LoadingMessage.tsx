import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { appStyles, colors } from "../../styles/appStyles";

interface LoadingMessageProps {
  message?: string;
}

export const LoadingMessage = ({
  message = "Cargando...",
}: LoadingMessageProps) => {
  return (
    <View style={appStyles.messageContainer}>
      <ActivityIndicator size="small" color={colors.primary} />
      <Text style={appStyles.loadingText}>{message}</Text>
    </View>
  );
};