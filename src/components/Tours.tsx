/**
 * Featured liqueurs section: static list of liqueurs managed directly here.
 */
import { motion } from 'framer-motion'
import Title from './Title'
import Tour from './Tour'

// Ορίζεις τα λικέρ σου εδώ, τοπικά και στατικά!
const myLiqueurs = [
  {
    id: 1,
    title: 'Λικέρ Ρόδι',
    info: 'Το λικέρ ρόδι είναι από τα πιο εκλεπτυσμένα και γιορτινά ποτά, γεμάτο χρώμα, άρωμα και συμβολισμό. Το ρόδι από την αρχαιότητα ήταν το σύμβολο της καλής τύχης, της αφθονίας και της χαράς, κάτι που αποτυπώνεται απόλυτα σε αυτό το λικέρ.',
    image: '/images/likerrodi.jpeg',
    location: 'Ήπειρος',
    date: 'Παραδοσιακή Παρασκευή',
    duration: 0, // σε ml (αριθμός για να μην χτυπάει το TypeScript)
    cost: 7,
    slogan: "Το χρώμα της τύχης"
  },
  {
    id: 2,
    title: 'Λικέρ Καρύδι',
    info: 'Ο γήινος και πλούσιος χαρακτήρας: Έχει βαθύ, σκούρο χρώμα και μια γεμάτη, μοναδική γεύση που συνδυάζει την ξυλώδη ζεστασιά του καρυδιού με διακριτικές νότες από κανόλα και γαρύφαλλο.',
    image: '/images/likerkaridi.jpg',
    location: 'Ήπειρος',
    date: 'Limited Edition',
    duration: 0,
    cost: 7,
  },
  {
    id: 3,
    title: 'Λεμοντσέλο',
    info: 'Σερβίρεται παγωμένο (κατευθείαν από την κατάψυξη)! Είναι ο βασιλιάς της δροσιάς και το τέλειο χωνευτικό ποτό για τις ζεστές μέρες (και όχι μόνο).',
    image: '/images/lemontselo.jpeg',
    location: 'Ήπειρος',
    date: 'Φρέσκια Παραγωγή',
    duration: 500,
    cost: 7,
  },
]

const directions: Array<'left' | 'right' | 'bottom'> = ['left', 'right', 'bottom']

const Tours = () => {
  return (
    <motion.section
      id="liqueurs"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 scroll-mt-16"
    >
      <Title title="τα λικερ" subTitle="μας" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
        className="w-[90vw] max-w-[1170px] mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {myLiqueurs.map((liqueur, index) => (
          <Tour key={liqueur.id} {...liqueur} direction={directions[index % directions.length]} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Tours