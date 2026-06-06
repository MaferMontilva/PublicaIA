import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { AppInput } from "../components/common/AppInput";
import { ErrorMessage } from "../components/common/ErrorMessage";
import { LoadingMessage } from "../components/common/LoadingMessage";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { MainStackParamList } from "../navigation/typesNavigation";
import { deleteProduct, updateProduct } from "../services/productService";
import { appStyles, colors } from "../styles/appStyles";
import { SavedProduct } from "../types/product";

type Props = NativeStackScreenProps<MainStackParamList, "ProductDetail">;

type EditableTextField =
  | "tituloSugerido"
  | "nombre"
  | "categoria"
  | "precio"
  | "publicoObjetivo"
  | "detalles"
  | "descripcion"
  | "mensajeRedes"
  | "rangoPrecio"
  | "notaPrecio"
  | "consejoVenta"
  | "sugerenciaFoto"
  | "promptEdicionFoto";

type DetailActionButtonProps = {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  variant: "primary" | "outline" | "danger";
  onPress: () => void;
  disabled?: boolean;
};

const DetailActionButton = ({
  title,
  iconName,
  variant,
  onPress,
  disabled = false,
}: DetailActionButtonProps) => {
  const isPrimary = variant === "primary";
  const isDanger = variant === "danger";

  return (
    <TouchableOpacity
      style={[
        appStyles.catalogActionChip,
        isPrimary && appStyles.catalogActionChipPrimary,
        isDanger && appStyles.catalogActionChipDanger,
        disabled && appStyles.catalogActionChipDisabled,
      ]}
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}
    >
      <Ionicons
        name={iconName}
        size={15}
        color={
          isPrimary
            ? colors.textLight
            : isDanger
              ? colors.error
              : colors.secondaryDark
        }
      />

      <Text
        style={[
          appStyles.catalogActionChipText,
          isPrimary && appStyles.catalogActionChipTextPrimary,
          isDanger && appStyles.catalogActionChipTextDanger,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const ProductDetailScreen = ({ navigation, route }: Props) => {
  const { product, editMode } = route.params;

  const [editableProduct, setEditableProduct] =
    useState<SavedProduct>(product);

  const [hashtagsText, setHashtagsText] = useState<string>(
    product.hashtags.join(" ")
  );

  const [isEditing, setIsEditing] = useState<boolean>(editMode === true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleGoHome = (): void => {
    navigation.navigate("Home");
  };

  const handleGoCatalog = (): void => {
    navigation.navigate("History");
  };

  const handleChange = (field: EditableTextField, value: string): void => {
    setEditableProduct((currentProduct) => ({
      ...currentProduct,
      [field]: value,
    }));
  };

  const normalizeHashtags = (value: string): string[] => {
    return value
      .split(" ")
      .map((hashtag) => hashtag.trim())
      .filter((hashtag) => hashtag.length > 0)
      .map((hashtag) => (hashtag.startsWith("#") ? hashtag : `#${hashtag}`));
  };

  const getVisiblePrice = (): string => {
    const cleanPrice = editableProduct.precio.trim();

    if (cleanPrice.length > 0) {
      return cleanPrice;
    }

    return editableProduct.rangoPrecio;
  };

  const handleChangeImage = async (): Promise<void> => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      setErrorMessage("Necesitas permitir acceso a la galería para cambiar la foto.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.7,
      base64: true,
    });

    if (result.canceled) {
      return;
    }

    const selectedImage = result.assets[0];

    if (!selectedImage.base64) {
      setErrorMessage("No se pudo procesar la imagen seleccionada.");
      return;
    }

    const imageBase64 = `data:image/jpeg;base64,${selectedImage.base64}`;

    setEditableProduct((currentProduct) => ({
      ...currentProduct,
      imagenUrl: imageBase64,
    }));

    setErrorMessage("");
  };

  const handleSaveChanges = async (): Promise<void> => {
    if (!editableProduct.tituloSugerido.trim()) {
      setErrorMessage("El título sugerido no puede quedar vacío.");
      return;
    }

    if (!editableProduct.descripcion.trim()) {
      setErrorMessage("La descripción comercial no puede quedar vacía.");
      return;
    }

    try {
      setErrorMessage("");
      setIsSaving(true);

      const updatedProduct: SavedProduct = {
        ...editableProduct,
        hashtags: normalizeHashtags(hashtagsText),
      };

      await updateProduct(updatedProduct);

      setEditableProduct(updatedProduct);
      setIsEditing(false);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "No se pudieron guardar los cambios.";

      setErrorMessage(message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = (): void => {
    setEditableProduct(product);
    setHashtagsText(product.hashtags.join(" "));
    setErrorMessage("");
    setIsEditing(false);
  };

  const handleDeleteProduct = async (): Promise<void> => {
    try {
      setErrorMessage("");
      setIsDeleting(true);

      await deleteProduct(product.idPublicacion);

      setShowDeleteConfirm(false);
      navigation.navigate("History");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "No se pudo eliminar la publicación.";

      setErrorMessage(message);
    } finally {
      setIsDeleting(false);
    }
  };

  const renderSocialPreview = () => {
    return (
      <View style={appStyles.productDetailPreviewCard}>
        <View style={appStyles.productDetailPreviewHeader}>
          <View style={appStyles.productDetailPreviewIcon}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color={colors.secondaryDark}
            />
          </View>

          <View style={appStyles.productDetailPreviewTextBox}>
            <Text style={appStyles.productDetailPreviewTitle}>
              Vista previa para redes
            </Text>

            <Text style={appStyles.productDetailPreviewSubtitle}>
              Así podría verse tu publicación comercial.
            </Text>
          </View>
        </View>

        <View style={appStyles.productDetailImageWrapper}>
          <Image
            source={{ uri: editableProduct.imagenUrl }}
            style={appStyles.productDetailImage}
          />
        </View>

        {isEditing && (
          <View style={appStyles.catalogActionsRow}>
            <DetailActionButton
              title="Cambiar foto"
              iconName="image-outline"
              variant="outline"
              onPress={() => {
                void handleChangeImage();
              }}
            />
          </View>
        )}

        <Text style={appStyles.productDetailSocialTitle}>
          {editableProduct.tituloSugerido}
        </Text>

        <Text style={appStyles.productDetailSocialDescription}>
          {editableProduct.mensajeRedes || editableProduct.descripcion}
        </Text>

        <View style={appStyles.productDetailInfoRow}>
          <View style={appStyles.productDetailChip}>
            <Ionicons
              name="pricetag-outline"
              size={14}
              color={colors.secondaryDark}
            />

            <Text style={appStyles.productDetailChipText}>
              {getVisiblePrice()}
            </Text>
          </View>

          <View style={appStyles.productDetailChip}>
            <Ionicons
              name="folder-outline"
              size={14}
              color={colors.secondaryDark}
            />

            <Text style={appStyles.productDetailChipText}>
              {editableProduct.categoria || "Sin categoría"}
            </Text>
          </View>
        </View>

        <Text style={appStyles.productDetailHashtags} numberOfLines={2}>
          {hashtagsText}
        </Text>

        <TouchableOpacity
          style={appStyles.productDetailSoonButton}
          activeOpacity={0.9}
          disabled
        >
          <Ionicons name="logo-instagram" size={18} color={colors.textLight} />

          <Text style={appStyles.productDetailSoonButtonText}>
            Publicar en redes sociales
          </Text>

          <View style={appStyles.productDetailSoonBadge}>
            <Text style={appStyles.productDetailSoonBadgeText}>
              Próximamente
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDetailMode = () => {
    return (
      <>
        <View style={appStyles.productDetailCard}>
          <Text style={appStyles.productDetailCardTitle}>
            Información del producto
          </Text>

          <Text style={appStyles.productDetailLine}>
            Nombre: {editableProduct.nombre || "No especificado"}
          </Text>

          <Text style={appStyles.productDetailLine}>
            Categoría: {editableProduct.categoria || "No especificada"}
          </Text>

          <Text style={appStyles.productDetailLine}>
            Precio: {getVisiblePrice() || "No especificado"}
          </Text>

          <Text style={appStyles.productDetailLine}>
            Público objetivo:{" "}
            {editableProduct.publicoObjetivo || "No especificado"}
          </Text>

          <Text style={appStyles.productDetailLine}>
            Detalles: {editableProduct.detalles || "No especificados"}
          </Text>
        </View>

        <View style={appStyles.productDetailCard}>
          <Text style={appStyles.productDetailCardTitle}>
            Descripción comercial
          </Text>

          <Text style={appStyles.productDetailText}>
            {editableProduct.descripcion}
          </Text>
        </View>

        <View style={appStyles.productDetailCard}>
          <Text style={appStyles.productDetailCardTitle}>Consejo de venta</Text>

          <Text style={appStyles.productDetailText}>
            {editableProduct.consejoVenta}
          </Text>
        </View>
      </>
    );
  };

  const renderEditMode = () => {
    return (
      <View style={appStyles.productDetailEditCard}>
        <Text style={appStyles.productDetailCardTitle}>Editar información</Text>

        <AppInput
          label="Título sugerido"
          value={editableProduct.tituloSugerido}
          onChangeText={(value) => handleChange("tituloSugerido", value)}
          placeholder="Ejemplo: Producto ideal para emprendedores"
        />

        <AppInput
          label="Nombre del producto"
          value={editableProduct.nombre}
          onChangeText={(value) => handleChange("nombre", value)}
          placeholder="Nombre del producto"
        />

        <AppInput
          label="Categoría"
          value={editableProduct.categoria}
          onChangeText={(value) => handleChange("categoria", value)}
          placeholder="Categoría del producto"
        />

        <AppInput
          label="Precio"
          value={editableProduct.precio}
          onChangeText={(value) => handleChange("precio", value)}
          placeholder="Precio escrito"
        />

        <AppInput
          label="Público objetivo"
          value={editableProduct.publicoObjetivo}
          onChangeText={(value) => handleChange("publicoObjetivo", value)}
          placeholder="Ejemplo: emprendedores, estudiantes, familias"
        />

        <AppInput
          label="Detalles"
          value={editableProduct.detalles}
          onChangeText={(value) => handleChange("detalles", value)}
          placeholder="Detalles importantes del producto"
          multiline
        />

        <AppInput
          label="Descripción comercial"
          value={editableProduct.descripcion}
          onChangeText={(value) => handleChange("descripcion", value)}
          placeholder="Descripción generada para vender"
          multiline
        />

        <AppInput
          label="Mensaje para redes"
          value={editableProduct.mensajeRedes}
          onChangeText={(value) => handleChange("mensajeRedes", value)}
          placeholder="Mensaje para Instagram, Facebook o WhatsApp"
          multiline
        />

        <AppInput
          label="Hashtags"
          value={hashtagsText}
          onChangeText={setHashtagsText}
          placeholder="#venta #producto #emprendimiento"
          multiline
        />

        <AppInput
          label="Consejo de venta"
          value={editableProduct.consejoVenta}
          onChangeText={(value) => handleChange("consejoVenta", value)}
          placeholder="Consejo para vender mejor"
          multiline
        />

        {isSaving ? (
          <LoadingMessage message="Guardando cambios..." />
        ) : (
          <View style={appStyles.catalogActionsRow}>
            <DetailActionButton
              title="Guardar"
              iconName="save-outline"
              variant="primary"
              onPress={() => {
                void handleSaveChanges();
              }}
            />

            <DetailActionButton
              title="Cancelar"
              iconName="close-outline"
              variant="outline"
              onPress={handleCancelEdit}
            />

            <DetailActionButton
              title="Catálogo"
              iconName="albums-outline"
              variant="outline"
              onPress={handleGoCatalog}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView
      style={appStyles.productDetailScreen}
      contentContainerStyle={appStyles.productDetailScrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={appStyles.productDetailHeaderArea}>
        <ScreenHeader
          title={isEditing ? "Editar publicación" : "Detalle de publicación"}
          stepText="Revisa y prepara tu contenido para redes"
          onBack={handleGoBack}
          onHome={handleGoHome}
        />
      </View>

      <View style={appStyles.productDetailBody}>
        <ErrorMessage message={errorMessage} />

        {renderSocialPreview()}

        {isEditing ? renderEditMode() : renderDetailMode()}

        {!isEditing && (
          <>
            {showDeleteConfirm ? (
              <View style={appStyles.catalogDeleteBox}>
                <Text style={appStyles.catalogDeleteTitle}>
                  ¿Eliminar esta publicación?
                </Text>

                <Text style={appStyles.catalogDeleteText}>
                  Esta acción ocultará la publicación del catálogo, pero no la
                  borrará físicamente de Firebase.
                </Text>

                {isDeleting ? (
                  <LoadingMessage message="Eliminando publicación..." />
                ) : (
                  <View style={appStyles.catalogActionsRow}>
                    <DetailActionButton
                      title="Cancelar"
                      iconName="close-outline"
                      variant="outline"
                      onPress={() => setShowDeleteConfirm(false)}
                    />

                    <DetailActionButton
                      title="Eliminar"
                      iconName="trash-outline"
                      variant="danger"
                      onPress={() => {
                        void handleDeleteProduct();
                      }}
                    />
                  </View>
                )}
              </View>
            ) : (
              <View style={appStyles.catalogActionsRow}>
                <DetailActionButton
                  title="Editar"
                  iconName="create-outline"
                  variant="primary"
                  onPress={() => setIsEditing(true)}
                />

                <DetailActionButton
                  title="Eliminar"
                  iconName="trash-outline"
                  variant="outline"
                  onPress={() => setShowDeleteConfirm(true)}
                />

                <DetailActionButton
                  title="Catálogo"
                  iconName="albums-outline"
                  variant="outline"
                  onPress={handleGoCatalog}
                />
              </View>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
};