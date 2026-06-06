import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AiResultScreen } from "../screens/AiResultScreen";
import { CameraScreen } from "../screens/CameraScreen";
import { HistoryScreen } from "../screens/HistoryScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { ProductFormScreen } from "../screens/ProductFormScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { colors } from "../styles/appStyles";
import { MainStackParamList } from "./typesNavigation";

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Camera" component={CameraScreen} />

      <Stack.Screen name="ProductForm" component={ProductFormScreen} />

      <Stack.Screen name="AiResult" component={AiResultScreen} />

      <Stack.Screen name="History" component={HistoryScreen} />

      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />

      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};