import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Stats from '@/components/Stats';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-28">
      <Hero />
      <About />
      <Features />
      <Services />
      <Stats />
      <Work />
      <Footer />
      </div>
    </main>
  );
}
