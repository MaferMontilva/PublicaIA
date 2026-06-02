import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

export const RegisterScreen = ({ navigation }: Props) => {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = () => {
    console.log("Crear cuenta", nombre, email, password);
  };

  return (
    <KeyboardAvoidingView
      style={appStyles.authContainer}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={appStyles.authScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={appStyles.authHeader}>
          <View style={appStyles.authLogoWrapper}>
            <Image
              source={require("../../assets/images/logo-publicaia.png")}
              style={appStyles.authLogo}
            />
          </View>

          <Text style={appStyles.authTitle}>Crear cuenta</Text>

          <Text style={appStyles.authSubtitle}>
            
          </Text>
        </View>

        <View style={appStyles.authCard}>
          <Text style={appStyles.authCardTitle}>Registro</Text>

          <Text style={appStyles.authLabel}>Nombre</Text>
          <TextInput
            style={appStyles.authInput}
            placeholder="Ingresa tu nombre"
            placeholderTextColor="#9B9283"
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={appStyles.authLabel}>Correo electrónico</Text>
          <TextInput
            style={appStyles.authInput}
            placeholder="ejemplo@correo.com"
            placeholderTextColor="#9B9283"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={appStyles.authLabel}>Contraseña</Text>
          <TextInput
            style={appStyles.authInput}
            placeholder="Crea una contraseña"
            placeholderTextColor="#9B9283"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={appStyles.authButton}
            onPress={handleRegister}
          >
            <Text style={appStyles.authButtonText}>Crear cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={appStyles.authLinkButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={appStyles.authLinkText}>
              ¿Ya tienes cuenta? Inicia sesión
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};