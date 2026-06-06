import { AiGeneratedContent, AiRequestData } from "../types/ai";
import { GEMINI_API_KEY } from "./apiKeys";

interface GeminiTextPart {
  text: string;
}

interface GeminiImagePart {
  inline_data: {
    mime_type: string;
    data: string;
  };
}

interface GeminiResponsePart {
  text?: string;
}

interface GeminiCandidate {
  content?: {
    parts?: GeminiResponsePart[];
  };
}

interface GeminiResponse {
  candidates?: GeminiCandidate[];
}

interface GeminiErrorResponse {
  error?: {
    message?: string;
  };
}

interface PreparedImageData {
  mimeType: string;
  base64Data: string;
}

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

const prepareImageData = (imageBase64: string): PreparedImageData => {
  if (imageBase64.startsWith("data:")) {
    const parts = imageBase64.split(",");

    if (parts.length !== 2) {
      throw new Error("El formato de la imagen no es válido.");
    }

    const mimeMatch = parts[0].match(/data:(.*);base64/);
    const mimeType = mimeMatch?.[1] || "image/jpeg";

    return {
      mimeType,
      base64Data: parts[1],
    };
  }

  return {
    mimeType: "image/jpeg",
    base64Data: imageBase64,
  };
};

const cleanJsonResponse = (responseText: string): string => {
  return responseText
    .replace("```json", "")
    .replace("```", "")
    .trim();
};

const getTextValue = (value: unknown, fallback: string): string => {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : fallback;
};

const getHashtagsValue = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return ["#Producto", "#Venta", "#Emprendimiento"];
  }

  const hashtags = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((item) => (item.startsWith("#") ? item : `#${item}`));

  return hashtags.length > 0
    ? hashtags
    : ["#Producto", "#Venta", "#Emprendimiento"];
};

const parseAiResponse = (responseText: string): AiGeneratedContent => {
  const cleanText = cleanJsonResponse(responseText);
  const parsedData = JSON.parse(cleanText) as Partial<AiGeneratedContent>;

  return {
    nombreDetectado: getTextValue(
      parsedData.nombreDetectado,
      "Producto no identificado con precisión"
    ),
    categoriaDetectada: getTextValue(
      parsedData.categoriaDetectada,
      "Categoría no especificada"
    ),
    precioSugerido: getTextValue(
      parsedData.precioSugerido,
      "Precio referencial no disponible"
    ),
    publicoObjetivoSugerido: getTextValue(
      parsedData.publicoObjetivoSugerido,
      "Público general interesado en el producto"
    ),
    detallesDetectados: getTextValue(
      parsedData.detallesDetectados,
      "Producto detectado a partir de la imagen. Se recomienda revisar los datos antes de publicar."
    ),
    tituloSugerido: getTextValue(
      parsedData.tituloSugerido,
      "Producto destacado para la venta"
    ),
    descripcion: getTextValue(
      parsedData.descripcion,
      "Descripción comercial no disponible."
    ),
    mensajeRedes: getTextValue(
      parsedData.mensajeRedes,
      "Producto disponible. Escríbenos para más información."
    ),
    hashtags: getHashtagsValue(parsedData.hashtags),
    consejoVenta: getTextValue(
      parsedData.consejoVenta,
      "Presenta el producto con una foto clara, precio visible y beneficios principales."
    ),
    sugerenciaFoto: getTextValue(
      parsedData.sugerenciaFoto,
      "Toma la foto con buena iluminación, fondo limpio y el producto centrado."
    ),
    rangoPrecio: getTextValue(
      parsedData.rangoPrecio,
      "Precio referencial no disponible"
    ),
    notaPrecio: getTextValue(
      parsedData.notaPrecio,
      "El precio es referencial y debe validarse según el mercado local."
    ),
    promptEdicionFoto: getTextValue(
      parsedData.promptEdicionFoto,
      "Editar la imagen con fondo limpio, buena iluminación y sin alterar el producto original."
    ),
  };
};

export const generateAiContent = async (
  productData: AiRequestData
): Promise<AiGeneratedContent> => {
  const preparedImage = prepareImageData(productData.imagenBase64);

  const prompt = `
Eres un asistente experto en marketing digital para pequeños emprendedores.

Analiza cuidadosamente la imagen del producto y usa también los datos escritos por el usuario como pistas adicionales.

Datos escritos por el usuario:
Nombre del producto: ${productData.nombre}
Categoría: ${productData.categoria}
Precio escrito por el usuario: ${productData.precio}
Público objetivo: ${productData.publicoObjetivo}
Detalles adicionales: ${productData.detalles}

Tu tarea:
1. Identificar el producto de la imagen.
2. Completar automáticamente los datos principales del producto.
3. Generar contenido comercial para venderlo en redes sociales.

Reglas importantes:
- Responde solo en español.
- Devuelve únicamente JSON válido.
- No uses markdown.
- No agregues texto fuera del JSON.
- No digas que consultaste internet.
- No inventes datos técnicos si no se ven en la imagen.
- Si el producto no se identifica con seguridad, usa un nombre prudente y general.
- Si el usuario escribió un dato útil, úsalo para mejorar la respuesta.
- Si el usuario dejó campos vacíos o escribió "No especificado", deduce lo mejor posible desde la imagen.
- El precio debe ser estimado y referencial.
- La notaPrecio debe aclarar que debe validarse según el mercado local.
- Si el producto parece médico, farmacéutico, cosmético, alimenticio o de salud, no prometas curas ni resultados garantizados.
- En productos de salud, recomienda validar uso, precio y disponibilidad según indicación profesional o normativa local.
- Sugiere mejoras visuales para la foto, como fondo blanco, buena iluminación y encuadre.
- El promptEdicionFoto debe indicar cómo editar la foto sin cambiar la esencia del producto.

Estructura exacta obligatoria:

{
  "nombreDetectado": "nombre del producto detectado en la imagen",
  "categoriaDetectada": "categoría comercial detectada para el producto",
  "precioSugerido": "precio o rango de precio estimado y referencial",
  "publicoObjetivoSugerido": "público objetivo recomendado para este producto",
  "detallesDetectados": "detalles visibles o deducidos de forma prudente a partir de la imagen",
  "tituloSugerido": "nombre comercial atractivo para el producto",
  "descripcion": "descripción clara y atractiva del producto",
  "mensajeRedes": "mensaje corto para redes sociales con llamado a la acción",
  "hashtags": ["#hashtag1", "#hashtag2", "#hashtag3", "#hashtag4"],
  "consejoVenta": "consejo breve para mejorar la venta",
  "sugerenciaFoto": "recomendación para mejorar la foto del producto",
  "rangoPrecio": "rango de precio estimado",
  "notaPrecio": "aclaración breve sobre el precio referencial",
  "promptEdicionFoto": "instrucción para editar la imagen con fondo blanco y aspecto profesional sin cambiar el producto"
}
`;

  const textPart: GeminiTextPart = {
    text: prompt,
  };

  const imagePart: GeminiImagePart = {
    inline_data: {
      mime_type: preparedImage.mimeType,
      data: preparedImage.base64Data,
    },
  };

  const response = await fetch(GEMINI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [textPart, imagePart],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!response.ok) {
    const errorData = (await response.json()) as GeminiErrorResponse;
    const message =
      errorData.error?.message || "No se pudo conectar con Gemini API.";

    throw new Error(message);
  }

  const data = (await response.json()) as GeminiResponse;
  const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!responseText) {
    throw new Error("Gemini no devolvió una respuesta válida.");
  }

  return parseAiResponse(responseText);
};