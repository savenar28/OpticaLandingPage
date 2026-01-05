import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const faceShapes = [
  {
    shape: 'Rostro Redondo',
    recommendation: 'Marcos Rectangulares o Cuadrados',
    description: 'Ángulos definidos para alargar visualmente tu rostro.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    shape: 'Rostro Cuadrado',
    recommendation: 'Marcos Redondos o Cat Eye',
    description: 'Suaviza los ángulos con formas curvas y elegantes.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    shape: 'Rostro Ovalado',
    recommendation: 'Cualquier Estilo te Favorece',
    description: 'Tienes la libertad de explorar desde aviadores hasta cat eye.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    shape: 'Rostro Corazón',
    recommendation: 'Marcos Anchos en la Base',
    description: 'Equilibra la frente amplia con monturas que aportan peso visual abajo.',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function StyleGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Tu Rostro, Tu Marco Perfecto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El visagismo es un arte. Descubre qué estilo de montura resalta mejor tus facciones y personalidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {faceShapes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.shape}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {item.shape}
                </h3>
                <p className="text-accent font-semibold mb-2">{item.recommendation}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                Consejo
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.open('https://wa.me/573001234567', '_blank')}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Agenda tu Asesoría Personalizada
          </button>
        </motion.div>
      </div>
    </section>
  );
}
