import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // ✅ Importamos el Navbar

export const metadata: Metadata = {
  title: "Gewinner",
  description: "Gewinner - Líderes en calidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar /> {/* ✅ Navbar visible en todas las páginas */}
        {children}
      </body>
    </html>
  );
}
