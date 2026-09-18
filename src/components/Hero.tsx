/**
 * Hero section: full-height block with background image (desktop), headline, and "Let's [streaming word]" typewriter.
 * useCyclingStreamingWords cycles through HERO_KEYWORDS; min-h and min-w prevent layout shift as text streams.
 */
import { motion } from 'framer-motion'
import { useCyclingStreamingWords } from '../hooks/useCyclingStreamingWords'

const HERO_KEYWORDS = [
  'Καρπούζι',
  'Νεραντζάκι',
  'Σταφύλι',
  'Καρυδάκι',
  'Νεραντζόφλουδα',
  'Κιτρολέμονο',
  'Περγαμόντο',
  'Κυδώνι',
  'Κολοκύθα',
  'Μελιντζανάκι',
  'Συκαλάκι',
  'Πορτοκάλι',
  'Κεράσι'
]

const Hero = () => {
  const { text: streamingWord, phase } = useCyclingStreamingWords(HERO_KEYWORDS)
  const showCursor = phase === 'in' || phase === 'out'

  return (
    <section id="home" className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20 sm:min-h-screen">
      <div className="absolute inset-0 bg-primary-1/80" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/arxiki.jpeg')"
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,201,140,0.35),_transparent_45%)]" aria-hidden />

      <div className="relative z-10 w-full max-w-[46rem] px-6 text-center text-white md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-primary-9 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-primary-8" />
          Παραδοσιακή γεύση από την Άρτα
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-5 text-4xl font-semibold uppercase tracking-[0.22em] md:text-6xl"
        >
          Σπιτικά Γλυκά<br />του Κουταλιού
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-8 min-h-[3.5rem] text-base tracking-[0.18em] text-white/90 md:text-lg"
        >
          Χειροποίητη γεύση, όπως παλιά.
          <span className="ml-2 inline-block min-w-[10ch] text-left align-baseline font-semibold text-primary-8">
            <span className="inline align-baseline"><br />{streamingWord}</span>
            {showCursor && (
              <span
                className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse align-baseline bg-primary-8"
                style={{ animationDuration: '0.7s' }}
                aria-hidden
              />
            )}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.45 }}
          className="mx-auto mb-8 max-w-xl text-sm uppercase tracking-[0.2em] text-primary-9/95"
        >
          Και πολλές ακόμη γεύσεις, εκτός από τις φωτογραφίες, φτιαγμένες με αγάπη.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="brand-button"
          >
            Δες τις γεύσεις
          </motion.a>
          <a href="#reviews" className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20">
            Κριτικές
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
