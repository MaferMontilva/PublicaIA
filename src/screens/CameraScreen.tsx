import { CameraView, useCameraPermissions } from "expo-camera";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { AppButton } from "../components/common/AppButton";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "Camera">;

export const CameraScreen = ({ navigation }: Props) => {
  const cameraRef = useRef<CameraView | null>(null);

  const [permission, requestPermission] = useCameraPermissions();
  const [isTakingPhoto, setIsTakingPhoto] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<string>("");

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleTakePhoto = async (): Promise<void> => {
    if (!cameraRef.current) {
      Alert.alert("Cámara no disponible", "Espera un momento e intenta nuevamente.");
      return;
    }

    try {
      setIsTakingPhoto(true);

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.7,
        base64: true,
      });

      if (!photo?.uri || !photo.base64) {
        Alert.alert("Error", "No se pudo obtener la imagen correctamente.");
        return;
      }

      setImageUri(photo.uri);
      setImageBase64(photo.base64);
    } catch (error) {
      Alert.alert("Error", "No se pudo tomar la foto. Intenta nuevamente.");
    } finally {
      setIsTakingPhoto(false);
    }
  };

  const handleRetakePhoto = (): void => {
    setImageUri("");
    setImageBase64("");
  };

  const handleContinue = (): void => {
    if (!imageUri || !imageBase64) {
      Alert.alert("Foto requerida", "Primero debes tomar una foto del producto.");
      return;
    }

    navigation.navigate("ProductForm", {
      imagenUri: imageUri,
      imagenBase64: imageBase64,
    });
  };

  if (!permission) {
    return (
      <View style={appStyles.cameraFlowContainer}>
        <View style={appStyles.cameraFlowCard}>
          <Text style={appStyles.cameraFlowTitle}>Cargando cámara...</Text>
        </View>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={appStyles.cameraFlowContainer}>
        <View style={appStyles.cameraTopBar}>
          <TouchableOpacity
            style={appStyles.cameraBackButton}
            onPress={handleGoBack}
            activeOpacity={0.85}
          >
            <Text style={appStyles.cameraBackButtonText}>‹ Inicio</Text>
          </TouchableOpacity>

          <Text style={appStyles.cameraStepText}>Paso 1 de 3</Text>
        </View>

        <View style={appStyles.cameraFlowCard}>
          <Text style={appStyles.cameraFlowTitle}>Permiso de cámara</Text>

          <Text style={appStyles.cameraPermissionText}>
            Publica IA necesita acceso a la cámara para fotografiar el producto.
          </Text>

          <AppButton
            title="Permitir cámara"
            onPress={requestPermission}
            variant="primary"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={appStyles.cameraFlowContainer}>
      <View style={appStyles.cameraTopBar}>
        <TouchableOpacity
          style={appStyles.cameraBackButton}
          onPress={handleGoBack}
          activeOpacity={0.85}
        >
          <Text style={appStyles.cameraBackButtonText}>‹ Inicio</Text>
        </TouchableOpacity>

        <Text style={appStyles.cameraStepText}>Paso 1 de 3</Text>
      </View>

      <View style={appStyles.cameraFlowCard}>
        <Text style={appStyles.cameraFlowTitle}>Fotografía tu producto</Text>

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

        <View style={appStyles.cameraFrame}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={appStyles.cameraPhotoPreview} />
          ) : (
            <CameraView ref={cameraRef} style={appStyles.cameraRealView} facing="back" />
          )}
        </View>

        <View style={appStyles.cameraHintBox}>
          <Text style={appStyles.cameraHintText}>
            Usa buena luz y enfoca solo el producto.
          </Text>
        </View>

        {imageUri ? (
          <View style={appStyles.cameraButtonGroup}>
            <AppButton
              title="Tomar otra foto"
              onPress={handleRetakePhoto}
              variant="outline"
            />

            <AppButton
              title="Continuar con esta foto"
              onPress={handleContinue}
              variant="primary"
            />
          </View>
        ) : (
          <AppButton
            title={isTakingPhoto ? "Tomando foto..." : "Tomar foto"}
            onPress={handleTakePhoto}
            variant="primary"
            disabled={isTakingPhoto}
          />
        )}
      </View>
    </View>
  );
};