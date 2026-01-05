import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-accent">Óptica S&V</h3>
            <p className="text-gray-300 mb-4">
              20 años cuidando tu visión y estilo en Suba, Bogotá.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-accent p-2 rounded-full transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+57 300 123 4567</p>
                  <p className="text-sm text-gray-400">Lun - Sab: 9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@opticasyv.com"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  info@opticasyv.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Calle 145 #91-19, Suba, Bogotá</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Horarios</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Lunes - Viernes: 9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center ml-6">
                <span>Sábados: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center ml-6">
                <span>Domingos: Cerrado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Ubicación</h4>
            <div className="bg-white/10 rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4234!2d-74.0856!3d4.7416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDQnMjkuOCJOIDc0wrAwNScwOC4yIlc!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Óptica S&V"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Óptica S&V - Salud y Estilo. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Diseñado con pasión para quienes valoran la calidad y el estilo.
          </p>
        </div>
      </div>
    </footer>
  );
}
