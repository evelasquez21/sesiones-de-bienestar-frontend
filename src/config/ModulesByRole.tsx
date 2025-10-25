import { Home, Users, ClipboardList, LogOut, BookUser, ChartColumnBigIcon, User, FileSpreadsheet, Receipt, Bell, History, CircleUser } from "lucide-react";

export const ModuleByRole = {
    admin: [
        { name: "Inicio", icon: Home, url: "/dashboard" },
        { name: "Usuarios", icon: User, url: "/dashboard/usuarios" },
        { name: "Servicios", icon: ClipboardList, url: "/dashboard/servicios" },
        { name: "Facturas", icon: Receipt, url: "/dashboard/facturas" },
        { name: "Reportes", icon: ChartColumnBigIcon, url: "/dashboard/reportes" },
    ],
    recepcionist: [
        { name: "Inicio", icon: Home, url: "/dashboard" },
        { name: "Servicios", icon: ClipboardList, url: "/dashboard/servicios" },
        { name: "Citas", icon: BookUser, url: "/dashboard/citas" },
        { name: "Clientes", icon: Users, url: "/dashboard/clientes" },
        { name: "Salir", icon: LogOut, url: "/dashboard/log-out" }
    ],
    client: [
        { name: "Inicio", icon: Home, url: "/dashboard" },
        { name: "Mis citas", icon: BookUser, url: "/dashboard/mis-citas" },
        { name: "Mis servicios", icon: ClipboardList, url: "/dashboard/mis-servicios" },
        { name: "Mis facturas", icon: FileSpreadsheet, url: "/dashboard/mis-facturas" },
        { name: "Mis notificaciones", icon: Bell, url: "/dashboard/mis-notificaciones" },
        { name: "Mi historial", icon: History, url: "/dashboard/mi-historial" },
        { name: "Mi perfil", icon: CircleUser, url: "/dashboard/mi-perfil" }
    ]
}