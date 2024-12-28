'use client'
import Link from 'next/link'
import { ShoppingCart, Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCart } from './CartProvider'

const Header = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const { cart } = useCart()
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '')
  }, [searchParams])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery) {
      router.push(`/all-products?q=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push('/all-products')
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-rose-50 shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-pink-700 font-bold uppercase tracking-tight text-2xl font-sans">
              Sweet Delights
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/all-products" className="text-sm font-medium text-black-600 hover:text-pink-600">
                All
              </Link>
              <Link href="/category/cakes" className="text-sm font-medium text-black-600 hover:text-pink-600">
                Cakes
              </Link>
              <Link href="/category/cookies" className="text-sm font-medium text-black-600 hover:text-pink-600">
                Cookies
              </Link>
            </nav>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 justify-center px-6">
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for desserts..."
                  className="w-full rounded-lg border bg-gray-50 py-2 pl-10 pr-4 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
          </form>

          <Link 
            href="/cart" 
            className="flex items-center justify-center rounded-lg border bg-white p-2 hover:bg-pink-100 relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header