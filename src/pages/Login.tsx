import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button"
import logo from "../assets/Designer.png"
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<boolean | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      await login(correo, contrasena);
    } catch (err: any) {
      setError(err.message || "Credenciales incorrectas o error del servidor");
      setStatus(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
          <h1 className="text-2xl font-bold text-slate-800">Bienvenido</h1>
          <p className="text-slate-500 text-sm">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleLogin}>
          <InputField
            label="Correo electrónico"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="ejemplo@correo.com"
            status={status}
          />
          <InputField
            label="Contraseña"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="••••••••"
            status={status}
          />

          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

          <Button text="Iniciar sesión" type="submit" />

          <p className="text-center text-sm text-slate-500 mt-4">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">Regístrate</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
