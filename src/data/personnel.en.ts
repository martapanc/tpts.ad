import { people } from './site';
import type { Personnel } from './personnel-types';

export const personnel: Personnel = {
  path: '/en/personnel',
  title: 'Personnel',
  description:
    'The engineers behind TPTS: a software engineer and a platform engineer, who is also the company director.',
  intro:
    'Each project is delivered by the engineer responsible for that practice, from the first design decisions through to the infrastructure it runs on.',
  labels: { nationality: 'Nationality', focus: 'Focus', technologies: 'Technologies' },
  people: [
    {
      name: people.it.name,
      role: 'Platform engineer',
      also: 'Company director',
      nationality: 'British, French',
      summary:
        '9+ years of infrastructure and operations, ex Sky UK. Designs, operates and supports the platforms products run on, built on broadcast-scale experience.',
      focus: 'Infrastructure design, deployment, monitoring, backup, support',
    },
    {
      name: people.product.name,
      role: 'Software engineer',
      nationality: 'Italian',
      summary:
        '8+ years of full-stack engineering, ex Booking.com. Delivers defined projects end-to-end, or works as an embedded senior developer inside a client team.',
      focus: 'Software architecture, development, testing, observability',
      technologies: 'TypeScript, React and Next.js, Node.js, Java and Spring Boot, Python, AWS',
      website: { href: people.product.website, label: 'martacodes.it' },
    },
  ],
  back: 'Back to the home page',
};
