import { UtilityBar } from './components/UtilityBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Discover } from './components/Discover';
import { NewArrivals } from './components/NewArrivals';
import { CuradoriaBrands } from './components/CuradoriaBrands';
import { ShopByStyle } from './components/ShopByStyle';
import { ShopByShape } from './components/ShopByShape';
import { MaisonHighlight } from './components/MaisonHighlight';
import { BrandStores } from './components/BrandStores';
import { FeaturedProducts } from './components/FeaturedProducts';
import { JoaCollections } from './components/JoaCollections';
import { LensesSection } from './components/LensesSection';
import { FlagshipsSection } from './components/FlagshipsSection';
import { ConciergeSection } from './components/ConciergeSection';
import { BenefitsSection } from './components/BenefitsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <UtilityBar />
      <Header />
      
      <main>
        <Hero />
        <BenefitsSection />
        <Discover />
        <NewArrivals />
        <CuradoriaBrands />
        <ShopByStyle />
        <FeaturedProducts />
        <ShopByShape />
        <MaisonHighlight />
        <BrandStores />
        <JoaCollections />
        <LensesSection />
        <FlagshipsSection />
        <ConciergeSection />
      </main>

      <Footer />
    </div>
  );
}
