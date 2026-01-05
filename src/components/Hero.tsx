import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{
        backgroundImage: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8f 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm text-accent-light px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
              <Sparkles className="w-4 h-4" />
              <span>20 años de experiencia en Suba</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Entendemos tu estilo,
            <br />
            <span className="text-accent-light">diseñamos tu mirada.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto"
          >
            20 años uniendo precisión clínica con asesoría de imagen en Suba, Bogotá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center"
              onClick={() => {
                const element = document.getElementById('servicios');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Encuentra tu estilo ideal</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center"
              onClick={() => window.open('https://wa.me/573001234567', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar por WhatsApp</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f8f9fa"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
