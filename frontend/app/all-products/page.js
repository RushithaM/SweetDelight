import { Suspense } from 'react';
import ProductList from '../components/ProductList';
import ClearSearchButton from '../components/ClearSearchButton';

async function getProducts(searchQuery) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const products = await res.json();

  if (searchQuery) {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return products;
}

export default async function AllProductsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams; 
  const searchQuery = resolvedSearchParams?.q || '';
  const products = await getProducts(searchQuery);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #ffe4e1, #ffb6c1)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-pink-700 mb-8">All Products</h1>
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing results for: "{searchQuery}" ({products.length} items)
            </p>
            <ClearSearchButton />
          </div>
        )}
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductList products={products} />
        </Suspense>
      </div>
    </div>
  );
}
