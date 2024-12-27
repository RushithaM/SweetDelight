import Link from 'next/link'
import { Cake, Cookie, IceCream, Dessert, Pizza, Lollipop } from 'lucide-react'

const categories = [
  {
    name: 'Cakes',
    icon: Cake,
    link: '/category/cakes',
  },
  {
    name: 'Cookies',
    icon: Cookie,
    link: '/category/cookies',
  },
  {
    name: 'Frozen',
    icon: IceCream,
    link: '/category/frozen',
  },
  {
    name: 'Puddings',
    icon: Dessert,
    link: '/category/puddings',
  },
  {
    name: 'Pies',
    icon: Pizza,
    link: '/category/pies',
  },
  {
    name: 'Confections',
    icon: Lollipop,
    link: '/category/confections',
  },
]

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-pink-700 font-extrabold tracking-tight font-sans">Browse Categories</h2>
          <p className="text-gray-800 mt-4 text-sm md:text-base">Explore our wide range of delicious treats by category.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="flex flex-col items-center p-6 bg-rose-100 rounded-3xl shadow-md border-rose-400 border hover:shadow-lg transition-all duration-300 hover:bg-rose-300"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                <category.icon className="w-8 h-8 text-rose-800" />
              </div>
              <span className="text-base font-semibold text-gray-900 text-center hover:text-gray-700">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
