/**
 * Footer: same page links (PageLinks) and social icons (SocialLink) as navbar, plus copyright.
 * SocialLink is wrapped in <li> here to keep valid list structure (SocialLink renders only <a>).
 */
import { motion } from "framer-motion";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-16 bg-[#2a1d13] px-8 py-20 text-center text-white"
    >
      <div className="section-shell">
        <div className="mb-6 text-base md:text-lg">
          📞 Κάλεσε με τώρα στο{' '}
          <a href="tel:+306984213971" className="font-bold text-primary-8 underline transition-colors hover:text-primary-9">
            6984213971
          </a>
        </div>

        <PageLinks
          parentClass="mb-6 flex flex-wrap justify-center gap-4"
          itemClass="footer-link"
        />

        <ul className="mb-6 flex flex-wrap justify-center gap-4 p-0">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <SocialLink
                {...link}
                itemClass="text-2xl text-white transition-colors duration-300 hover:text-primary-8 md:text-3xl"
              />
            </li>
          ))}
        </ul>

        <p className="text-sm tracking-[0.22em] text-white/80 uppercase">
          &copy; Melimilon <span id="date">{new Date().getFullYear()}</span>. All rights reserved
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer;