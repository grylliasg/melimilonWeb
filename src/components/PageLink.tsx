/**
 * Single nav/footer link: one anchor (href + text from data). Renders inside <li>.
 * itemClass differentiates nav (nav-link) vs footer (footer-link) for styling.
 */
import type { PageLinkItem } from '../types'

interface PageLinkProps {
  link: PageLinkItem
  itemClass: string
  onClick?: () => void
}

const PageLink = ({ link, itemClass, onClick }: PageLinkProps) => {
  const isFooter = itemClass === 'footer-link'
  const base = 'block uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer text-[0.72rem] font-medium'
  const navStyles = 'py-3 px-4 md:py-0 md:px-0 text-grey-2 hover:text-primary-5 md:hover:text-primary-5 md:hover:bg-transparent rounded-full'
  const footerStyles = 'py-2 px-4 text-white/90 hover:text-primary-8'
  const cn = isFooter ? `${base} ${footerStyles}` : `${base} ${navStyles}`

  const iconFor = (href: string) => {
    if (href.includes('services') || href.includes('glika')) return 'fas fa-utensils'
    if (href.includes('liqueurs') || href.includes('liker')) return 'fas fa-wine-bottle'
    if (href.includes('reviews') || href.includes('krit')) return 'fas fa-star'
    if (href.includes('about') || href.includes('σχετικ')) return 'fas fa-info-circle'
    return 'fas fa-circle'
  }

  const iconClass = iconFor(link.href)

  return (
    <li>
      <a href={link.href} className={cn} onClick={onClick}>
        <i className={`${iconClass} mr-3 text-base`} aria-hidden />
        {link.text}
      </a>
    </li>
  )
}

export default PageLink
