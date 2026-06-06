import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { AppButton } from "../components/common/AppButton";
import { ErrorMessage } from "../components/common/ErrorMessage";
import { LoadingMessage } from "../components/common/LoadingMessage";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { useAuth } from "../context/AuthContext";
import { MainStackParamList } from "../navigation/typesNavigation";
import { saveProduct } from "../services/productService";
import { appStyles } from "../styles/appStyles";
import { NewSavedProduct } from "../types/product";

type Props = NativeStackScreenProps<MainStackParamList, "AiResult">;

export const AiResultScreen = ({ navigation, route }: Props) => {
  const { productData, aiContent } = route.params;
  const { user } = useAuth();

  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getFinalValue = (
    userValue: string,
    aiValue: string,
    fallback: string,
  ): string => {
    const cleanUserValue = userValue.trim();
    const cleanAiValue = aiValue.trim();

    if (
      cleanUserValue.length > 0 &&
      cleanUserValue.toLowerCase() !== "no especificado" &&
      cleanUserValue.toLowerCase() !== "no especificada" &&
      cleanUserValue.toLowerCase() !== "no especificados"
    ) {
      return cleanUserValue;
    }

    if (cleanAiValue.length > 0) {
      return cleanAiValue;
    }

    return fallback;
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleGoHome = (): void => {
    navigation.navigate("Home");
  };

  const handleSaveProduct = async (): Promise<void> => {
    if (!user) {
      setErrorMessage("No se encontró un usuario autenticado.");
      return;
    }

    const newProduct: NewSavedProduct = {
      idUsuario: user.idUsuario,
      nombre: getFinalValue(
        productData.nombre,
        aiContent.nombreDetectado,
        "Producto no identificado",
      ),
      categoria: getFinalValue(
        productData.categoria,
        aiContent.categoriaDetectada,
        "Categoría no especificada",
      ),
      precio: getFinalValue(
        productData.precio,
        aiContent.precioSugerido,
        "Precio referencial no disponible",
      ),
      publicoObjetivo: getFinalValue(
        productData.publicoObjetivo,
        aiContent.publicoObjetivoSugerido,
        "Público general",
      ),
      detalles: getFinalValue(
        productData.detalles,
        aiContent.detallesDetectados,
        "Detalles detectados automáticamente por IA.",
      ),
      imagenUrl: productData.imagenBase64.startsWith("data:image")
        ? productData.imagenBase64
        : `data:image/jpeg;base64,${productData.imagenBase64}`,

      nombreDetectado: aiContent.nombreDetectado,
      categoriaDetectada: aiContent.categoriaDetectada,
      precioSugerido: aiContent.precioSugerido,
      publicoObjetivoSugerido: aiContent.publicoObjetivoSugerido,
      detallesDetectados: aiContent.detallesDetectados,

      tituloSugerido: aiContent.tituloSugerido,
      descripcion: aiContent.descripcion,
      mensajeRedes: aiContent.mensajeRedes,
      hashtags: aiContent.hashtags,
      consejoVenta: aiContent.consejoVenta,
      sugerenciaFoto: aiContent.sugerenciaFoto,
      rangoPrecio: aiContent.rangoPrecio,
      notaPrecio: aiContent.notaPrecio,
      promptEdicionFoto: aiContent.promptEdicionFoto,
    };

    try {
      setErrorMessage("");
      setIsSaving(true);

      await saveProduct(newProduct);

      navigation.navigate("History");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "No se pudo guardar la publicación. Intenta nuevamente.";

      setErrorMessage(message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <ScrollView
      style={appStyles.aiResultScreen}
      contentContainerStyle={appStyles.aiResultScrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={appStyles.aiResultHeaderArea}>
        <ScreenHeader
          title="Resultado generado con IA"
          stepText="Paso 3 de 3"
          onBack={handleGoBack}
          onHome={handleGoHome}
        />
      </View>

      <View style={appStyles.aiResultBody}>
        <View style={appStyles.aiResultMainCard}>
          <Text style={appStyles.sectionTitle}>Resultado IA</Text>

          <Text style={appStyles.aiResultMutedText}>
            Revisa la publicación sugerida antes de guardarla en tu catálogo.
          </Text>

          <View style={appStyles.productImageWrapper}>
            <Image
              source={{ uri: productData.imagenUri }}
              style={appStyles.productImagePreview}
            />
          </View>

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
                  appStyles.homeTimelineCircleActive,
                ]}
              >
                <Text
                  style={[
                    appStyles.homeTimelineNumber,
                    appStyles.homeTimelineNumberActive,
                  ]}
                >
                  2
                </Text>
              </View>
              <Text
                style={[
                  appStyles.homeTimelineLabel,
                  appStyles.homeTimelineLabelActive,
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
                  appStyles.homeTimelineCircleActive,
                ]}
              >
                <Text
                  style={[
                    appStyles.homeTimelineNumber,
                    appStyles.homeTimelineNumberActive,
                  ]}
                >
                  3
                </Text>
              </View>
              <Text
                style={[
                  appStyles.homeTimelineLabel,
                  appStyles.homeTimelineLabelActive,
                ]}
              >
                IA
              </Text>
            </View>
          </View>

          <ErrorMessage message={errorMessage} />

          <View style={appStyles.aiResultButtonArea}>
            {isSaving ? (
              <LoadingMessage message="Guardando publicación..." />
            ) : (
              <AppButton
                title="Guardar publicación"
                onPress={handleSaveProduct}
                variant="primary"
              />
            )}
          </View>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>
            Datos detectados por IA
          </Text>

          <Text style={appStyles.aiResultText}>
            Nombre: {aiContent.nombreDetectado}
          </Text>

          <Text style={appStyles.aiResultText}>
            Categoría: {aiContent.categoriaDetectada}
          </Text>

          <Text style={appStyles.aiResultText}>
            Precio sugerido: {aiContent.precioSugerido}
          </Text>

          <Text style={appStyles.aiResultText}>
            Público objetivo: {aiContent.publicoObjetivoSugerido}
          </Text>

          <Text style={appStyles.aiResultText}>
            Detalles: {aiContent.detallesDetectados}
          </Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>Título sugerido</Text>
          <Text style={appStyles.aiResultText}>{aiContent.tituloSugerido}</Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>Descripción comercial</Text>
          <Text style={appStyles.aiResultText}>{aiContent.descripcion}</Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>Mensaje para redes</Text>
          <Text style={appStyles.aiResultText}>{aiContent.mensajeRedes}</Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>Hashtags</Text>
          <Text style={appStyles.aiResultText}>
            {aiContent.hashtags.join(" ")}
          </Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>
            Rango de precio sugerido
          </Text>
          <Text style={appStyles.aiResultText}>{aiContent.rangoPrecio}</Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>Nota sobre el precio</Text>
          <Text style={appStyles.aiResultText}>{aiContent.notaPrecio}</Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>Consejo de venta</Text>
          <Text style={appStyles.aiResultText}>{aiContent.consejoVenta}</Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>
            Sugerencia para la foto
          </Text>
          <Text style={appStyles.aiResultText}>{aiContent.sugerenciaFoto}</Text>
        </View>

        <View style={appStyles.aiResultCard}>
          <Text style={appStyles.aiResultCardTitle}>
            Prompt para edición futura
          </Text>
          <Text style={appStyles.aiResultText}>
            {aiContent.promptEdicionFoto}
          </Text>
        </View>

        <AppButton
          title="Volver al inicio"
          onPress={handleGoHome}
          variant="outline"
        />
      </View>
    </ScrollView>
  );
};
