import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { NewSavedProduct, SavedProduct } from "../types/product";

const PUBLICACIONES_COLLECTION = "publicaciones";

export const saveProduct = async (
  productData: NewSavedProduct
): Promise<string> => {
  const fechaCreacion = new Date().toISOString();

  const docRef = await addDoc(collection(db, PUBLICACIONES_COLLECTION), {
    ...productData,
    fechaCreacion,
    estado: true,
  });

  return docRef.id;
};

export const getProductsByUser = async (
  idUsuario: string
): Promise<SavedProduct[]> => {
  const publicacionesRef = collection(db, PUBLICACIONES_COLLECTION);

  const publicacionesQuery = query(
    publicacionesRef,
    where("idUsuario", "==", idUsuario)
  );

  const querySnapshot = await getDocs(publicacionesQuery);

  const products: SavedProduct[] = querySnapshot.docs
    .map((document) => {
      const data = document.data() as Omit<SavedProduct, "idPublicacion">;

      return {
        idPublicacion: document.id,
        ...data,
        estado: data.estado !== false,
      };
    })
    .filter((product) => product.estado);

  return products.sort((a, b) =>
    b.fechaCreacion.localeCompare(a.fechaCreacion)
  );
};

export const updateProduct = async (
  productData: SavedProduct
): Promise<void> => {
  const productRef = doc(
    db,
    PUBLICACIONES_COLLECTION,
    productData.idPublicacion
  );

  await updateDoc(productRef, {
    nombre: productData.nombre,
    categoria: productData.categoria,
    precio: productData.precio,
    publicoObjetivo: productData.publicoObjetivo,
    detalles: productData.detalles,
    imagenUrl: productData.imagenUrl,
    tituloSugerido: productData.tituloSugerido,
    descripcion: productData.descripcion,
    mensajeRedes: productData.mensajeRedes,
    hashtags: productData.hashtags,
    consejoVenta: productData.consejoVenta,
    sugerenciaFoto: productData.sugerenciaFoto,
    rangoPrecio: productData.rangoPrecio,
    notaPrecio: productData.notaPrecio,
    promptEdicionFoto: productData.promptEdicionFoto,
    fechaCreacion: productData.fechaCreacion,
    idUsuario: productData.idUsuario,
    estado: productData.estado,
  });
};

export const deleteProduct = async (
  idPublicacion: string
): Promise<void> => {
  const productRef = doc(db, PUBLICACIONES_COLLECTION, idPublicacion);

  await updateDoc(productRef, {
    estado: false,
  });
};