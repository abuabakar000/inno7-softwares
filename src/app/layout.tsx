import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Inno7 Softwares | Premium Digital Boutique",
  description: "Boutique digital agency specializing in high-end software solutions, custom CRM architectures, and premium AI integrations.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
      suppressHydrationWarning
    >
      <body className="min-h-full bg-black text-white">
        <ContactProvider>
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}
