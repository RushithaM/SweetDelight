'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === product._id)
      let newCart
      
      if (existingItem) {
        newCart = prevCart.map(item =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newCart = [...prevCart, { productId: product._id, quantity: 1, product }]
      }
      
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.productId !== productId)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart => {
      const newCart = prevCart.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      )
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

