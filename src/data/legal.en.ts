/**
 * English legal pages – served under `/en`.
 *
 * These describe the site as it is built today: static pages, no cookies, no
 * analytics, no forms, fonts served from the site itself. If any of that
 * changes, these pages have to change with it. They have not been reviewed by
 * a lawyer.
 */

import { company } from './site';
import type { Legal } from './legal-types';

const identity = [
  `Company: ${company.legalName}`,
  `Tax registration: ${company.nrt}`,
  `Registered in: ${company.city}`,
  `Email: ${company.email}`,
];

export const legal: Legal = {
  updated: 'Last updated: 16 November 2026',
  back: 'Back to the home page',

  docs: {
    notice: {
      path: '/en/legal-notice',
      title: 'Legal notice',
      description: `Who owns and operates this website: ${company.legalName}, registered in Andorra.`,
      intro:
        "This page says who is behind this website and on what terms you may use it, as required by Andorra's Law 20/2014 on electronic contracting and operators carrying out their economic activity in a digital space.",
      sections: [
        {
          heading: 'Who owns this website',
          paragraphs: [],
          list: identity,
        },
        {
          heading: 'What this website is for',
          paragraphs: [
            `This website presents the services of ${company.legalName}. Nothing can be bought or contracted through it. The descriptions here are information, not an offer: an engagement exists only once both sides have signed a services agreement.`,
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            `The text, design, logo and code of this website belong to ${company.legalName}, unless stated otherwise. You may quote from it with attribution and link to it freely. Copying it in whole or in substantial part for commercial use needs our written permission.`,
            'Company and product names mentioned here, such as those of past employers and clients, belong to their owners. Mentioning them does not imply their endorsement.',
          ],
        },
        {
          heading: 'Accuracy and liability',
          paragraphs: [
            'We keep this website accurate and up to date, but we give no guarantee that it is free of errors or always available. To the extent the law allows, we are not liable for decisions taken on the basis of its content alone.',
            'This website links to other websites. We do not control them and are not responsible for their content or for how they handle personal data.',
          ],
        },
        {
          heading: 'Applicable law',
          paragraphs: [
            'This website is governed by the law of the Principality of Andorra. Any dispute about it falls to the Andorran courts, unless a law that cannot be set aside says otherwise.',
          ],
        },
      ],
    },

    privacy: {
      path: '/en/privacy',
      title: 'Privacy',
      description: `What personal data ${company.legalName} handles through this website, why, and the rights you have over it.`,
      intro:
        "This website collects very little: it has no accounts, no forms, no analytics and no advertising. This page explains what little personal data we do handle and what you can ask us to do with it, under Andorra's Law 29/2021 on personal data protection.",
      sections: [
        {
          heading: 'Who is responsible',
          paragraphs: [
            `${company.legalName} (${company.nrt}), registered in ${company.city}, decides how the data described here is used. For anything about your data, write to ${company.email}.`,
          ],
        },
        {
          heading: 'What we handle, and why',
          paragraphs: [
            'Messages you send us. If you email us, we receive your name, your email address and whatever you choose to write. We use it to answer you and, if work follows, to prepare and manage the engagement. We do this because you asked us to, and because we have a legitimate interest in answering business enquiries.',
            'Server logs. Like any website, this one is delivered by a hosting provider whose servers record technical details of each request: IP address, date and time, the page requested and the browser used. These records are used to keep the site running and secure. We do not use them to identify or follow individual visitors.',
            'We do not build profiles, send newsletters or take automated decisions about anyone.',
          ],
        },
        {
          heading: 'How long we keep it',
          paragraphs: [
            'We keep enquiry emails for as long as the conversation is live, and delete them once they are no longer needed. If an engagement follows, the related correspondence and contract records are kept for as long as the law requires accounting and contractual records to be kept.',
          ],
        },
        {
          heading: 'Who else sees it',
          paragraphs: [
            'We do not sell or share personal data. It is handled on our behalf by the providers we rely on to run email and to host this website, under contract and only for those purposes. If one of them processes data outside Andorra, that happens with the safeguards the law requires.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            `You can ask us for a copy of the data we hold about you, ask us to correct or delete it, ask us to restrict how it is used, object to its use, or ask to receive it in a portable format. Write to ${company.email} and we will answer within the time the law sets.`,
            'If you think we have handled your data wrongly, you can complain to the Andorran Data Protection Agency (Agència Andorrana de Protecció de Dades, apda.ad).',
          ],
        },
        {
          heading: 'Changes to this page',
          paragraphs: [
            'If what we collect changes, this page changes first. The date above shows when it was last revised.',
          ],
        },
      ],
    },

    cookies: {
      path: '/en/cookies',
      title: 'Cookies',
      description: 'This website sets no cookies and uses no analytics or tracking.',
      intro:
        'This website sets no cookies. That is why you were not shown a cookie banner.',
      sections: [
        {
          heading: 'What that means in practice',
          paragraphs: [],
          list: [
            'No cookies, of our own or from third parties.',
            'No analytics, advertising or social media trackers.',
            'Nothing stored in your browser to recognise you on a later visit.',
            'Fonts and images are served from this website itself, so loading a page contacts no other company.',
          ],
        },
        {
          heading: 'Links to other websites',
          paragraphs: [
            'Following a link from here to another website puts you under that website\'s own cookie and privacy rules.',
          ],
        },
        {
          heading: 'If this changes',
          paragraphs: [
            'If we ever add something that needs cookies, we will update this page first and ask for your consent where the law requires it.',
          ],
        },
      ],
    },
  },
};
