import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import {
  getUserData,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/authService";
import { AuthFormData, RegisterFormData, User } from "../types/user";

interface AuthContextData {
  user: User | null;
  isLoading: boolean;
  isAuthReady: boolean;
  login: (formData: AuthFormData) => Promise<void>;
  register: (formData: RegisterFormData) => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (!firebaseUser) {
          setUser(null);
          return;
        }

        const userData = await getUserData(firebaseUser.uid);
        setUser(userData);
      } finally {
        setIsAuthReady(true);
      }
    });

    return unsubscribe;
  }, []);

  const login = async (formData: AuthFormData): Promise<void> => {
    setIsLoading(true);

    try {
      const loggedUser = await loginUser(formData);
      setUser(loggedUser);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (formData: RegisterFormData): Promise<void> => {
    setIsLoading(true);

    try {
      const createdUser = await registerUser(formData);
      setUser(createdUser);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);

    try {
      await logoutUser();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isAuthReady, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider.");
  }

  return context;
};