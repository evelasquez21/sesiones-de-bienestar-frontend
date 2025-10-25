import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import DashboardNavbar from '../components/DashboardNav';

const DashboardLayout: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si estamos en pantalla móvil
    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Ejecutar una vez al montar
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar fijo y superpuesto */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Contenedor principal */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out
        ${!isMobile && sidebarOpen ? "ml-0" : "absolute min-w-screen"}`}
      >
        <DashboardNavbar
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout
