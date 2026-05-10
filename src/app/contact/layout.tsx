import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with Inex Labs",
  description:
    "Ready to build your next digital product? Contact Inex Labs for premium software development, AI integrations, CRM systems, and web solutions. Email us at hello@inexlabs.com or call +1 639 387 6511.",
  alternates: {
    canonical: "https://www.inexlabs.com/contact",
  },
  openGraph: {
    title: "Contact Us — Get in Touch with Inex Labs",
    description:
      "Ready to build your next digital product? Contact Inex Labs for software development, AI integrations, and web solutions.",
    url: "https://www.inexlabs.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
