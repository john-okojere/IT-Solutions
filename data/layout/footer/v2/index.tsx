import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://web.facebook.com/redouane.redouaneouaaziz',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/redoine-ouaaziz-16251b254/',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/ouaazizredouane978/',
    },
  ],
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Portfolio',
        href: '/portfolio',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: '/blog',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Service Links',
    links: [
      {
        label: 'Cloud services',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Backup solutions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Network security',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Monitoring',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'IT Consulting',
        href: '/',
        openNewTab: false,
      },
    ],
  },

 
  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+234-816-940-4088',
    mail: 'info@digi02.org',
    location: 'Wine and Press Hub, Mothercat Road, Mando, Kaduna.',
  },
  footerBottom: {
    copyrightText: '© Digi02 2024 | All Rights Reserved',
    version : 'v1.0.1',
    links: [
      {
        label: 'Trams & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
