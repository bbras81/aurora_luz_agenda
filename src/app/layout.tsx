import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

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
      <body className="bg-background">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
