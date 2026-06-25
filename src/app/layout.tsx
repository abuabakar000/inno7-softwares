import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800", "900"],
});

const SITE_URL = "https://www.inexlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Inex Labs | Premium Digital Boutique — Software, AI & Web Solutions",
    template: "%s | Inex Labs",
  },
  description:
    "Inex Labs is a boutique digital agency specializing in high-end software solutions, automated SMS messaging, Google Business optimization, AI integrations, and premium web development.",
  keywords: [
    "Inex Labs",
    "inex labs",
    "inexlabs",
    "digital agency",
    "software development",
    "AI integration",
    "web development",
    "Automated SMS",
    "Google Business Profile",
    "branding design",
    "booking systems",
    "SEO optimization",
    "chatbot development",
    "AI agents",
    "boutique agency",
  ],
  authors: [{ name: "Inex Labs", url: SITE_URL }],
  creator: "Inex Labs",
  publisher: "Inex Labs",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Inex Labs",
    title: "Inex Labs | Premium Digital Boutique — Software, AI & Web Solutions",
    description:
      "Boutique digital agency specializing in high-end software solutions, automated SMS messaging, Google Business optimization, and premium AI integrations.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Inex Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inex Labs | Premium Digital Boutique",
    description:
      "Boutique digital agency specializing in high-end software solutions, AI integrations, and premium web development.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: "your-google-verification-code",
  },
};

import { ContactProvider } from "@/context/ContactContext";

// JSON-LD Structured Data for Organization + WebSite + SiteNavigationElement
function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Inex Labs",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    description:
      "Boutique digital agency specializing in high-end software solutions, automated SMS messaging, Google Business optimization, and premium AI integrations.",
    email: "office@inexlabs.com",
    telephone: "+16396362350",
    sameAs: [
      "https://www.linkedin.com/in/abu-bakar-khawaja-dev",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+16396362350",
      contactType: "customer service",
      email: "office@inexlabs.com",
      availableLanguage: ["English"],
    },
    foundingDate: "2024",
    knowsAbout: [
      "Software Development",
      "Web Development",
      "AI Integration",
      "Automated SMS",
      "Google Business Profile",
      "Branding & Design",
      "Booking Systems",
      "SEO Optimization",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Inex Labs",
    url: SITE_URL,
    description:
      "Boutique digital agency specializing in high-end software, AI, and web solutions.",
    publisher: {
      "@type": "Organization",
      name: "Inex Labs",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // This is the key schema that helps Google generate Sitelinks
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "Services",
      "Contact Us",
      "About",
      "Portfolio",
      "Website Development",
      "AI Agents & Chatbots",
      "AI Integration",
      "Automated SMS",
      "Google Business Profile",
      "Booking Systems",
      "Branding & Design",
      "SEO Optimization",
    ],
    url: [
      `${SITE_URL}/services/website-development`,
      `${SITE_URL}/contact`,
      `${SITE_URL}/about`,
      `${SITE_URL}/portfolio`,
      `${SITE_URL}/services/website-development`,
      `${SITE_URL}/services/ai-agents-chatbot`,
      `${SITE_URL}/services/ai-integration`,
      `${SITE_URL}/services/automated-sms`,
      `${SITE_URL}/services/google-business`,
      `${SITE_URL}/services/booking-systems`,
      `${SITE_URL}/services/branding-design`,
      `${SITE_URL}/services/seo-optimization`,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(navigationSchema),
        }}
      />
    </>
  );
}

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
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full bg-black text-white" suppressHydrationWarning>
        <ContactProvider>
          {children}
        </ContactProvider>
      </body>
    </html>
  );
}
