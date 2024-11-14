import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digi02 | Service details',
  description: 'Digi o2 - Transforming businesses with tailored IT solutions, software integration, AI analytics, and cloud services.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Service Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Service Details',
          },
        ]}
      />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
