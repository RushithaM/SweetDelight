import { Cake, Cookie, IceCream, Dessert, Pizza, Lollipop } from 'lucide-react';
import { Suspense } from 'react';
import ProductList from '../../components/ProductList';

const categoryIcons = {
  cakes: Cake,
  cookies: Cookie,
  frozen: IceCream,
  puddings: Dessert,
  pies: Pizza,
  confections: Lollipop,
};

const categoryDetails = {
  cakes: {
    title: 'Delicious Cakes',
    description: 'Handcrafted cakes for every occasion',
  },
  cookies: {
    title: 'Tasty Cookies',
    description: 'Freshly baked cookies for your sweet tooth',
  },
  frozen: {
    title: 'Frozen Treats',
    description: 'Cool and refreshing frozen desserts',
  },
  puddings: {
    title: 'Creamy Puddings',
    description: 'Smooth and delightful puddings for all tastes',
  },
  pies: {
    title: 'Delectable Pies',
    description: 'Homemade pies with flaky crusts and delicious fillings',
  },
  confections: {
    title: 'Sweet Confections',
    description: 'A variety of sweet treats and candies',
  },
};

async function getProductsByCategory(category) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?category=${category}`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const products = await getProductsByCategory(slug);
  const details = categoryDetails[slug] || {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: `Explore our ${slug} collection`,
  };
  const IconComponent = categoryIcons[slug] || Lollipop;

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="relative h-[200px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://as1.ftcdn.net/v2/jpg/03/26/12/10/1000_F_326121059_ZTlgWf60BPsm6McVWo81qItzAy5eLKuk.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/50">
                <IconComponent className="w-7 h-7 text-rose-800" />
              </div>
              <h1 className="text-4xl font-bold text-rose-800 drop-shadow-lg">{details.title}</h1>
            </div>
            <p className="text-rose-800/90 text-lg font-medium drop-shadow-md">{details.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductList products={products} />
        </Suspense>
      </div>
    </div>
  );
}
