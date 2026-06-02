import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AppButton } from "../components/common/AppButton";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const handleCreatePublication = (): void => {
    navigation.navigate("Camera");
  };

  const handleGoToHistory = (): void => {
    navigation.navigate("History");
  };

  const handleGoToProfile = (): void => {
    navigation.navigate("Profile");
  };

  return (
    <View style={appStyles.homeContainer}>
      <ScrollView
        contentContainerStyle={appStyles.homeSimpleContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={appStyles.homeSimpleHeader}>
          <Image
            source={require("../../assets/images/logo-publicaia.png")}
            style={appStyles.homeSimpleLogo}
          />

          <Text style={appStyles.homeSimpleTitle}>Publica IA</Text>
        </View>

        <View style={appStyles.homeActionCard}>
          <Text style={appStyles.homeActionTitle}>
            Empieza una nueva publicación
          </Text>

          <View style={appStyles.homeTimelineRow}>
            <View style={appStyles.homeTimelineStep}>
              <View
                style={[
                  appStyles.homeTimelineCircle,
                  appStyles.homeTimelineCircleActive,
                ]}
              >
                <Text
                  style={[
                    appStyles.homeTimelineNumber,
                    appStyles.homeTimelineNumberActive,
                  ]}
                >
                  1
                </Text>
              </View>
              <Text
                style={[
                  appStyles.homeTimelineLabel,
                  appStyles.homeTimelineLabelActive,
                ]}
              >
                Foto
              </Text>
            </View>

            <View style={appStyles.homeTimelineLine} />

            <View style={appStyles.homeTimelineStep}>
              <View
                style={[
                  appStyles.homeTimelineCircle,
                  appStyles.homeTimelineCircleInactive,
                ]}
              >
                <Text
                  style={[
                    appStyles.homeTimelineNumber,
                    appStyles.homeTimelineNumberInactive,
                  ]}
                >
                  2
                </Text>
              </View>
              <Text
                style={[
                  appStyles.homeTimelineLabel,
                  appStyles.homeTimelineLabelInactive,
                ]}
              >
                Datos
              </Text>
            </View>

            <View style={appStyles.homeTimelineLine} />

            <View style={appStyles.homeTimelineStep}>
              <View
                style={[
                  appStyles.homeTimelineCircle,
                  appStyles.homeTimelineCircleInactive,
                ]}
              >
                <Text
                  style={[
                    appStyles.homeTimelineNumber,
                    appStyles.homeTimelineNumberInactive,
                  ]}
                >
                  3
                </Text>
              </View>
              <Text
                style={[
                  appStyles.homeTimelineLabel,
                  appStyles.homeTimelineLabelInactive,
                ]}
              >
                IA
              </Text>
            </View>
          </View>

          <AppButton
            title="Tomar foto del producto"
            onPress={handleCreatePublication}
            variant="primary"
          />
        </View>

        <View style={appStyles.homeSimpleOptions}>
          <TouchableOpacity
            style={appStyles.homeOptionCard}
            onPress={handleGoToHistory}
            activeOpacity={0.85}
          >
            <Text style={appStyles.homeOptionTitle}>Mis publicaciones</Text>
            <Text style={appStyles.homeOptionText}>Ver historial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={appStyles.homeOptionCard}
            onPress={handleGoToProfile}
            activeOpacity={0.85}
          >
            <Text style={appStyles.homeOptionTitle}>Mi perfil</Text>
            <Text style={appStyles.homeOptionText}>Cuenta y sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};