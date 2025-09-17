"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Globe, Download, Users, Presentation, Coffee } from "lucide-react"

interface AgendaItem {
  id: string
  time: string
  title: string
  type: "keynote" | "presentation" | "panel" | "break" | "networking" | "opening" | "closing" | "workshop" | "fair"
  speaker?: string
  institution?: string
  modality: "Presencial" | "Virtual" | "Híbrido"
  location?: string
  description?: string
}

const agendaData = {
  "2025-10-14": [
    {
      id: "1",
      time: "08:00 - 08:30",
      title: "Inauguración",
      type: "opening" as const,
      modality: "Presencial" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Ceremonia de inauguración del V Congreso Internacional de Ciencia y Tecnología Morona Santiago",
    },
    {
      id: "2",
      time: "08:30 - 13:00",
      title: "V Congreso Internacional Ciencia y Tecnología Morona Santiago - Sesión Matutina",
      type: "presentation" as const,
      modality: "Híbrido" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Primera sesión del congreso con conferencias magistrales y presentaciones",
    },
    {
      id: "3",
      time: "10:00 - 12:00",
      title: "Workshop: Ataques DDoS y Técnicas de Protección",
      type: "workshop" as const,
      speaker: "Katherine Merino",
      modality: "Presencial" as const,
      location: "Segundo Piso de la Biblioteca de la Sede Morona Santiago",
      description: "Taller especializado en seguridad informática y protección contra ataques DDoS",
    },
    {
      id: "4",
      time: "14:00 - 18:00",
      title: "V Congreso Internacional Ciencia y Tecnología Morona Santiago - Sesión Vespertina",
      type: "presentation" as const,
      modality: "Híbrido" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Segunda sesión del congreso con más conferencias magistrales y presentaciones",
    },
  ],
  "2025-10-15": [
    {
      id: "5",
      time: "08:00 - 12:00",
      title: "V Congreso Internacional Ciencia y Tecnología Morona Santiago - Sesión Matutina",
      type: "presentation" as const,
      modality: "Híbrido" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Segunda jornada del congreso con conferencias magistrales",
    },
    {
      id: "6",
      time: "09:00 - 13:00",
      title: "II Feria de Emprendimientos y Proyectos Científicos: Emprende ESPOCH",
      type: "fair" as const,
      modality: "Presencial" as const,
      location: "Coliseo 29 de Mayo",
      description: '"Ideas que nacen, carreras que inspiran" - Exhibición de proyectos emprendedores',
    },
    {
      id: "7",
      time: "10:00 - 12:00",
      title: "Workshop: Métodos para estimar el caudal ambiental",
      type: "workshop" as const,
      speaker: "Jacopo Seccatore",
      modality: "Presencial" as const,
      location: "Segundo Piso de la Biblioteca de la Sede Morona Santiago",
      description: "Taller especializado en métodos de estimación de caudal ambiental",
    },
    {
      id: "8",
      time: "14:00 - 18:00",
      title: "V Congreso Internacional Ciencia y Tecnología Morona Santiago - Sesión Vespertina",
      type: "presentation" as const,
      modality: "Híbrido" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Continuación de las conferencias magistrales y presentaciones",
    },
  ],
  "2025-10-16": [
    {
      id: "9",
      time: "08:00 - 12:30",
      title: "V Congreso Internacional Ciencia y Tecnología Morona Santiago - Sesión Matutina",
      type: "presentation" as const,
      modality: "Híbrido" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Última jornada matutina del congreso",
    },
    {
      id: "10",
      time: "10:00 - 12:00",
      title: "Workshop: Área Ambiental",
      type: "workshop" as const,
      speaker: "Matias Peredo Parada",
      modality: "Presencial" as const,
      location: "Segundo Piso de la Biblioteca de la Sede Morona Santiago",
      description: "Taller especializado en temas ambientales",
    },
    {
      id: "11",
      time: "14:00 - 17:00",
      title: "V Congreso Internacional Ciencia y Tecnología Morona Santiago - Sesión Vespertina Final",
      type: "presentation" as const,
      modality: "Híbrido" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Última sesión de conferencias del congreso",
    },
    {
      id: "12",
      time: "17:00 - 17:30",
      title: "Clausura V Congreso Internacional Ciencia y Tecnología Morona Santiago",
      type: "closing" as const,
      modality: "Presencial" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Ceremonia de clausura del congreso",
    },
    {
      id: "13",
      time: "17:30 - 18:00",
      title: "Noche Cultural",
      type: "networking" as const,
      modality: "Presencial" as const,
      location: "Salón Azul – Consejo Provincial",
      description: "Evento cultural de cierre del congreso",
    },
  ],
}

