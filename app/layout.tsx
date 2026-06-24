import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/app/contexts/AppContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wanderlust Travel - Agencia de Viajes Turísticos",
  description: "Descubre los destinos más increíbles del Perú con Wanderlust Travel. Tours personalizados, aventura, cultura y confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-off-white dark:bg-slate-950 text-deep-slate dark:text-slate-100 font-inter antialiased transition-colors">
        <AppProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
