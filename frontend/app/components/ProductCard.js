import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-rose-50 border border-rose-200 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 w-75 px-6 py-4 flex flex-col">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div className="flex flex-col items-center flex-grow">
        <h3 className="text-lg font-bold text-rose-950  text-center mb-1">{product.name}</h3>
        <p className="text-gray-800 text-sm mb-4 uppercase">{product.category}</p>
        <div className="flex items-center justify-between w-full mt-auto gap-2">
          <span className="text-xl font-bold text-black-500">${product.price.toFixed(2)}</span>
          <Link
            href={`/products/${product._id}`}
            className="bg-rose-600 text-white text-sm px-4 py-2 rounded-full hover:bg-rose-300 transition-colors"
            aria-label={`View details of ${product.name}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}