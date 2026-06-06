import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useAuth } from "../context/AuthContext";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles, colors } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const { user } = useAuth();

  const handleCreatePublication = (): void => {
    navigation.navigate("Camera");
  };

  const handleGoToCatalog = (): void => {
    navigation.navigate("History");
  };

  const handleGoToProfile = (): void => {
    navigation.navigate("Profile");
  };

  return (
    <View style={appStyles.homeProContainer}>
      <View style={appStyles.homeProTopGlow} />
      <View style={appStyles.homeProSecondGlow} />

      <ScrollView
        contentContainerStyle={appStyles.homeProScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={appStyles.homeProHeader}>
          <View>
            <Text style={appStyles.homeProGreeting}>Hola,</Text>
            <Text style={appStyles.homeProName}>
              {user?.nombre ?? "emprendedor"} 👋
            </Text>
          </View>

          <TouchableOpacity
            style={appStyles.homeProAvatarSmall}
            onPress={handleGoToProfile}
            activeOpacity={0.85}
          >
            <Text style={appStyles.homeProAvatarText}>
              {(user?.nombre ?? "E").charAt(0).toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={appStyles.homeProSearchCard}
          onPress={handleGoToCatalog}
          activeOpacity={0.88}
        >
          <Ionicons
            name="search-outline"
            size={24}
            color={colors.textPrimary}
          />

          <Text style={appStyles.homeProSearchText}>
            Buscar en mi catálogo
          </Text>
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={appStyles.homeProChipScroll}
          contentContainerStyle={appStyles.homeProChipContent}
        >
          <TouchableOpacity
            style={appStyles.homeProChip}
            onPress={handleCreatePublication}
            activeOpacity={0.85}
          >
            <Ionicons
              name="camera-outline"
              size={20}
              color={colors.accentBlue}
            />

            <Text style={appStyles.homeProChipText}>Crear</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={appStyles.homeProChip}
            onPress={handleGoToCatalog}
            activeOpacity={0.85}
          >
            <Ionicons
              name="albums-outline"
              size={20}
              color={colors.accentGreen}
            />

            <Text style={appStyles.homeProChipText}>Catálogo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={appStyles.homeProChip}
            onPress={handleCreatePublication}
            activeOpacity={0.85}
          >
            <Ionicons
              name="sparkles-outline"
              size={20}
              color={colors.secondary}
            />

            <Text style={appStyles.homeProChipText}>IA</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={appStyles.homeProMainTitle}>
          Publica productos con inteligencia artificial
        </Text>

        <Text style={appStyles.homeProMainSubtitle}>
          Toma una foto, deja que la IA detecte los datos y genera contenido
          listo para vender.
        </Text>

        <View style={appStyles.homeProHeroCard}>
          <View style={appStyles.homeProHeroCircleOne} />
          <View style={appStyles.homeProHeroCircleTwo} />

          <View style={appStyles.homeProHeroBadge}>
            <Ionicons
              name="sparkles-outline"
              size={16}
              color={colors.textLight}
            />

            <Text style={appStyles.homeProHeroBadgeText}>PUBLICA IA</Text>
          </View>

          <Text style={appStyles.homeProHeroTitle}>
            Crea contenido comercial en segundos
          </Text>

          <Text style={appStyles.homeProHeroText}>
            Genera título, descripción, hashtags, precio sugerido y consejos de
            venta desde una imagen.
          </Text>

          <TouchableOpacity
            style={appStyles.homeProHeroButton}
            onPress={handleCreatePublication}
            activeOpacity={0.88}
          >
            <Ionicons
              name="add-circle-outline"
              size={22}
              color={colors.secondaryDark}
            />

            <Text style={appStyles.homeProHeroButtonText}>
              Crear publicación
            </Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.homeProAiCard}>
          <View style={appStyles.homeProAiHeader}>
            <View style={appStyles.homeProAiIcon}>
              <Ionicons
                name="sparkles-outline"
                size={30}
                color={colors.secondaryDark}
              />
            </View>

            <Text style={appStyles.homeProAiTitle}>
              Flujo inteligente para vender mejor
            </Text>
          </View>

          <Text style={appStyles.homeProAiText}>
            PublicaIA combina imagen, datos del producto e IA para crear
            contenido comercial de forma rápida.
          </Text>

          <View style={appStyles.homeProAiSteps}>
            <View style={appStyles.homeProAiStep}>
              <View style={appStyles.homeProAiStepCircle}>
                <Ionicons
                  name="camera-outline"
                  size={22}
                  color={colors.accentBlue}
                />
              </View>

              <Text style={appStyles.homeProAiStepText}>Foto</Text>
            </View>

            <View style={appStyles.homeProAiStep}>
              <View style={appStyles.homeProAiStepCircle}>
                <Ionicons
                  name="sparkles-outline"
                  size={22}
                  color={colors.secondary}
                />
              </View>

              <Text style={appStyles.homeProAiStepText}>IA</Text>
            </View>

            <View style={appStyles.homeProAiStep}>
              <View style={appStyles.homeProAiStepCircle}>
                <Ionicons
                  name="megaphone-outline"
                  size={22}
                  color={colors.accentPink}
                />
              </View>

              <Text style={appStyles.homeProAiStepText}>Publica</Text>
            </View>
          </View>
        </View>

        <View style={appStyles.homeProSectionRow}>
          <Text style={appStyles.homeProSectionTitle}>Accesos rápidos</Text>
        </View>

        <View style={appStyles.homeProMainActionsRow}>
          <TouchableOpacity
            style={appStyles.homeProMainActionCard}
            onPress={handleGoToCatalog}
            activeOpacity={0.88}
          >
            <View
              style={[
                appStyles.homeProMainActionIcon,
                appStyles.homeProMainActionIconSoft,
              ]}
            >
              <Ionicons
                name="albums-outline"
                size={30}
                color={colors.secondaryDark}
              />
            </View>

            <Text style={appStyles.homeProMainActionTitle}>Catálogo</Text>

            <Text style={appStyles.homeProMainActionText}>
              Revisa tus publicaciones guardadas.
            </Text>
          </TouchableOpacity>

          <View
            style={[
              appStyles.homeProMainActionCard,
              appStyles.homeProMainActionCardAccent,
            ]}
          >
            <View
              style={[
                appStyles.homeProMainActionIcon,
                appStyles.homeProMainActionIconAccent,
              ]}
            >
              <Ionicons
                name="logo-instagram"
                size={30}
                color={colors.accentPink}
              />
            </View>

            <Text style={appStyles.homeProMainActionTitle}>Redes</Text>

            <Text style={appStyles.homeProMainActionText}>
              Próximamente podrás publicar en Instagram, WhatsApp y más.
            </Text>
          </View>
        </View>

        <View style={appStyles.homeProSectionRow}>
          <Text style={appStyles.homeProSectionTitle}>Herramientas IA</Text>
        </View>

        <View style={appStyles.homeProToolGrid}>
          <View style={appStyles.homeProToolCard}>
            <View style={[appStyles.homeProToolIcon, appStyles.homeProIconBlue]}>
              <Ionicons
                name="document-text-outline"
                size={26}
                color={colors.accentBlue}
              />
            </View>

            <Text style={appStyles.homeProToolTitle}>Descripción</Text>

            <Text style={appStyles.homeProToolText}>
              La IA redacta textos comerciales para tu producto.
            </Text>
          </View>

          <View style={appStyles.homeProToolCard}>
            <View style={[appStyles.homeProToolIcon, appStyles.homeProIconPink]}>
              <Ionicons
                name="pricetag-outline"
                size={26}
                color={colors.accentPink}
              />
            </View>

            <Text style={appStyles.homeProToolTitle}>Hashtags</Text>

            <Text style={appStyles.homeProToolText}>
              Genera etiquetas para redes sociales.
            </Text>
          </View>

          <View style={appStyles.homeProToolCard}>
            <View style={[appStyles.homeProToolIcon, appStyles.homeProIconGold]}>
              <Ionicons
                name="cash-outline"
                size={26}
                color={colors.accentGold}
              />
            </View>

            <Text style={appStyles.homeProToolTitle}>Precio sugerido</Text>

            <Text style={appStyles.homeProToolText}>
              Recibe una idea de rango de precio.
            </Text>
          </View>

          <View style={appStyles.homeProToolCard}>
            <View
              style={[appStyles.homeProToolIcon, appStyles.homeProIconGreen]}
            >
              <Ionicons
                name="bulb-outline"
                size={26}
                color={colors.accentGreen}
              />
            </View>

            <Text style={appStyles.homeProToolTitle}>Consejo venta</Text>

            <Text style={appStyles.homeProToolText}>
              Obtén recomendaciones para vender mejor.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};