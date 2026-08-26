import { useEffect, useState } from 'react'
import { Star, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
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

const AllReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading reviews:', error)
      } else {
        setReviews(data || [])
      }

      setLoading(false)
    }

    fetchReviews()
  }, [])

  return (
    <section className="py-20 min-h-screen">
      <div className="w-[90vw] max-w-[1170px] mx-auto">

        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 text-primary-5 font-medium hover:text-primary-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Πίσω
        </Link>

        {/* Title */}
        <Title title="όλες οι" subTitle="κριτικές" />

        {loading ? (
          <p className="text-center text-grey-5">
            Φόρτωση κριτικών...
          </p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-grey-5">
            Δεν υπάρχουν ακόμα κριτικές.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-grey-10 shadow-light rounded-lg p-6 hover:shadow-dark transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
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

                {/* Comment */}
                <p className="text-grey-5 text-sm leading-relaxed mb-5">
                  "{review.comment}"
                </p>

                {/* Name + Date */}
                <div className="border-t border-grey-5/20 pt-4">
                  <p className="font-semibold tracking-wide capitalize">
                    {review.name}
                  </p>

                  <p className="text-grey-5 text-xs mt-1">
                    {new Date(review.created_at).toLocaleDateString('el-GR')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default AllReviews