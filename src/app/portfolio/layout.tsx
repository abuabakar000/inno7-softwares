import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Our Work & Case Studies",
  description:
    "Explore Inex Labs' portfolio of premium digital projects — from AI-powered platforms and SaaS products to restaurant websites and cleaning service apps. See how we build different.",
  alternates: {
    canonical: "https://inexlabs.com/portfolio",
  },
  openGraph: {
    title: "Portfolio — Our Work & Case Studies | Inex Labs",
    description:
      "Explore our portfolio of premium digital projects — AI platforms, SaaS products, e-commerce stores, and more.",
    url: "https://inexlabs.com/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
