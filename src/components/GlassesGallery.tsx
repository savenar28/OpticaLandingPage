import { motion } from 'framer-motion';

const collections = [
  { title: "Línea Vintage", category: "Clásicos", img: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800" },
  { title: "Titanio Ligero", category: "Confort", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800" },
  { title: "Acetato Bold", category: "Tendencia", img: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800" },
];

export default function GlassesGallery() {
  return (
    <section id="galeria" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-red font-bold uppercase text-sm tracking-wider">Catálogo 2024</span>
          <h2 className="font-serif text-4xl text-brand-wine mt-2">Nuestra Colección</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-md aspect-[4/5] cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-wine/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-red text-sm font-bold uppercase mb-1">{item.category}</span>
                <h3 className="text-brand-cream font-serif text-2xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
