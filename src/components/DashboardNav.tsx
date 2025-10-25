import React from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

const DashboardNavbar: React.FC<NavbarProps> = ({ onMenuClick, sidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Panel de Gestión</h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-sm">Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default DashboardNavbar;
