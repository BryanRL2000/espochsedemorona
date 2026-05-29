import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Event Info */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white drop-shadow-lg">
                VI CICTMS 2026
              </h3>
              <p className="text-white/95 text-sm leading-relaxed font-medium">
                VI Congreso Internacional de Ciencia y Tecnología Morona Santiago
              </p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/20 group-hover:bg-secondary/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium group-hover:text-secondary transition-colors">Macas, Morona Santiago</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/20 group-hover:bg-secondary/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-medium group-hover:text-secondary transition-colors">02-05 de Junio 2026</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-white">
              <span className="w-1 h-5 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Inicio" },
                { href: "/agenda", label: "Agenda" },
                { href: "/ponente", label: "Ponentes" },
                { href: "/normativa", label: "Normativa" },
                { href: "/contactos", label: "Contactos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-white hover:text-secondary transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-secondary" />
                    <span className="border-b border-transparent group-hover:border-white/50 pb-0.5 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ESPOCH SMS Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-white">
              <span className="w-1 h-5 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
              ESPOCH Sede Morona Santiago
            </h3>
            <p className="text-white/95 text-sm leading-relaxed mb-4 font-medium">
              Ubicada en Macas, ofrece un entorno único de aprendizaje con carreras en Tecnologías de la Información,
              Minas, Contabilidad y Auditoría, Ambiental, Zootecnia y Derecho.
            </p>
            <a
              href="https://www.espoch.edu.ec/sms-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors group"
            >
              Más información
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-white">
              <span className="w-1 h-5 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
              Contacto
            </h3>
            <div className="space-y-4 text-sm">
              {[
                { icon: Mail, content: "investigo@istra.edu.ec / carlav.haro@espoch.edu.ec", href: "mailto:vcictms2025@espoch.edu.ec" },
                { icon: Phone, content: "+593 (03) 2998-200", href: null },
                { icon: MapPin, content: "ESPOCH SMS, Macas", href: "https://maps.app.goo.gl/m684oT3mBDNNzJ17A" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="p-2 rounded-lg bg-white/20 group-hover:bg-secondary/30 transition-colors duration-300 shrink-0">
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-white hover:text-secondary transition-colors flex-1 font-medium"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-white flex-1 font-medium">{item.content}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-7">
              <h4 className="font-bold mb-4 text-white text-base">Síguenos</h4>
              <div className="flex gap-3">
                {[
                  { href: "https://www.facebook.com/espochms/?ref=bookmarks", icon: Facebook, label: "Facebook" },
                  { href: "https://x.com/EspochRio", icon: Twitter, label: "Twitter" },
                  { href: "https://www.instagram.com/espoch.edu.ec/?hl=es", icon: Instagram, label: "Instagram" },
                  { href: "https://www.youtube.com/watch?v=K7aQgWWc8uE", icon: Youtube, label: "YouTube" },
                ].map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="h-11 w-11 p-0 text-white bg-white/10 hover:text-white hover:bg-secondary hover:scale-110 transition-all duration-300 rounded-xl shadow-lg"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent my-8" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/90 font-medium text-center md:text-left">
            © 2026 VI Congreso Internacional de Ciencia y Tecnología Morona Santiago. 
            <span className="hidden sm:inline"> Todos los derechos reservados.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/90">
            {[
              { href: "/privacidad", label: "Política de Privacidad" },
              { href: "/terminos", label: "Términos de Uso" },
              { href: "/conducta", label: "Código de Conducta" },
            ].map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="hover:text-white transition-colors relative group font-medium"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}