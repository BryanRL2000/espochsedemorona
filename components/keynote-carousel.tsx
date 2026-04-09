"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MapPin, Globe, Calendar, Clock } from "lucide-react"
import CountryFlag from "react-country-flag"

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
    modality: "Virtual",
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
    modality: "Presencial",
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
    date: "Miércoles 15 de octubre",
    time: "10:00 – 12:00",
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
    date: "Martes 14 de octubre",
    time: "10:00 – 12:00",
    modality: "Presencial",
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
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  const currentSpeaker = keynoteSpeakers[currentIndex]

  return (
    <section id="conferencias" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4 tracking-tight">
            Conferencias
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expertos internacionales comparten sus hallazgos en las últimas tendencias de ciencia, tecnología e innovación.
          </p>
        </div>

        {/* Carrusel con soporte táctil */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ userSelect: "none" }}
        >
          <Card className="overflow-hidden border-none shadow-none rounded-2xl bg-white">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* IMAGEN */}
                <div className="relative w-full flex items-start justify-center p-6 md:p-8">
                  <div className="relative w-full max-w-[360px]">
                    <img
                      src={currentSpeaker.image || "/placeholder.svg"}
                      alt={`Foto de ${currentSpeaker.name}`}
                      className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg"
                      }}
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <Badge
                        variant="secondary"
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
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

                {/* Información */}
                <div className="p-6 md:p-8 flex flex-col justify-start">
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight break-words">
                        {currentSpeaker.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 font-medium mt-1">
                        {currentSpeaker.title}
                      </p>
                      <div className="flex items-center flex-wrap gap-1 text-xs sm:text-sm text-gray-500 mt-2">
                        <span>{currentSpeaker.institution}</span>
                        <span>•</span>
                        {Array.isArray(currentSpeaker.countryCode) ? (
                          <div className="flex items-center gap-1">
                            {currentSpeaker.countryCode.map((code) => (
                              <CountryFlag
                                key={code}
                                countryCode={code}
                                svg
                                style={{
                                  width: '1.1em',
                                  height: '1.1em',
                                  borderRadius: '2px',
                                  boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
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
                              width: '1.2em',
                              height: '1.2em',
                              borderRadius: '2px',
                              boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
                            }}
                            title={currentSpeaker.countryCode}
                          />
                        )}
                        <span>{currentSpeaker.country}</span>
                      </div>
                    </div>

                    {/* Título de conferencia en verde clarito */}
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-800 text-sm sm:text-base leading-tight break-words">
                        {currentSpeaker.conferenceTitle}
                      </h4>
                    </div>

                    {/* Fecha y hora */}
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{currentSpeaker.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{currentSpeaker.time}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                      {currentSpeaker.description}
                    </p>

                    {/* Enlaces sociales */}
                    {currentSpeaker.socialLinks && (
                      <div className="flex flex-wrap gap-2 pt-3">
                        {Object.entries(currentSpeaker.socialLinks).map(([platform, url]) => (
                          <Button
                            key={platform}
                            variant="ghost"
                            size="sm"
                            asChild
                            className="text-gray-600 hover:text-gray-800 hover:bg-gray-50 text-xs"
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
            </CardContent>
          </Card>

          {/* Flechas de navegación (solo en desktop) */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-full transition-colors duration-200"
            onClick={prevSlide}
            aria-label="Conferencia anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-full transition-colors duration-200"
            onClick={nextSlide}
            aria-label="Siguiente conferencia"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Indicadores de diapositivas */}
        <div className="flex justify-center space-x-2 mt-8">
          {keynoteSpeakers.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la conferencia ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            {currentIndex + 1} de {keynoteSpeakers.length} conferencias
          </p>
        </div>
      </div>
    </section>
  )
}