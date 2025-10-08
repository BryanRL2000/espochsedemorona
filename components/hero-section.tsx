import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CountdownTimer } from "./countdown-timer";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0">
        <img
          src="/tecnologia-y-ciencia.jpg"
          alt="Tecnología y Ciencia Moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* === LOGO CENTRADO Y GRANDE (destacado) === */}
          <div className="mb-8 sm:mb-12">
            <Image
              src="/Logo_Sectei_fondo.png"
              alt="Logo SECTEI - Semana de la Ciencia, Tecnología, Emprendimiento e Innovación"
              width={400}
              height={300}
              className="mx-auto object-contain w-full max-w-[200px] sm:max-w-[200px] md:max-w-[400px]"
            />
          </div>

          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            <span className="text-[#f00f0f] block">V CONGRESO INTERNACIONAL</span>
            <span className="text-[#03c003] block">DE CIENCIA Y TECNOLOGÍA</span>
            <span className="text-white block">MORONA SANTIAGO 2025</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Innovación, Conocimiento y Sostenibilidad para el Desarrollo Regional
          </p>

          {/* Temporizador */}
          <div className="max-w-md mx-auto mb-10">
            <CountdownTimer />
          </div>

          {/* Tarjetas de Fechas y Ubicación (CORREGIDAS - compactas y alineadas) */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto mb-10">
            {/* Tarjeta Fechas - Compacta */}
            <div className="bg-white p-5 rounded-xl shadow-lg border-2 border-[#c00000] hover:shadow-xl transition-all duration-300 ease-in-out w-full sm:w-auto">
              <div className="flex items-center gap-2 text-[#c00000] mb-2">
                <Calendar className="h-5 w-5" />
                <h3 className="font-bold text-base sm:text-lg">Fechas del Evento</h3>
              </div>
              <p className="text-black font-bold text-xl sm:text-2xl mt-2 leading-tight">
                14-15 y 16 de Octubre 2025
              </p>
            </div>

            {/* Tarjeta Ubicación - Compacta */}
            <div className="bg-white p-5 rounded-xl shadow-lg border-2 border-[#006400] hover:shadow-xl transition-all duration-300 ease-in-out w-full sm:w-auto">
              <div className="flex items-center gap-2 text-[#006400] mb-2">
                <MapPin className="h-5 w-5" />
                <h3 className="font-bold text-base sm:text-lg">Ubicación</h3>
              </div>
              <ul className="text-black font-medium text-sm sm:text-base space-y-1 mt-2">
                <li className="flex items-start gap-1">
                  <span className="text-[#006400] mt-1">•</span>
                  <span>Acto Inaugural y Ponencias: Salón Azul del Consejo Provincial de Morona Santiago</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#006400] mt-1">•</span>
                  <span>Salón Azul: Ponencias</span>
                </li>
                <li className="flex items-start gap-1">
                  <span className="text-[#006400] mt-1">•</span>
                  <span>Feria de emprendimientos: Coliseo 29 de mayo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#c00000] hover:bg-red-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <Link href="/agenda">Ver Programa Completo</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#006400] text-[#006400] hover:bg-[#006400] hover:text-white px-6 sm:px-8 py-3 font-semibold bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <Link href="/ponentes">Conocer Expositores</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}