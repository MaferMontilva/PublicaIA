import { ProductFormData } from "../types/product";
import { AuthFormData, RegisterFormData } from "../types/user";

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const validateEmail = (email: string): ValidationResult => {
  const emailTrimmed = email.trim();

  if (!emailTrimmed) {
    return {
      isValid: false,
      message: "El correo electrónico es obligatorio.",
    };
  }

  if (!emailTrimmed.includes("@") || !emailTrimmed.includes(".")) {
    return {
      isValid: false,
      message: "Ingresa un correo electrónico válido.",
    };
  }

  return {
    isValid: true,
    message: "",
  };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password.trim()) {
    return {
      isValid: false,
      message: "La contraseña es obligatoria.",
    };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      message: "La contraseña debe tener mínimo 6 caracteres.",
    };
  }

  return {
    isValid: true,
    message: "",
  };
};

export const validateLoginForm = (formData: AuthFormData): ValidationResult => {
  const emailValidation = validateEmail(formData.email);

  if (!emailValidation.isValid) {
    return emailValidation;
  }

  const passwordValidation = validatePassword(formData.password);

  if (!passwordValidation.isValid) {
    return passwordValidation;
  }

  return {
    isValid: true,
    message: "",
  };
};

export const validateRegisterForm = (
  formData: RegisterFormData
): ValidationResult => {
  if (!formData.nombre.trim()) {
    return {
      isValid: false,
      message: "El nombre es obligatorio.",
    };
  }

  if (formData.nombre.trim().length < 3) {
    return {
      isValid: false,
      message: "El nombre debe tener mínimo 3 caracteres.",
    };
  }

  const loginValidation = validateLoginForm({
    email: formData.email,
    password: formData.password,
  });

  if (!loginValidation.isValid) {
    return loginValidation;
  }

  return {
    isValid: true,
    message: "",
  };
};

export const validateProductForm = (
  formData: ProductFormData
): ValidationResult => {
  if (!formData.nombre.trim()) {
    return {
      isValid: false,
      message: "El nombre del producto es obligatorio.",
    };
  }

  if (!formData.categoria.trim()) {
    return {
      isValid: false,
      message: "La categoría del producto es obligatoria.",
    };
  }

  if (!formData.precio.trim()) {
    return {
      isValid: false,
      message: "El precio del producto es obligatorio.",
    };
  }

  const precioNumerico = Number(formData.precio.replace(",", "."));

  if (Number.isNaN(precioNumerico) || precioNumerico <= 0) {
    return {
      isValid: false,
      message: "El precio debe ser un número mayor a 0.",
    };
  }

  if (!formData.publicoObjetivo.trim()) {
    return {
      isValid: false,
      message: "El público objetivo es obligatorio.",
    };
  }

  if (!formData.detalles.trim()) {
    return {
      isValid: false,
      message: "Los detalles del producto son obligatorios.",
    };
  }

  if (!formData.imagenUri.trim() || !formData.imagenBase64.trim()) {
    return {
      isValid: false,
      message: "Debes tomar o seleccionar una foto del producto.",
    };
  }

  return {
    isValid: true,
    message: "",
  };
};