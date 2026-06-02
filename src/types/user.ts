export interface User {
  idUsuario: string;
  nombre: string;
  email: string;
  fechaRegistro?: string;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends AuthFormData {
  nombre: string;
}