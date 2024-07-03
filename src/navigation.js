import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Guarantees',
      links: [
        {
          text: 'Social Note',
          href: getPermalink('/note'),
        },
        {
          text: 'Capability-Assurance Policy',
          href: getPermalink('/policy'),
        },
      ],
    },
    {
      text: 'FAQs',
      href: getPermalink('/faqs'),
    },
  ],
  actions: [{ text: 'Order Now', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'FAQs', href: getPermalink('/faqs') },
      ],
    },
    {
      title: 'Contacts',
      links: [
        { text: '+447365270700', href: 'tel:447365270700' },
        { text: 'support@guidemyclass.com', href: 'mailto:support@guidemyclass.com' },
        { text: '16 Crescent Ln, London', href:'#' },
        { text: 'SW4 9PU, UK', href:'#' },
      ],
    },
  ],
  icons: [
    {
      title: 'We Accept',
      links: [
        { icon: 'logos:visa' },
        { icon: 'logos:mastercard' },
        { icon: 'logos:amex' },
        { icon: 'logos:discover' },
      ],
    },
    {
      title: 'Global Offices',
      links: [
        { icon: 'flag:ca-4x3' },
        { icon: 'flag:ke-4x3' },
        { icon: 'flag:nl-4x3' },
        { icon: 'flag:sg-4x3' },
        { icon: 'flag:us-4x3' },
        { icon: 'flag:gb-4x3' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Social Note', href: getPermalink('/note') },
    { text: 'Capability-Assurance Policy', href: getPermalink('/policy') },
  ],
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/zxfG3s3aXH' },
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:support@guidemyclass.com' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'http://t.me/guidemyclass' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.link/guidemyclass' },
  ],
  footNote: `
    GuideMyClass · All rights reserved ©2024.
  `,
};
