import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Event Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">V CICTMS 2025</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                V Congreso Internacional de Ciencia y Tecnología Morona Santiago
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-white/80">Macas, Morona Santiago</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-white/80">14-16 Octubre 2025</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-white/80 hover:text-secondary transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/ponente" className="text-white/80 hover:text-secondary transition-colors">
                  Ponentes
                </Link>
              </li>
              <li>
                <Link href="/normativa" className="text-white/80 hover:text-secondary transition-colors">
                  Normativa
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-white/80 hover:text-secondary transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* ESPOCH SMS Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ESPOCH Sede Morona Santiago</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Ubicada en Macas, ofrece un entorno único de aprendizaje con carreras en Tecnologías de la Información,
              Minas, Contabilidad y Auditoría, Ambiental y Zootecnia.
            </p>
            <a
              href="https://www.espoch.edu.ec/sms-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors text-sm font-medium"
            >
              Más información →
            </a>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-secondary mt-0.5" />
                <a
                  href="mailto:vcictms2025@espoch.edu.ec"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  vcictms2025@espoch.edu.ec
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-white/80">+593 (03) 2998-200</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/m684oT3mBDNNzJ17A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  ESPOCH SMS, Macas
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Síguenos</h4>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-12 w-12 p-0 text-white/70 hover:text-secondary hover:bg-white/10 transition-all duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-12 w-12 p-0 text-white/70 hover:text-secondary hover:bg-white/10 transition-all duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-12 w-12 p-0 text-white/70 hover:text-secondary hover:bg-white/10 transition-all duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-12 w-12 p-0 text-white/70 hover:text-secondary hover:bg-white/10 transition-all duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/20">
          <h3 className="text-lg font-semibold text-center mb-6">Ubicación del Evento</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7586!2d-78.1167!3d-2.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTknMDAuMCJTIDc4wrAwNycwMC4wIlc!5e0!3m2!1ses!2sec!4v1640000000000!5m2!1ses!2sec"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ESPOCH Sede Morona Santiago"
              />
            </div>
            <div className="text-center mt-4">
              <a
                href="https://maps.app.goo.gl/m684oT3mBDNNzJ17A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white/60 hover:text-secondary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>Ver en Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2025 V Congreso Internacional de Ciencia y Tecnología Morona Santiago. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                Código de Conducta
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}