import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { CtaSection } from '@/src/sections/cta/v1';
import { TeamSection } from '@/src/sections/team/v1';
import { ContactSection } from '@/src/sections/contact/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digi02| About',
  description: 'Digi o2 - Transforming businesses with tailored IT solutions, software integration, AI analytics, and cloud services.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About',
          },
        ]}
      />
      <AboutSection />
      <TeamSection />
      <CtaSection />
      <TestimonialSection />
      <StatisticsSection />
      <ContactSection />
      {/* <WorkprocessSection/> */}
      <Footer />
    </>
  );
}
