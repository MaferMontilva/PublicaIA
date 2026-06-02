import { Text, TouchableOpacity, View } from "react-native";
import { appStyles } from "../styles/appStyles";

export const ProfileScreen = () => {
  return (
    <View style={appStyles.screen}>
      <Text style={appStyles.sectionTitle}>Perfil</Text>

      <View style={appStyles.card}>
        <Text style={appStyles.normalText}>Nombre: Mafer</Text>
        <Text style={appStyles.normalText}>Correo: usuario@correo.com</Text>
      </View>

      <TouchableOpacity style={appStyles.secondaryButton}>
        <Text style={appStyles.secondaryButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};