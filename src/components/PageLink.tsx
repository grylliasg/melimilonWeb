/**
 * Single nav/footer link: one anchor (href + text from data). Renders inside <li>.
 * itemClass differentiates nav (nav-link) vs footer (footer-link) for styling.
 */
import type { PageLinkItem } from '../types'

interface PageLinkProps {
  link: PageLinkItem
  itemClass: string
}

const PageLink = ({ link, itemClass }: PageLinkProps) => {
  const isFooter = itemClass === 'footer-link'
  const base = 'block uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer text-[0.72rem] font-medium'
  const navStyles = 'py-3 px-4 md:py-0 md:px-0 text-grey-2 hover:text-primary-5 md:hover:text-primary-5 md:hover:bg-transparent rounded-full'
  const footerStyles = 'py-2 px-4 text-white/90 hover:text-primary-8'
  const cn = isFooter ? `${base} ${footerStyles}` : `${base} ${navStyles}`
  return (
    <li>
      <a href={link.href} className={cn}>
        {link.text}
      </a>
    </li>
  )
}

export default PageLink
