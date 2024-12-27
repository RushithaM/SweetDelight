import { Suspense } from 'react';
import Link from 'next/link';
import ProductList from './ProductList';

async function getFeaturedProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?featured=true`);
  if (!res.ok) {
    throw new Error('Failed to fetch featured products');
  }
  return res.json();
}

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="bg-rose-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-pink-700 font-extrabold tracking-tight font-sans">Featured Products</h2>
          <p className="text-gray-800 mt-4 text-sm md:text-base"> Discover our handpicked selection of delicious treats and sweet delights.</p>
        </div>
        <Suspense fallback={<div>Loading featured products...</div>}>
          <ProductList products={featuredProducts} />
        </Suspense>
        <div className="text-center mt-12">
          <Link 
            href="/all-products" 
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300 text-sm md:text-base font-semibold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

