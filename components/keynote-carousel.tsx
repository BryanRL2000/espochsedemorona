"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MapPin, Globe, Calendar, User, Clock } from "lucide-react"
import CountryFlag from "react-country-flag"

// ✅ Interfaz bien definida
interface KeynoteSpeaker {
  id: number
  name: string
  title: string
  institution: string
  country: string
  countryCode: string | string[]
  conferenceTitle: string
  date: string
  time: string
  modality: "Presencial" | "Virtual"
  description: string
  image: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    website?: string
  }
}

// ✅ Datos de los ponentes, tipados correctamente
const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    id: 1,
    name: "Moises Oswaldo Bustamante Rúa",
    title: "Doctor en Ciencias de la Ingeniería",
    institution: "Universidad Nacional de Colombia, sede Medellín",
    country: "Colombia",
    countryCode: "CO",
    conferenceTitle: "Conminución",
    date: "Martes 14 de octubre",
    time: "08:30 – 09:30",
    modality: "Presencial",
    description:
      "Profesor Titular y Director del Instituto de Minerales CIMEX. Líder en investigación minera y metalúrgica. Especializado en reología de suspensiones, procesamiento de minerales y geomecánica.",
    image: "/FOTOGRAFIA_OSWALDO BUSTAMANTE.png",
  },
  {
    id: 2,
    name: "Gabriela Jacqueline Contreras Sinchi",
    title: "Magíster en Ingeniería – Recursos Minerales",
    institution: "Instituto de Minerales CIMEX – Universidad Nacional de Colombia",
    country: "Colombia",
    countryCode: "CO",
    conferenceTitle: "Caracterización química superficial de minerales",
    date: "Martes 14 de octubre",
    time: "09:30 – 10:30",
    modality: "Virtual",
    description:
      "Investigadora en procesos mineros, consultora y coordinadora de convenios internacionales. Especializada en flotación de minerales y química de superficies.",
    image: "/FOTOGRAFIA_GABRIELA CONTRERAS.png",
  },
  {
    id: 3,
    name: "Jacopo Seccatore",
    title: "Doctor en Ingeniería de Minas",
    institution: "Universidad Católica del Norte, Chile",
    country: "Italia / Brasil / Chile",
    countryCode: ["IT", "BR", "CL"],
    conferenceTitle: "A new variable for tunnel drill & blast efficiency: the angles of breakage",
    date: "Martes 14 de octubre",
    time: "11:00 – 12:00",
    modality: "Presencial",
    description:
      "Profesor e investigador con experiencia en proyectos internacionales en Latinoamérica y África. Asesor del PNUD. Especializado en voladuras mineras, sostenibilidad en pequeña minería y modelamiento geotécnico.",
    image: "/FOTOGRAFIA_JACOPO_SECCATORE.png",
  },
  {
    id: 4,
    name: "Matías Peredo Parada",
    title: "Doctor en Ingeniería Hidráulica y Medio Ambiente",
    institution: "EcoHyd – Plataforma de Investigación en Ecohidrología y Ecohidráulica",
    country: "Chile",
    countryCode: "CL",
    conferenceTitle: "Caudal Ambiental: la forma más robusta de dotar de seguridad hídrica a los ecosistemas acuáticos en una gestión integrada de recursos hídricos",
    date: "Miércoles 15 de octubre",
    time: "08:00 – 09:00",
    modality: "Virtual",
    description:
      "Consultor internacional en gestión hídrica y caudales ambientales. Más de 20 años de experiencia en ecohidráulica, caudales ecológicos y modelación de contaminantes.",
    image: "/Matias-Peredo.png",
  },
  {
    id: 5,
    name: "Hugo de Jesús López Inzunza",
    title: "Doctor en Ciencias Veterinarias (Nutrición)",
    institution: "Universidad Autónoma de Sinaloa, México",
    country: "México",
    countryCode: "MX",
    conferenceTitle: "Utilización de enzimas exógenas en la finalización de bovinos en confinamiento",
    date: "Miércoles 15 de octubre",
    time: "09:00 – 10:00",
    modality: "Virtual",
    description:
      "Profesor investigador, líder de laboratorio de nutrición animal, consultor internacional en producción bovina. Especializado en nutrición de rumiantes y ecología ruminal.",
    image: "/Hugo-Lopez.png",
  },
]

