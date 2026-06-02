import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "ProductDetail">;

export const ProductDetailScreen = ({ route }: Props) => {
  const { product } = route.params;

  return (
    <View style={appStyles.screen}>
      <Text style={appStyles.sectionTitle}>{product.nombre}</Text>

      <View style={appStyles.card}>
        <Text style={appStyles.normalText}>Categoría: {product.categoria}</Text>
        <Text style={appStyles.normalText}>Precio: {product.precio}</Text>
        <Text style={appStyles.normalText}>
          Público objetivo: {product.publicoObjetivo}
        </Text>
      </View>

      <View style={appStyles.card}>
        <Text style={appStyles.sectionTitle}>Descripción IA</Text>
        <Text style={appStyles.normalText}>{product.descripcion}</Text>
      </View>
    </View>
  );
};