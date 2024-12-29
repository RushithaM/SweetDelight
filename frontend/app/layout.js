import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Suspense } from 'react'
import { CartProvider } from './components/CartProvider'

export const metadata = {
  title: 'Sweet Delights',
  description: 'Delicious desserts and cakes for every occasion',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CartProvider>
          <Suspense>
            <Header />
          </Suspense>
          <main className="min-h-screen bg-rose-50">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

