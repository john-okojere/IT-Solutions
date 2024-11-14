import { projectSectionData } from '@/data/project-section/v1/list-page';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectSection } from '@/src/sections/project/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digi02  | Project',
  description: 'Digi o2 - Transforming businesses with tailored IT solutions, software integration, AI analytics, and cloud services.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Project"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Project',
          },
        ]}
      />
      <ProjectSection {...projectSectionData} />
      <Footer />
    </>
  );
}
