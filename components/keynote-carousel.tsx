"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Globe, 
  Calendar, 
  Clock, 
  Linkedin, 
  Twitter, 
  Globe2,
  Play,
  Pause
} from "lucide-react"
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
  ranking?: number
}

// ============================================================================
// CONSTANTS & CONFIG
// ============================================================================
const AUTOPLAY_INTERVAL_MS = 8000
const SWIPE_THRESHOLD_PX = 30
const CAROUSEL_ID = "keynote-carousel"

const BRAND = {
  colors: {
    primary: "#006400",
    primaryDark: "#004d00",
    primaryLight: "#008000",
    gold: "#f0c000",
    goldDark: "#d4a800",
    green: "#03c003",
    red: "#f00f0f",
    amber: "#d4d717",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    }
  },
  shadows: {
    soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
    medium: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)",
    strong: "0 25px 50px -12px rgba(0, 100, 0, 0.15)",
    glow: "0 0 40px rgba(0, 100, 0, 0.25)",
  }
} as const

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
    image: "/FEDERICO.png",
    ranking: 1,
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
    image: "/CRISTHIAN.jpg",
    ranking: 2,
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
    image: "/ICIAR.png",
    ranking: 3,
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
    image: "/XAVIER.png",
    ranking: 4,
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
    image: "/EDWARD.png",
    ranking: 5,
  },
]

// ============================================================================
// SUB-COMPONENT: SpeakerCard (ESTILO PREMIUM)
// ============================================================================
interface SpeakerCardProps {
  speaker: KeynoteSpeaker
  isActive: boolean
}

