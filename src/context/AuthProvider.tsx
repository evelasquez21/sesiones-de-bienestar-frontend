import { useState, useEffect } from "react";
import { type User, AuthContext } from "./AuthContext";
import axiosClient from "../api/Client";
import { useNavigate } from "react-router-dom";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        // validación de token
        const fetchUser = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

                try {
                    const resUser = await axiosClient.get("/usuarios", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                let baseUser = resUser.data;

                try {
                    const resCliente = await axiosClient.get("/clientes/panel", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                
                    baseUser = { ...baseUser, ...resCliente};
                } catch (error) {
                    console.log(error);
                }

                try {
                    const resEmpleado = await axiosClient.get("/empleados/panel", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                
                    baseUser = { ...baseUser, ...resEmpleado};
                } catch (error) {
                    console.log(error);
                }
                
                setUser(baseUser);

            } catch (err: any) {
                console.log("Token inválido o expirado: ", err);
                logout();
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
        
    }, [token]);

    const login = async (correo: string, contrasena: string) => {
        try {
            const resLogin = await axiosClient.post("/auth/login", {correo, contrasena});
            const newToken = resLogin.data.token;
            localStorage.setItem("token", newToken);
            setToken(newToken);

            const resUser = await axiosClient.get("/usuarios", {
                headers: { Authorization: `Bearer ${newToken}` },
            });

            let baseUser = resUser.data;

            try {
                const resCliente = await axiosClient.get("/clientes/panel", {
                headers: { Authorization: `Bearer ${newToken}` },
            });
            
                baseUser = { ...baseUser, ...resCliente};

                setUser(baseUser);
                navigate("/dashboard");
            } catch (error) {
                console.log(error);
            }

            try {
                const resEmpleado = await axiosClient.get("/empleados/panel", {
                headers: { Authorization: `Bearer ${newToken}` },
            });
            
                baseUser = { ...baseUser, ...resEmpleado};
                setUser(baseUser);
                navigate("/dashboard");
            } catch (error) {
                console.log(error);
            }
            
        } catch (err) {
            throw new Error("Credenciales invalidas");
        }
    }

    const logout = (redirect = true) => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        if (redirect) navigate("/login");
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                isAuthenticated: !!token && !!user,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}