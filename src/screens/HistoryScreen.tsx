import { Text, View } from "react-native";
import { appStyles } from "../styles/appStyles";

export const HistoryScreen = () => {
  return (
    <View style={appStyles.screen}>
      <Text style={appStyles.sectionTitle}>Historial</Text>

      <View style={appStyles.card}>
        <Text style={appStyles.normalText}>
          Aún no tienes publicaciones guardadas.
        </Text>
        <Text style={appStyles.mutedText}>
          Cuando generes contenido con IA, aparecerá aquí.
        </Text>
      </View>
    </View>
  );
};