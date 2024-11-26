'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'

interface ReviewFormProps {
  onSubmit: (review: {
    content: string
    rating: number
    socialPlatform: 'instagram' | 'facebook'
    socialLink: string
  }) => void
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(5)
  const [socialPlatform, setSocialPlatform] = useState<'instagram' | 'facebook'>('instagram')
  const [socialLink, setSocialLink] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      content,
      rating,
      socialPlatform,
      socialLink,
    })
    setContent('')
    setRating(5)
    setSocialLink('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          Your Review
        </label>
        <textarea
          id="content"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              className="focus:outline-none"
            >
              <StarIcon
                className={`h-6 w-6 ${
                  value <= rating ? 'text-yellow-400' : 'text-gray-200'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Social Platform
        </label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="instagram"
              checked={socialPlatform === 'instagram'}
              onChange={(e) => setSocialPlatform(e.target.value as 'instagram' | 'facebook')}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2">Instagram</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="facebook"
              checked={socialPlatform === 'facebook'}
              onChange={(e) => setSocialPlatform(e.target.value as 'instagram' | 'facebook')}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2">Facebook</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="socialLink" className="block text-sm font-medium text-gray-700 mb-2">
          Social Media Profile Link (optional)
        </label>
        <input
          type="url"
          id="socialLink"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={socialLink}
          onChange={(e) => setSocialLink(e.target.value)}
          placeholder="https://instagram.com/username"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit Review
      </button>
    </form>
  )
}
