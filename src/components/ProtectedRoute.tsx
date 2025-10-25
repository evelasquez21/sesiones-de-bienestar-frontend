import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import type { JSX } from "react";

interface Props {
    roles?: string [];
    children: JSX.Element;
}

export const ProtectedRoute = ({ roles, children }: Props) => {
    const { user, isAuthenticated, loading } = useAuth();

    if (loading) return <div className="text-center mt-10">Cargando...</div>;

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    if (roles && user && !roles.includes(user.rol)) {
        return <Navigate to="/no-autorizado" replace />;
    }

    return children;
}