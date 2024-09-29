import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "GestiónEscolar",
  description: "GestiónEscolar es una plataforma integral diseñada para optimizar la administración académica de instituciones educativas. Ofrece una solución completa para gestionar calificaciones, cursos, docentes, estudiantes y actividades evaluativas. Con un enfoque en la eficiencia y la simplicidad, GestiónEscolar permite a los administradores, docentes y tutores tener control total sobre la información académica, mejorando la organización y el rendimiento académico en cada año escolar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body 
        className={cn("flex flex-col min-h-screen bg-background font-sans antialiased", inter.className )}>
          <Header />
          <main className="flex-grow bg-gradient-to-br from-blue-100 to-indigo-100">
            {children}
          </main>
          <Footer />
        </body>
    </html>
  );
}
