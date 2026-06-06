import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebaseConfig";
import { AuthFormData, RegisterFormData, User } from "../types/user";

export const registerUser = async (
  formData: RegisterFormData
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    formData.email.trim(),
    formData.password
  );

  const newUser: User = {
    idUsuario: userCredential.user.uid,
    nombre: formData.nombre.trim(),
    email: formData.email.trim(),
    fechaRegistro: new Date().toISOString(),
  };

  await setDoc(doc(db, "usuarios", newUser.idUsuario), newUser);

  return newUser;
};

export const loginUser = async (formData: AuthFormData): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    formData.email.trim(),
    formData.password
  );

  const userDoc = await getDoc(doc(db, "usuarios", userCredential.user.uid));

  if (!userDoc.exists()) {
    throw new Error("No se encontraron los datos del usuario.");
  }

  return userDoc.data() as User;
};

export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};

export const getUserData = async (idUsuario: string): Promise<User | null> => {
  const userDoc = await getDoc(doc(db, "usuarios", idUsuario));

  if (!userDoc.exists()) {
    return null;
  }

  return userDoc.data() as User;
};