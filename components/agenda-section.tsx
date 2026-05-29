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
  country?: string
  modality: "Presencial" | "Virtual" | "Híbrido"
  location?: string
  description?: string
}

const agendaData = {
  "2026-06-02": [
    {
      id: "1",
      time: "08:00 - 08:30",
      title: "Inauguración del VI Congreso Internacional de Ciencia y Tecnología Morona Santiago VICICTMS 2026",
      type: "opening" as const,
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Ceremonia de apertura del congreso",
    },
    {
      id: "2",
      time: "08:30 - 09:30",
      title: "Ultrasonografía Doppler colorida del cuerpo lúteo para la detección precoz de búfalas Murrah no gestantes a los 24 días después de la IATF",
      type: "keynote" as const,
      speaker: "Nelson René Ortiz Naveda",
      institution: "Universidad Federal Rural de Pernambuco (UFRPE)",
      country: "Brasil",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Médico Veterinario Zootecnista. Especialista en reproducción bovina y Máster en Reproducción animal. Estudiante de Doctorado en Reproducción animal.",
    },
    {
      id: "3",
      time: "09:30 - 10:30",
      title: "BEEF ON DAIRY. Una nueva tendencia mundial, una vieja tradición francesa",
      type: "keynote" as const,
      speaker: "Danien Bustamante H.",
      institution: "Universidad de La Salle",
      country: "Colombia",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Zootecnista. Pionero en la inseminación artificial moderna, cuyas investigaciones permitieron perfeccionar la conservación del semen.",
    },
    {
      id: "4",
      time: "11:00 - 12:00",
      title: "Juzgamiento en ganado de leche / Juzgamiento en ganado de carne",
      type: "keynote" as const,
      speaker: "Fabián Augusto Almeida López",
      institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH)",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Ingeniero Zootecnista. Máster en Reproducción Animal. Docente investigador de la ESPOCH en la Facultad de Ciencias Pecuarias.",
    },
    {
      id: "5",
      time: "12:00 - 13:00",
      title: "La Administración de Justicia en un Estado Constitucional de Derechos y Justicia",
      type: "keynote" as const,
      speaker: "Dr. Germán Marcelo Mancheno Salazar",
      institution: "Corte Superior de Justicia de Chimborazo / UNACH / UNIANDES",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Abogado y Msc. en Derecho Penal Procesal. Juez de la Unidad de lo Civil y Mercantil. Profesor Universitario.",
    },
    {
      id: "6",
      time: "14:30 - 15:30",
      title: "Los desafíos de la interpretación jurídica",
      type: "keynote" as const,
      speaker: "Federico José Arena",
      institution: "Barcelona Institute of Analytic Philosophy / CONICET",
      country: "Italia / Argentina",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Abogado. Postdoctorado Università Bocconi, Milán. Doctor Europeo en Filosofía del Derecho y Bioética Jurídica.",
    },
    {
      id: "7",
      time: "17:00 - 18:00",
      title: "Pluralismo jurídico como un aporte para enfrentar el cambio climático",
      type: "keynote" as const,
      speaker: "Oscar Mauricio Sánchez Nivicela",
      institution: "Universidad del Azuay / Fundación ENTSA",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Doctor en Jurisprudencia. Magister en Cambio Climático, Sustentabilidad y Desarrollo.",
    },
  ],
  "2026-06-03": [
    {
      id: "8",
      time: "08:00 - 09:00",
      title: "Potenciando la transformación de residuos orgánicos en energía: Uso de biocarbón y hierro para optimizar la digestión anaerobia con recirculación de CO₂",
      type: "keynote" as const,
      speaker: "Cristhian David Chicaiza Ortiz",
      institution: "Shanghai Jiao Tong University (SJTU)",
      country: "Ecuador / China",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "PhD en Ciencias e Ingeniería Ambiental. Máster en Environmental Engineering y en Cambio Climático.",
    },
    {
      id: "9",
      time: "09:00 - 10:00",
      title: "Procesos de remediación de contaminantes emergentes y biocombustibles",
      type: "keynote" as const,
      speaker: "María Salomé Álvarez Álvarez",
      institution: "Facultad de Química",
      country: "España",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "PhD en Chemical Engineering. Vicedecana de calidad de la facultad de química.",
    },
    {
      id: "10",
      time: "10:30 - 11:30",
      title: "Del páramo al río: el aluvión del 2022 en Quito como parte del ciclo hidrosocial de las quebradas",
      type: "keynote" as const,
      speaker: "Gabriela Antonieta Borja Pérez",
      institution: "Investigadora independiente",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Socióloga. MSc. en Gestión Integrada de Recursos Hídricos.",
    },
    {
      id: "11",
      time: "11:30 - 12:30",
      title: "Ciberdelincuencia en jóvenes: diagnóstico exploratorio, huella digital y riesgos desde un enfoque OSINT",
      type: "keynote" as const,
      speaker: "Ruth Genoveva Barba Vera",
      institution: "ESPOCH / PUCP",
      country: "Ecuador / Perú",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Doctora en Ingeniería. Magíster en Interconectividad de Redes. Experta en ciberseguridad con más de 15 años de experiencia.",
    },
    {
      id: "12",
      time: "14:00 - 15:00",
      title: "¿Cómo ven las máquinas el mundo real?",
      type: "keynote" as const,
      speaker: "Xavier Soria Poma",
      institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH)",
      country: "Ecuador / España",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Doctor en Informática. Doctor en Ciencias de la Computación por la Universidad Autónoma de Barcelona. Líder del grupo EspochAI.",
    },
    {
      id: "13",
      time: "15:00 - 16:00",
      title: "What Engineers Do Now - how AI is changing the software engineer's craft",
      type: "keynote" as const,
      speaker: "Edward Mays",
      institution: "Thoughtworks",
      country: "Estados Unidos",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Senior Technical Mentor. Principal Consultant at Thoughtworks. Writing software since 1997.",
    },
    {
      id: "14",
      time: "10:00 - 12:00",
      title: "Workshop: Huella Digital y OSINT: cómo la información pública puede convertirse en un riesgo",
      type: "workshop" as const,
      speaker: "Ing. Ruth Barba Vera Ph.D.",
      modality: "Presencial" as const,
      location: "Laboratorio de informática de la Sede Morona Santiago",
      description: "Taller especializado en huella digital y OSINT",
    },
  ],
  "2026-06-04": [
    {
      id: "15",
      time: "08:00 - 09:00",
      title: "Cierre de Canteras de Materiales de la Construcción en Cuba, una solución a la Sostenibilidad Minera",
      type: "keynote" as const,
      speaker: "Julio Montero Matos",
      country: "Cuba",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Doctor en Ciencias Técnica en Minería. Máster en Minería.",
    },
    {
      id: "16",
      time: "09:00 - 10:00",
      title: "Flotación de minerales: fundamentos y aplicaciones industriales",
      type: "keynote" as const,
      speaker: "Eduardo Andrés Luna Méndez",
      institution: "Universidad del Azuay",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Magíster en Ingeniería de Recursos Minerales. Ingeniero en Minas. Docente a tiempo completo.",
    },
    {
      id: "17",
      time: "10:30 - 11:30",
      title: "Planificación minera a corto plazo",
      type: "keynote" as const,
      speaker: "Valeria Loor Cárdenas",
      institution: "Universidad de Chile",
      country: "Chile",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Magíster en Minería con distinción máxima. Ingeniera en Minas.",
    },
    {
      id: "18",
      time: "11:30 - 12:30",
      title: "El impacto de la inteligencia artificial en la Contabilidad y Auditoría en la Actualidad",
      type: "keynote" as const,
      speaker: "Francisco Benito Castro Chavez",
      institution: "Cooperativa de Ahorro y Crédito Las Naves / AUDICAST",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Lcdo. Contabilidad y Auditoría. Mgtr. Administración de Empresa MBA. Más de 20 años de experiencia.",
    },
    {
      id: "19",
      time: "14:00 - 15:00",
      title: "Auditoría digital, inteligencia artificial y cumplimiento: gestión de riesgos en entornos públicos y privados",
      type: "keynote" as const,
      speaker: "Iciar López-Vdriero Tejedor",
      institution: "ICEF Consultores / Universidad Carlos III de Madrid",
      country: "España",
      modality: "Virtual" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Licenciada en Derecho. Máster en Telecomunicaciones y Nuevas Tecnologías. Auditora Jefe ISO 27001.",
    },
    {
      id: "20",
      time: "15:00 - 16:00",
      title: "Tiempos de Sostenibilidad empresarial: Gestión Compliance y Antisoborno",
      type: "keynote" as const,
      speaker: "María del Carmen Jácome Yambay",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Maestría en Gestión y Automatización de Procesos. Maestría en Big Data y Business Intelligence.",
    },
    {
      id: "21",
      time: "16:00 - 17:00",
      title: "Afectación del cambio climático con la gestión de riesgo",
      type: "keynote" as const,
      speaker: "Carolina Alejandra Lozano Haro",
      institution: "Secretaría Nacional de Gestión de Riesgos (SNGR)",
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Economista y magíster en Administración de Negocios. Secretaria Nacional de Gestión de Riesgos.",
    },
    {
      id: "22",
      time: "10:00 - 12:00",
      title: "Workshop: Características lineales en el Juzgamiento bovino de leche y carne",
      type: "workshop" as const,
      speaker: "Ing. Fabian Almeida López",
      modality: "Presencial" as const,
      location: "Laboratorio de informática de la Sede Morona Santiago",
      description: "Taller especializado en juzgamiento ganadero",
    },
    {
      id: "23",
      time: "17:00 - 17:30",
      title: "Clausura VI Congreso Internacional Ciencia y Tecnología Morona Santiago",
      type: "closing" as const,
      modality: "Presencial" as const,
      location: "Salón Azul del GAD Provincial de Morona Santiago",
      description: "Ceremonia de clausura del congreso",
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

const carouselImages = [
  {
    src: "/espoch-macas.jpg",
    alt: "Campus ESPOCH Morona Santiago",
  },
  {
    src: "/INNOVA.jpg",
    alt: "Banner del Congreso",
  },
  {
    src: "/MARTES.png",
    alt: "Martes 02 de junio - Día 1 del Congreso",
  },
  {
    src: "/MIERCOLE.png",
    alt: "Miércoles 03 de junio - Día 2 del Congreso",
  },
  {
    src: "/JUEVES.png",
    alt: "Jueves 04 de junio - Día 3 del Congreso",
  },
  {
    src: "/VIERNES.png",
    alt: "Viernes 05 de junio - Día 4 del Congreso",
  },
  {
    src: "/final.png",
    alt: "Cierre del Congreso",
  },
]

export function AgendaSection() {
  const [selectedDay, setSelectedDay] = useState("2026-06-02")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

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
    link.href = '/docs/Agenda_VI_Congreso.pdf';
    link.download = 'Agenda_VI_Congreso.pdf';
    link.click();
  }

  const getBackgroundByDay = (day: string) => {
    switch (day) {
      case "2026-06-02":
        return "from-red-50/80 via-white/90 to-red-100/80";
      case "2026-06-03":
        return "from-green-50/80 via-white/90 to-green-100/80";
      case "2026-06-04":
        return "from-red-50/80 via-white/90 to-red-100/80";
      default:
        return "from-blue-50/80 via-white/90 to-slate-100/80";
    }
  };

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
      <div className={`absolute inset-0 bg-gradient-to-br ${getBackgroundByDay(selectedDay)}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/40 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Programa del Congreso</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty mb-8">
              VI Congreso Internacional de Ciencia y Tecnología Morona Santiago 2026<br />
              02 al 04 de junio de 2026
            </p>
            <Button
              onClick={downloadAgenda}
              className="gap-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3"
            >
              <Download className="h-4 w-4" />
              Descargar Agenda Completa (pdf)
            </Button>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 font-medium">
            {agendaData[selectedDay as keyof typeof agendaData].length} eventos programados para este día
          </p>
        </div>

        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-2 mb-8">
            <TabsList className="grid w-full grid-cols-3 bg-white border-b border-gray-200">
              <TabsTrigger
                value="2026-06-02"
                className="flex flex-col gap-1 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-t-lg transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800">Martes</span>
                <span className="text-xs text-gray-600">02 Jun</span>
              </TabsTrigger>
              <TabsTrigger
                value="2026-06-03"
                className="flex flex-col gap-1 data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-t-lg transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800">Miércoles</span>
                <span className="text-xs text-gray-600">03 Jun</span>
              </TabsTrigger>
              <TabsTrigger
                value="2026-06-04"
                className="flex flex-col gap-1 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-t-lg transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800">Jueves</span>
                <span className="text-xs text-gray-600">04 Jun</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(agendaData).map(([date, items]) => (
            <TabsContent key={date} value={date} className="space-y-4">
              <div className="mb-8 relative">
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

                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                            {item.title}
                          </h3>

                          {item.speaker && (
                            <div className="mb-2">
                              <p className="font-medium text-green-700 flex items-center gap-1 flex-wrap">
                                👤 {item.speaker}
                                {item.institution && <span className="text-sm text-gray-500">({item.institution})</span>}
                                {item.country && (
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                    {item.country}
                                  </span>
                                )}
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

                            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                              item.modality === "Virtual"
                                ? "bg-blue-50 text-blue-700"
                                : item.modality === "Híbrido"
                                ? "bg-purple-50 text-purple-700"
                                : "bg-green-50 text-green-700"
                            }`}
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
                  <p className="text-sm text-gray-600">Salón Azul del GAD Provincial de Morona Santiago</p>
                  <p className="text-sm text-gray-600">Morona Santiago, Ecuador</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">📚 Workshops</p>
                  <p className="text-sm text-gray-600">
                    Laboratorio de informática de la Sede Morona Santiago
                  </p>
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
                    Participación presencial y virtual disponible para las conferencias magistrales
                  </p>
                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-600 text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                      asChild
                    >
                      <a
                        href="https://cedia.zoom.us/j/83348825153"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        🖥️ Unirse a la sesión virtual
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">🔧 Workshops Especializados</p>
                  <p className="text-sm text-gray-600">
                    Talleres prácticos en OSINT, juzgamiento ganadero y más
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Clausura del Evento</p>
                  <p className="text-sm text-gray-600">
                    Jueves 04 de junio - 17:00 a 17:30
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
              aria-label="Cerrar imagen"
            >
              ✕
            </button>

            <div className="h-full flex items-center justify-center p-6">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

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