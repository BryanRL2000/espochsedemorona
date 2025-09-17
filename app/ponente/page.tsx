import { KeynoteCarousel } from "@/components/keynote-carousel"
import { SpeakersGallery } from "@/components/speakers-gallery"
import Image from "next/image"

export default function PonentesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-red-50">
      {/* Hero Section con Imagen Local */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/tecnologia.jpg" // ← Asegúrate de que este archivo exista en public/
          alt="Fondo Tecnológico - Congreso ESPOCH"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-red-500">
              Ponentes y Expositores
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium drop-shadow text-green-100">
              Conoce a los expertos internacionales que compartirán sus conocimientos en el V Congreso Internacional de Ciencia y Tecnología Morona Santiago 2025
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal — Fondo blanco puro para legibilidad */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
                Conferencias Internacionales
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                Expertos de Colombia, Chile, México, España, Irlanda y Ecuador compartirán las últimas tendencias en ciencia, tecnología, medio ambiente y gestión.
              </p>
            </div>

            {/* Carrusel de conferencias clave */}
            <KeynoteCarousel />

            {/* Galería de ponentes */}
            <div className="mt-18">
              <SpeakersGallery />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}