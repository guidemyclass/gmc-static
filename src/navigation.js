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
        { text: '16 Crescent Ln, London' },
        { text: 'SW4 9PU, UK' },
      ],
    },
    {
      title: 'We Accept',
      links: [
        { text: 'VISA' },
        { text: 'Mastercard' },
        { text: 'American Express' },
        { text: 'Discover' },
        { text: 'Ideal' },
      ],
    },
    {
      title: 'Global Offices',
      links: [{ text: 'US' }, { text: 'UK' }, { text: 'Netherlands' }, { text: 'Canada' }, { text: 'Singapore' }],
    },
  ],
  secondaryLinks: [
    { text: 'Social Note', href: getPermalink('/note') },
    { text: 'Capability-Assurance Policy', href: getPermalink('/policy') },
  ],
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/mcznSPXM' },
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:guidemyclass@gmail.com' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/bigjrrr' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://api.whatsapp.com/send?phone=254745613178' },
  ],
  footNote: `
    GuideMyClass Researchers · All rights reserved 2024.
  `,
};
