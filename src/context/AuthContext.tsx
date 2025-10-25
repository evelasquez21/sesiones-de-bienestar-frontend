import { createContext } from "react"

export interface User {
    dpi?: number;
    codigo?: string;
    nombreCompleto?: string;
    direccion?: string;
    fechaNacimiento?: Date;
    telefono?: number;
    correo?: string;
    rol?: "Administrador" | "Recepcionista";
}

interface AuthContextType {
    token: string | null;
    user: User | null;
    loading: boolean | null;
    isAuthenticated: boolean | null;
    login: (correo: string, contrasena: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);