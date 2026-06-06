import React from "react";
import { Text, View } from "react-native";
import { appStyles } from "../../styles/appStyles";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) {
    return null;
  }

  return (
    <View style={appStyles.errorMessageContainer}>
      <Text style={appStyles.errorMessageText}>{message}</Text>
    </View>
  );
};