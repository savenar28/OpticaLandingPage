import { motion } from 'framer-motion';
import { Briefcase, Gem, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Profesional Moderno',
    description: 'Lentes con filtro de luz azul de última generación para protegerte de las pantallas sin sacrificar tu estética ejecutiva.'
  },
  {
    icon: Gem,
    title: 'Buscador de Estilo',
    description: 'Asesoría de visagismo incluida. Analizamos la forma de tu rostro para recomendarte marcos que resalten tus mejores facciones.'
  },
  {
    icon: Stethoscope,
    title: 'Confianza Clínica',
    description: '20 años de trayectoria. Exámenes computarizados de alta precisión y garantía total de adaptación en tus fórmulas.'
  }
];

export default function ValuePropositions() {
  return (
    <section id="servicios" className="py-20 bg-brand-bone">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase text-sm tracking-wider">Por qué elegirnos</span>
          <h2 className="font-serif text-4xl text-brand-wine mt-2 mb-4">Más que una óptica</h2>
          <div className="w-24 h-1 bg-brand-wine/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-brand-wine/5 hover:border-brand-wine/20 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-wine transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-brand-red group-hover:text-brand-cream transition-colors" />
              </div>
              <h3 className="font-serif text-2xl text-brand-wine mb-3">{feature.title}</h3>
              <p className="text-brand-text/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
