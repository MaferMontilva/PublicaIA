import { AiGeneratedContent } from "./ai";

export interface ProductFormData {
  nombre: string;
  categoria: string;
  precio: string;
  publicoObjetivo: string;
  detalles: string;
  imagenBase64: string;
  imagenUri: string;
}

export interface SavedProduct extends AiGeneratedContent {
  idPublicacion: string;
  idUsuario: string;
  nombre: string;
  categoria: string;
  precio: string;
  publicoObjetivo: string;
  detalles: string;
  imagenUrl: string;
  fechaCreacion: string;
  estado: boolean;
}

export interface NewSavedProduct extends AiGeneratedContent {
  idUsuario: string;
  nombre: string;
  categoria: string;
  precio: string;
  publicoObjetivo: string;
  detalles: string;
  imagenUrl: string;
}