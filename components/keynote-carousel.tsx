"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MapPin, Globe, Calendar, Clock, Linkedin, Twitter, Globe2 } from "lucide-react"
import CountryFlag from "react-country-flag"

// ============================================================================
// TYPES
// ============================================================================
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
  ranking?: number // Para destacar top speakers
}

// ============================================================================
// CONSTANTS
// ============================================================================
const AUTOPLAY_INTERVAL_MS = 8000
const SWIPE_THRESHOLD_PX = 30
const CAROUSEL_ID = "keynote-carousel"

const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    id: 1,
    name: "Federico José Arena",
    title: "Abogado | Postdoctorado en Filosofía del Derecho",
    institution: "Barcelona Institute of Analytic Philosophy / CONICET / Universidad Blas Pascal",
    country: "Italia / Argentina",
    countryCode: ["IT", "AR"],
    conferenceTitle: "Los desafíos de la interpretación jurídica",
    date: "Martes 02 de junio de 2026",
    time: "14:30 – 15:30",
    modality: "Virtual",
    description:
      "Investigador y académico especializado en filosofía del derecho, teoría de la interpretación jurídica y razonamiento probatorio, con una destacada trayectoria internacional en universidades e institutos de Europa y América Latina. Actualmente es Investigador Postdoctoral Senior en el Barcelona Institute of Analytic Philosophy e Investigador Independiente del CONICET, dirige el Doctorado en Derecho de la Universidad Blas Pascal, Argentina.",
    image: "/placeholder-speaker-arena.png",
    ranking: 1,
    socialLinks: {
      linkedin: "https://linkedin.com/in/federicoarena",
      website: "https://biap.org/arena"
    }
  },
  {
    id: 2,
    name: "Cristhian David Chicaiza Ortiz",
    title: "PhD en Ciencias e Ingeniería Ambiental",
    institution: "Shanghai Jiao Tong University (SJTU)",
    country: "Ecuador / China",
    countryCode: ["EC", "CN"],
    conferenceTitle: "Potenciando la transformación de residuos orgánicos en energía: Uso de biocarbón y hierro para optimizar la digestión anaerobia con recirculación de CO₂",
    date: "Miércoles 03 de junio de 2026",
    time: "08:00 – 09:00",
    modality: "Virtual",
    description:
      "PhD en Ciencias e Ingeniería Ambiental por Shanghai Jiao Tong University, Máster en Environmental Engineering (TJU) y Máster en Cambio Climático, Sustentabilidad y Desarrollo (UASB-Ec). Su experiencia abarca la consultoría ambiental y el diseño de estrategias de descarbonización con enfoque en tecnologías limpias y economía circular.",
    image: "/placeholder-speaker-chicaiza.png",
    ranking: 2,
    socialLinks: {
      linkedin: "https://linkedin.com/in/cristhianchicaiza"
    }
  },
  {
    id: 3,
    name: "Iciar López-Vdriero Tejedor",
    title: "Licenciada en Derecho | Máster en Telecomunicaciones y Nuevas Tecnologías",
    institution: "ICEF Consultores / Universidad Carlos III de Madrid",
    country: "España",
    countryCode: "ES",
    conferenceTitle: "Auditoría digital, inteligencia artificial y cumplimiento: gestión de riesgos en entornos públicos y privados",
    date: "Jueves 04 de junio de 2026",
    time: "14:00 – 15:00",
    modality: "Virtual",
    description:
      "Abogada especializada en privacidad, ciberseguridad y transformación digital, con más de 20 años de experiencia asesorando a organizaciones nacionales e internacionales. Socia de ICEF Consultores, Auditora Jefe ISO 27001 y Delegada de Protección de Datos. Profesora en universidades de España y Latinoamérica.",
    image: "/placeholder-speaker-iciar.png",
    ranking: 3,
    socialLinks: {
      linkedin: "https://linkedin.com/in/iciarlopez",
      website: "https://icefconsultores.com"
    }
  },
  {
    id: 4,
    name: "Xavier Soria Poma",
    title: "Doctor en Informática | Magíster en Informática Educativa",
    institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH)",
    country: "Ecuador / España",
    countryCode: ["EC", "ES"],
    conferenceTitle: "¿Cómo ven las máquinas el mundo real?",
    date: "Miércoles 03 de junio de 2026",
    time: "14:00 – 15:00",
    modality: "Presencial",
    description:
      "Doctor en Ciencias de la Computación (2019) por la Universidad Autónoma de Barcelona, España, con énfasis en visión artificial y deep learning. Ha participado en diversos proyectos a nivel nacional e internacional, cuenta con más de 15 publicaciones científicas y lidera el grupo EspochAI en la ESPOCH.",
    image: "/placeholder-speaker-xavier.png",
    ranking: 4,
    socialLinks: {
      linkedin: "https://linkedin.com/in/xaviersoria",
      website: "https://espochai.ec"
    }
  },
  {
    id: 5,
    name: "Edward Mays",
    title: "Senior Technical Mentor",
    institution: "Thoughtworks",
    country: "Estados Unidos",
    countryCode: "US",
    conferenceTitle: "What Engineers Do Now - how AI is changing the software engineer's craft",
    date: "Miércoles 03 de junio de 2026",
    time: "15:00 – 16:00",
    modality: "Virtual",
    description:
      "Ed Mays has been writing software since 1997. Principal Consultant at Thoughtworks, working across new development, legacy modernization, and platform migration. In this talk he discusses what the AI wave is changing about the work, and what it isn't — bringing a pragmatic, industry-grounded perspective to the future of software engineering.",
    image: "/placeholder-speaker-edward.png",
    ranking: 5,
    socialLinks: {
      linkedin: "https://linkedin.com/in/ed-mays",
      website: "https://thoughtworks.com/profiles/ed-mays"
    }
  },
]

