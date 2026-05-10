import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Inex Labs — Our Story, Process & Vision",
  description:
    "Learn about Inex Labs — a boutique digital agency that fuses AI with web to create unfair digital advantage. Discover our process: Strategy, Design, Development, and Launch.",
  alternates: {
    canonical: "https://www.inexlabs.com/about",
  },
  openGraph: {
    title: "About Inex Labs — Our Story, Process & Vision",
    description:
      "A boutique digital agency that fuses AI with web to create unfair digital advantage. Discover our proven 4-phase process.",
    url: "https://www.inexlabs.com/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
