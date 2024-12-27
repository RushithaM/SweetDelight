'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border rounded-lg"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
    </form>
  );
}