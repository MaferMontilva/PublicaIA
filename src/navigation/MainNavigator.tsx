import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CameraScreen } from "../screens/CameraScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { colors } from "../styles/appStyles";
import { MainStackParamList } from "./typesNavigation";
import { ProductFormScreen } from "../screens/ProductFormScreen";
const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductFormScreen}
        options={{ title: "Datos del producto" }}
      />
    </Stack.Navigator>
  );
};
