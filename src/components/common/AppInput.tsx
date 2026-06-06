import React from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { appStyles } from "../../styles/appStyles";

interface AppInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  autoCapitalize?: TextInputProps["autoCapitalize"];
}

export const AppInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error = "",
  secureTextEntry = false,
  keyboardType = "default",
  multiline = false,
  numberOfLines = 1,
  autoCapitalize = "none",
}: AppInputProps) => {
  return (
    <View style={appStyles.inputContainer}>
      <Text style={appStyles.inputLabel}>{label}</Text>

      <TextInput
        style={[
          appStyles.input,
          multiline ? appStyles.textArea : null,
          error ? appStyles.inputError : null,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9A9284"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCapitalize={autoCapitalize}
      />

      {error ? <Text style={appStyles.errorText}>{error}</Text> : null}
    </View>
  );
};