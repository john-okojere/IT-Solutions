import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { TeamSection } from '@/src/sections/team/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digi02 | Team',
  description: 'Digi o2 - Transforming businesses with tailored IT solutions, software integration, AI analytics, and cloud services.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Team"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Team',
          },
        ]}
      />
      <TeamSection />
      <Footer />
    </>
  );
}
