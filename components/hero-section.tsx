import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CountdownTimer } from "./countdown-timer"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/tecnologia-y-ciencia.jpg"
          alt="Tecnología y Ciencia Moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">

            {/* === Fila de logos: un poquito más grandes === */}
            <div className="flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-10 md:gap-14 mb-10 sm:mb-16">
              {/* Logo 1 */}
              <div className="flex-shrink-0">
                <Image
                  src="/30.jpg"
                  alt="Logo ESPOCH Sede Morona Santiago"
                  width={200}
                  height={100}
                  className="object-contain w-36 sm:w-48 md:w-60"
                />
              </div>

              {/* Logo 2 */}
              <div className="flex-shrink-0">
                <Image
                  src="/40.jpg"
                  alt="Logo SECTEI - Semana de la Ciencia, Tecnología, Emprendimiento e Innovación" 
                  width={200}
                  height={100}
                  className="object-contain w-36 sm:w-48 md:w-60"
                />
              </div>

              {/* Logo 3 */}
              <div className="flex-shrink-0">
                <Image
                  src="/20.jpg"
                  alt="Logo Congreso Internacional de Ciencia y Tecnología Morona Santiago 2025"
                  width={200}
                  height={100}
                  className="object-contain w-36 sm:w-48 md:w-60"
                />
              </div>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="text-[#f00f0f]">V CONGRESO INTERNACIONAL</span>
              <br />
              <span className="text-[#03c003]">DE CIENCIA Y TECNOLOGÍA</span>
              <br />
              <span className="text-white">MORONA SANTIAGO 2025</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance">
              Innovación, Conocimiento y Sostenibilidad para el Desarrollo Regional
            </p>

            <div className="max-w-md mx-auto">
              <CountdownTimer />
            </div>

            {/* Tarjetas de Fechas y Ubicación */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:bg-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center justify-center space-x-3 text-[#006400] mb-3">
                  <Calendar className="h-6 w-6" />
                  <span className="font-semibold text-lg md:text-xl">Fechas del Evento</span>
                </div>
                <p className="text-black font-medium text-xl md:text-2xl text-center">
                  14 - 16 Octubre 2025
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:bg-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center justify-center space-x-3 text-[#c00000] mb-3">
                  <MapPin className="h-6 w-6" />
                  <span className="font-semibold text-lg md:text-xl">Ubicación</span>
                </div>
                <ul className="text-black font-medium text-base md:text-lg space-y-2 text-center">
                  <li>• Espoch Sede Macas: Talleres</li>
                  <li>• Salón Azul: Ponencias</li>
                  <li>• Coliseo 29 de mayo: Feria de emprendimientos</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#c00000] hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/agenda">Ver Programa Completo</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#006400] text-[#006400] hover:bg-[#006400] hover:text-white px-8 py-3 font-semibold bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/ponentes">Conocer Expositores</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}