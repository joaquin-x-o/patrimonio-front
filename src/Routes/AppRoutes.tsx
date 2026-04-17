import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Showcase from "../pages/Showcase";

// Este componente se encarga de definir las rutas de la aplicacion y que componente se renderiza en cada ruta
export const AppRoutes = () => {
    return (
        <Routes>
            {/* INICIO */}
            <Route path="/" element={<Dashboard />} />

            {/* Seccion de pruebas de componentes */}
            <Route path="/pruebas" element={<Showcase />} />

            {/* REDIRECCION A INICIO EN CASO DE RUTA DESCONOCIDA*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};