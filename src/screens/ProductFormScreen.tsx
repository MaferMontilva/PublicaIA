import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import { AppButton } from "../components/common/AppButton";
import { AppInput } from "../components/common/AppInput";
import { ErrorMessage } from "../components/common/ErrorMessage";
import { LoadingMessage } from "../components/common/LoadingMessage";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { MainStackParamList } from "../navigation/typesNavigation";
import { generateAiContent } from "../services/aiService";
import { appStyles } from "../styles/appStyles";
import { AiGeneratedContent, AiRequestData } from "../types/ai";
import { ProductFormData } from "../types/product";

type Props = NativeStackScreenProps<MainStackParamList, "ProductForm">;

export const ProductFormScreen = ({ navigation, route }: Props) => {
  const [formData, setFormData] = useState<ProductFormData>({
    nombre: "",
    categoria: "",
    precio: "",
    publicoObjetivo: "",
    detalles: "",
    imagenUri: route.params.imagenUri,
    imagenBase64: route.params.imagenBase64,
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleGoHome = (): void => {
    navigation.navigate("Home");
  };

  const handleChange = (
    field: keyof Omit<ProductFormData, "imagenUri" | "imagenBase64">,
    value: string
  ): void => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handlePriceChange = (value: string): void => {
    const cleanedValue = value.replace(/[^0-9.,]/g, "");

    const separators = cleanedValue.match(/[.,]/g);
    const hasManySeparators = separators !== null && separators.length > 1;

    const pricePattern = /^\d*([.,]\d{0,2})?$/;

    if (hasManySeparators || !pricePattern.test(cleanedValue)) {
      setPriceError("Ingresa solo números. Ejemplo: 10, 10.50 o 10,50");
      return;
    }

    setPriceError("");
    handleChange("precio", cleanedValue);
  };

  const validateForm = (): boolean => {
    if (!formData.imagenUri || !formData.imagenBase64) {
      setErrorMessage("No se encontró la imagen del producto.");
      return false;
    }

    if (priceError) {
      setErrorMessage("Corrige el precio antes de generar la publicación.");
      return false;
    }

    return true;
  };

  const handleGenerate = async (): Promise<void> => {
    if (!validateForm()) {
      return;
    }

    const productData: ProductFormData = {
      ...formData,
      nombre: formData.nombre.trim(),
      categoria: formData.categoria.trim(),
      precio: formData.precio.trim(),
      publicoObjetivo: formData.publicoObjetivo.trim(),
      detalles: formData.detalles.trim(),
    };

    const aiRequestData: AiRequestData = {
      nombre: productData.nombre || "No especificado",
      categoria: productData.categoria || "No especificada",
      precio: productData.precio || "No especificado",
      publicoObjetivo: productData.publicoObjetivo || "No especificado",
      detalles: productData.detalles || "No especificados",
      imagenBase64: productData.imagenBase64,
    };

    try {
      setErrorMessage("");
      setIsGenerating(true);

      const aiContent: AiGeneratedContent = await generateAiContent(
        aiRequestData
      );

      navigation.navigate("AiResult", {
        productData,
        aiContent,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "No se pudo generar el contenido con IA.";

      setErrorMessage(message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={appStyles.cameraFlowContainer}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={appStyles.formScrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <ScreenHeader
          title="Agrega pistas para la IA"
          stepText="Paso 2 de 3"
          onBack={handleGoBack}
          onHome={handleGoHome}
        />

        <View style={appStyles.formCard}>
          <Text style={appStyles.sectionTitle}>Datos del producto</Text>

          <Text style={appStyles.sectionText}>
            La IA analizará la foto. Puedes generar la publicación ahora o
            escribir pistas opcionales para mejorar el resultado.
          </Text>

          <View style={appStyles.productImageWrapper}>
            <Image
              source={{ uri: formData.imagenUri }}
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
                Pistas
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

          <ErrorMessage message={errorMessage} />

          {isGenerating ? (
            <LoadingMessage message="Analizando foto y generando publicación..." />
          ) : (
            <AppButton
              title="Generar publicación con IA"
              onPress={handleGenerate}
              variant="primary"
            />
          )}
        </View>

        <View style={appStyles.formCard}>
          <Text style={appStyles.sectionTitle}>Pistas opcionales</Text>

          <Text style={appStyles.sectionText}>
            Estos datos no son obligatorios. Úsalos solo si quieres orientar
            mejor a la IA.
          </Text>

          <AppInput
            label="Nombre del producto opcional"
            value={formData.nombre}
            onChangeText={(text) => handleChange("nombre", text)}
            placeholder="Ejemplo: reloj, bolso, funda, perfume..."
          />

          <AppInput
            label="Categoría opcional"
            value={formData.categoria}
            onChangeText={(text) => handleChange("categoria", text)}
            placeholder="Ejemplo: accesorios, ropa, tecnología..."
          />

          <AppInput
            label="Precio opcional"
            value={formData.precio}
            onChangeText={handlePriceChange}
            placeholder="Ejemplo: 10, 10.50 o 10,50"
            keyboardType="decimal-pad"
            error={priceError}
          />

          <AppInput
            label="Público objetivo opcional"
            value={formData.publicoObjetivo}
            onChangeText={(text) => handleChange("publicoObjetivo", text)}
            placeholder="Ejemplo: jóvenes, deportistas, emprendedores..."
          />

          <AppInput
            label="Detalles opcionales"
            value={formData.detalles}
            onChangeText={(text) => handleChange("detalles", text)}
            placeholder="Ejemplo: color, estado, material, uso..."
            multiline
            numberOfLines={4}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};