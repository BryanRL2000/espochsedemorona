import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CountdownTimer } from "./countdown-timer";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen">
      {/* Fondo con imagen y overlay mejorado */}
      <div className="absolute inset-0">
        <img
          src="/tecnologia-y-ciencia.jpg"
          alt="Tecnología y Ciencia Moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#006400]/30"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* === LOGOS INSTITUCIONALES - INTEGRADOS AL FONDO === */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {/* Logo SECTEI - Sin fondo blanco */}
              <div className="p-2 sm:p-3">
                <Image
                  src="/Logo_Sectei_fondo.png"
                  alt="SECTEI - Semana de la Ciencia, Tecnología, Emprendimiento e Innovación ESPOCH"
                  width={250}
                  height={120}
                  className="w-full max-w-[150px] sm:max-w-[200px] h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              
              {/* Separador visual */}
              <div className="hidden sm:block w-0.5 h-16 bg-gradient-to-b from-[#f0c000] via-[#03c003] to-[#f00f0f] rounded-full opacity-80"></div>
              
              {/* Logo VI CICTMS - Sin fondo blanco */}
              <div className="p-2 sm:p-3">
                <Image
                  src="/logo-cictms-vi.jpeg" 
                  alt="VI Congreso Internacional de Ciencia y Tecnología - CICTMS Morona Santiago 2026"
                  width={500}
                  height={200}
                  className="w-full max-w-[180px] sm:max-w-[280px] md:max-w-[400px] h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Título principal mejorado */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-balance leading-tight mb-4 sm:mb-6">
            <span className="text-white block drop-shadow-lg">
              VI CONGRESO INTERNACIONAL
            </span>
            <span className="text-[#f0c000] block drop-shadow-lg mt-1">
              DE CIENCIA Y TECNOLOGÍA
            </span>
            <span className="text-[#03c003] block drop-shadow-lg mt-1">
              MORONA SANTIAGO 2026
            </span>
          </h1>

          {/* Subtítulo mejorado */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
            Innovación, Conocimiento y Sostenibilidad para el Desarrollo Regional
          </p>

          {/* Características destacadas */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[#f0c000]" />
              <span className="text-white text-sm sm:text-base font-medium">Indexación ERIH PLUS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#03c003]" />
              <span className="text-white text-sm sm:text-base font-medium">Revisión por Pares</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#f00f0f]" />
              <span className="text-white text-sm sm:text-base font-medium">Acceso Abierto</span>
            </div>
          </div>

          {/* Temporizador */}
          <div className="max-w-lg mx-auto mb-8 sm:mb-10">
            <CountdownTimer />
          </div>

          {/* Tarjetas de Fechas y Ubicación mejoradas */}
          <div className="flex flex-col lg:flex-row justify-center gap-6 max-w-5xl mx-auto mb-10">
            {/* Tarjeta Fechas */}
            <div className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-2xl border-4 border-[#c00000] hover:shadow-[0_0_30px_rgba(192,0,0,0.4)] hover:-translate-y-2 transition-all duration-300 ease-out w-full lg:w-auto min-w-[280px] flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[#c00000] mb-3 justify-center">
                <Calendar className="h-6 w-6" />
                <h3 className="font-bold text-lg sm:text-xl">Fecha del Evento</h3>
              </div>
              <p className="text-[#c00000] font-black text-2xl sm:text-3xl leading-tight text-center">
                14 de Abril de 2026
              </p>
              <p className="text-gray-600 text-sm mt-2 text-center font-medium">
                08:00 AM - Hora de Ecuador
              </p>
            </div>

            {/* Tarjeta Ubicación */}
            <div className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-2xl border-4 border-[#006400] hover:shadow-[0_0_30px_rgba(0,100,0,0.4)] hover:-translate-y-2 transition-all duration-300 ease-out w-full lg:w-auto min-w-[280px]">
              <div className="flex items-center gap-3 text-[#006400] mb-3 justify-center lg:justify-start">
                <MapPin className="h-6 w-6" />
                <h3 className="font-bold text-lg sm:text-xl">Ubicación</h3>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[#006400] font-bold text-xl sm:text-2xl leading-tight mb-2">
                  Salón Azul del Consejo Provincial
                </p>
                <p className="text-gray-600 text-sm font-medium">
                  Morona Santiago - Ecuador
                </p>
              </div>
            </div>
          </div>

          {/* Botones de acción mejorados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#c00000] to-[#f00f0f] hover:from-red-700 hover:to-[#c00000] text-white font-bold px-8 sm:px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-lg border-2 border-white/20 hover:scale-105"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/1nnXSRjBYi_sJkxxJMIBRNQjL3hW44hCP5CcGuMBysUw/viewform" target="_blank">
                Inscribirse Ahora
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-3 border-[#006400] text-[#006400] hover:bg-[#006400] hover:text-white px-8 sm:px-10 py-4 font-bold bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-lg hover:scale-105"
              asChild
            >
              <Link href="/normativa">
                Ver Requisitos de Publicación
              </Link>
            </Button>
          </div>

          {/* Texto adicional */}
          <p className="text-gray-300 text-sm sm:text-base mt-6 max-w-2xl mx-auto">
            Publicación en revista indexada ERIH PLUS • ISSN 2953-6367
          </p>
        </div>
      </div>

      {/* Animación de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}