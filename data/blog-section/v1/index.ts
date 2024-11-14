import { BlogSectionProps } from '@/src/sections/blog/v1';

export const blogSectionData: BlogSectionProps = {
  sectionHeading: {
    subtitle: 'our blogs',
    title: 'Transforming Challenges into Seamless Solutions',
  },
  blogs: [
    {
      image: {
        src: '/assets/images/blog/blog-1.webp',
        alt: 'We implement state-of-the-art encryption',
      },
      date: {
        day: '12',
        month: 'March',
      },
      author: {
        name: 'Emmy',
        slug: '',
      },
      slug: '/blog/single',
      title: 'We implement state-of-the-art encryption',
      commentCount: 117,
    },
    {
      image: {
        src: '/assets/images/blog/blog-2.webp',
        alt: 'We cater to various industries',
      },
      date: {
        day: '20',
        month: 'may',
      },
      author: {
        name: 'john',
        slug: '',
      },
      slug: '/blog/single',
      title: 'We cater to various industries',
      commentCount: 120,
    },
    {
      image: {
        src: '/assets/images/blog/blog-3.webp',
        alt: 'IT solutions enhance efficiency',
      },
      date: {
        day: '03',
        month: 'october',
      },
      author: {
        name: 'Aserifa',
        slug: '',
      },
      slug: '/blog/single',
      title: 'IT solutions enhance efficiency',
      commentCount: 105,
    },
  ],
};
