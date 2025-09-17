"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Agenda", href: "/agenda" },
    { name: "Ponentes", href: "/ponentes" }, // Corregido href de /ponente a /ponentes
    { name: "Normativa", href: "/normativa" },
    { name: "Contactos", href: "/contactos" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-21%20at%2008.34.20-JY8XLg2cEvvOvWsULfwwd2Pp56gVdf.jpeg"
                alt="ESPOCH Logo"
                className={`h-14 w-auto transition-all duration-1000 ease-out ${
                  logoLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
                }`}
              />
            </div>
            <div
              className={`transition-all duration-1000 ease-out delay-300 ${
                logoLoaded ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-4"
              }`}
            >
              <h1 className="text-xl font-bold text-black leading-tight">VCICTMS 2025</h1>
              <p className="text-sm text-gray-600 font-medium">ESPOCH Sede Morona Santiago</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-black font-medium rounded-lg transition-all duration-200 hover:text-[#c00000] hover:bg-red-50"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-[#c00000] hover:bg-red-800 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
              asChild
            >
              <Link href="/registro">Registro</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#c00000] hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-black font-medium hover:text-[#c00000] hover:bg-red-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-[#c00000] hover:bg-red-800 text-white font-semibold py-2 rounded-lg"
                  asChild
                >
                  <Link href="/registro">Registro</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
