"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Agenda", href: "/agenda" },
    { name: "Ponentes", href: "/ponentes" },
    { name: "Normativa", href: "/normativa" },
    { name: "Contactos", href: "/contactos" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#c00000] text-white shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo de la ESPOCH — ✅ BLANCO FORZADO + HOVER */}
          <Link href="/" className="flex items-center space-x-4 group">
            <img
              src="/logo-espoch.png"
              alt="Logo ESPOCH"
              className="h-14 w-auto object-contain filter brightness-0 invert-1 transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h1 className="text-lg md:text-xl font-black text-white drop-shadow-md tracking-wide">
                VI CICTSMS
              </h1>
              <p className="text-sm md:text-base text-gray-200 mt-1 font-medium tracking-wide">
                ESPOCH Sede Morona Santiago · 14-16 Octubre 2025
              </p>
            </div>
          </Link>

          {/* Menú de navegación — ✅ EFECTO HOVER BLANCO BRILLANTE */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="block py-3 text-white font-semibold text-sm md:text-base tracking-wide transition-all duration-300 relative hover:text-white"
                >
                  {item.name}
                  {/* Línea inferior blanca en hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  {/* Brillo blanco suave al pasar el mouse */}
                  <span className="absolute -inset-2 bg-white/0 group-hover:bg-white/10 rounded-md transition-all duration-300"></span>
                </Link>
                {/* Efecto de bola negra que se desplaza — opcional, lo dejamos si te gusta */}
                <div className="absolute -bottom-1 left-0 w-2 h-2 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom"></div>
              </div>
            ))}
          </nav>

          {/* Botón de registro — ✅ BLANCO CON HOVER MÁS BRILLANTE */}
          <div className="hidden md:block">
            <Button
              className="bg-white text-[#c00000] hover:bg-gray-100 hover:shadow-lg hover:shadow-white/30 font-bold px-6 py-2.5 rounded-md transition-all duration-300 shadow-md border border-transparent hover:border-white/30"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd10lmAzo13t4ZmFTP5xqJRS2yOOaMU7M1M8lQ0eO-ghV3iBA/viewform">
                Registro
              </Link>
            </Button>
          </div>

          {/* Menú móvil — ✅ ICONO DE MENÚ EN BLANCO */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white p-2 rounded-md transition-all duration-200 hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menú móvil desplegable — ✅ ESTILO COHERENTE + HOVER BLANCO */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-[#c00000] border-t border-white/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-white font-semibold text-base tracking-wide hover:bg-white/10 rounded-md transition-all duration-300 relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  className="w-full bg-white text-[#c00000] hover:bg-gray-100 hover:shadow-lg hover:shadow-white/30 font-bold py-3 rounded-md shadow-md transition-all duration-300"
                  asChild
                >
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd10lmAzo13t4ZmFTP5xqJRS2yOOaMU7M1M8lQ0eO-ghV3iBA/viewform">
                    Registro
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}