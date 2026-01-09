import { motion, AnimatePresence } from 'framer-motion';
import { Square, Circle, Heart, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function StyleGuide() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faces = [
    {
      icon: Square,
      title: 'Rostro Cuadrado',
      desc: 'Suaviza las líneas fuertes con marcos redondos u ovalados.',
      details: 'Ideal para marcos circulares, aviador o cat-eye que contrasten con la mandíbula angular.',
      color: 'bg-[#990000]',
      illustration: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80&w=400'
    },
    {
      icon: Circle,
      title: 'Rostro Redondo',
      desc: 'Añade definición con marcos rectangulares o "Cat Eye".',
      details: 'Los marcos angulares y rectangulares alargan visualmente el rostro y añaden estructura.',
      color: 'bg-[#CC0000]',
      illustration: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
    },
    {
      icon: Heart,
      title: 'Rostro Corazón',
      desc: 'Equilibra la frente con marcos más anchos abajo.',
      details: 'Marcos redondos o aviador que equilibren la parte superior más ancha del rostro.',
      color: 'bg-[#990000]',
      illustration: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section id="guia" className="py-20 bg-[#FDF8F0]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl text-[#990000] mb-6">Dime tu rostro y te diré tu marco ideal</h2>
            <p className="text-[#2D1A1A]/80 text-lg mb-8 leading-relaxed">
              No se trata solo de ver bien, sino de verse bien. Aplicamos principios de diseño para equilibrar tus facciones.
            </p>

            <div className="space-y-6">
              {faces.map((face, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#990000]/10 overflow-hidden group"
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#990000]/5 to-[#CC0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`${face.color} p-3 rounded-lg mt-1 text-white group-hover:scale-110 transition-transform duration-300`}>
                      <face.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-[#990000] mb-1 group-hover:text-[#CC0000] transition-colors">
                        {face.title}
                      </h4>
                      <p className="text-sm text-[#2D1A1A]/70 mb-2">{face.desc}</p>

                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-[#990000] font-medium mt-2 flex items-center gap-1">
                              <ArrowRight className="w-3 h-3" />
                              {face.details}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#990000] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#CC0000] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Agenda tu Asesoría Personalizada
              </a>
            </div>
          </div>

          {/* Imagen Visual con Grid de Ilustraciones */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-6">
              {faces.map((face, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative rounded-2xl overflow-hidden shadow-xl aspect-square ${index === 1 ? 'mt-8' : ''}`}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <img
                    src={face.illustration}
                    className="w-full h-full object-cover"
                    alt={face.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#990000]/80 via-[#990000]/20 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <face.icon className="w-8 h-8 mb-2" />
                      <p className="text-sm font-semibold">{face.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
