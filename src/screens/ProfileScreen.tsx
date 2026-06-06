import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

import { LoadingMessage } from "../components/common/LoadingMessage";
import { useAuth } from "../context/AuthContext";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles, colors } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "Profile">;

type ProfileActionButtonProps = {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  variant: "primary" | "outline";
  onPress: () => void;
  disabled?: boolean;
};

const ProfileActionButton = ({
  title,
  iconName,
  variant,
  onPress,
  disabled = false,
}: ProfileActionButtonProps) => {
  const isPrimary = variant === "primary";

  return (
    <TouchableOpacity
      style={[
        appStyles.catalogActionChip,
        isPrimary && appStyles.catalogActionChipPrimary,
        disabled && appStyles.catalogActionChipDisabled,
      ]}
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}
    >
      <Ionicons
        name={iconName}
        size={15}
        color={isPrimary ? colors.textLight : colors.secondaryDark}
      />

      <Text
        style={[
          appStyles.catalogActionChipText,
          isPrimary && appStyles.catalogActionChipTextPrimary,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const ProfileScreen = ({ navigation }: Props) => {
  const { user, logout, isLoading } = useAuth();

  const handleGoHome = (): void => {
    navigation.navigate("Home");
  };

  const handleLogout = async (): Promise<void> => {
    await logout();
  };

  if (isLoading) {
    return (
      <View style={appStyles.profileScreen}>
        <View style={appStyles.profileHeaderArea}>
          <Text style={appStyles.screenHeaderTitle}>Perfil</Text>
          <Text style={appStyles.screenHeaderStepText}>
            Cerrando sesión...
          </Text>
        </View>

        <View style={appStyles.profileBody}>
          <LoadingMessage message="Cerrando sesión..." />
        </View>
      </View>
    );
  }

  return (
    <View style={appStyles.profileScreen}>
      <View style={appStyles.profileHeaderArea}>
        <Text style={appStyles.screenHeaderTitle}>Perfil</Text>
        <Text style={appStyles.screenHeaderStepText}>
          Administra tu cuenta
        </Text>
      </View>

      <View style={appStyles.profileBody}>
        <View style={appStyles.profileCard}>
          <View style={appStyles.profileAvatar}>
            <Text style={appStyles.profileAvatarText}>
              {(user?.nombre ?? "U").charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={appStyles.profileName}>
            {user?.nombre ?? "Usuario"}
          </Text>

          <Text style={appStyles.profileEmail}>
            {user?.email ?? "Sin correo registrado"}
          </Text>

          <View style={appStyles.profileInfoBox}>
            <View style={appStyles.profileInfoRow}>
              <Ionicons
                name="person-outline"
                size={20}
                color={colors.secondaryDark}
              />

              <Text style={appStyles.profileInfoText}>
                Nombre: {user?.nombre ?? "Usuario"}
              </Text>
            </View>

            <View style={appStyles.profileInfoRow}>
              <Ionicons
                name="mail-outline"
                size={20}
                color={colors.secondaryDark}
              />

              <Text style={appStyles.profileInfoText}>
                Correo: {user?.email ?? "Sin correo registrado"}
              </Text>
            </View>
          </View>
        </View>

        <View style={appStyles.profileActionsCard}>
          <Text style={appStyles.profileActionsTitle}>Opciones de cuenta</Text>

          <Text style={appStyles.profileActionsText}>
            Puedes volver al inicio para seguir creando publicaciones o cerrar
            sesión de forma segura.
          </Text>

          <View style={appStyles.catalogActionsRow}>
            <ProfileActionButton
              title="Inicio"
              iconName="home-outline"
              variant="primary"
              onPress={handleGoHome}
            />

            <ProfileActionButton
              title="Cerrar sesión"
              iconName="log-out-outline"
              variant="outline"
              onPress={() => {
                void handleLogout();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};