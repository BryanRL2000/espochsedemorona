"use client"

import { GraduationCap, Globe, Lightbulb, TreePine } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">"V CONGRESO INTERNACIONAL DE CIENCIA Y TECNOLOGÍA MORONA SANTIAGO CICTMS 2025"</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un foro académico que fortalece la cultura científica y promueve la innovación tecnológica en la región amazónica ecuatoriana
          </p>
        </div>

        {/* === TARJETA DE PROPÓSITO Y OBJETIVOS CON IMAGEN A LA DERECHA === */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 h-full">
              {/* Texto: Propósito y Objetivos */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#006400] mb-6">PROPÓSITO</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Establecer un foro accesible a todos los profesionales e interesados para que expongan y compartan sus experiencias académicas, científicas, asistenciales, educativas y tecnológicas, las cuales permitirán enriquecer el acervo científico, así como, plantear con factibilidad y alternativas de solución los principales problemas a los que nos enfrentamos.
                </p>

                <h3 className="text-2xl font-bold text-[#c00000] mb-4">OBJETIVOS</h3>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">Objetivo General</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Contribuir al fortalecimiento de la cultura, ciencia, tecnología e innovación en la provincia de Morona Santiago.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">Objetivos Específicos</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-4">
                  <li>Construir nuevas metodologías de enseñanza aprendizaje basadas en el uso de herramientas tecnológicas y conferencias magistrales en temas específicos.</li>
                  <li>Facilitar la comunicación entre investigadores, creando un entorno que permita compartir experiencias e inquietudes y, a partir de ello, el surgimiento de vínculos internos y externos.</li>
                  <li>Reflexionar y debatir sobre conocimientos teóricos y metodológicos.</li>
                  <li>Impulsar el interés en temas nuevos donde se podría abrir nuevas líneas de investigación con enfoque a las distintas carreras de la Sede.</li>
                </ul>
              </div>

              {/* Imagen del logo del congreso - LLENA TODO EL ESPACIO */}
              <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-red-50">
                <Image
                  src="/congreso-ciencia-tecnologia.jpeg"
                  alt="Logo Congreso Ciencia y Tecnología Morona Santiago 2025"
                  width={500}
                  height={300}
                  className="w-full h-full object-contain max-h-full max-w-full drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === Descripción del Congreso === */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#006400]">Fortaleciendo la Ciencia en la Amazonía</h3>
            <p className="text-gray-700 leading-relaxed">
              El V Congreso Internacional de Ciencia y Tecnología Morona Santiago 2025 (VCICTMS 2025) es un foro académico organizado por la Sede Morona Santiago de la Escuela Superior Politécnica de Chimborazo (ESPOCH), que busca fortalecer la cultura científica, promover la innovación tecnológica y generar espacios de intercambio entre investigadores, docentes, estudiantes y actores regionales.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A través de conferencias magistrales, talleres, ferias de emprendimiento y presentaciones de artículos científicos, se pretende construir conocimiento aplicable a los desafíos locales y globales, con especial énfasis en el desarrollo sostenible de la región amazónica.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/espoch-macas.jpg"
              alt="Campus ESPOCH Sede Morona Santiago"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* === Key Features con efecto dinámico al pasar el cursor + ÍCONOS DE PAÍSES === */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Excelencia Académica — CON ÍCONOS DE BANDERAS */}
          <div
            className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#006400] hover:border-l-6 hover:border-l-[#009600] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-[#006400]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Excelencia Académica</h4>
              <p className="text-sm text-gray-600 mb-3">
                Conferencias magistrales con expertos internacionales
              </p>
              
            </div>
          </div>

          {/* Alcance Internacional */}
          <div
            className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#c00000] hover:border-l-6 hover:border-l-[#d32f2f] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#c00000]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Alcance Internacional</h4>
              <p className="text-sm text-gray-600">
                Participación de investigadores y académicos de múltiples países latinoamericanos
              </p>
            </div>
          </div>

          {/* Innovación Tecnológica */}
          <div
            className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#006400] hover:border-l-6 hover:border-l-[#009600] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-[#006400]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Innovación Tecnológica</h4>
              <p className="text-sm text-gray-600">
                Talleres prácticos y presentaciones de las últimas tendencias en ciencia y tecnología
              </p>
            </div>
          </div>

          {/* Desarrollo Sostenible */}
          <div
            className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#c00000] hover:border-l-6 hover:border-l-[#d32f2f] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-[#c00000]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Desarrollo Sostenible</h4>
              <p className="text-sm text-gray-600">
                Enfoque especial en soluciones para el desarrollo sostenible de la región amazónica
              </p>
            </div>
          </div>
        </div>

        {/* === ESPOCH Logo Section — SIN VIDEO === */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-gradient-to-br from-green-100 to-red-100 p-4 rounded-lg shadow-md">
              <Image
                src="/espoch.png"
                alt="Logo ESPOCH"
                width={100}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-[#006400] text-lg">Escuela Superior Politécnica de Chimborazo</h4>
              <p className="text-[#c00000] font-medium">Sede Morona Santiago</p>
              <p className="text-sm text-gray-600 mt-1">
                Comprometidos con la excelencia académica y el desarrollo regional
              </p>
              {/* ✅ SECCIÓN DEL VIDEO ELIMINADA COMPLETAMENTE */}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}