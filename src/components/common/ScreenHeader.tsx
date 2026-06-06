import { Text, TouchableOpacity, View } from "react-native";
import { appStyles } from "../../styles/appStyles";

interface ScreenHeaderProps {
  title?: string;
  stepText?: string;
  onBack: () => void;
  onHome: () => void;
}

export const ScreenHeader = ({
  title,
  stepText,
  onBack,
  onHome,
}: ScreenHeaderProps) => {
  return (
    <View style={appStyles.screenHeaderContainer}>
      <View style={appStyles.screenHeaderTopRow}>
        <TouchableOpacity
          style={appStyles.screenHeaderButton}
          onPress={onBack}
          activeOpacity={0.85}
        >
          <Text style={appStyles.screenHeaderButtonText}>‹ Atrás</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={appStyles.screenHeaderButton}
          onPress={onHome}
          activeOpacity={0.85}
        >
          <Text style={appStyles.screenHeaderButtonText}>Inicio</Text>
        </TouchableOpacity>
      </View>

      {title ? <Text style={appStyles.screenHeaderTitle}>{title}</Text> : null}

      {stepText ? (
        <Text style={appStyles.screenHeaderStepText}>{stepText}</Text>
      ) : null}
    </View>
  );
};