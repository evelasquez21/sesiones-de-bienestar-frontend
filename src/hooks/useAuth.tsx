import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("useAuth debe de usarse dentro de AuthProvider");
        return context;
}