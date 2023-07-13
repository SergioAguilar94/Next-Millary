import "./globals.css";
import { Inter } from "next/font/google";
import { Navigator } from "./components/Navigator";
import style from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Campo Millary",
  description:
    "Hospedaje, Restaurant, Comida Mapuche, Tinaja, Domos, Tour en el sur de chile",
};

const links = [
  { label: "Inicio", route: "/" },
  { label: "Nosotros", route: "/Nosotros" },
  { label: "Galeria", route: "/Galeria" },
  { label: "Noticias", route: "/Noticias" },
  { label: "Contacto", route: "/Contacto" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <Navigator links={links} />
        </header>
        {children}
      </body>
    </html>
  );
}
