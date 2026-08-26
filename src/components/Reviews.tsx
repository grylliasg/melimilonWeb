import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send, MessageCircle } from 'lucide-react'
import { supabase } from '../supabase'
import Title from './Title'

type Review = {
  id: string
  name: string
  rating: number
  comment: string
  approved: boolean
  created_at: string
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error loading reviews:', error)
      return
    }

    setReviews(data || [])
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !comment.trim()) {
      alert('Συμπλήρωσε το όνομα και την κριτική σου.')
      return
    }

    setLoading(true)

    const { error } = await supabase.from('reviews').insert([
      {
        name: name.trim(),
        rating,
        comment: comment.trim(),
        approved: false,
      },
    ])

    setLoading(false)

    if (error) {
      console.error('Error submitting review:', error)
      alert('Υπήρξε ένα πρόβλημα. Δοκίμασε ξανά.')
      return
    }

    setName('')
    setRating(5)
    setComment('')

    alert('Ευχαριστούμε! Η κριτική σου στάλθηκε για έγκριση.')
  }

  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 scroll-mt-16"
    >
      <Title title="τι λένε" subTitle="οι πελάτες μας" />

      <div className="w-[90vw] max-w-[1170px] mx-auto">

        {/* Reviews */}
        {reviews.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-16"
          >
            {reviews.map((review) => (
              <motion.article
                key={review.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-grey-10 shadow-light rounded-lg p-6 hover:shadow-dark transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                          index < review.rating
                            ? 'fill-primary-5 text-primary-5'
                            : 'text-grey-5'
                        }`}
                      />
                    ))}
                  </div>

                  <MessageCircle className="w-5 h-5 text-primary-5" />
                </div>

                <p className="text-grey-5 text-sm leading-relaxed mb-5">
                  "{review.comment}"
                </p>

                <div className="border-t border-grey-5/20 pt-4">
                  <p className="font-semibold tracking-wide capitalize">
                    {review.name}
                  </p>

                  <p className="text-grey-5 text-xs mt-1">
                    {new Date(review.created_at).toLocaleDateString('el-GR')}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="text-center mb-16">
            <p className="text-grey-5">
              Γίνε ο πρώτος που θα αφήσει μια κριτική! ⭐
            </p>
          </div>
        )}

        {/* Review form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-grey-10 shadow-light rounded-lg p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold tracking-widest uppercase">
              Γράψε τη δική σου{' '}
              <span className="text-primary-5">κριτική</span>
            </h3>

            <p className="text-grey-5 text-sm mt-3">
              Η γνώμη σου είναι σημαντική για εμάς.
            </p>
          </div>

          <form onSubmit={submitReview} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Όνομα
              </label>

              <input
                type="text"
                placeholder="Το όνομά σου"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-grey-5/20 bg-white px-4 py-3 text-sm outline-none focus:border-primary-5 transition-colors"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Βαθμολογία
              </label>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                    aria-label={`${star} αστέρια`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating
                          ? 'fill-primary-5 text-primary-5'
                          : 'text-grey-5'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Κριτική
              </label>

              <textarea
                placeholder="Πες μας την εμπειρία σου..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={5}
                className="w-full rounded-md border border-grey-5/20 bg-white px-4 py-3 text-sm outline-none resize-none focus:border-primary-5 transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary-8 text-primary-1 font-medium py-3 px-5 rounded-md hover:bg-primary-5 transition-colors duration-300 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />

              {loading ? 'Αποστολή...' : 'Υποβολή κριτικής'}
            </button>

          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Reviews