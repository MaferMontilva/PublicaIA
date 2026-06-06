export interface AiGeneratedContent {
  tituloSugerido: string;
  descripcion: string;
  mensajeRedes: string;
  hashtags: string[];
  consejoVenta: string;
  sugerenciaFoto: string;
  rangoPrecio: string;
  notaPrecio: string;
  promptEdicionFoto: string;
  nombreDetectado: string;
  categoriaDetectada: string;
  precioSugerido: string;
  publicoObjetivoSugerido: string;
  detallesDetectados: string;
}

export interface AiRequestData {
  nombre: string;
  categoria: string;
  precio: string;
  publicoObjetivo: string;
  detalles: string;
  imagenBase64: string;
}