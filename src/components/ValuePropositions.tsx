import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Shield } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const propositions = [
  {
    icon: Briefcase,
    title: 'Para el Profesional',
    description: 'Lentes con filtro luz azul de última generación y entrega ágil para que no detengas tu ritmo.',
    features: ['Filtro luz azul', 'Entrega 24-48h', 'Garantía extendida'],
    color: 'from-blue-500 to-primary',
  },
  {
    icon: Sparkles,
    title: 'Para el Buscador de Estilo',
    description: 'Asesoría personalizada de visagismo y monturas en tendencia que complementan tu personalidad.',
    features: ['Visagismo facial', 'Últimas tendencias', 'Asesoría de imagen'],
    color: 'from-accent to-accent-dark',
  },
  {
    icon: Shield,
    title: 'Confianza Clínica',
    description: 'Examen computarizado de alta precisión y garantía de adaptación con seguimiento personalizado.',
    features: ['Examen computarizado', 'Garantía adaptación', 'Seguimiento'],
    color: 'from-primary-light to-primary',
  },
];

export default function ValuePropositions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Servicios diseñados para ti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada cliente es único. Por eso ofrecemos soluciones personalizadas para cada necesidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {propositions.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${prop.color}`} />
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{prop.description}</p>
                  <ul className="space-y-2">
                    {prop.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
