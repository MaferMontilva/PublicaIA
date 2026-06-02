import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MainStackParamList } from "../navigation/typesNavigation";
import { appStyles } from "../styles/appStyles";

type Props = NativeStackScreenProps<MainStackParamList, "ProductForm">;

export const ProductFormScreen = ({ navigation, route }: Props) => {
  const handleGenerate = () => {
    navigation.navigate("AiResult", {
      productData: {
        nombre: "Jabón artesanal de avena",
        categoria: "Cuidado personal",
        precio: "3 €",
        publicoObjetivo: "Personas que buscan productos naturales",
        detalles: "Producto artesanal",
        imagenUri: route.params.imagenUri,
        imagenBase64: route.params.imagenBase64,
      },
      aiContent: {
        descripcion:
          "Jabón artesanal de avena ideal para el cuidado diario de la piel.",
        mensajeRedes:
          "Cuida tu piel con nuestro jabón artesanal de avena. Disponible por solo 3 €.",
        hashtags: ["#JabonArtesanal", "#CuidadoNatural", "#PielSana"],
        consejoVenta:
          "Toma la foto con buena iluminación y destaca que el producto es artesanal.",
      },
    });
  };

  return (
    <View style={appStyles.screen}>
      <Text style={appStyles.sectionTitle}>Datos del producto</Text>

      <TextInput style={appStyles.input} placeholder="Nombre del producto" />
      <TextInput style={appStyles.input} placeholder="Categoría" />
      <TextInput style={appStyles.input} placeholder="Precio" />
      <TextInput style={appStyles.input} placeholder="Público objetivo" />
      <TextInput style={appStyles.input} placeholder="Detalles adicionales" />

      <TouchableOpacity style={appStyles.primaryButton} onPress={handleGenerate}>
        <Text style={appStyles.primaryButtonText}>Generar con IA</Text>
      </TouchableOpacity>
    </View>
  );
};