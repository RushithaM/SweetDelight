'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="relative rounded-3xl shadow-lg overflow-hidden col-span-2">
        <div className="relative w-full h-[500px]">
          <div className="relative z-20 w-1/2 h-full flex flex-col justify-center p-10">
            <span className="text-xl font-medium mb-4">100% Fresh</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-rose-800">Delicious Desserts</h1>
            <p className="text-lg mb-8">Indulge in our handcrafted desserts made with the finest ingredients.</p>
            <Link
              href="/all-products"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 w-fit"
            >
              VIEW ALL
            </Link>
          </div>
          <div>
            <Image
              src="/hero-dessert.png"
              alt="Delicious Desserts"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="relative rounded-3xl shadow-lg overflow-hidden">
          <div className="relative w-full h-[240px]">
            <div className="relative z-20 w-1/2 h-full flex flex-col justify-center p-6">
              <span className="text-lg font-medium mb-2">Chilled to Perfection</span>
              <h2 className="text-2xl font-bold mb-4 text-rose-800">Frozen Delights</h2>
              <Link
                href="/category/frozen"
                className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors w-fit"
              >
                VIEW NOW
              </Link>
            </div>
            <div className="absolute inset-0">
              <Image
                src="/hero-frozen.jpg"
                alt="Frozen Delights"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl shadow-lg overflow-hidden">
          <div className="relative h-[240px]">
            <div className="relative z-20 w-2/3 h-full flex flex-col justify-center p-6">
              <span className="text-lg font-medium mb-2">Candy Galore</span>
              <h2 className="text-2xl font-bold mb-4 text-rose-800">Sweet Confections</h2>
              <Link
                href="/category/confections"
                className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors w-fit"
              >
                VIEW NOW
              </Link>
            </div>
            <div className="absolute inset-0">
              <Image
                src="/hero-confections.jpg"
                alt="Sweet Confections"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}