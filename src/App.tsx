import Header from './components/Header';
import Hero from './components/Hero';
import ValuePropositions from './components/ValuePropositions';
import StyleGuide from './components/StyleGuide';
import GlassesGallery from './components/GlassesGallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <Hero />
      <ValuePropositions />
      <StyleGuide />
      <GlassesGallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
