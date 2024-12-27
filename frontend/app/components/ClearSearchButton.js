'use client'
import { useRouter } from 'next/navigation'

export default function ClearSearchButton() {
  const router = useRouter()

  return (
    <button 
      onClick={() => router.push('/all-products')}
      className="mt-2 text-pink-600 hover:text-pink-700"
    >
      Clear search
    </button>
  )
}