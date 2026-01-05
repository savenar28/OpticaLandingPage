import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const glasses = [
  {
    name: 'Clásico Atemporal',
    style: 'Clásico',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Elegancia que nunca pasa de moda',
  },
  {
    name: 'Moderno Ejecutivo',
    style: 'Moderno',
    image: 'https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Minimalismo para profesionales',
  },
  {
    name: 'Arriesgado & Único',
    style: 'Arriesgado',
    image: 'https://images.pexels.com/photos/1582698/pexels-photo-1582698.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Para personalidades audaces',
  },
  {
    name: 'Vintage Bohemio',
    style: 'Vintage',
    image: 'https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Nostalgia con estilo',
  },
  {
    name: 'Deportivo Activo',
    style: 'Deportivo',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Funcionalidad y diseño',
  },
  {
    name: 'Elegancia Femenina',
    style: 'Cat Eye',
    image: 'https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Sofisticación y glamour',
  },
];

const styleColors: Record<string, string> = {
  Clásico: 'bg-primary',
  Moderno: 'bg-accent',
  Arriesgado: 'bg-red-600',
  Vintage: 'bg-amber-700',
  Deportivo: 'bg-green-600',
  'Cat Eye': 'bg-pink-600',
};

export default function GlassesGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestra Colección
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestra selección de monturas cuidadosamente elegidas para cada personalidad y estilo de vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {glasses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span
                    className={`${
                      styleColors[item.style]
                    } text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {item.style}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
