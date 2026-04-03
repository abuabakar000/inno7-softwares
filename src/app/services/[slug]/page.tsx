import { notFound } from 'next/navigation';
import ServiceClient from '@/components/ServiceClient';
import { SERVICES_DATA } from '@/data/services';

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];

  if (!data) {
    notFound();
  }

  return <ServiceClient data={data} />;
}
