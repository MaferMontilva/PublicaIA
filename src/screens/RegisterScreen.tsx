import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AppButton } from "../components/common/AppButton";
import { AppInput } from "../components/common/AppInput";
import { ErrorMessage } from "../components/common/ErrorMessage";
import { LoadingMessage } from "../components/common/LoadingMessage";
import { useAuth } from "../context/AuthContext";
import { AuthStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";
import { RegisterFormData } from "../types/user";
import { validateRegisterForm } from "../utils/validations";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

export const RegisterScreen = ({ navigation }: Props) => {
  const { register, isLoading } = useAuth();

  const [formData, setFormData] = useState<RegisterFormData>({
    nombre: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleRegister = async () => {
    const validation = validateRegisterForm(formData);

    if (!validation.isValid) {
      setErrorMessage(validation.message);
      return;
    }

    try {
      await register(formData);
    } catch (error) {
      setErrorMessage(
        "No se pudo crear la cuenta. Verifica los datos e inténtalo nuevamente."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={appStyles.authContainer}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={appStyles.authScrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={appStyles.authHeader}>
          <View style={appStyles.authLogoWrapper}>
            <Image
              source={require("../../assets/images/logo-publicaia.png")}
              style={appStyles.authLogo}
            />
          </View>


        </View>

        <View style={appStyles.authCard}>
          <Text style={appStyles.authCardTitle}>Registro</Text>

          <Text style={appStyles.authCardText}>
            Crea tu cuenta para guardar tus publicaciones y consultar tu
            historial.
          </Text>

          <ErrorMessage message={errorMessage} />

          <AppInput
            label="Nombre"
            value={formData.nombre}
            onChangeText={(text) => handleChange("nombre", text)}
            placeholder="Ingresa tu nombre"
            autoCapitalize="words"
          />

          <AppInput
            label="Correo electrónico"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="ejemplo@correo.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <AppInput
            label="Contraseña"
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            placeholder="Crea una contraseña"
            secureTextEntry
          />

          {isLoading ? (
            <LoadingMessage message="Creando cuenta..." />
          ) : (
            <AppButton title="Crear cuenta" onPress={handleRegister} />
          )}

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