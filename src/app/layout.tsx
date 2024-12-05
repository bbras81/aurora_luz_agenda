import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Head from "./components/Head";

export const metadata: Metadata = {
  title: "Aurora de Luz",
  description: "Terapias Holísticas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <Head />
      <body className="bg-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
