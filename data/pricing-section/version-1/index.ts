import { PricingSectionProps } from '@/src/sections/pricing/version-1';

export const pricingSectionData: PricingSectionProps = {
  sectionHeading: {
    subtitle: 'Pricing Action',
    title: 'Innovating for a better tomorrow',
  },
  cards: [
    {
      title: 'Basic Plan',
      description:
        'Essential tools and support for small businesses starting with cloud and AI solutions.',
      features: [
        'AI Analytics Lite (5,000 data points/month)',
        'Standard Cloud Support (up to 100 GB storage)',
        'Basic Software Integration (2 integrations)',
        'Monthly Security Reports',
      ],
      price: '$499',
      duration: '/month',
      isPopular: false,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: 'Standard Plan',
      description:
        'Enhanced solutions for growing businesses needing better analytics and security.',
      features: [
        'AI Analytics Plus (20,000 data points/month)',
        'Cloud Optimization (up to 500 GB storage)',
        'Enhanced Software Integration (5 integrations)',
        'Quarterly Security Audits',
      ],
      price: '$999',
      duration: '/month',
      isPopular: true,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
    {
      title: 'Premium Plan',
      description:
        'Full-scale services with unlimited resources for larger companies needing extensive support.',
      features: [
        'AI Analytics Pro (unlimited data points)',
        'Full Cloud Optimization (1 TB storage)',
        'Complete Integration Suite (unlimited integrations)',
        '24/7 Cybersecurity Monitoring',
      ],
      price: '$1299',
      duration: '/month',
      isPopular: false,
      button: {
        href: '/',
        label: 'Select Plan',
      },
    },
  ]
  
  
};
