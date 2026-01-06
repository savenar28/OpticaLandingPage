import { motion } from 'framer-motion';
import { Square, Circle, Heart } from 'lucide-react';

export default function StyleGuide() {
  const faces = [
    {
      icon: Square,
      title: 'Rostro Cuadrado',
      desc: 'Suaviza las líneas fuertes con marcos redondos u ovalados.',
      color: 'bg-[#990000]'
    },
    {
      icon: Circle,
      title: 'Rostro Redondo',
      desc: 'Añade definición con marcos rectangulares o "Cat Eye".',
      color: 'bg-[#CC0000]'
    },
    {
      icon: Heart,
      title: 'Rostro Corazón',
      desc: 'Equilibra la frente con marcos más anchos abajo.',
      color: 'bg-[#990000]'
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
                  className="flex items-start gap-4"
                >
                  <div className={`${face.color} p-3 rounded-lg mt-1 text-white`}>
                    <face.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-[#990000] mb-1">{face.title}</h4>
                    <p className="text-sm text-[#2D1A1A]/70">{face.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 👇 AQUÍ ESTÁ EL BOTÓN ARREGLADO */}
            <div className="mt-10">
              <a 
                href="https://wa.me/573001234567" 
                target="_blank"
                // FONDO VINO (#990000) - TEXTO BLANCO (text-white)
                className="inline-block bg-[#990000] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#CC0000] transition-colors shadow-lg"
              >
                Agenda tu Asesoría Personalizada
              </a>
            </div>
          </div>
          
          {/* Imagen Visual */}
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-xl mt-8" alt="Rostro 1" />
             <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-xl" alt="Rostro 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
