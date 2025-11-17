import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Contacto from "./pages/Contacto";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import Locales from "./pages/Locales";
import Servicios from "./pages/Servicios";

export const navigation = [
	{ name: "Inicio", href: "/" },
	{ name: "Servicios", href: "/servicios" },
	{ name: "Locales", href: "/locales" },
	{ name: "Eventos", href: "/eventos" },
	{ name: "Contacto", href: "/contacto" },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "servicios", element: <Servicios /> },
      { path: "locales", element: <Locales /> },
      { path: "eventos", element: <Eventos /> },
      { path: "contacto", element: <Contacto /> },
    ],
  },
]);
