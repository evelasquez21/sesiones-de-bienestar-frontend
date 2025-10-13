import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button"
import logo from "../assets/react.svg";
import { Link, useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns"

interface FieldStatus {
    status?: boolean | null;
    spanText?: string;
    value: string;
}

const Register: React.FC = () => {

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [fields, setFields] = useState<{[inputName: string]: FieldStatus}>(
        {
            
            dpi: {status: null, spanText: "", value: ""},
            nombreCompleto: {status: null, spanText: "", value: ""},
            direccion: {status: null, spanText: "", value: ""},
            telefono: {status: null, spanText: "", value: ""},
            fechaNacimiento: {status: null, spanText: "", value: ""},
            correo: {status: null, spanText: "", value: ""},
            contrasena: {status: null, spanText: "", value: ""},
            confirmcontrasena: {status: null, spanText: "", value: ""}
        }
    );

    const validateDpi=(e: React.FormEvent) => {
        const input = e.nativeEvent as InputEvent;
        const value = (e.target as HTMLInputElement).value;
        const nextValue = value + (input.data ?? "");

        // Bloquear si NO es número o si supera 13 caracteres
        if (!/^[0-9]$/.test(input.data ?? "") || nextValue.length > 13) {            
            e.preventDefault();
        }
    }

    const validateTel=(e: React.FormEvent) => {
        const input = e.nativeEvent as InputEvent;
        const value = (e.target as HTMLInputElement).value;
        const nextValue = value + (input.data ?? "");

        // Bloquear si NO es número o si supera 13 caracteres
        if (!/^[0-9]$/.test(input.data ?? "") || nextValue.length > 8) {            
            e.preventDefault();
        }
    }


    const validateField = (inputName: string, value: string) => {
        let status1: boolean | null = null;
        let message1 = "";
        let inputDate: Date;
        const today = new Date;
        setError("")

        let isValid: boolean;

        switch (inputName) {
            case "dpi":
                    if (value == ""){
                        break
                    }
                    isValid = value.length == 13;
                    status1 = isValid ? true : false;
                    message1 = isValid ? "DPI/CUI válido" : "DPI/CUI invalido";
                    setError(isValid ? "" : "Hay errores en el formulario")
                break

            case "nombreCompleto":
                if (value === ""){
                    setFields((prev) => ({
                        ...prev,
                        [inputName]: {value}
                    }))
                    return;
                }
                if (/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)){
                    setFields((prev) => ({
                        ...prev,
                        [inputName]: {value}
                    }))
                } else {
                    return;
                }
                break

            case "telefono":
                if (value == ""){
                        break
                    }
                    isValid = value.length == 8;
                    status1 = isValid ? true : false;
                    message1 = isValid ? "Número de teléfono válido" : "Número de teléfono invalido";
                    setError(isValid ? "" : "Hay errores en el formulario")
                break

            case "fechaNacimiento":
                inputDate = new Date(value);
                
                isValid = inputDate <= today
                status1 = isValid ? null : false;
                message1 = isValid ? "" : "La fecha de nacimiento no es válida";
                setError(isValid ? "" : "Hay errores en el formulario")
                break

            case "contrasena":
                if (value == ""){
                    break
                }
                if (value.length < 8){
                    status1 = false;
                    message1 = "La contraseña debe contener entre 8 y 16 caracteres"
                }
                if (value.length >= 8 && value.length <=16){
                    isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_.-])[A-Za-z\d!@#$%^&*_.-]+$/.test(value)
                    status1 = isValid ? true : false;
                    message1 = isValid ? "Contraseña segura" : "La contraseña debe contener una máyuscula, una minúscula y un caracter especial";
                    setError(isValid ? "" : "Hay errores en el formulario")
                }
                break;

            case "confirmcontrasena":
                if (value == ""){
                    break
                }
                if (value.length >= 8 && value.length <=16){
                    isValid = value == fields.contrasena.value
                    status1 = isValid ? true : false;
                    message1 = isValid ? "Contraseña confirmada" : "La contraseña y la confirmación no son iguales";
                    setError(isValid ? "" : "Hay errores en el formulario")
                }
                break
            
            
            default:
                break;
        }

        setFields((prev) => ({
                ...prev,
                [inputName]: {status:status1, spanText:message1, value}
        }))
    }
    

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        
        if (error){
            return;
        }
        
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    "dpi": fields.dpi.value,
                    "nombreCompleto": fields.nombreCompleto.value,
                    "direccion": fields.direccion.value,
                    "telefono": fields.telefono.value,
                    "fechaNacimiento": format(parseISO(fields.fechaNacimiento.value), "dd/MM/yyyy"),
                    "correo": fields.correo.value,
                    "contrasena": fields.contrasena.value
                 })
            });

            if (!response.ok){
                throw new Error(`Error ${response}`)
            }
            navigate("/login")
        } catch (error: any) {
            setError(error);
        }
      };    

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full md:w-[50rem]">
                <div className="flex flex-col items-center mb-6">
                <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
                <h1 className="text-2xl font-bold text-slate-800">Bienvenido</h1>
                <p className="text-slate-500 text-sm">Registrar para continuar</p>
                </div>

                <form onSubmit={handleRegister}>
                <InputField
                    label="Número de CUI/DPI"
                    type="text"
                    value={fields.dpi.value}
                    onChange={(e) => validateField("dpi", e.target.value)}
                    placeholder="1000000000000"
                    status={fields.dpi.status}
                    spanText={fields.dpi.spanText}
                    onBeforeInput={validateDpi}
                    
                /> 
                <InputField
                    label="Nombre completo"
                    type="text"
                    value={fields.nombreCompleto.value}
                    onChange={(e) => validateField("nombreCompleto", e.target.value)}
                    placeholder="Nombre y apellido"
                />
                <InputField
                    label="Direccion"
                    type="text"
                    value={fields.direccion.value}
                    onChange={(e) => validateField("direccion", e.target.value)}
                    placeholder="Departamento, Municipio, Residencial, Casa/o DEPTO."
                /> 
                <InputField
                    label="Teléfono"
                    type="text"
                    value={fields.telefono.value}
                    onChange={(e) => validateField("telefono", e.target.value)}
                    placeholder="+502 0000-0000"
                    onBeforeInput={validateTel}
                    status={fields.telefono.status}
                    spanText={fields.telefono.spanText}
                /> 
                <InputField
                    label="Fecha de nacimiento"
                    type="date"
                    value={fields.fechaNacimiento.value}
                    onChange={(e) => validateField("fechaNacimiento", e.target.value)}
                    placeholder="dd/mm/aaaa"
                    status={fields.fechaNacimiento.status}
                    spanText={fields.fechaNacimiento.spanText}
                /> 
                <InputField
                    label="Correo electrónico"
                    type="email"
                    value={fields.correo.value}
                    onChange={(e) => validateField("correo", e.target.value)}
                    placeholder="ejemplo@correo.com"
                />
                <InputField
                    label="Contraseña"
                    type="password"
                    value={fields.contrasena.value}
                    onChange={(e) => validateField("contrasena", e.target.value)}
                    placeholder="••••••••"
                    status={fields.contrasena.status}
                    spanText={fields.contrasena.spanText}
                />
                <InputField
                    label="Confirmar contraseña"
                    type="password"
                    value={fields.confirmcontrasena.value}
                    onChange={(e) => validateField("confirmcontrasena", e.target.value)}
                    placeholder="••••••••"
                    status={fields.confirmcontrasena.status}
                    spanText={fields.confirmcontrasena.spanText}
                />

                {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

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