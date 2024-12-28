'use client'

import Image from 'next/image'
import { useCart } from '../components/CartProvider'
import { Minus, Plus, X } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="min-h-screen max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-center">Your cart is empty</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen max-w-2xl mx-auto py-8">
      <h1 className="text-3xl text-pink-700 font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {cart.map((item) => (
          <div key={item.productId} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center flex-1">
              <Image 
                src={item.product.image} 
                alt={item.product.name} 
                width={80} 
                height={80} 
                className="rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  className="p-1 rounded-md hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.productId)}
                className="p-1 rounded-md hover:bg-gray-100 text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 text-right">
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

