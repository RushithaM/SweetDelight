import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-rose-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sweet Delights</h3>
            <p className="text-sm">Bringing sweetness to your life</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-pink-600">Home</Link></li>
              <li><Link href="/all-products" className="text-sm hover:text-pink-600">All Products</Link></li>
              <li><Link href="/category/cakes" className="text-sm hover:text-pink-600">Cakes</Link></li>
              <li><Link href="/category/cookies" className="text-sm hover:text-pink-600">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Phone: (+91) 9390473998</p>
            <p className="text-sm">Email: rushitha286@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

