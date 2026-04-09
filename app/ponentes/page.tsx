import { KeynoteCarousel } from "@/components/keynote-carousel"
import { SpeakersGallery } from "@/components/speakers-gallery"
import Image from "next/image"

export default function PonentesPage() {
  return (
    <main className="min-h-screen relative">
      {/* FONDO DE IMAGEN LOCAL */}
      <div className="absolute inset-0">
        <Image
          src="/tecnologia.jpg" // ← Asegúrate de que este archivo exista en public/
          alt="Fondo Tecnológico - Congreso ESPOCH"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        {/* Hero Section — Título en Rojo, Subtítulo en Verde/Negro */}
        <div className="pt-16 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 drop-shadow-lg">
              Ponentes y Expositores
            </h1>
            <p className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto font-medium drop-shadow">
              Conoce a los expertos internacionales que compartirán sus conocimientos en el V Congreso Internacional de Ciencia y Tecnología
            </p>
          </div>
        </div>

        {/* Contenido Principal — Envuelto en tarjeta con fondo blanco translúcido */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-white/20">
              <KeynoteCarousel />
              <SpeakersGallery />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}