import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andrés Ramírez',
    role: 'Ingeniero de Software',
    location: 'Suba, Bogotá',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    text: 'Necesitaba lentes con filtro de luz azul urgente. No solo me los entregaron en 24 horas, sino que la asesoría fue impecable. Ahora trabajo sin fatiga visual y con estilo.',
    rating: 5,
  },
  {
    name: 'Valentina Morales',
    role: 'Diseñadora de Moda',
    location: 'Suba, Bogotá',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    text: 'El servicio de visagismo es único en Bogotá. Me ayudaron a encontrar el marco perfecto que complementa mi estilo personal y profesional. Ahora recibo cumplidos constantemente.',
    rating: 5,
  },
  {
    name: 'Clara Gómez',
    role: 'Profesora Jubilada',
    location: 'Suba, Bogotá',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    text: 'Llevo 20 años confiando en Óptica S&V. El examen computarizado es muy preciso y el seguimiento post-venta es excelente. Me siento segura con mi vista en sus manos.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Más de 20 años construyendo confianza, una mirada a la vez.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/30" />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-accent/50"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                  <p className="text-xs text-accent">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-gray-200 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl mb-6">¿Listo para ser nuestro próximo cliente satisfecho?</p>
          <button
            onClick={() => window.open('https://wa.me/573001234567', '_blank')}
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Agenda tu Cita Ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
