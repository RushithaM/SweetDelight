import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AddToCartButton from '../../components/AddToCartButton';

async function getProduct(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function ProductPage({ params: initialParams }) {
  const { id } = await initialParams;
  let product;
  try {
    product = await getProduct(id);
  } catch (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500 text-center">Error fetching product details. Please try again later.</p>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen flex justify-center items-center p-5">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/pink-background-with-various-desserts-like-cupcakes-macarons-ice-cream_14117-989141.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-pink-50/30" />

      <div className="relative bg-white/80 backdrop-blur-sm py-10 px-6 md:px-8 max-w-4xl w-full shadow-xl rounded-2xl">
        <Link
          href="/"
          className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/2 h-[300px] relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-pink-700 font-bold uppercase tracking-tight text-3xl font-sans mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4 uppercase">{product.category}</p>
            <p className="text-black text-2xl font-bold my-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-800 mb-6">{product.description}</p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
