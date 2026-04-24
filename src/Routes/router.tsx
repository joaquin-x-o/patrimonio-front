import { createBrowserRouter, Navigate } from "react-router-dom";
import PrivateLayout from "../components/layout/PrivateLayout";
import Dashboard from "../pages/Dashboard";
import Showcase from "../pages/Showcase";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "pruebas", element: <Showcase /> },
        ],
        errorElement: <div>Error </div>
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]);