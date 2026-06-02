export interface AiGeneratedContent {
  descripcion: string;
  mensajeRedes: string;
  hashtags: string[];
  consejoVenta: string;
}

export interface AiRequestData {
  nombre: string;
  categoria: string;
  precio: string;
  publicoObjetivo: string;
  detalles: string;
  imagenBase64: string;
}