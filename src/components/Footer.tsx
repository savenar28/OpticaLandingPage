import { Glasses, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-wine text-brand-cream pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-cream p-2 rounded-lg">
                <Glasses className="w-6 h-6 text-brand-wine" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide">Óptica S&V</span>
            </div>
            <p className="text-brand-cream/80 mb-6 leading-relaxed">
              Transformamos tu visión en una declaración de estilo. Tecnología clínica y asesoría de imagen en un solo lugar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-serif text-xl mb-6 border-b border-brand-red/30 pb-2 inline-block">Contacto</h3>
            <ul className="space-y-4 text-brand-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red mt-1" />
                <span>Av. Suba #123-45, Local 8<br/>Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red" />
                <span>+57 (601) 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-red" />
                <span>Lun - Sáb: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Mapa Simulado */}
          <div>
            <h3 className="font-serif text-xl mb-6 border-b border-brand-red/30 pb-2 inline-block">Ubicación</h3>
            <div className="bg-brand-red/10 h-48 rounded-lg flex items-center justify-center border border-brand-cream/10 relative overflow-hidden group">
              <div className="abso
