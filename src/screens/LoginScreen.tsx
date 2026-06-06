import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FirebaseError } from "firebase/app";
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
import { AuthFormData } from "../types/user";
import { validateLoginForm } from "../utils/validations";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

const getLoginErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    if (error.code === "auth/user-not-found") {
      return "El correo ingresado no está registrado.";
    }

    if (error.code === "auth/wrong-password") {
      return "La contraseña ingresada es incorrecta.";
    }

    if (error.code === "auth/invalid-credential") {
      return "El correo no está registrado o la contraseña es incorrecta.";
    }

    if (error.code === "auth/invalid-email") {
      return "El correo electrónico no tiene un formato válido.";
    }

    if (error.code === "auth/too-many-requests") {
      return "Se realizaron demasiados intentos. Espera unos minutos e inténtalo de nuevo.";
    }

    if (error.code === "auth/network-request-failed") {
      return "No hay conexión con Firebase. Revisa tu internet e inténtalo nuevamente.";
    }
  }

  return "No se pudo iniciar sesión. Inténtalo nuevamente.";
};

export const LoginScreen = ({ navigation }: Props) => {
  const { login, isLoading } = useAuth();

  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (field: keyof AuthFormData, value: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleLogin = async (): Promise<void> => {
    const loginData: AuthFormData = {
      email: formData.email.trim(),
      password: formData.password,
    };

    const validation = validateLoginForm(loginData);

    if (!validation.isValid) {
      setErrorMessage(validation.message);
      return;
    }

    setErrorMessage("");

    try {
      await login(loginData);
    } catch (error) {
      setErrorMessage(getLoginErrorMessage(error));
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
          <Text style={appStyles.authCardTitle}>Bienvenida</Text>

          <Text style={appStyles.authCardText}>
            Inicia sesión para crear, guardar y consultar tus publicaciones.
          </Text>

          <ErrorMessage message={errorMessage} />

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
            placeholder="Ingresa tu contraseña"
            secureTextEntry
          />

          {isLoading ? (
            <LoadingMessage message="Iniciando sesión..." />
          ) : (
            <AppButton title="Iniciar sesión" onPress={handleLogin} />
          )}

          <TouchableOpacity
            style={appStyles.authLinkButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={appStyles.authLinkText}>
              ¿No tienes cuenta? Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};