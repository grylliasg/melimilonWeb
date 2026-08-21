/**
 * About section: two-column layout (image left, copy right). Image has decorative border on xl.
 * Framer Motion: section fades in; image slides from left, text from right, on scroll into view.
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
      className="py-20 scroll-mt-16"
    >
      <Title title="Σχετικα με" subTitle="εμας" />
      <div className="w-[90vw] max-w-[1170px] mx-auto md:grid md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-0 relative"
        >
          {/* Decorative border frame on xl screens via pseudo-element */}
          <div className="xl:before:content-[''] xl:before:absolute xl:before:w-full xl:before:h-full xl:before:border-4 xl:before:border-primary-5 xl:before:top-[-1.5rem] xl:before:left-[-1.5rem] xl:before:box-border" />
          <img
            src="/images/mom.jpeg"
            className="w-full block relative object-cover"
            alt="mom"
          />
        </motion.div>
        <motion.article
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-0"
        >
          <h3 className="text-xl md:text-2xl font-semibold capitalize tracking-widest mb-4">
            Ο Τόπος μας
          </h3>
          <p className="mb-5 text-grey-5">
            Μεγαλώνοντας στην Άρτα, στην καρδιά της Ηπείρου, μια περιοχή προικισμένη με πλούσια φύση και βαθιές παραδόσεις, έμαθα από μικρή την αξία της αυθεντικής γεύσης. Οι μνήμες από τις μυρωδιές της κουζίνας, τα φρέσκα φρούτα του τόπου μας και η αγάπη για τη σπιτική φροντίδα είναι αυτά που με ενέπνευσαν να δημιουργήσω το Μελιμιλον.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold capitalize tracking-widest mb-4 mt-6">
            Η φιλοσοφία μας
          </h3>
          <p className="mb-5 text-grey-5">
            <strong>Μεράκι και Παράδοση:</strong> Κάθε βαζάκι γλυκού κουταλιού φτιάχνεται με προσωπική φροντίδα, ακολουθώντας πιστά τις κλασικές, δοκιμασμένες συνταγές.
          </p>
          <p className="mb-5 text-grey-5">
            <strong>Αγνά Υλικά:</strong> Επιλέγω με προσοχή φρούτα εποχής άριστης ποιότητας, χωρίς τεχνητά αρώματα, χρωστικές ή συντηρητικά.
          </p>
          <p className="mb-5 text-grey-5">
            <strong>Αυθεντική Γεύση:</strong> Δίνω χρόνο στα γλυκά μας να βράσουν αργά και να δέσουν σωστά, όπως ακριβώς έκαναν οι παλιότεροι.
          </p>

          <a
            href="#"
            className="inline-block uppercase bg-primary-5 text-white py-2 px-4 rounded border-2 border-transparent cursor-pointer transition-all duration-300 text-sm shadow hover:text-primary-1 hover:bg-primary-8"
          >
            read more
          </a>
        </motion.article>
      </div>
    </motion.section>
  )
}

export default About