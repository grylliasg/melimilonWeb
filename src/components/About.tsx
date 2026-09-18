/**
 * About section: two-column layout (image left, copy right).
 * Framer Motion: section fades in; image slides from left, text from right.
 */
import { motion } from 'framer-motion'
import Title from './Title'

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-16 py-20"
    >
      <Title title="Σχετικά με" subTitle="εμάς" />

      <div className="section-shell md:grid md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10 md:mb-0"
        >
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-4 border-primary-7/40" aria-hidden />
          <img
            src="/images/mom.jpeg"
            className="relative h-[32rem] w-full rounded-[2rem] object-cover shadow-dark"
            alt="Η δημιουργός του Μελιμιλον"
          />
        </motion.div>

        <motion.article
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 rounded-[2rem] border border-primary-9/70 bg-white/70 p-7 shadow-light backdrop-blur-sm md:mb-0 md:p-9"
        >
          <span className="brand-chip mb-5">Η ιστορία μας</span>

          <h3 className="mb-5 text-2xl font-semibold tracking-wide text-grey-1 md:text-3xl">
            Ο τόπος μας
          </h3>

          <p className="mb-7 text-base leading-relaxed text-grey-5 md:text-lg">
            Μεγαλώνοντας στην Άρτα, στην καρδιά της Ηπείρου, μια περιοχή
            προικισμένη με πλούσια φύση και βαθιές παραδόσεις, έμαθα από μικρή
            την αξία της αυθεντικής γεύσης. Οι μνήμες από τις μυρωδιές της
            κουζίνας, τα φρέσκα φρούτα του τόπου μας και η αγάπη για τη
            σπιτική φροντίδα είναι αυτά που με ενέπνευσαν να δημιουργήσω το
            Μελιμιλον.
          </p>

          <h3 className="mb-5 mt-8 text-2xl font-semibold tracking-wide text-grey-1 md:text-3xl">
            Η φιλοσοφία μας
          </h3>

          <p className="mb-6 text-base leading-relaxed text-grey-5 md:text-lg">
            <strong className="text-grey-1">Μεράκι και Παράδοση:</strong>{' '}
            Κάθε βαζάκι γλυκού κουταλιού φτιάχνεται με προσωπική φροντίδα,
            ακολουθώντας πιστά τις κλασικές, δοκιμασμένες συνταγές.
          </p>

          <p className="mb-6 text-base leading-relaxed text-grey-5 md:text-lg">
            <strong className="text-grey-1">Αγνά Υλικά:</strong>{' '}
            Επιλέγω με προσοχή φρούτα εποχής άριστης ποιότητας, χωρίς τεχνητά
            αρώματα, χρωστικές ή συντηρητικά.
          </p>

          <p className="mb-5 text-base leading-relaxed text-grey-5 md:text-lg">
            <strong className="text-grey-1">Αυθεντική Γεύση:</strong>{' '}
            Δίνω χρόνο στα γλυκά μας να βράσουν αργά και να δέσουν σωστά,
            όπως ακριβώς έκαναν οι παλιότεροι.
          </p>
        </motion.article>
      </div>
    </motion.section>
  )
}

export default About