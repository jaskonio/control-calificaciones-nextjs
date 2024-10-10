import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

const inter = Poppins({ subsets: ["latin-ext"], weight: ["600", "800"]});


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
    <html lang="es" className="h-full">
      <body 
        className={cn("flex flex-col min-h-screen bg-background", inter.className )}>
        <SessionProvider>

          <Header />
          <div className="min-h-screen bg-gradient-to-b from-secondary-light to-white py-12">
            {children}
            <Toaster />
          </div>
          <Footer />
        </SessionProvider>

        </body>
    </html>
  );
}
