import { useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from "react";
import { Alert, Image, Text, View } from "react-native";

import { AppButton } from "../components/common/AppButton";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "Camera">;

export const CameraScreen = ({ navigation }: Props) => {
  const cameraRef = useRef<CameraView | null>(null);
  const isFocused = useIsFocused();

  const [permission, requestPermission] = useCameraPermissions();
  const [isTakingPhoto, setIsTakingPhoto] = useState<boolean>(false);
  const [isPickingImage, setIsPickingImage] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<string>("");

  const handleGoBack = (): void => {
    setImageUri("");
    setImageBase64("");
    navigation.goBack();
  };

  const handleGoHome = (): void => {
    setImageUri("");
    setImageBase64("");
    navigation.navigate("Home");
  };

  const goToProductForm = (uri: string, base64: string): void => {
    navigation.navigate("ProductForm", {
      imagenUri: uri,
      imagenBase64: base64,
    });
  };

  const handleTakePhoto = async (): Promise<void> => {
    if (!cameraRef.current) {
      Alert.alert(
        "Cámara no disponible",
        "Espera un momento e intenta nuevamente. También puedes cargar una imagen desde tu galería."
      );
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
      Alert.alert(
        "Error",
        "No se pudo tomar la foto. Puedes intentar cargando una imagen desde la galería."
      );
    } finally {
      setIsTakingPhoto(false);
    }
  };

  const handlePickImage = async (): Promise<void> => {
    try {
      setIsPickingImage(true);

      const galleryPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!galleryPermission.granted) {
        Alert.alert(
          "Permiso requerido",
          "Publica IA necesita acceso a tu galería para seleccionar una imagen del producto."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.7,
        base64: true,
      });

      if (result.canceled) {
        return;
      }

      const selectedImage = result.assets[0];

      if (!selectedImage.uri || !selectedImage.base64) {
        Alert.alert(
          "Error",
          "No se pudo obtener la imagen seleccionada correctamente."
        );
        return;
      }

      setImageUri(selectedImage.uri);
      setImageBase64(selectedImage.base64);
    } catch (error) {
      Alert.alert(
        "Error",
        "No se pudo cargar la imagen desde la galería. Intenta nuevamente."
      );
    } finally {
      setIsPickingImage(false);
    }
  };

  const handleRetakePhoto = (): void => {
    setImageUri("");
    setImageBase64("");
  };

  const handleContinue = (): void => {
    if (!imageUri || !imageBase64) {
      Alert.alert(
        "Imagen requerida",
        "Primero debes tomar una foto o cargar una imagen del producto."
      );
      return;
    }

    goToProductForm(imageUri, imageBase64);
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
        <ScreenHeader
          title="Fotografía tu producto"
          stepText="Paso 1 de 3"
          onBack={handleGoBack}
          onHome={handleGoHome}
        />

        <View style={appStyles.cameraFlowCard}>
          <Text style={appStyles.cameraFlowTitle}>Agrega una imagen</Text>

          <Text style={appStyles.cameraPermissionText}>
            Puedes permitir la cámara para tomar una foto del producto o cargar
            una imagen desde tu galería.
          </Text>

          <AppButton
            title="Permitir cámara"
            onPress={requestPermission}
            variant="primary"
          />

          <AppButton
            title={isPickingImage ? "Cargando imagen..." : "Cargar desde galería"}
            onPress={() => {
              void handlePickImage();
            }}
            variant="outline"
            disabled={isPickingImage}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={appStyles.cameraFlowContainer}>
      <ScreenHeader
        title="Fotografía tu producto"
        stepText="Paso 1 de 3"
        onBack={handleGoBack}
        onHome={handleGoHome}
      />

      <View style={appStyles.cameraFlowCard}>
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
            <Image
              source={{ uri: imageUri }}
              style={appStyles.cameraPhotoPreview}
            />
          ) : isFocused ? (
            <CameraView
              ref={cameraRef}
              style={appStyles.cameraRealView}
              facing="back"
            />
          ) : (
            <View style={appStyles.cameraRealView}>
              <Text style={appStyles.cameraHintText}>Cámara pausada</Text>
            </View>
          )}
        </View>

        <View style={appStyles.cameraHintBox}>
          <Text style={appStyles.cameraHintText}>
            Usa buena luz, enfoca solo el producto o selecciona una imagen clara
            desde tu galería.
          </Text>
        </View>

        {imageUri ? (
          <View style={appStyles.cameraButtonGroup}>
            <AppButton
              title="Cambiar imagen"
              onPress={handleRetakePhoto}
              variant="outline"
            />

            <AppButton
              title="Continuar con esta imagen"
              onPress={handleContinue}
              variant="primary"
            />
          </View>
        ) : (
          <View style={appStyles.cameraButtonGroup}>
            <AppButton
              title={isTakingPhoto ? "Tomando foto..." : "Tomar foto"}
              onPress={() => {
                void handleTakePhoto();
              }}
              variant="primary"
              disabled={isTakingPhoto || isPickingImage}
            />

            <AppButton
              title={isPickingImage ? "Cargando imagen..." : "Cargar galería"}
              onPress={() => {
                void handlePickImage();
              }}
              variant="outline"
              disabled={isTakingPhoto || isPickingImage}
            />
          </View>
        )}
      </View>
    </View>
  );
};