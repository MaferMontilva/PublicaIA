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
}

export interface NewSavedProduct {
  idUsuario: string;
  nombre: string;
  categoria: string;
  precio: string;
  publicoObjetivo: string;
  detalles: string;
  imagenUrl: string;
  descripcion: string;
  mensajeRedes: string;
  hashtags: string[];
  consejoVenta: string;
}