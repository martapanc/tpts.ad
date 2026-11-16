/**
 * Catalan legal pages – the primary language, served from the site root.
 *
 * These describe the site as it is built today: static pages, no cookies, no
 * analytics, no forms, fonts served from the site itself. If any of that
 * changes, these pages have to change with it. They have not been reviewed by
 * a lawyer.
 */

import { company } from './site';
import type { Legal } from './legal-types';

const identity = [
  `Societat: ${company.legalName}`,
  `Registre tributari: ${company.nrt}`,
  `Registrada a: ${company.city}`,
  `Correu electrònic: ${company.email}`,
];

export const legal: Legal = {
  updated: 'Darrera actualització: 16 de novembre de 2026',
  back: "Torna a la pàgina d'inici",

  docs: {
    notice: {
      path: '/avis-legal',
      title: 'Avís legal',
      description: `Qui és el titular d'aquest lloc web: ${company.legalName}, societat registrada a Andorra.`,
      intro:
        "Aquesta pàgina explica qui hi ha darrere d'aquest lloc web i en quines condicions el podeu fer servir, tal com exigeix la Llei 20/2014, reguladora de la contractació electrònica i dels operadors que desenvolupen la seva activitat econòmica en un espai digital.",
      sections: [
        {
          heading: "Titular d'aquest lloc web",
          paragraphs: [],
          list: identity,
        },
        {
          heading: 'Finalitat del lloc web',
          paragraphs: [
            `Aquest lloc web presenta els serveis de ${company.legalName}. No s'hi pot comprar ni contractar res. Les descripcions que hi apareixen són informació, no una oferta: un encàrrec només existeix quan totes dues parts han signat un contracte de serveis.`,
          ],
        },
        {
          heading: 'Propietat intel·lectual',
          paragraphs: [
            `El text, el disseny, el logotip i el codi d'aquest lloc web pertanyen a ${company.legalName}, tret que s'indiqui el contrari. Podeu citar-ne fragments esmentant-ne l'origen i enllaçar-hi lliurement. Per copiar-lo sencer o en una part substancial amb finalitat comercial cal el nostre permís per escrit.`,
            "Els noms d'empreses i de productes que s'hi esmenten, com els d'antics ocupadors i clients, pertanyen als seus titulars. Esmentar-los no implica que ens avalin.",
          ],
        },
        {
          heading: 'Exactitud i responsabilitat',
          paragraphs: [
            "Mantenim aquest lloc web exacte i al dia, però no garantim que no contingui errors ni que estigui sempre disponible. En la mesura que la llei ho permet, no ens fem responsables de les decisions preses només a partir del seu contingut.",
            "Aquest lloc web enllaça amb altres llocs web. No els controlem i no som responsables del seu contingut ni de com tracten les dades personals.",
          ],
        },
        {
          heading: 'Llei aplicable',
          paragraphs: [
            "Aquest lloc web es regeix per la llei del Principat d'Andorra. Qualsevol controvèrsia correspon als tribunals andorrans, tret que una norma imperativa disposi una altra cosa.",
          ],
        },
      ],
    },

    privacy: {
      path: '/privacitat',
      title: 'Privacitat',
      description: `Quines dades personals tracta ${company.legalName} a través d'aquest lloc web, per què, i quins drets hi teniu.`,
      intro:
        "Aquest lloc web recull molt poca cosa: no té comptes d'usuari, ni formularis, ni analítica, ni publicitat. Aquesta pàgina explica les poques dades personals que sí que tractem i què ens podeu demanar que en fem, d'acord amb la Llei 29/2021, qualificada de protecció de dades personals.",
      sections: [
        {
          heading: 'Responsable del tractament',
          paragraphs: [
            `${company.legalName} (${company.nrt}), registrada a ${company.city}, decideix com es fan servir les dades que es descriuen aquí. Per a qualsevol qüestió sobre les vostres dades, escriviu a ${company.email}.`,
          ],
        },
        {
          heading: 'Què tractem, i per què',
          paragraphs: [
            "Els missatges que ens envieu. Si ens escriviu per correu electrònic, rebem el vostre nom, la vostra adreça i el que decidiu explicar-nos. Ho fem servir per respondre-us i, si en surt una feina, per preparar i gestionar l'encàrrec. Ho fem perquè ens ho heu demanat, i perquè tenim un interès legítim a respondre les consultes professionals.",
            "Els registres del servidor. Com qualsevol lloc web, aquest el serveix un proveïdor d'allotjament, els servidors del qual anoten dades tècniques de cada petició: adreça IP, data i hora, pàgina sol·licitada i navegador. Aquests registres serveixen per mantenir el lloc en funcionament i segur. No els fem servir per identificar ni seguir cap visitant.",
            'No elaborem perfils, no enviem butlletins i no prenem decisions automatitzades sobre ningú.',
          ],
        },
        {
          heading: 'Quant de temps ho conservem',
          paragraphs: [
            "Conservem els correus de consulta mentre la conversa és viva, i els esborrem quan ja no calen. Si en surt un encàrrec, la correspondència i la documentació contractual relacionades es conserven durant el temps que la llei obliga a conservar la documentació comptable i contractual.",
          ],
        },
        {
          heading: 'Qui més hi té accés',
          paragraphs: [
            "No venem ni cedim dades personals. Les tracten per compte nostre els proveïdors amb què fem funcionar el correu electrònic i allotgem aquest lloc web, amb contracte i només per a aquestes finalitats. Si algun d'ells tracta dades fora d'Andorra, ho fa amb les garanties que exigeix la llei.",
          ],
        },
        {
          heading: 'Els vostres drets',
          paragraphs: [
            `Ens podeu demanar una còpia de les dades que tenim sobre vosaltres, que les rectifiquem o les suprimim, que en limitem l'ús, oposar-vos al tractament, o rebre-les en un format portable. Escriviu a ${company.email} i us respondrem dins del termini que fixa la llei.`,
            "Si creieu que hem tractat malament les vostres dades, podeu presentar una reclamació a l'Agència Andorrana de Protecció de Dades (apda.ad).",
          ],
        },
        {
          heading: "Canvis en aquesta pàgina",
          paragraphs: [
            "Si canvia el que recollim, primer canvia aquesta pàgina. La data de dalt indica quan es va revisar per darrera vegada.",
          ],
        },
      ],
    },

    cookies: {
      path: '/galetes',
      title: 'Galetes',
      description: "Aquest lloc web no instal·la galetes i no fa servir analítica ni seguiment.",
      intro:
        "Aquest lloc web no instal·la cap galeta. Per això no us hem mostrat cap avís de galetes.",
      sections: [
        {
          heading: 'Què vol dir a la pràctica',
          paragraphs: [],
          list: [
            'Cap galeta, ni pròpia ni de tercers.',
            'Cap eina d’analítica, de publicitat ni de xarxes socials.',
            'No es desa res al vostre navegador per reconèixer-vos en una visita posterior.',
            "Les fonts i les imatges se serveixen des d'aquest mateix lloc web, de manera que carregar una pàgina no contacta amb cap altra empresa.",
          ],
        },
        {
          heading: 'Enllaços a altres llocs web',
          paragraphs: [
            "Si seguiu un enllaç d'aquí cap a un altre lloc web, hi regeixen les normes de galetes i de privacitat d'aquell lloc.",
          ],
        },
        {
          heading: 'Si això canvia',
          paragraphs: [
            "Si mai afegim alguna cosa que necessiti galetes, primer actualitzarem aquesta pàgina i us demanarem el consentiment quan la llei ho exigeixi.",
          ],
        },
      ],
    },
  },
};
