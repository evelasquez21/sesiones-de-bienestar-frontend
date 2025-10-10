import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button"
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Register: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dpi, setDpi] = useState("");
    const [nombreC, setNombreC] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("")
    const [fechaNac, setFechaNac] = useState("")

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Registro a:", { email, password, dpi, nombreC, direccion, telefono, fechaNac});
      };    

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
                <h1 className="text-2xl font-bold text-slate-800">Bienvenido</h1>
                <p className="text-slate-500 text-sm">Registrar para continuar</p>
                </div>

                <form onSubmit={handleRegister}>
                <InputField
                    label="Número de CUI/DPI"
                    type="text"
                    value={dpi}
                    onChange={(e) => setDpi(e.target.value)}
                    placeholder="3000000000000"
                /> 
                <InputField
                    label="Nombre completo"
                    type="text"
                    value={nombreC}
                    onChange={(e) => setNombreC(e.target.value)}
                    placeholder="Su nombre"
                />
                <InputField
                    label="Direccion"
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    placeholder="Departamento, Municipio, Residencial, Casa/o DEPTO."
                /> 
                <InputField
                    label="Teléfono"
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+502 0000-0000"
                /> 
                <InputField
                    label="Fecha de nacimiento"
                    type="dateTime"
                    value={fechaNac}
                    onChange={(e) => setFechaNac(e.target.value)}
                    placeholder="dd/mm/aaaa"
                /> 
                <InputField
                    label="Correo electrónico"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                />
                <InputField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                />

                <Button text="Crear cuenta" type="submit" />

                <p className="text-center text-sm text-slate-500 mt-4">
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">Inicia sesión</Link>
                </p>
                </form>
            </div>
        </div>
    )

}

export default Register