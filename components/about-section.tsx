"use client"

import { GraduationCap, Globe, Lightbulb, TreePine, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === 1. TÍTULO PRINCIPAL === */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">VI CONGRESO INTERNACIONAL DE CIENCIA Y TECNOLOGÍA MORONA SANTIAGO CICTMS 2026</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un foro académico que fortalece la cultura científica y promueve la innovación tecnológica en la región amazónica ecuatoriana
          </p>
        </div>

        {/* === 2. PROPÓSITO Y OBJETIVOS (con imagen a la derecha) === */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 h-full">
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#006400] mb-6">PROPÓSITO</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Establecer un foro accesible a todos los profesionales e interesados para que expongan y compartan sus experiencias académicas, científicas, asistenciales, educativas y tecnológicas, las cuales permitirán enriquecer el acervo científico, así como plantear con factibilidad y alternativas de solución los principales problemas a los que nos enfrentamos.
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
              <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-red-50">
                <Image
                  src="/INNOVA.jpg"
                  alt="Logo Congreso Ciencia y Tecnología Morona Santiago 2025"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain max-h-full max-w-full drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* === 3. DESCRIPCIÓN DEL CONGRESO (con imagen del campus) === */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#006400]">Fortaleciendo la Ciencia en la Amazonía</h3>
            <p className="text-gray-700 leading-relaxed">
              El VI Congreso Internacional de Ciencia y Tecnología Morona Santiago 2026 (VICICTMS 2026) es un foro académico organizado por la Sede Morona Santiago de la Escuela Superior Politécnica de Chimborazo (ESPOCH), que busca fortalecer la cultura científica, promover la innovación tecnológica y generar espacios de intercambio entre investigadores, docentes, estudiantes y actores regionales.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A través de conferencias magistrales,presentaciones de artículos científicos, se pretende construir conocimiento aplicable a los desafíos locales y globales, con especial énfasis en el desarrollo sostenible de la región amazónica.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/sedemacas.jpeg"
              alt="Campus ESPOCH Sede Morona Santiago"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* === 4. VIDEO PROMOCIONAL (NUEVO) === 
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#006400] text-center mb-6">🎥 ¡Mira el video promocional del congreso!</h3>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black">
            <iframe
              src="https://www.youtube.com/embed/dxL1qDP132c?autoplay=0&mute=0&rel=0&showinfo=0&controls=1"
              title="Video promocional VCICTMS 2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-sm text-gray-600">
            Haz clic en play para ver el video oficial del V Congreso Internacional de Ciencia y Tecnología Morona Santiago 2025.
          </p>
        </div>*/}

        {/* === 5. CONFERENCIAS MAGISTRALES (Key Features) - ESTILO MEJORADO === */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Tarjeta 1: Excelencia Académica */}
          <div className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#006400] hover:border-l-6 hover:border-l-[#009600] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            <div className="p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-[#006400]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Excelencia Académica</h4>
              <p className="text-sm text-gray-600">Conferencias magistrales con expertos internacionales</p>
            </div>
          </div>

          {/* Tarjeta 2: Alcance Internacional */}
          <div className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#c00000] hover:border-l-6 hover:border-l-[#d32f2f] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            <div className="p-8">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-[#c00000]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Alcance Internacional</h4>
              <p className="text-sm text-gray-600">Participación de investigadores y académicos de múltiples países latinoamericanos</p>
            </div>
          </div>

          {/* Tarjeta 3: Innovación Tecnológica */}
          <div className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#006400] hover:border-l-6 hover:border-l-[#009600] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            <div className="p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-10 w-10 text-[#006400]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Innovación Tecnológica</h4>
              <p className="text-sm text-gray-600">Talleres prácticos y presentaciones de las últimas tendencias en ciencia y tecnología</p>
            </div>
          </div>

          {/* Tarjeta 4: Desarrollo Sostenible */}
          <div className="relative group bg-white rounded-lg shadow-sm border-l-4 border-l-[#c00000] hover:border-l-6 hover:border-l-[#d32f2f] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            <div className="p-8">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-10 w-10 text-[#c00000]" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Desarrollo Sostenible</h4>
              <p className="text-sm text-gray-600">Enfoque especial en soluciones para el desarrollo sostenible de la región amazónica</p>
            </div>
          </div>
        </div>

        {/* === 6. LOGO ESPOCH - ESTILO CENTRADO Y LIMPIO === */}
        <div className="text-center mb-16">
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
            <div className="text-left sm:text-left">
              <h4 className="font-bold text-[#006400] text-lg">Escuela Superior Politécnica de Chimborazo</h4>
              <p className="text-[#c00000] font-medium">Sede Morona Santiago</p>
              <p className="text-sm text-gray-600 mt-1">
                Comprometidos con la excelencia académica y el desarrollo regional
              </p>
            </div>
          </div>
        </div>

        {/* === 7. SECCIÓN DE UBICACIONES (con mapas interactivos) === 
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#c00000] mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Ubicaciones del Evento
            </h3>

            {/* Salón Azul – Consejo Provincial 
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#c00000] mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Sede Principal: Salón Azul – Consejo Provincial
                  </h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Dirección:</strong><br />
                    Calles 24 de Mayo y Bolívar<br />
                    Consejo Provincial de Morona Santiago<br />
                    Macas, Ecuador
                  </p>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.6477974245697!2d-78.11914812773465!3d-2.3046162572125053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d20f644265d61b%3A0x940c0bdc9aa02b83!2sGobierno%20Autonomo%20Descentralizado%20de%20Morona%20Santiago!5e0!3m2!1ses-419!2sec!4v1758116346207!5m2!1ses-419!2sec&zoom=15&maptype=roadmap"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Salón Azul – Consejo Provincial"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                  <div className="mt-3 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#c00000] text-[#c00000] hover:border-[#006400] hover:text-[#006400] hover:bg-green-50"
                      asChild
                    >
                      <a
                        href="https://maps.app.goo.gl/ipjuFJpMg6MnBXQE9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Ver en Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* ESPOCH Sede Morona Santiago 
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#c00000] mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Workshops: Biblioteca – ESPOCH Sede
                  </h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Dirección:</strong><br />
                    ESPOCH Sede Morona Santiago<br />
                    Macas, Ecuador
                  </p>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.627937203067!2d-78.11682632589482!3d-2.2914555375490666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d20f81d725080f%3A0x6b99948c4cba120!2sEscuela%20Superior%20Polit%C3%A9cnica%20de%20Chimborazo%20-%20Sede%20Morona%20Santiago!5e0!3m2!1ses-419!2sec!4v1759524298485!5m2!1ses-419!2sec&zoom=15&maptype=roadmap"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ESPOCH Sede Morona Santiago"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                  <div className="mt-3 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#c00000] text-[#c00000] hover:border-[#006400] hover:text-[#006400] hover:bg-green-50"
                      asChild
                    >
                      <a
                        href="https://maps.app.goo.gl/7QjXrKcDdRzYvLkF8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Ver en Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Coliseo 29 de Mayo 
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#c00000] mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Feria de Emprendimientos: Coliseo 29 de Mayo
                  </h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Dirección:</strong><br />
                    Coliseo 29 de Mayo<br />
                    Macas, Ecuador
                  </p>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7973.183079571925!2d-78.12261327092303!3d-2.3044912315272126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d20f637754fffb%3A0x4cffd2fda96156d3!2sColiseo%2029%20De%20Mayo!5e0!3m2!1ses-419!2sec!4v1759524386677!5m2!1ses-419!2sec&zoom=15&maptype=roadmap"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Coliseo 29 de Mayo"
                    className="w-full h-full rounded-lg"
                  ></iframe>
                  <div className="mt-3 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#c00000] text-[#c00000] hover:border-[#006400] hover:text-[#006400] hover:bg-green-50"
                      asChild
                    >
                      <a
                        href="https://maps.app.goo.gl/8mYdH4WvRkL2sT9N7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Ver en Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Información Adicional 
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-2xl font-extrabold text-[#c00000] mb-5 flex items-center gap-2">
                📌 Información Adicional
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-blue-800">Modalidad Híbrida</p>
                    <p className="text-blue-700 mt-1">Participación presencial y virtual disponible para las sesiones principales</p>
                    <div className="mt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                        asChild
                      >
                        <a
                          href="https://cedia.zoom.us/j/89891762102"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          🖥️ Unirse a la sesión virtual
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-green-800">Workshops Especializados</p>
                    <p className="text-green-700 mt-1">Talleres prácticos en seguridad informática, caudal ambiental y área ambiental</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-10 h-10 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <TreePine className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-purple-800">Gala cultural de cierre </p>
                    <p className="text-purple-700 mt-1">Culminamos el congreso con un evento cultural y social</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === 8. SECCIÓN DE AUSPICIANTES === */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#006400] mb-6 text-center flex items-center justify-center gap-2">
              🤝 Auspiciantes del Congreso
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {/* Auspiciante 1 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/PAPELERIA.png"
                  alt="Papelería y Bazar La Politécnica"
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>

              {/* Auspiciante 2 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/CACPE.png"
                  alt="Cooperativa Gualaquiza"
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>
               {/* Auspiciante 3 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/LATINDEX.png"
                  alt="Latindex"
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>
               {/* Auspiciante 4 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/LOGO-INVESTIGO.png"
                  alt="Investigo"
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              {/* Auspiciante 5 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/grupo_investigacion.jpeg"
                  alt="Grupo de Investigacion IITMS"
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>
               {/* Auspiciante 6 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/centro_emprendimiento.jpeg"
                  alt="Centro de Emprendimiento "
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              {/* Auspiciante 7 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/diseño_Ti.jpeg"
                  alt="Diseño de TI"
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              {/* Auspiciante 8 */}
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Image
                  src="/raman.jpeg"
                  alt="Red Agropecuaria Medio Ambiante e Inteligencia Artificial"
                  width={200}
                  height={100}
                  className="max-w-full h-auto object-contain"
                />
              </div>

              {/* Puedes agregar más auspiciantes aquí */}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                ¡Gracias a nuestros auspiciantes por su apoyo al desarrollo científico y tecnológico en Morona Santiago!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}