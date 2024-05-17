import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalContext from "@/context/GlobalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MonoRepo",
  description: "MonoRepo app base",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="business">
      <body className={inter.className}>
        <GlobalContext>
          <main className="container mx-auto px-4">
            <Navbar />
            {children}
          </main>
        </GlobalContext>
      </body>
    </html>
  );
}
