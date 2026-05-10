import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceClient from '@/components/ServiceClient';
import { SERVICES_DATA } from '@/data/services';

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];

  if (!data) {
    return {
      title: "Service Not Found",
    };
  }

  // Clean up title (remove \n used for display)
  const cleanTitle = data.title.replace(/\n/g, " ");

  return {
    title: `${cleanTitle} Services — Inex Labs`,
    description: data.heroDescription,
    alternates: {
      canonical: `https://inexlabs.com/services/${slug}`,
    },
    openGraph: {
      title: `${cleanTitle} Services — Inex Labs`,
      description: data.heroDescription,
      url: `https://inexlabs.com/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];

  if (!data) {
    notFound();
  }

  return <ServiceClient data={data} />;
}
