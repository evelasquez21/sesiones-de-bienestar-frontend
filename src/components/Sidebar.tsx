import React from "react";
import { motion } from "framer-motion";
import { Home, Users, ClipboardList, LogOut, BookUser, ChartColumnBigIcon, CalendarDays, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
    // Varainte de animación, versión móvil
    const sidebarVariants = {
        open: { x: 0},
        closed: { x: -250}
    }

  return (
    <>
      {/* Fondo oscuro al abrir en móvil */}
      <div
        className={`fixed inset-0 bg-black/40 z-10 md:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        animate={open ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 90 }}
        className={`
          fixed md:relative z-20 w-64 h-full bg-white shadow-lg flex flex-col p-4
          md:translate-x-0 md:shadow-none
        `}
      >
        <h2 className="text-xl font-semibold mb-8 text-blue-600 text-center">
          Administrador
        </h2>

        <nav className="flex flex-col gap-4">
          {[
            { name: "Inicio", icon: Home, url: "/dashboard" },
            { name: "Servicios", icon: ClipboardList, url: "/dashboard/servicios" },
            { name: "Citas", icon: BookUser, url: "/dashboard/citas" },
            { name: "Clientes", icon: Users, url: "/dashboard/clientes" },
            { name: "Facturas", icon: FileSpreadsheet, url: "/dashboard/facturas" },
            { name: "Reportes", icon: ChartColumnBigIcon, url: "/dashboard/reportes" },
            { name: "Salir", icon: LogOut, url: "/dashboard/log-out" },
          ].map((item) => (
            // <button
            //   key={item.name}
            //   onClick={() => setOpen(false)} // en móvil cierra el menú
            //   className="flex items-center gap-3 text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg p-2 transition"
            // >
            //   <item.icon size={20} />
            //   <span>{item.name}</span>
            // </button>
            <Link key={item.name} to={item.url} className="flex items-center gap-3 text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg p-2 transition">
              <item.icon size={20} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
