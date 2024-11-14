import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',  
    href: '/',     
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
    

  },


  {
    title: 'Pages',
    subMenuItems: [
      {
        label: 'Testimonial',
        href: '/testimonial',
      },
      {
        label: 'Team',
        href: '/team',
      },
      
      {
        label: 'FAQ',
        href: '/faq',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
