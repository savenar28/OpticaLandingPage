import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Testimonial } from '../types';

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Andrés Ramírez',
    role: 'Ingeniero de Software',
    content: 'Necesitaba lentes con filtro de luz azul urgente. La asesoría fue impecable y ahora trabajo sin fatiga visual.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Valentina Morales',
    role: 'Diseñadora de Moda',
    content: 'El servicio de visagismo es único. Me ayudaron a encontrar el marco perfecto que complementa mi estilo.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Clara Gómez',
    role: 'Profesora Jubilada',
    content: 'Llevo 20 años confiando en Óptica S&V. El examen es preciso y me siento segura con mi vista.',
    rating: 5,
    image_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('Testimonials')
          .select('*');

        if (error) {
          console.error('Error fetching testimonials:', error);
          return;
        }

        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    // Solo intentar descargar si hay credenciales configuradas
    if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
      fetchTestimonials();
    } else {
      setLoading(false);
    }
  }, []);
  return (
    // 👇 HEMOS PUESTO EL CÓDIGO #990000 DIRECTAMENTE ENTRE CORCHETES
    <section id="testimonios" className="py-20 bg-[#990000] text-[#FDF8F0]">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-[#CC0000] mx-auto mb-4 opacity-50" />
          <h2 className="font-serif text-4xl font-bold mb-4 text-[#FDF8F0]">Lo que dicen nuestros clientes</h2>
          <p className="text-[#FDF8F0]/70 max-w-2xl mx-auto">
            Confianza construida mirada a mirada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // 👇 Fondo Crema directo y Texto oscuro directo
              className={`bg-[#FDF8F0] p-8 rounded-2xl shadow-xl transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={testimonial.image_url} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#CC0000]" />
                <div>
                  <h3 className="font-bold text-[#990000]">{testimonial.name}</h3>
                  <p className="text-xs text-[#2D1A1A]/60 uppercase">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#CC0000] text-[#CC0000]" />
                ))}
              </div>
              <p className="text-[#2D1A1A]/80 italic text-sm">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
