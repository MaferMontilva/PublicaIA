import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "AiResult">;

export const AiResultScreen = ({ route }: Props) => {
  const { aiContent } = route.params;

  return (
    <View style={appStyles.screen}>
      <Text style={appStyles.sectionTitle}>Resultado generado</Text>

      <View style={appStyles.card}>
        <Text style={appStyles.sectionTitle}>Descripción</Text>
        <Text style={appStyles.normalText}>{aiContent.descripcion}</Text>
      </View>

      <View style={appStyles.card}>
        <Text style={appStyles.sectionTitle}>Mensaje para redes</Text>
        <Text style={appStyles.normalText}>{aiContent.mensajeRedes}</Text>
      </View>

      <View style={appStyles.card}>
        <Text style={appStyles.sectionTitle}>Hashtags</Text>
        <Text style={appStyles.normalText}>{aiContent.hashtags.join(" ")}</Text>
      </View>

      <View style={appStyles.card}>
        <Text style={appStyles.sectionTitle}>Consejo de venta</Text>
        <Text style={appStyles.normalText}>{aiContent.consejoVenta}</Text>
      </View>

      <TouchableOpacity style={appStyles.primaryButton}>
        <Text style={appStyles.primaryButtonText}>Guardar publicación</Text>
      </TouchableOpacity>
    </View>
  );
};