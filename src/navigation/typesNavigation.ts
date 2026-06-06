import { AiGeneratedContent } from "../types/ai";
import { ProductFormData, SavedProduct } from "../types/product";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Camera: undefined;
  ProductForm: {
    imagenUri: string;
    imagenBase64: string;
  };
  AiResult: {
    productData: ProductFormData;
    aiContent: AiGeneratedContent;
  };
  History: undefined;
  ProductDetail: {
    product: SavedProduct;
    editMode?: boolean;
  };
  Profile: undefined;
};