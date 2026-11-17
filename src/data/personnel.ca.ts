import { people } from './site';
import type { Personnel } from './personnel-types';

export const personnel: Personnel = {
  path: '/personal',
  title: 'Personal',
  description:
    "Els enginyers de TPTS: una enginyera de programari i un enginyer de plataforma, que també és el director de la societat.",
  intro:
    "Cada projecte el lliura l'enginyer responsable de l'àrea corresponent, des de les primeres decisions de disseny fins a la infraestructura on funciona.",
  labels: { nationality: 'Nacionalitat', focus: 'Àmbit', technologies: 'Tecnologies' },
  people: [
    {
      name: people.it.name,
      role: 'Enginyer de plataforma',
      also: 'Director de la societat',
      nationality: 'Britànica, francesa',
      summary:
        "Més de nou anys d'infraestructura i operacions, ex Sky UK. Dissenya, opera i dona suport a les plataformes on funcionen els productes, amb experiència a escala de broadcast.",
      focus: "Disseny d'infraestructura, desplegament, monitoratge, còpies de seguretat, suport",
    },
    {
      name: people.product.name,
      role: 'Enginyera de programari',
      nationality: 'Italiana',
      summary:
        "Més de vuit anys d'enginyeria full-stack, ex Booking.com. Lliura projectes definits d'extrem a extrem, o treballa com a desenvolupadora sènior integrada a l'equip del client.",
      focus: "Arquitectura de programari, desenvolupament, proves, observabilitat",
      technologies: 'TypeScript, React i Next.js, Node.js, Java i Spring Boot, Python, AWS',
      website: { href: people.product.website, label: 'martacodes.it' },
    },
  ],
  back: "Torna a l'inici",
};
