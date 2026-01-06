import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-cream">
      
      {/* 1. DECORACIÓN DE FONDO (Manchas suaves para que no se vea plano) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-wine/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* 2. ETIQUETA SUPERIOR (Píldora) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-wine/20 bg-brand-wine/5 text-brand-wine mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">20 años de experiencia en Suba</span>
          </motion.div>

          {/* 3. TÍTULO PRINCIPAL (Color Vino) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-brand-wine mb-6 leading-tight"
          >
            Entendemos tu estilo,<br />
            <span className="italic font-light text-brand-red">diseñamos tu mirada.</span>
          </motion.h1>

          {/* 4. SUBTÍTULO (Color Texto Oscuro) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-text/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Unimos precisión clínica con asesoría de imagen personalizada. 
            Porque tus gafas no son solo para ver, son tu identidad.
          </motion.p>

          {/* 5. BOTONES (Vino y Borde Rojo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Botón Principal */}
            <a 
              href="#guia"
              className="group bg-brand-wine text-brand-cream px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-red transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Encuentra tu estilo ideal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Botón Secundario */}
            <a 
              href="https://wa.me/573001234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-brand-wine text-brand-wine px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-wine hover:text-brand-cream transition-all duration-300 flex items-center gap-2"
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
