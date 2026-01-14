'use client';

import { useState, useEffect } from 'react';
import { Orbitron } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import QuantumBackground from "@/components/QuantumBackground";
import PageTransition from "@/components/PageTransition";
import Chatbot from "@/components/Chatbot";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackButton from '@/components/BackButton';

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.title = "Mexaion";

    const handleMouseMove = (e: MouseEvent) => {
      const activationWidth = window.innerWidth / 10; // A slightly smaller activation area
      if (e.clientX < activationWidth) {
        setSidebarOpen(true);
      } 
      // Close sidebar if cursor is outside of the expanded sidebar's width (w-72 = 288px)
      else if (e.clientX > 288) { 
        setSidebarOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logomexaion.png" />
      </head>
      <body className={orbitron.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QuantumBackground />
          <div className="flex">
            <Sidebar isOpen={isSidebarOpen} />
            <main className={`flex-grow p-8 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
              <BackButton />
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
          {/* <Chatbot /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}