import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Sweet Delights',
  description: 'Delicious desserts and cakes for every occasion',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
          <Header />
          <main className="min-h-screen bg-rose-50">{children}</main>
          <Footer />
      </body>
    </html>
  )
}

