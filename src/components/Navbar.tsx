import React, {useState} from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-semibold text-slate-800">Bienestar</span>
                </div>

                {/* Links - versión escritorio */}
                <div className="hidden md:flex space-x-8 text-slate-700 font-medium">
                <Link to="/" className="hover:text-blue-600 transition">Inicio</Link>
                <a href="#" className="hover:text-blue-600 transition">
                    Servicios
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                    Nosotros
                </a>
                <a href="#" className="hover:text-blue-600 transition">
                    Contacto
                </a>
                </div>

                {/* Botón */}
                <div className="hidden md:block">
                <Link to="login" className="bg-blue-200 border-1 border-blue-300 text-blue-900 rounded-lg py-2 px-4 hover:transition-all hover:duration-350 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 active:transition-all active:bg-blue-100 active:text-blue-500 active:border-blue-500">Iniciar sesión</Link>
                </div>

                {/* Menú móvil */}
                <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-slate-700 hover:text-blue-600 transition"
                >☰
                </button>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {menuOpen && (
            <div className="md:hidden bg-white shadow-lg border-t border-slate-100">
                <div className="flex flex-col space-y-3 px-6 py-4 text-slate-700 font-medium">
                    <a href="#" className="hover:text-blue-600 transition">
                    Inicio
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                    Servicios
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                    Nosotros
                    </a>
                    <a href="#" className="hover:text-blue-600 transition">
                    Contacto
                    </a>
                    <Link to="login" className="bg-blue-200 border-1 border-blue-300 text-blue-900 text-center rounded-lg py-2 px-4 hover:transition-all hover:duration-350 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 active:transition-all active:bg-blue-100 active:text-blue-500 active:border-blue-500">Iniciar sesión</Link>
                </div>
            </div>
            )}
        </nav>
    )
}

export default Navbar;