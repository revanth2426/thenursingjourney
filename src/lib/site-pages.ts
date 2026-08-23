export interface SitePage {
  path: string;
  title: string;
  description: string;
  markdown?: string;
}

export const SITE_PAGES: SitePage[] = [
  {
    path: '/',
    title: 'The Nursing Journey – Siva Naik',
    description: 'Nursing study materials, council registration assistance, and career guidance for nursing students and professionals in India.',
  },
  {
    path: '/about',
    title: 'About Siva Naik - The Nursing Journey',
    description: 'Learn about Siva Naik, ICU Staff Nurse and founder of The Nursing Journey.',
  },
  {
    path: '/services',
    title: 'Nursing Study, Council & Career Services',
    description: 'Expert nursing council registration, renewals, NOC, and career guidance.',
  },
  {
    path: '/resources',
    title: 'Free Nursing Study Resources & Notes',
    description: 'Access free nursing study materials, notes, and MCQs for nursing students.',
  },
  {
    path: '/why-us',
    title: 'Why Choose The Nursing Journey',
    description: 'Work with a practising ICU nurse for transparent, confidential support.',
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description: 'Get in touch with Siva Naik for nursing guidance and support.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'Learn how we protect your personal information and comply with DPDP Act 2023.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
    description: 'Read our Terms of Service to understand the rules governing your use of our website.',
  },
  {
    path: '/refund-policy',
    title: 'Refund Policy',
    description: 'Read our Refund Policy to understand the terms for refunds and cancellations.',
  },
];
