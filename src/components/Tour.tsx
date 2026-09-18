/**
 * Single tour card: image, date badge (Calendar), optional slogan badge (streaming text + Sparkles),
 * title, info, and pills for location (MapPin), cost (Banknote), duration (Clock). Lucide icons for badges.
 */
import { motion } from 'framer-motion'
import { Calendar, MapPin, Banknote, Sparkles } from 'lucide-react'
import { useStreamingText } from '../hooks/useStreamingText'
import type { TourItem } from '../types'

const slideIn = {
  left: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  right: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  bottom: { initial: { y: 80, opacity: 0 }, animate: { y: 0, opacity: 1 } },
}

interface TourProps extends TourItem {
  direction?: 'left' | 'right' | 'bottom'
}

const Tour = ({
  image,
  date,
  title,
  info,
  cost,
  location,
  slogan,
  direction = 'bottom',
}: TourProps) => {
  const variant = slideIn[direction]
  const streamingSlogan = useStreamingText(slogan ?? '', Boolean(slogan))
  // Slogan badge types in, holds, then reverses for a chat-like effect

  return (
    <motion.article
      variants={{
        hidden: variant.initial,
        show: {
          ...variant.animate,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      className="mb-8 overflow-hidden rounded-[1.75rem] border border-primary-9/70 bg-white shadow-light transition-shadow duration-300 hover:shadow-dark"
    >
      <div className="relative">
        <img src={image} className="h-48 w-full object-cover sm:h-72" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-primary-2 backdrop-blur-sm">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          {date || 'Παραδοσιακή'}
        </span>
        {slogan && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-grey-1/85 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            <Sparkles className="h-3 w-3" aria-hidden />
            {streamingSlogan}
            {streamingSlogan.length < (slogan?.length ?? 0) && (
              <span className="inline-block h-3 w-0.5 animate-pulse bg-white" aria-hidden />
            )}
          </span>
        )}
      </div>
      <div className="space-y-4 p-5">
        <h4 className="text-xl font-semibold uppercase tracking-[0.12em] text-grey-1">{title}</h4>
        <p className="text-sm leading-relaxed text-grey-5">{info}</p>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-10 px-2.5 py-1.5 font-medium text-primary-3">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {location}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-10 px-2.5 py-1.5 font-medium text-primary-3">
            <Banknote className="h-3.5 w-3.5" aria-hidden />
            Από €{cost}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default Tour