const SpeakerCard = ({ speaker, isActive }: SpeakerCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const [showToggle, setShowToggle] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const SocialIcon = useCallback((platform: string) => {
    switch (platform) {
      case "linkedin": return <Linkedin className="h-4 w-4" />
      case "twitter": return <Twitter className="h-4 w-4" />
      case "website": return <Globe2 className="h-4 w-4" />
      default: return null
    }
  }, [])

  useEffect(() => {
    if (descriptionRef.current) {
      setShowToggle(descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight * 4)
    }
  }, [speaker.description])

  return (
    <Card 
      className="overflow-hidden border-0 shadow-2xl rounded-3xl bg-white transform transition-all duration-500 ease-out hover:shadow-[0_30px_60px_-15px_rgba(0,100,0,0.2)]"
      role="group"
      aria-roledescription="slide"
      aria-hidden={!isActive}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:grid md:grid-cols-2">
          
          {/* IMAGE SECTION - Con efectos premium */}
          <div className="relative w-full flex items-center justify-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#f8fafc] via-[#f0f9f0] to-[#e8f5e9]">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#006400]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#f0c000]/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Ranking Badge - Estilo premium */}
              {speaker.ranking && (
                <div className="absolute -top-3 -left-3 z-20 animate-fade-in">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#006400] rounded-full blur-sm opacity-50" />
                    <Badge className="relative bg-[#006400] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-white/20">
                      🏆 Top #{speaker.ranking}
                    </Badge>
                  </div>
                </div>
              )}
              
              {/* Image Container con frame effect */}
              <div className="relative group">
                {/* Loading skeleton */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 rounded-2xl animate-pulse" />
                )}
                
                <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
                  <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={speaker.image}
                      alt={`Retrato de ${speaker.name}, ${speaker.title}`}
                      className={`w-full h-auto max-h-[320px] sm:max-h-[420px] object-contain transition-all duration-500 group-hover:scale-[1.02] ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => setImageLoaded(true)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg"
                        target.alt = "Imagen no disponible"
                        setImageLoaded(true)
                      }}
                    />
                  </div>
                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 group-hover:ring-[#006400]/30 transition-colors" />
                </div>
              </div>
              
              {/* Modality Badge - Estilo elegante */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md backdrop-blur-sm border transition-all duration-300 ${
                  speaker.modality === "Presencial"
                    ? "bg-red-500/90 text-white border-red-400/50 hover:bg-red-500"
                    : "bg-blue-500/90 text-white border-blue-400/50 hover:bg-blue-500"
                }`}>
                  {speaker.modality === "Presencial" ? (
                    <MapPin className="h-3.5 w-3.5" />
                  ) : (
                    <Globe className="h-3.5 w-3.5" />
                  )}
                  <span className="whitespace-nowrap">{speaker.modality}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION - Tipografía y espaciado refinados */}
          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <div className="space-y-5">
              
              {/* Header con jerarquía visual */}
              <header className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight break-words">
                    {speaker.name}
                  </h3>
                </div>
                
                <p className="text-base sm:text-lg text-[#006400] font-semibold break-words">
                  {speaker.title}
                </p>
                
                <div className="flex flex-wrap items-center gap-2.5 text-sm text-gray-600">
                  <span className="break-words hyphens-auto font-medium">{speaker.institution}</span>
                  <span aria-hidden="true" className="text-gray-300 flex-shrink-0">•</span>
                  
                  <div className="flex items-center gap-2 flex-shrink-0" aria-label={`País: ${speaker.country}`}>
                    {Array.isArray(speaker.countryCode) ? (
                      speaker.countryCode.map((code, idx) => (
                        <CountryFlag
                          key={code}
                          countryCode={code}
                          svg
                          style={{ 
                            width: '1.3em', 
                            height: '1.3em', 
                            borderRadius: '4px',
                            flexShrink: 0,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            marginLeft: idx > 0 ? '-4px' : '0'
                          }}
                          title={code}
                        />
                      ))
                    ) : (
                      <CountryFlag
                        countryCode={speaker.countryCode}
                        svg
                        style={{ 
                          width: '1.4em', 
                          height: '1.4em', 
                          borderRadius: '4px',
                          flexShrink: 0,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                        title={speaker.countryCode}
                      />
                    )}
                    <span className="hidden sm:inline break-words font-medium">{speaker.country}</span>
                  </div>
                </div>
              </header>

              {/* Conference Title - Card destacada */}
              <div className="relative overflow-hidden bg-gradient-to-r from-[#006400]/10 via-[#008000]/10 to-[#006400]/10 p-4 rounded-2xl border border-[#006400]/20 group hover:border-[#006400]/40 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#006400] to-[#008000]" />
                <div className="pl-3">
                  <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-bold uppercase tracking-wider text-[#006400] bg-[#006400]/10 rounded-full">
                    Conferencia
                  </span>
                  <h4 className="font-semibold text-gray-800 text-base sm:text-lg leading-relaxed break-words hyphens-auto">
                    {speaker.conferenceTitle}
                  </h4>
                </div>
              </div>

              {/* Date & Time - Estilo limpio */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-3 border-y border-gray-100">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#006400]/10 flex items-center justify-center">
                    <Calendar className="h-4.5 w-4.5 text-[#006400]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <dt className="sr-only">Fecha</dt>
                    <dd className="text-sm font-medium text-gray-900 break-words">{speaker.date}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#006400]/10 flex items-center justify-center">
                    <Clock className="h-4.5 w-4.5 text-[#006400]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <dt className="sr-only">Hora</dt>
                    <dd className="text-sm font-medium text-gray-900 break-words">{speaker.time}</dd>
                  </div>
                </div>
              </div>

              {/* Description con toggle elegante */}
              <div className="relative">
                <p 
                  ref={descriptionRef}
                  className={`text-gray-600 text-base leading-relaxed break-words hyphens-auto transition-all duration-300 ${
                    !isExpanded && 'line-clamp-4 sm:line-clamp-none'
                  }`}
                >
                  {speaker.description}
                </p>
                {showToggle && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-3 inline-flex items-center gap-1.5 text-[#006400] text-sm font-semibold hover:text-[#004d00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#006400]/50 rounded-lg px-2 py-1 -ml-2"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronLeft className="h-4 w-4 rotate-90" />
                        Ver menos
                      </>
                    ) : (
                      <>
                        Ver más
                        <ChevronRight className="h-4 w-4 rotate-90" />
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Social Links - Botones estilizados */}
              {speaker.socialLinks && Object.keys(speaker.socialLinks).length > 0 && (
                <nav aria-label={`Enlaces sociales de ${speaker.name}`} className="pt-2">
                  <div className="flex flex-wrap gap-2.5">
                    {Object.entries(speaker.socialLinks).map(([platform, url]) => url && (
                      <Button
                        key={platform}
                        variant="outline"
                        size="sm"
                        asChild
                        className="group relative overflow-hidden bg-white text-gray-700 border-gray-200 hover:border-[#006400] hover:text-[#006400] hover:bg-[#006400]/5 text-sm font-medium gap-2 transition-all duration-200 shadow-sm hover:shadow-md"
                        aria-label={`Visitar ${platform} de ${speaker.name}`}
                      >
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <span className="transition-transform group-hover:scale-110">
                            {SocialIcon(platform)}
                          </span>
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
// MAIN COMPONENT - Con controles mejorados
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

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(((index % totalSlides) + totalSlides) % totalSlides)
    setProgress(0)
  }, [totalSlides])

  const nextSlide = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide])
  const prevSlide = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide])

  // Autoplay con progress
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
      return
    }

    setProgress(0)
    const startTime = Date.now()
    
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / AUTOPLAY_INTERVAL_MS) * 100, 100)
      setProgress(newProgress)
      
      if (newProgress >= 100) nextSlide()
    }, 50)

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
    }
  }, [currentIndex, isPaused, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return
      
      switch (e.key) {
        case "ArrowLeft": e.preventDefault(); prevSlide(); break
        case "ArrowRight": e.preventDefault(); nextSlide(); break
        case "Home": e.preventDefault(); goToSlide(0); break
        case "End": e.preventDefault(); goToSlide(totalSlides - 1); break
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [prevSlide, nextSlide, goToSlide, totalSlides])

  // Touch handlers
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

  return (
    <section 
      id="conferencias" 
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#fafafa] to-[#f5f5f5]"
      aria-labelledby="conferencias-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER - Con decoración */}
        <header className="text-center mb-12 sm:mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-24 h-1 bg-gradient-to-r from-transparent via-[#006400] to-transparent rounded-full opacity-30" />
          
          <h2 
            id="conferencias-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#006400] via-[#008000] to-[#006400] bg-clip-text text-transparent">
              Conferencias Magistrales
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Los 5 exponentes de mayor impacto académico y profesional del{" "}
            <span className="font-semibold text-[#006400]">VICICTMS 2026</span>
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
          {/* Progress Bar - Estilo refinado */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-200/60 rounded-full overflow-hidden z-30 backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-[#006400] via-[#008000] to-[#006400] transition-[width] ease-linear shadow-[0_0_10px_rgba(0,100,0,0.3)]"
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>

          {/* Speaker Card */}
          <div className="pt-3" aria-live="polite" aria-atomic="true">
            <SpeakerCard speaker={currentSpeaker} isActive={true} />
          </div>

          {/* Navigation Buttons - Floating style */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-[#006400] hover:bg-[#006400]/10 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-[#006400] focus:ring-offset-2"
            onClick={prevSlide}
            aria-label={`Conferencia anterior: ${keynoteSpeakers[(currentIndex - 1 + totalSlides) % totalSlides].name}`}
            aria-controls={CAROUSEL_ID}
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-[#006400] hover:bg-[#006400]/10 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-[#006400] focus:ring-offset-2"
            onClick={nextSlide}
            aria-label={`Siguiente conferencia: ${keynoteSpeakers[(currentIndex + 1) % totalSlides].name}`}
            aria-controls={CAROUSEL_ID}
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </Button>

          {/* Controls Bar - Pause/Play + Indicators */}
          <div className="flex items-center justify-center gap-6 mt-8 sm:mt-10">
            {/* Pause/Play Button */}
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full text-gray-500 hover:text-[#006400] hover:bg-[#006400]/10 transition-colors"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Reproducir carrusel" : "Pausar carrusel"}
            >
              {isPaused ? (
                <Play className="h-5 w-5 fill-current" />
              ) : (
                <Pause className="h-5 w-5 fill-current" />
              )}
            </Button>

            {/* Indicators - Estilo premium */}
            <div 
              className="flex justify-center gap-2.5"
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
                  className={`relative group w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#006400] focus:ring-offset-2 ${
                    index === currentIndex 
                      ? "bg-[#006400] scale-125 shadow-md" 
                      : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir a: ${speaker.name} - ${speaker.conferenceTitle}`}
                >
                  {speaker.ranking && index === currentIndex && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#006400] whitespace-nowrap bg-white px-2 py-0.5 rounded-full shadow-md border border-[#006400]/20 animate-fade-in">
                      #{speaker.ranking}
                    </span>
                  )}
                  {/* Hover tooltip */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {speaker.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Counter & Status */}
          <div className="text-center mt-5" aria-live="polite">
            <p className="text-sm text-gray-500">
              Exponente{" "}
              <span className="font-bold text-[#006400]" aria-current="true">
                #{currentSpeaker.ranking || currentIndex + 1}
              </span>{" "}
              de {totalSlides}
              {isPaused && (
                <span className="inline-flex items-center gap-1 ml-2 text-[#006400] text-xs font-medium bg-[#006400]/10 px-2 py-0.5 rounded-full">
                  <Pause className="h-3 w-3" />
                  Pausado
                </span>
              )}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}