const getTypeIcon = (type: AgendaItem["type"]) => {
  switch (type) {
    case "keynote":
      return <Presentation className="h-4 w-4" />
    case "presentation":
      return <Users className="h-4 w-4" />
    case "panel":
      return <Users className="h-4 w-4" />
    case "workshop":
      return <Presentation className="h-4 w-4" />
    case "fair":
      return <Users className="h-4 w-4" />
    case "break":
      return <Coffee className="h-4 w-4" />
    case "networking":
      return <Users className="h-4 w-4" />
    case "opening":
      return <Calendar className="h-4 w-4" />
    case "closing":
      return <Calendar className="h-4 w-4" />
    default:
      return <Calendar className="h-4 w-4" />
  }
}

const getTypeColor = (type: AgendaItem["type"]) => {
  switch (type) {
    case "keynote":
      return "bg-secondary text-secondary-foreground"
    case "presentation":
      return "bg-primary/10 text-primary"
    case "workshop":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "fair":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "panel":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "break":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    case "networking":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    case "opening":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
    case "closing":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

const getTypeLabel = (type: AgendaItem["type"]) => {
  switch (type) {
    case "keynote":
      return "Magistral"
    case "presentation":
      return "Congreso"
    case "workshop":
      return "Workshop"
    case "fair":
      return "Feria"
    case "panel":
      return "Panel"
    case "break":
      return "Pausa"
    case "networking":
      return "Cultural"
    case "opening":
      return "Inauguración"
    case "closing":
      return "Clausura"
    default:
      return "Evento"
  }
}

// ✅ Imágenes del carrusel (reales desde public/)
const carouselImages = [
  {
    src: "/espoch1.png",
    alt: "Campus ESPOCH Morona Santiago",
  },
  {
    src: "/fondo-agenda.png",
    alt: "Banner del Congreso",
  },
  {
    src: "/martes.png",
    alt: "Martes - Día 1 del Congreso",
  },
  {
    src: "/miercoles.png",
    alt: "Miércoles - Día 2 del Congreso",
  },
  {
    src: "/jueves.png",
    alt: "Jueves - Día 3 del Congreso",
  },
  {
    src: "/final.png",
    alt: "Cierre del Congreso",
  },
]

export function AgendaSection() {
  const [selectedDay, setSelectedDay] = useState("2025-10-14")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // ✅ Auto-cambio cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  // ✅ Manejo de tecla ESC y scroll para el modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false)
    }

    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const downloadAgenda = () => {
    const link = document.createElement('a');
    link.href = '/docs/programa-congreso-vciCTMS-2025.pdf';
    link.download = 'programa-congreso-vciCTMS-2025.pdf';
    link.click();
  }

  // ✅ Fondo dinámico por día
  const getBackgroundByDay = (day: string) => {
    switch (day) {
      case "2025-10-14":
        return "from-red-50/80 via-white/90 to-red-100/80";
      case "2025-10-15":
        return "from-green-50/80 via-white/90 to-green-100/80";
      case "2025-10-16":
        return "from-red-50/80 via-white/90 to-red-100/80";
      default:
        return "from-blue-50/80 via-white/90 to-slate-100/80";
    }
  };

  // ✅ Funciones para navegar en el carrusel
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section id="programa" className="section-padding relative">
      {/* ✅ Fondo dinámico */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getBackgroundByDay(selectedDay)}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/40 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Programa del Congreso</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty mb-8">
              Tres días intensivos de conferencias magistrales, workshops especializados y feria de emprendimientos
            </p>
            <Button
              onClick={downloadAgenda}
              className="gap-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3"
            >
              <Download className="h-4 w-4" />
              Descargar Programa Completo (PDF)
            </Button>
          </div>
        </div>

        {/* Contador de eventos */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 font-medium">
            {agendaData[selectedDay as keyof typeof agendaData].length} eventos programados para este día
          </p>
        </div>

        {/* ✅ Tabs mejorados con colores rojo, verde y blanco */}
        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-2 mb-8">
            <TabsList className="grid w-full grid-cols-3 bg-white border-b border-gray-200">
              <TabsTrigger
                value="2025-10-14"
                className="flex flex-col gap-1 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-t-lg transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800">Martes</span>
                <span className="text-xs text-gray-600">14 Oct</span>
              </TabsTrigger>
              <TabsTrigger
                value="2025-10-15"
                className="flex flex-col gap-1 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-t-lg transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800">Miércoles</span>
                <span className="text-xs text-gray-600">15 Oct</span>
              </TabsTrigger>
              <TabsTrigger
                value="2025-10-16"
                className="flex flex-col gap-1 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-t-lg transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800">Jueves</span>
                <span className="text-xs text-gray-600">16 Oct</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(agendaData).map(([date, items]) => (
            <TabsContent key={date} value={date} className="space-y-4">
              {/* ✅ Carrusel de imágenes — CON AUTOPLAY Y MODAL */}
              <div className="mb-8 relative">
                {/* Contenedora clickeable para abrir modal */}
                <div
                  className="relative overflow-hidden rounded-2xl shadow-xl border border-white/30 bg-white flex items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  onClick={openModal}
                >
                  <img
                    src={carouselImages[currentImageIndex].src}
                    alt={carouselImages[currentImageIndex].alt}
                    className="max-h-80 md:max-h-[420px] w-full object-contain transition-transform duration-500 ease-in-out p-4"
                  />
                </div>

                {/* Flechas de navegación */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                >
                  →
                </button>

                {/* Indicadores */}
                <div className="flex justify-center mt-4 space-x-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(index)
                      }}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white/90 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-500 rounded-xl hover:-translate-y-1 hover:scale-[1.01] group"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Time and Type */}
                        <div className="flex-shrink-0 md:w-48">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="font-mono text-sm font-bold text-gray-800">{item.time}</span>
                          </div>
                          <Badge className={`${getTypeColor(item.type)} gap-1 rounded-lg py-1 px-3 text-sm font-medium`}>
                            {getTypeIcon(item.type)}
                            {getTypeLabel(item.type)}
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                            {item.title}
                          </h3>

                          {item.speaker && (
                            <div className="mb-2">
                              <p className="font-medium text-green-700 flex items-center gap-1">
                                👤 {item.speaker}
                                {item.institution && <span className="text-sm text-gray-500">({item.institution})</span>}
                              </p>
                            </div>
                          )}

                          {item.description && (
                            <p className="text-gray-600 mb-3 leading-relaxed text-sm">{item.description}</p>
                          )}

                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                            {item.location && (
                              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                <MapPin className="h-3 w-3" />
                                <span>{item.location}</span>
                              </div>
                            )}

                            <div className="flex items-center gap-1 px-2 py-1 rounded-full"
                              className={
                                item.modality === "Virtual"
                                  ? "bg-blue-50 text-blue-700"
                                  : item.modality === "Híbrido"
                                  ? "bg-purple-50 text-purple-700"
                                  : "bg-green-50 text-green-700"
                              }
                            >
                              {item.modality === "Virtual" ? (
                                <Globe className="h-3 w-3" />
                              ) : item.modality === "Híbrido" ? (
                                <Globe className="h-3 w-3 text-purple-600" />
                              ) : (
                                <MapPin className="h-3 w-3 text-green-600" />
                              )}
                              <span className="font-medium">{item.modality}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur-md shadow-xl border border-white/40 rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-600" />
                Información de Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">📍 Sede Principal</p>
                  <p className="text-sm text-gray-600">Salón Azul – Consejo Provincial</p>
                  <p className="text-sm text-gray-600">Morona Santiago, Ecuador</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">📚 Workshops</p>
                  <p className="text-sm text-gray-600">
                    Segundo Piso de la Biblioteca de la Sede Morona Santiago
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">🎪 Feria de Emprendimientos</p>
                  <p className="text-sm text-gray-600">Coliseo 29 de Mayo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-md shadow-xl border border-white/40 rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Información Adicional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">🌐 Modalidad Híbrida</p>
                  <p className="text-sm text-gray-600">
                    Participación presencial y virtual disponible para las sesiones principales
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">🔧 Workshops Especializados</p>
                  <p className="text-sm text-gray-600">
                    Talleres prácticos en seguridad informática, caudal ambiental y área ambiental
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">🎉 Noche Cultural</p>
                  <p className="text-sm text-gray-600">
                    Evento cultural de cierre para celebrar el final del congreso
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ✅ Modal de Imagen Completa */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
              aria-label="Cerrar imagen"
            >
              ✕
            </button>

            {/* Imagen en grande */}
            <div className="h-full flex items-center justify-center p-6">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Indicadores en el modal */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}