// ============================================================================
// SUB-COMPONENT: SpeakerCard (Extracted for readability & testing)
// ============================================================================
interface SpeakerCardProps {
  speaker: KeynoteSpeaker
  isActive: boolean
}

const SpeakerCard = ({ speaker, isActive }: SpeakerCardProps) => {
  const SocialIcon = useCallback((platform: string) => {
    switch (platform) {
      case "linkedin": return <Linkedin className="h-4 w-4" />
      case "twitter": return <Twitter className="h-4 w-4" />
      case "website": return <Globe2 className="h-4 w-4" />
      default: return null
    }
  }, [])

  return (
    <Card 
      className="overflow-hidden border-none shadow-none rounded-2xl bg-white"
      role="group"
      aria-roledescription="slide"
      aria-hidden={!isActive}
    >
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          {/* IMAGE SECTION */}
          <div className="relative w-full flex items-start justify-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="relative w-full max-w-[360px]">
              {/* Ranking Badge */}
              {speaker.ranking && (
                <div className="absolute -top-2 -left-2 z-20">
                  <Badge className="bg-[#006400] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Top #{speaker.ranking}
                  </Badge>
                </div>
              )}
              
              {/* Image with fallback */}
              <img
                src={speaker.image}
                alt={`Retrato de ${speaker.name}, ${speaker.title}`}
                className="w-full h-auto max-h-[400px] object-contain rounded-lg transition-opacity duration-300"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                  target.alt = "Imagen no disponible"
                }}
              />
              
              {/* Modality Badge */}
              <div className="absolute top-3 right-3 z-10">
                <Badge
                  variant="secondary"
                  className={`px-2.5 py-1 text-xs font-medium rounded-full shadow-sm ${
                    speaker.modality === "Presencial"
                      ? "bg-red-100 text-red-800 border border-red-200"
                      : "bg-blue-100 text-blue-800 border border-blue-200"
                  }`}
                >
                  {speaker.modality === "Presencial" ? (
                    <MapPin className="h-3 w-3 mr-1 inline" />
                  ) : (
                    <Globe className="h-3 w-3 mr-1 inline" />
                  )}
                  {speaker.modality}
                </Badge>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="p-6 md:p-8 flex flex-col justify-start">
            <div className="space-y-5">
              
              {/* Header: Name, Title, Institution */}
              <header className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
                  {speaker.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-medium">{speaker.title}</p>
                
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <span className="truncate max-w-[200px]">{speaker.institution}</span>
                  <span aria-hidden="true">•</span>
                  
                  {/* Country Flags */}
                  <div className="flex items-center gap-1" aria-label={`País: ${speaker.country}`}>
                    {Array.isArray(speaker.countryCode) ? (
                      speaker.countryCode.map((code) => (
                        <CountryFlag
                          key={code}
                          countryCode={code}
                          svg
                          style={{ width: '1.1em', height: '1.1em', borderRadius: '2px' }}
                          title={code}
                        />
                      ))
                    ) : (
                      <CountryFlag
                        countryCode={speaker.countryCode}
                        svg
                        style={{ width: '1.2em', height: '1.2em', borderRadius: '2px' }}
                        title={speaker.countryCode}
                      />
                    )}
                    <span className="hidden sm:inline">{speaker.country}</span>
                  </div>
                </div>
              </header>

              {/* Conference Title */}
              <div className="bg-green-50 p-3 rounded-lg border border-green-200" role="article">
                <h4 className="font-medium text-green-800 text-sm sm:text-base leading-tight">
                  {speaker.conferenceTitle}
                </h4>
              </div>

              {/* Date & Time */}
              <dl className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  <dt className="sr-only">Fecha</dt>
                  <dd>{speaker.date}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  <dt className="sr-only">Hora</dt>
                  <dd>{speaker.time}</dd>
                </div>
              </dl>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {speaker.description}
              </p>

              {/* Social Links */}
              {speaker.socialLinks && Object.keys(speaker.socialLinks).length > 0 && (
                <nav aria-label="Enlaces sociales de {speaker.name}" className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(speaker.socialLinks).map(([platform, url]) => url && (
                      <Button
                        key={platform}
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-gray-600 hover:text-[#006400] hover:border-[#006400] text-xs gap-1.5 transition-colors"
                        aria-label={`Visitar ${platform} de ${speaker.name}`}
                      >
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          {SocialIcon(platform)}
                          <span className="capitalize">{platform}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </nav>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function KeynoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const currentSpeaker = useMemo(() => keynoteSpeakers[currentIndex], [currentIndex])
  const totalSlides = keynoteSpeakers.length

  // ============================================================================
  // NAVIGATION LOGIC (Memoized)
  // ============================================================================
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(((index % totalSlides) + totalSlides) % totalSlides)
    setProgress(0)
  }, [totalSlides])

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  // ============================================================================
  // AUTOPLAY WITH PROGRESS INDICATOR
  // ============================================================================
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
      return
    }

    // Reset progress
    setProgress(0)
    
    // Progress bar animation
    const startTime = Date.now()
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / AUTOPLAY_INTERVAL_MS) * 100, 100)
      setProgress(newProgress)
      
      if (newProgress >= 100) {
        nextSlide()
      }
    }, 50)

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
    }
  }, [currentIndex, isPaused, nextSlide])

  // ============================================================================
  // KEYBOARD NAVIGATION (Accessibility)
  // ============================================================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return
      
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault()
          prevSlide()
          break
        case "ArrowRight":
          e.preventDefault()
          nextSlide()
          break
        case "Home":
          e.preventDefault()
          goToSlide(0)
          break
        case "End":
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [prevSlide, nextSlide, goToSlide, totalSlides])

  // ============================================================================
  // TOUCH/SWIPE HANDLERS
  // ============================================================================
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
    setIsPaused(true)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX
    setIsPaused(false)
    
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > SWIPE_THRESHOLD_PX) {
      diff > 0 ? nextSlide() : prevSlide()
    }
  }, [nextSlide, prevSlide])

  // ============================================================================
  // RENDER
  // ============================================================================
  return (
    <section 
      id="conferencias" 
      className="py-16 bg-white"
      aria-labelledby="conferencias-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <header className="text-center mb-12">
          <h2 
            id="conferencias-heading" 
            className="text-3xl sm:text-4xl font-light text-gray-800 mb-4 tracking-tight"
          >
            Conferencias Magistrales Destacadas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Los 5 exponentes de mayor impacto académico y profesional del VICICTMS 2026.
          </p>
        </header>

        {/* CAROUSEL CONTAINER */}
        <div
          ref={carouselRef}
          id={CAROUSEL_ID}
          className="relative"
          role="region"
          aria-roledescription="carrusel de conferencias"
          aria-label="Conferencias magistrales destacadas"
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ userSelect: "none" }}
        >
          
          {/* PROGRESS BAR (Top indicator for autoplay) */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-2xl overflow-hidden z-30">
            <div 
              className="h-full bg-[#006400] transition-[width] ease-linear"
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>

          {/* SPEAKER CARD */}
          <div 
            className="pt-1" 
            aria-live="polite"
            aria-atomic="true"
          >
            <SpeakerCard 
              speaker={currentSpeaker} 
              isActive={true} 
            />
          </div>

          {/* NAVIGATION BUTTONS */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 text-gray-600 hover:text-[#006400] hover:bg-green-50 rounded-full transition-all duration-200 focus:ring-2 focus:ring-[#006400] focus:ring-offset-2"
            onClick={prevSlide}
            aria-label={`Conferencia anterior: ${keynoteSpeakers[(currentIndex - 1 + totalSlides) % totalSlides].name}`}
            aria-controls={CAROUSEL_ID}
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 text-gray-600 hover:text-[#006400] hover:bg-green-50 rounded-full transition-all duration-200 focus:ring-2 focus:ring-[#006400] focus:ring-offset-2"
            onClick={nextSlide}
            aria-label={`Siguiente conferencia: ${keynoteSpeakers[(currentIndex + 1) % totalSlides].name}`}
            aria-controls={CAROUSEL_ID}
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </Button>

          {/* INDICATORS */}
          <div 
            className="flex justify-center gap-2 mt-8"
            role="tablist"
            aria-label="Seleccionar conferencia"
          >
            {keynoteSpeakers.map((speaker, index) => (
              <button
                key={speaker.id}
                role="tab"
                aria-selected={index === currentIndex}
                aria-controls={`slide-${speaker.id}`}
                id={`tab-${speaker.id}`}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#006400] focus:ring-offset-2 ${
                  index === currentIndex 
                    ? "bg-[#006400] scale-125 shadow-md" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a: ${speaker.name} - ${speaker.conferenceTitle}`}
              >
                {speaker.ranking && index === currentIndex && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#006400] whitespace-nowrap bg-white px-1.5 py-0.5 rounded shadow-sm border">
                    #{speaker.ranking}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* COUNTER & STATUS */}
          <div className="text-center mt-4" aria-live="polite">
            <p className="text-sm text-gray-500">
              Exponente{" "}
              <span className="font-bold text-[#006400]" aria-current="true">
                #{currentSpeaker.ranking || currentIndex + 1}
              </span>{" "}
              de {totalSlides} •{" "}
              <span className="sr-only">
                Diapositiva {currentIndex + 1} de {totalSlides}
              </span>
              {isPaused && (
                <span className="text-[#006400] font-medium ml-1">
                  (Pausado)
                </span>
              )}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}