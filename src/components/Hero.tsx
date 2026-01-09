import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section 
      ref={sectionRef}
      id="inicio" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* IMAGEN DE FONDO CON PARALLAX */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=2000)',
          }}
        />
        {/* OVERLAY OSCURO PARA LEGIBILIDAD */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* ETIQUETA SUPERIOR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">20 años de experiencia</span>
          </motion.div>

          {/* TÍTULO PRINCIPAL */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          >
            Entendemos tu estilo,<br />
            <span className="italic font-light text-brand-red">diseñamos tu mirada.</span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Unimos precisión clínica con asesoría de imagen personalizada. 
            Porque tus gafas no son solo para ver, son tu identidad.
          </motion.p>

          {/* BOTONES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#guia"
              className="group bg-brand-wine text-brand-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-red transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Encuentra tu estilo ideal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://wa.me/573001234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-wine transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar por WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
