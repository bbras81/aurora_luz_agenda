'use client'

import ReviewCard from '@/components/ReviewCard'
import ReviewForm from '@/components/ReviewForm'

// This would typically come from your database
const mockReviews = [
  {
    id: '1',
    content: 'Amazing service and great attention to detail!',
    rating: 5,
    socialPlatform: 'instagram' as const,
    socialLink: 'https://instagram.com/user1',
    createdAt: new Date(),
    authorName: 'John Doe',
    authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  },
  {
    id: '2',
    content: 'Very professional and responsive team.',
    rating: 4,
    socialPlatform: 'facebook' as const,
    socialLink: 'https://facebook.com/user2',
    createdAt: new Date(),
    authorName: 'Jane Smith',
    authorImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  },
]

export default function ReviewsPage() {
  const handleSubmitReview = async (reviewData: {
    content: string
    rating: number
    socialPlatform: 'instagram' | 'facebook'
    socialLink: string
  }) => {
    // Here you would typically send the data to your API
    console.log('New review:', reviewData)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h1>
        <p className="text-gray-600">Share your experience and connect with us on social media!</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Write a Review</h2>
        <ReviewForm onSubmit={handleSubmitReview} />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Reviews</h2>
        <div className="space-y-4">
          {mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://instagram.com/your_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
        >
          Follow us on Instagram
        </a>
      </div>
    </div>
  )
}
