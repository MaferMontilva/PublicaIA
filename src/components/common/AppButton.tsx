import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { appStyles } from "../../styles/appStyles";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
}

export const AppButton = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
}: AppButtonProps) => {
  const buttonStyle =
    variant === "primary"
      ? appStyles.primaryButton
      : variant === "secondary"
      ? appStyles.secondaryButton
      : appStyles.outlineButton;

  const textStyle =
    variant === "primary"
      ? appStyles.primaryButtonText
      : variant === "secondary"
      ? appStyles.secondaryButtonText
      : appStyles.outlineButtonText;

  return (
    <TouchableOpacity
      style={[buttonStyle, disabled ? appStyles.disabledButton : null]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};