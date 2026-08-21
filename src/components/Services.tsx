/**
 * Sweets section: static list of sweets managed directly here.
 */
import { motion } from 'framer-motion'
import Title from './Title'
import Tour from './Tour' 

// Ορίζεις τα γλυκά σου εδώ, τοπικά και στατικά!
const mySweets = [
  {
    id: 1,
    title: 'Καρπούζι',
    info: 'Το απόλυτο best-seller! Τραγανό εξωτερικά, μελωμένο στην καρδιά, φτιαγμένο με την παραδοσιακή συνταγή της Άρτας.',
    image: '/images/karpouzi.jpeg',
    location: 'Ήπειρος',
    date: 'Φρέσκια Παραγωγή',
    duration: 0,
    cost: 6,
    slogan: "Στην κορυφή το θρυλικό γλυκό καρπούζι!"
  },
  {
    id: 2,
    title: 'Περγαμόντο',
    info: 'Αριστοκρατικό και αρωματικό! Πλούσιο, μεθυστικό άρωμα με την τέλεια ισορροπία γλυκού και ελαφριάς πικράδας.',
    image: '/images/pergamonto.jpeg',
    location: 'Άρτα, Ήπειρος',
    date: '',
    duration: 0,
    cost: 6,
    slogan: "Το αριστοκρατικό περγαμόντο..."
  },
  {
    id: 3,
    title: 'Συκαλάκι',
    info: 'Ολόκληρα, τρυφερά σύκα εποχής, βουτηγμένα σε πλούσιο, αρωματικό σιρόπι. Ένα κλασικό παραδοσιακό γλυκό κουταλιού που κλείνει όλη τη φυσική γλυκάδα και τα αρώματα της ηπειρώτικης γης σε κάθε βαζάκι.',
    image: '/images/sikalaki.jpeg',
    location: 'Ήπειρος',
    date: 'Εποχικό',
    duration: 0,
    cost: 6,
  },
  {
    id: 4,
    title: 'Σταφύλι',
    info: 'Το γλυκό σταφύλι είναι από τα πιο εκλεπτυσμένα και απαιτητικά γλυκά του κουταλιού. Θέλει μεγάλη μαεστρία για να μείνει η ρώγα τραγανή εξωτερικά και μελωμένη στο εσωτερικό, χωρίς να χάσει το σχήμα της.',
    image: '/images/stafili.jpeg',
    location: 'Ήπειρος',
    date: 'Εποχικό',
    duration: 0,
    cost: 6,
  },
  {
    id: 5,
    title: 'Νεράντζι',
    info: 'Η μοναδική ισορροπία: Εκμεταλλεύεται τη φυσική, ευχάριστη πικράδα της φλούδας του νεραντζιού, η οποία «τιθασεύεται» τέλεια από το πλούσιο, μελωμένο σιρόπι, δημιουργώντας μια γευστική αντίθεση που καθηλώνει.',
    image: '/images/nerantzi.jpeg',
    location: 'Ήπειρος',
    date: 'Εποχικό',
    duration: 0,
    cost: 6,
  },
]

const directions: Array<'left' | 'right' | 'bottom'> = ['left', 'right', 'bottom']

const Tours = () => {
  return (
    <motion.section
      id="tours"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 scroll-mt-16"
    >
      <Title title="τα γλυκα" subTitle="μας" />
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
        {mySweets.map((sweet, index) => (
          <Tour key={sweet.id} {...sweet} direction={directions[index % directions.length]} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Tours