export function KeynoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedSpeaker, setSelectedSpeaker] = useState<KeynoteSpeaker | null>(null)

  // ✅ Auto-avance cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keynoteSpeakers.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % keynoteSpeakers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + keynoteSpeakers.length) % keynoteSpeakers.length)
  }

  const currentSpeaker = keynoteSpeakers[currentIndex]

  return (
    <section id="conferencias" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Conferencias Magistrales
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Expertos internacionales compartirán sus conocimientos en las últimas tendencias de ciencia y tecnología.
          </p>
        </div>

        {/* Carrusel Principal */}
        <div className="relative">
          <Card className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* IMAGEN DEL PONENTE — RESPONSIVE */}
                <div className="relative w-full flex items-center justify-center overflow-hidden bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="w-full p-4 md:p-6">
                    <div className="relative aspect-[4/3] max-h-[300px] flex items-center justify-center">
                      <img
                        src={currentSpeaker.image || "/placeholder.svg"}
                        alt={`Foto de ${currentSpeaker.name}`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg"
                        }}
                      />
                      {/* Badge de modalidad */}
                      <div className="absolute top-2 right-2 z-10">
                        <Badge
                          className={`px-2.5 py-1 text-xs font-medium rounded-full border ${
                            currentSpeaker.modality === "Presencial"
                              ? "bg-red-100 text-red-800 border-red-300"
                              : "bg-blue-100 text-blue-800 border-blue-300"
                          }`}
                        >
                          {currentSpeaker.modality === "Presencial" ? (
                            <MapPin className="h-3 w-3 mr-1 inline" />
                          ) : (
                            <Globe className="h-3 w-3 mr-1 inline" />
                          )}
                          {currentSpeaker.modality}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información del ponente */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
                  <div className="space-y-4 min-w-0">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 break-words">
                        {currentSpeaker.name}
                      </h3>
                      <p className="text-gray-700 font-medium text-sm sm:text-base">
                        {currentSpeaker.title}
                      </p>
                      <div className="flex items-center flex-wrap gap-1 text-xs sm:text-sm text-gray-600 mt-1">
                        <span className="break-words">{currentSpeaker.institution}</span>
                        <span>•</span>
                        {Array.isArray(currentSpeaker.countryCode) ? (
                          <div className="flex items-center gap-1">
                            {currentSpeaker.countryCode.map((code) => (
                              <CountryFlag
                                key={code}
                                countryCode={code}
                                svg
                                style={{
                                  width: '1.2em',
                                  height: '1.2em',
                                  borderRadius: '3px',
                                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                }}
                                title={code}
                              />
                            ))}
                          </div>
                        ) : (
                          <CountryFlag
                            countryCode={currentSpeaker.countryCode}
                            svg
                            style={{
                              width: '1.4em',
                              height: '1.4em',
                              borderRadius: '3px',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                            }}
                            title={currentSpeaker.countryCode}
                          />
                        )}
                        <span>{currentSpeaker.country}</span>
                      </div>
                    </div>

                    {/* Título de la conferencia */}
                    <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 text-sm sm:text-base break-words">
                        {currentSpeaker.conferenceTitle}
                      </h4>
                    </div>

                    {/* Fecha y hora */}
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-gray-500" />
                        <span>{currentSpeaker.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-gray-500" />
                        <span>{currentSpeaker.time}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      {currentSpeaker.description}
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedSpeaker(currentSpeaker)}
                        className="border-red-300 hover:bg-red-50 text-red-700 hover:text-red-800"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Ver Perfil Completo
                      </Button>

                      {/* Enlaces sociales */}
                      {currentSpeaker.socialLinks && (
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(currentSpeaker.socialLinks).map(([platform, url]) => (
                            <Button
                              key={platform}
                              variant="outline"
                              size="sm"
                              asChild
                              className="border-gray-300 hover:bg-gray-50 text-gray-800 text-xs"
                            >
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${platform} de ${currentSpeaker.name}`}
                              >
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flechas de navegación — solo en desktop */}
          <Button
            variant="outline"
            size="icon"
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-300 hover:bg-red-50 shadow-sm"
            onClick={prevSlide}
            aria-label="Conferencia anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-300 hover:bg-red-50 shadow-sm"
            onClick={nextSlide}
            aria-label="Siguiente conferencia"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Indicadores de progreso */}
        <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
          {keynoteSpeakers.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la conferencia ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-4">
          <p className="text-xs sm:text-sm text-gray-500">
            {currentIndex + 1} de {keynoteSpeakers.length} conferencias magistrales
          </p>
        </div>
      </div>

      {/* Modal de perfil completo */}
      {selectedSpeaker && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-gray-200 shadow-xl">
            <CardContent className="p-5 sm:p-6">
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">
                  {selectedSpeaker.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSpeaker(null)}
                  aria-label="Cerrar modal"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Título</p>
                    <p className="text-gray-700 text-sm sm:text-base">{selectedSpeaker.title}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Institución</p>
                    <p className="text-gray-700 text-sm sm:text-base">{selectedSpeaker.institution}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">País</p>
                    <p className="text-gray-700 text-sm sm:text-base">{selectedSpeaker.country}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Modalidad</p>
                    <p className="text-gray-700 text-sm sm:text-base">{selectedSpeaker.modality}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Fecha y hora</p>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {selectedSpeaker.date} a las {selectedSpeaker.time}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tema</h4>
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    {selectedSpeaker.conferenceTitle}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Biografía</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {selectedSpeaker.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Button
                  onClick={() => setSelectedSpeaker(null)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 sm:py-3 rounded-xl transition-colors text-sm sm:text-base"
                >
                  Cerrar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  )
}