import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: '',
    title: 'Where Innovation Meets IT Excellence',
  },
  isWave: true,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/1.webp',
        alt: 'portfolio-1',
      },
      title: 'Software Integration Services',
      description: 'Ensure seamless communication and functionality across platforms with custom software integration solutions.',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/2.webp',
        alt: 'portfolio-1',
      },
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with comprehensive, proactive cybersecurity strategies.',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/3.webp',
        alt: 'portfolio-1',
      },
      title: 'Cloud Migratation and optimization ',
      description: 'Seamlessly transition to the cloud while enhancing performance, security, and scalability.',
    },
    {
      slug: '/#',
      image: {
        src: '/assets/images/project/4.webp',
        alt: 'portfolio-1',
      },
      title: 'AI Analytics ',
      description: 'Leverage data-driven insights with advanced AI analytics to make smarter business decisions.',
    },
  ],
};
