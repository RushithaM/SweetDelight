'use client'

import { useState } from 'react'
import { useCart } from './CartProvider'
import { ShoppingCart } from 'lucide-react'

export default function AddToCartButton({ product }) {
  const [isAdding, setIsAdding] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = async () => {
    setIsAdding(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product._id }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      addToCart(product)
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Failed to add item to cart. Please try again.')
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="space-y-4">
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-50 inline-flex items-center justify-center space-x-2 rounded-3xl bg-rose-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 transition-colors"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>{isAdding ? 'Adding to Cart...' : 'Add to Cart'}</span>
      </button>
      {showSuccess && (
        <div className="bg-rose-50 text-rose-700 px-4 py-2 rounded-lg text-center">
          Added to cart successfully!
        </div>
      )}
    </div>
  )
}

