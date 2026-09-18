import type { PageLinkItem, SocialLinkItem } from './types'

export const pageLinks: PageLinkItem[] = [
  { id: 1, href: '#home', text: 'αρχική' },
  { id: 2, href: '#about', text: 'σχετικά' },
  { id: 3, href: '#services', text: 'γλυκά' },
  { id: 4, href: '#liqueurs', text: 'λικέρ' },
  { id: 5, href: '#reviews', text: 'κριτικές' },
]

export const socialLinks: SocialLinkItem[] = [
  {
    id: 1,
    href: 'https://www.instagram.com/melimilon_sweets?igsi=aDR3ZWpzamF2Z3U0',
    icon: 'fab fa-instagram',
  },
  {
    id: 2,
    href: 'tel:+306984213971',
    icon: 'fas fa-phone',
  },
]
