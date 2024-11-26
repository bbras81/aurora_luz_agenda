import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

interface ReviewCardProps {
  review: {
    id: string
    content: string
    rating: number
    socialPlatform: 'instagram' | 'facebook'
    socialLink: string
    createdAt: Date
    authorName: string
    authorImage?: string
  }
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        {review.authorImage ? (
          <Image
            src={review.authorImage}
            alt={review.authorName}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
        )}
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{review.authorName}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{review.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{new Date(review.createdAt).toLocaleDateString()}</span>
        {review.socialLink && (
          <Link
            href={review.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            View on {review.socialPlatform}
          </Link>
        )}
      </div>
    </div>
  )
}
