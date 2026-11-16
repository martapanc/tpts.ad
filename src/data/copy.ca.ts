/**
 * Catalan copy – the primary language, served at `/`.
 *
 * The English concept (version 6A) was the source; several passages there were
 * still drafts, so the Catalan is a first pass too. Lines flagged DRAFT are the
 * ones to review with fresh eyes before launch.
 *
 * Keep this file and `copy.en.ts` in step: both implement `Copy`, so a missing
 * or renamed key is a type error rather than a silently untranslated page.
 */

import { company, people } from './site';
import type { Copy, Sections } from './copy-types';

const sections: Sections = {
  practices: 'que-fem',
  projects: 'projectes',
  hiring: 'com-contractar',
  company: 'empresa',
  contact: 'contacte',
};

export const copy: Copy = {
  lang: 'ca',
  htmlLang: 'ca',
  ogLocale: 'ca_AD',
  path: '/',
  nativeName: 'Català',

  sections,

  meta: {
    title: `${company.legalName} – Enginyeria de programari i serveis informàtics`,
    description:
      "Dues àrees d'enginyeria sota una societat andorrana: desenvolupament de producte, i disseny i operació d'infraestructura. Per a clients de la UE, el Regne Unit i els Estats Units.",
  },

  nav: [
    { label: 'Què fem', href: `#${sections.practices}` },
    { label: 'Projectes', href: `#${sections.projects}` },
    { label: 'Contractació', href: `#${sections.hiring}` },
    { label: 'Empresa', href: `#${sections.company}` },
  ],

  hero: {
    // Two lines by design – the break is authored, not wrapped. Keep the second
    // line short enough to fit, in any language.
    titleLine1: 'Enginyeria de programari',
    titleLine2Prefix: 'i ',
    titleLine2Accent: 'serveis informàtics',
    lead: "Dues àrees d'enginyeria sota una mateixa societat andorrana: desenvolupament de producte, i disseny i operació d'infraestructura.\nCadascuna es contracta per separat per a clients de la UE, el Regne Unit i els Estats Units, i totes dues alhora en els projectes que necessiten les dues coses.",
    primaryCta: 'Contacteu-nos',
    secondaryCta: 'Què fem',
  },

  practices: {
    title: 'Dues àrees.',
    items: [
      {
        title: 'Desenvolupament de producte',
        body: "Enginyeria full-stack com a desenvolupadora sènior integrada al vostre equip, o projectes definits lliurats d'extrem a extrem: pagaments, sistemes de preus, SSO, plataformes de comptabilitat.\nTypeScript, React i Next.js, Node.js, Java i Spring Boot, Python, AWS.",
        leadIn: 'Al capdavant, ',
        leadName: people.product.name,
        leadWebsite: people.product.website,
        leadTail: " – més de vuit anys d'enginyeria full-stack, ex Booking.com.",
      },
      {
        title: 'Infraestructura i operacions',
        // DRAFT: "avorrits en el millor sentit" is a direct rendering of the
        // English joke – worth a second opinion on whether it lands in Catalan.
        body: "Disseny, operació i suport d'infraestructura amb experiència a escala de broadcast: xarxa, desplegament, monitoratge i còpies de seguretat, mantinguts fiables, segurs i avorrits en el millor sentit de la paraula.",
        leadIn: 'Al capdavant, ',
        leadName: people.it.name,
        leadTail: " – més de nou anys d'infraestructura i operacions, ex Sky UK.",
      },
    ],
  },

  credentials: [
    { pre: 'Hem treballat a ', strong: 'Booking.com' },
    { pre: 'Hem treballat a ', strong: 'Sky' },
    { pre: '', strong: 'SaaS corporatiu · SSO · pagaments' },
    { pre: 'Clients al ', strong: 'RU · DE · EUA' },
  ],

  ownWork: {
    statement:
      'Els encàrrecs de client ocupen la major part del nostre temps. La resta va als nostres propis projectes, i és allà on les dues àrees treballen com un sol equip: ',
    statementAccent:
      "una construeix l'aplicació, l'altra fa funcionar la plataforma on viu.",
    note: 'Són els projectes on les restriccions les triem nosaltres, i estan en producció: els fem servir per gestionar la mateixa empresa. FlexInvoice i FlexTag en són els exemples actuals.',
  },

  // TODO: the case study page does not exist yet – the link is hidden until it does.
  caseStudies: [
    {
      title: 'FlexInvoice',
      body: "El sistema de facturació que hem construït per a la nostra pròpia operativa. Una plantilla desada omple una factura recurrent, una carpeta de rebuts es converteix en la taula de despeses, i els mateixos rebuts s'integren al PDF final. Els rebuts es llegeixen a la nostra pròpia màquina, i els imports en altres monedes es converteixen al tipus de canvi del Banc Central Europeu. Un servei guarda les dades i la interfície; un altre comprova cada petició contra un esquema publicat i genera el document.",
      note: "Una àrea ha escrit l'aplicació. L'altra la fa funcionar amb imatges de contenidor de versió fixada, de manera que tornar a la versió anterior és canviar una sola línia.",
      link: 'Llegiu el cas pràctic',
      linkHref: '',
      visual: {
        kind: 'invoice',
        alt: "Primera pàgina d'una factura generada per FlexInvoice: dades de l'emissor i del destinatari, dues línies de factura, una fila de despeses i el total.",
        caption: 'Generat per FlexInvoice · dades de mostra',
      },
    },
    {
      title: 'FlexTag',
      body: "El registre d'actius amb què gestionem el nostre propi equipament: un codi QR a cada portàtil i monitor, una etiqueta impresa directament des del navegador, i la data de compra, el preu i la factura darrere de cada escaneig. Un lot de factures de proveïdors carrega el registre d'un sol cop, i la llista d'actius s'exporta a Excel.",
      note: "La impressora d'etiquetes és la part que la feina de client gairebé mai demana fins al final: escriure la integració i després demostrar-la sobre el dispositiu físic, no només sobre l'API. El servei d'impressió posa les feines en cua, rebutja un disseny que no cap a la cinta carregada i no imprimeix dues vegades la mateixa etiqueta en un reintent.",
      link: 'Llegiu el cas pràctic',
      linkHref: '',
      visual: {
        kind: 'label',
        alt: 'Una etiqueta d\'actiu generada per FlexTag: un codi QR al costat del codi TPTS-LAP-001 i el nom MacBook Pro 14".',
        caption: 'Generat per FlexTag · cinta de 62 mm · dades de mostra',
      },
    },
  ],

  hiring: {
    title: 'Treballar amb una empresa andorrana és més senzill del que sembla.',
    intro:
      'Un contracte de serveis B2B estàndard amb TPTS ho cobreix tot, i el vostre equip legal no serà el primer a revisar-ne un. Som residents a Andorra, de manera que treballem com a proveïdor de serveis i no com a personal en plantilla.',
    steps: [
      {
        lead: 'Primer,',
        body: " contracteu TPTS SL: un sol acord amb una societat andorrana registrada, on consten l'àrea i la persona que farà la feina.",
      },
      {
        lead: 'Després,',
        body: " ens integrem al vostre equip o us ho lliurem fet: enginyeria a tarifa diària dins de l'equip, o un projecte amb abast tancat d'extrem a extrem. Ciutadania de la UE, en remot, CET.",
      },
      {
        lead: 'Cada mes,',
        body: ' una sola factura detallada, amb la gestió transfronterera que fa anys que apliquem amb clients del Regne Unit, la UE i els EUA.',
      },
    ],
  },

  company: {
    title: "L'empresa",
    // Line breaks are honoured here: one `\n` starts a new line, two leave a
    // blank line. Anything else wraps normally.
    body: `${company.legalName} és una societat limitada registrada a ${company.city}.\nDos enginyers, dues àrees, una sola entitat contractant.`,
    rows: [
      { label: 'Entitat', value: company.legalName },
      { label: 'Registre', value: company.nrt, mono: true },
      { label: 'Seu', value: `${company.city} · en remot, ${company.timezone}` },
      {
        label: 'Àrees',
        value: 'Disseny i desenvolupament de producte · infraestructura i operacions',
      },
      {
        label: 'Cobertura',
        value:
          'Contractes B2B a la UE, el Regne Unit i els EUA (més països possibles)',
      },
      {
        label: 'Idiomes',
        value: 'Anglès · italià · francès · alemany · castellà · català',
      },
    ],
  },

  contact: {
    title: 'Consultes i nous encàrrecs',
    body: 'Envieu-nos una descripció breu de la feina: abast, tecnologies i terminis, si en teniu. Si ja sabeu quina àrea us interessa, digueu-nos-ho; si no, ja us ho direm nosaltres. Responem en un termini de dos dies laborables.',
    cta: 'Contacteu-nos',
    emailLead: 'o escriviu a',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} · ${company.legalName} · Andorra`,
    links: [
      { label: 'Avís legal', href: '/avis-legal' },
      { label: 'Privacitat', href: '/privacitat' },
      { label: 'Galetes', href: '/galetes' },
    ],
  },

  a11y: {
    skipToContent: 'Vés al contingut principal',
    mainNav: 'Navegació principal',
    openMenu: 'Obre el menú',
    closeMenu: 'Tanca el menú',
    homeLink: `${company.shortName} – inici`,
    languageSwitch: 'Canvia d’idioma',
  },
};
