import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Clients testimonial',
    title: 'Your IT Partner for a Dynamic Future',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.webp',
          alt: 'Richard lewis ',
        },
        name: 'Richard lewis',
        about: 'Project Manager',
      },
      speech:
        'Working with this team has been seamless and rewarding. Their dedication to quality and efficiency has significantly boosted our project outcomes.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.webp',
          alt: 'Michael Thompson',
        },
        name: 'Michael Thompson',
        about: 'Head of Software Development',
      },
      speech:
        'Their expertise in technology solutions has streamlined our processes and enhanced our digital experience. Highly recommend their services!',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-11.webp',
          alt: 'Emma Rodriguez',
        },
        name: 'Emma Rodriguez',
        about: 'Team Lead, Product Design',
      },
      speech:
        'A reliable partner for any tech project! Their attention to detail and proactive approach set them apart in the industry.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-12.webp',
          alt: 'Daniel Murphy',
        },
        name: 'Daniel Murphy',
        about: 'Chief Technology Officer',
      },
      speech:
        'This team exceeded our expectations, delivering quality solutions that have transformed our operations. Outstanding service!',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-13.webp',
          alt: 'Kelvin Brian',
        },
        name: 'Kelvin Brian',
        about: 'Digital Marketing Manager',
      },
      speech:
        'They brought innovation to our project that we hadn’t even considered. Their creativity and skills are unmatched!',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-14.webp',
          alt: 'Joshua Walker',
        },
        name: 'Joshua Walker',
        about: 'Senior Software Engineer',
      },
      speech:
        'From planning to execution, they were professional and committed. Their solutions are highly effective and adaptable.',
      rating: 5,
    },
  ],
  
};
