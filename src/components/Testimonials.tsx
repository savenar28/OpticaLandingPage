import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andrés Ramírez',
    role: 'Ingeniero de Software',
    content: 'Necesitaba lentes con filtro de luz azul urgente. No solo me los entregaron en 24 horas, sino que la asesoría fue impecable. Ahora trabajo sin fatiga visual y con estilo.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Valentina Morales',
    role: 'Diseñadora de Moda',
    content: 'El servicio de visagismo es único en Bogotá. Me ayudaron a encontrar el marco perfecto que complementa mi estilo personal y profesional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Clara Gómez',
    role: 'Profesora Jubilada',
    content: 'Llevo 20 años confiando en Óptica S&V. El examen computarizado es muy preciso y el seguimiento post-venta es excelente. Me siento segura con mi vista.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    // CAMBIO CLAVE: Fondo color Vino (bg-brand-wine) y Texto Crema (text-brand-cream)
    <section id="testimonios" className="py-20 bg-brand-wine text-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-brand-red mx-auto mb-4 opacity-50" />
          <h2 className="font-serif text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-brand-cream/70 max-w-2xl mx-auto">
            Más de 20 años construyendo confianza, una mirada a la vez.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // Las tarjetas son color Crema para que resalten sobre el fondo Vino
              className="bg-brand-cream p-8 rounded-2xl shadow-xl relative"
            >
              {/* Triángulo decorativo abajo de la tarjeta */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-brand-cream rotate-45"></div>

              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-red"
                />
                <div>
                  {/* Texto dentro de la tarjeta debe ser OSCURO (brand-text) */}
                  <h3 className="font-bold text-brand-wine">{testimonial.name}</h3>
                  <p className="text-xs text-brand-text/60 uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-red text-brand-red" />
                ))}
              </div>

              <p className="text-brand-text/80 italic leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción final */}
        <div className="mt-16 text-center">
          <p className="text-brand-cream/60 mb-6 text-lg">¿Listo para ser nuestro próximo cliente satisfecho?</p>
          <a 
            href="https://wa.me/573001234567" 
            target="_blank"
            className="inline-block bg-brand-cream text-brand-wine px-8 py-3 rounded-full font-bold hover:bg-brand-red hover:text-brand-cream transition-all shadow-lg"
          >
            Agenda tu Cita Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
