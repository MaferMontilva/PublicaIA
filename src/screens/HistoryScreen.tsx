import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { ErrorMessage } from "../components/common/ErrorMessage";
import { LoadingMessage } from "../components/common/LoadingMessage";
import { ScreenHeader } from "../components/common/ScreenHeader";
import { useAuth } from "../context/AuthContext";
import { MainStackParamList } from "../navigation/typesNavigation";
import { deleteProduct, getProductsByUser } from "../services/productService";
import { appStyles, colors } from "../styles/appStyles";
import { SavedProduct } from "../types/product";

type Props = NativeStackScreenProps<MainStackParamList, "History">;

type CatalogActionButtonProps = {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  variant: "primary" | "outline" | "danger";
  onPress: () => void;
  disabled?: boolean;
};

const CatalogActionButton = ({
  title,
  iconName,
  variant,
  onPress,
  disabled = false,
}: CatalogActionButtonProps) => {
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

export const HistoryScreen = ({ navigation }: Props) => {
  const { user } = useAuth();

  const [products, setProducts] = useState<SavedProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [confirmDeleteId, setConfirmDeleteId] = useState<string>("");

  const loadProducts = useCallback(async (): Promise<void> => {
    if (!user) {
      setProducts([]);
      setErrorMessage("No se encontró un usuario autenticado.");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage("");

      const userProducts = await getProductsByUser(user.idUsuario);
      setProducts(userProducts);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "No se pudieron cargar las publicaciones guardadas.";

      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useFocusEffect(
    useCallback(() => {
      void loadProducts();
    }, [loadProducts]),
  );

  const handleGoHome = (): void => {
    navigation.navigate("Home");
  };

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  const handleGoToDetail = (product: SavedProduct): void => {
    navigation.navigate("ProductDetail", {
      product,
    });
  };

  const handleEditProduct = (product: SavedProduct): void => {
    navigation.navigate("ProductDetail", {
      product,
      editMode: true,
    });
  };

  const handleCreateNew = (): void => {
    navigation.navigate("Camera");
  };

  const handleAskDelete = (idPublicacion: string): void => {
    setConfirmDeleteId(idPublicacion);
  };

  const handleCancelDelete = (): void => {
    setConfirmDeleteId("");
  };

  const handleConfirmDelete = async (idPublicacion: string): Promise<void> => {
    try {
      setErrorMessage("");
      setIsDeleting(true);

      await deleteProduct(idPublicacion);

      setConfirmDeleteId("");
      await loadProducts();
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

  const renderProduct = ({ item }: { item: SavedProduct }) => {
    const isConfirmingDelete = confirmDeleteId === item.idPublicacion;

    return (
      <View style={appStyles.catalogCard}>
        <View style={appStyles.catalogImageWrapper}>
          <Image
            source={{ uri: item.imagenUrl }}
            style={appStyles.catalogImage}
          />
        </View>

        <View style={appStyles.catalogContent}>
          <Text style={appStyles.catalogTitle}>{item.tituloSugerido}</Text>

          <Text style={appStyles.catalogDescription} numberOfLines={3}>
            {item.descripcion}
          </Text>

          <View style={appStyles.catalogPriceChip}>
            <Ionicons
              name="pricetag-outline"
              size={14}
              color={colors.secondaryDark}
            />

            <Text style={appStyles.catalogPriceChipText}>
              {item.precio && item.precio.trim().length > 0
                ? `$ ${item.precio}`
                : item.rangoPrecio}
            </Text>
          </View>

          <Text style={appStyles.catalogDate}>{item.fechaCreacion}</Text>

          {isConfirmingDelete ? (
            <View style={appStyles.catalogDeleteBox}>
              <Text style={appStyles.catalogDeleteTitle}>
                ¿Eliminar esta publicación?
              </Text>

              <Text style={appStyles.catalogDeleteText}>
                Se ocultará del catálogo, pero no se borrará físicamente de la
                base de datos.
              </Text>

              <View style={appStyles.catalogActionsRow}>
                <CatalogActionButton
                  title="Cancelar"
                  iconName="close-outline"
                  variant="outline"
                  onPress={handleCancelDelete}
                  disabled={isDeleting}
                />

                <CatalogActionButton
                  title={isDeleting ? "Eliminando" : "Eliminar"}
                  iconName="trash-outline"
                  variant="danger"
                  onPress={() => {
                    void handleConfirmDelete(item.idPublicacion);
                  }}
                  disabled={isDeleting}
                />
              </View>
            </View>
          ) : (
            <View style={appStyles.catalogActionsRow}>
              <CatalogActionButton
                title="Detalle"
                iconName="eye-outline"
                variant="outline"
                onPress={() => handleGoToDetail(item)}
              />

              <CatalogActionButton
                title="Editar"
                iconName="create-outline"
                variant="primary"
                onPress={() => handleEditProduct(item)}
              />

              <CatalogActionButton
                title="Eliminar"
                iconName="trash-outline"
                variant="outline"
                onPress={() => handleAskDelete(item.idPublicacion)}
              />
            </View>
          )}
        </View>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={appStyles.catalogScreen}>
        <View style={appStyles.catalogHeaderArea}>
          <ScreenHeader
            title="Catálogo"
            stepText="Tus publicaciones generadas con IA"
            onBack={handleGoBack}
            onHome={handleGoHome}
          />
        </View>

        <View style={appStyles.catalogBody}>
          <LoadingMessage message="Cargando publicaciones..." />
        </View>
      </View>
    );
  }

  return (
    <View style={appStyles.catalogScreen}>
      <View style={appStyles.catalogHeaderArea}>
        <ScreenHeader
          title="Catálogo"
          stepText="Tus publicaciones generadas con IA"
          onBack={handleGoBack}
          onHome={handleGoHome}
        />
      </View>

      <View style={appStyles.catalogBody}>
        <ErrorMessage message={errorMessage} />

        {products.length === 0 ? (
          <View style={appStyles.catalogEmptyCard}>
            <View style={appStyles.catalogEmptyIcon}>
              <Ionicons
                name="sparkles-outline"
                size={28}
                color={colors.secondaryDark}
              />
            </View>

            <Text style={appStyles.catalogEmptyTitle}>
              Aún no tienes publicaciones guardadas
            </Text>

            <Text style={appStyles.catalogEmptyText}>
              Crea tu primera publicación con una foto del producto.
            </Text>

            <TouchableOpacity
              style={appStyles.catalogCreateButton}
              onPress={handleCreateNew}
              activeOpacity={0.85}
            >
              <Ionicons
                name="camera-outline"
                size={18}
                color={colors.textLight}
              />

              <Text style={appStyles.catalogCreateButtonText}>
                Crear publicación
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.idPublicacion}
            renderItem={renderProduct}
            contentContainerStyle={appStyles.catalogListContent}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
