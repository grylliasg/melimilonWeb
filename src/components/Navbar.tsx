/**
 * Fixed top navbar: logo "Back Roads", nav links (home/about/services/tours), social icons, mobile hamburger.
 * Uses useState to toggle mobile menu (showLinks); PageLinks and SocialLink are reusable list items.
 */
import { motion } from 'framer-motion'
import { useState } from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks((prev) => !prev)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 z-30 w-full border-b border-primary-9/70 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgba(81,52,31,0.08)]"
    >
      <div className="section-shell flex flex-wrap items-center justify-between gap-4 py-3">
        <a href="#home" className="order-1 flex shrink-0 items-center gap-2" aria-label="Μελίμηλον αρχική">
          <span className="text-lg font-semibold uppercase tracking-[0.2em] text-grey-1">Μελίμηλον</span>
          <span className="rounded-full border border-primary-7/40 bg-primary-10 px-2 py-1 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-primary-5">
            Sweets
          </span>
        </a>

        <div className="order-3 md:order-2 md:flex md:w-auto md:flex-1 md:justify-center">
          {/* Mobile overlay menu: appears as full-screen panel when showLinks is true */}
          <div className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ${showLinks ? 'translate-y-0' : 'translate-y-[-120%]'}`} aria-hidden={!showLinks}>
            <div className="glass-panel flex h-full w-full flex-col items-center justify-center gap-6 p-8">
              <PageLinks parentClass="flex flex-col items-center gap-6" itemClass="nav-link" />
              <button
                type="button"
                onClick={toggleLinks}
                className="mt-4 rounded-full bg-primary-5 px-6 py-3 text-sm font-semibold text-white"
                aria-label="Κλείσιμο μενού"
              >
                Κλείσιμο
              </button>
            </div>
          </div>

          {/* Desktop / md+ inline links */}
          <div className={`hidden w-full md:block`} id="nav-links-wrap">
            <PageLinks parentClass="md:flex md:flex-row md:items-center md:gap-6" itemClass="nav-link" />
          </div>
        </div>

        <div className="order-2 flex shrink-0 items-center gap-3 md:order-3">
          <ul className="flex items-center gap-3 md:gap-2">
            {socialLinks.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <SocialLink {...link} itemClass="nav-icon" />
              </motion.li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleLinks}
            aria-expanded={showLinks}
            aria-label="Toggle menu"
            className="rounded-full border border-primary-7/50 bg-primary-10 p-2 text-xl text-primary-5 transition-transform duration-300 hover:scale-105 md:hidden"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
