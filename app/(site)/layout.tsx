"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
import ToasterContext from "../context/ToastContext";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >    
        
          <Header />
          <ToasterContext />
          {children}
          <TawkMessengerReact
            propertyId="65e14b658d261e1b5f671de8"
            widgetId="1hns0t1mp" />         
          
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
