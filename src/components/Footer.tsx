import { Glasses, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#990000] text-[#FDF8F0] pt-16 pb-8 border-t border-[#FDF8F0]/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* COLUMNA 1: Marca */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#FDF8F0] p-2 rounded-lg">
                <Glasses className="w-6 h-6 text-[#990000]" />
              </div>
              <span className="font-serif text-2xl font-bold">Óptica S&V</span>
            </div>
            <p className="text-[#FDF8F0]/70 mb-6 text-sm">
              Tu visión, nuestro compromiso. Tecnología y moda en Suba.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#CC0000]/20 flex items-center justify-center hover:bg-[#CC0000] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#CC0000]/20 flex items-center justify-center hover:bg-[#CC0000] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: Datos de Contacto */}
          <div>
            {/* Título en Blanco para contraste */}
            <h3 className="font-serif text-xl mb-6 text-[#FDF8F0] font-bold">Visítanos</h3>
            
            <ul className="space-y-4 text-[#FDF8F0]/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CC0000] mt-1 shrink-0" />
                {/* DIRECCIÓN ACTUALIZADA EN EL TEXTO */}
                <span>Cl. 174a #45 - 58<br/>Suba, Bogotá</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#CC0000]" />
                <span>+57 (601) 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#CC0000]" />
                <span>Lun - Sáb: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Mapa */}
          <div>
            {/* Título en Blanco para contraste */}
            <h3 className="font-serif text-xl mb-6 text-[#FDF8F0] font-bold">Ubicación</h3>
            
            <div className="bg-[#FDF8F0]/5 p-2 rounded-lg">
                <div className="h-40 bg-gray-800 rounded flex items-center justify-center relative overflow-hidden group">
                    {/* MAPA EXACTO A LA CALLE 174a #45-58 */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.049449836967!2d-74.0476566!3d4.7551722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8566113b2e3d%3A0x629555627618230!2sCl.+174a+%2345-58%2C+Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1645564800000!5m2!1ses!2sco" 
                        width="100%" 
                        height="100%" 
                        style={{border:0, opacity: 0.8}} 
                        loading="lazy"
                        title="Mapa Óptica S&V"
                    ></iframe>
                </div>
                <div className="mt-2 text-right">
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Cl.+174a+%2345+-+58,+Suba,+Bogotá" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-xs text-[#FDF8F0]/60 hover:text-white underline"
                    >
                        Ver en Google Maps
                    </a>
                </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FDF8F0]/10 pt-8 text-center text-[#FDF8F0]/40 text-xs">
          <p>&copy; 2026 Óptica S&V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
