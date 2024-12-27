import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';

export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
    </div>
  );
}

