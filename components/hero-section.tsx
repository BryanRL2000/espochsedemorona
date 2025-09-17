import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "./countdown-timer"


export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/tecnologia-y-ciencia-moderna-laboratorio-digital.jpg"
          alt="Tecnología y Ciencia Moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-[#c00000]">V CONGRESO INTERNACIONAL</span>
                <br />
                <span className="text-[#006400]">DE CIENCIA Y TECNOLOGÍA</span>
                <br />
                <span className="text-white">MORONA SANTIAGO 2025</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance">
                Innovación, Conocimiento y Sostenibilidad para el Desarrollo Regional
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <CountdownTimer />
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 text-[#006400] mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">Fechas del Evento</span>
                </div>
                <p className="text-black font-medium">14 - 16 Octubre 2025</p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 text-[#c00000] mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Ubicación</span>
                </div>
                <p className="text-black font-medium">Salón Azul, Consejo Provincial Morona Santiago</p>
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
                className="border-2 border-[#006400] text-[#006400] hover:bg-[#006400] hover:text-white px-8 py-3 font-semibold bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
