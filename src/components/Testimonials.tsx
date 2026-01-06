import { Glasses, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    // 👇 FONDO VINO TINTO (Oscuro)
    <footer id="contacto" className="bg-brand-wine text-brand-cream pt-16 pb-8 border-t border-brand-cream/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-cream p-2 rounded-lg">
                <Glasses className="w-6 h-6 text-brand-wine" />
              </div>
              <span className="font-serif text-2xl font-bold">Óptica S&V</span>
            </div>
            <p className="text-brand-cream/70 mb-6 text-sm">
              Tu visión, nuestro compromiso. Tecnología y moda en Suba.
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

          {/* Datos de Contacto */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-brand-red font-bold">Visítanos</h3>
            <ul className="space-y-4 text-brand-cream/80 text-sm">
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

          {/* Mapa */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-brand-red font-bold">Ubicación</h3>
            <div className="bg-brand-cream/5 p-2 rounded-lg">
                {/* Imagen simulada del mapa con opacidad para que no brille tanto */}
                <div className="h-40 bg-gray-800 rounded flex items-center justify-center relative overflow-hidden group">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3!2d-74.0!3d4.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAiTiA3NMKwMDAnMDAiVw!5e0!3m2!1ses!2sco!4v1600000000000!5m2!1ses!2sco" 
                        width="100%" 
                        height="100%" 
                        style={{border:0, opacity: 0.7}} 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 pt-8 text-center text-brand-cream/40 text-xs">
          <p>&copy; 2024 Óptica S&V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
