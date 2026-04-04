import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Redstone Software | High-end Solutions",
  description: "We develop online stores, CRM systems, SaaS solutions, and app platforms.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

import { ContactProvider } from "@/context/ContactContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-black text-white">
        <ContactProvider>
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}
