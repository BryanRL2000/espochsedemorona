import { Navigation } from "@/components/navigation"
import { Download, ExternalLink, BookOpen, FileText, Calendar, Mail, Phone, DollarSign } from "lucide-react"
import Image from "next/image"

export default function NormativaPage() {
  return (
    <main className="min-h-screen relative">
      {/* FONDO DE IMAGEN LOCAL */}
      <div className="absolute inset-0">
        <Image
          src="/1.jpg"
          alt="Fondo Institucional"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16 pb-12">
          <section className="section-padding">
            <div className="max-w-6xl mx-auto">
              {/* Título Principal */}
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  VI Congreso Internacional de Ciencia y Tecnología Morona Santiago 2026
                </h1>
                <p className="text-gray-200 text-sm md:text-base drop-shadow">
                  Publicación en Revista Científica Multidisciplinaria InvestiGo - CICTMS 2026
                </p>
              </div>

              {/* Alerta de Convocatoria Abierta */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-8 shadow-lg border border-blue-400">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Calendar className="h-6 w-6" />
                  <h2 className="text-xl font-bold">¡Convocatoria Oficial Abierta!</h2>
                </div>
                <p className="text-center text-blue-100">
                  XIII Semana de la Ciencia, Tecnología, Emprendimiento e Innovación (SECTEI ESPOCH 2026)
                </p>
              </div>

              {/* Sección de Indexación */}
              <div className="conference-card bg-white/95 backdrop-blur-sm border border-white/30 mb-8 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logos de Indexación */}
                  <div className="w-full md:w-1/3 flex flex-col gap-4 justify-center">
                    <div className="relative w-full max-w-xs aspect-[2/1]">
                      <Image
                        src="/erih-plus-logo.png"
                        alt="ERIH PLUS - European Reference Index"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-full max-w-xs aspect-[2/1]">
                      <Image
                        src="/LATINDEX.png"
                        alt="LATINDEX 2.0 - Sistema Regional de Información en Línea"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Información de la Revista */}
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#c00000] mb-3">
                      Revista Científica Multidisciplinaria InvestiGo
                    </h2>
                    <p className="text-gray-700 mb-3">
                      Los artículos científicos aprobados serán publicados en nuestra revista institucional, 
                      indexada en <strong>ERIH PLUS</strong> (European Reference Index for the Humanities and Social Sciences) 
                      y <strong>LATINDEX 2.0</strong> (Sistema Regional de Información en Línea para Revistas Científicas de América Latina, el Caribe, España y Portugal).
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        Indexación Europea
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        Catálogo LATINDEX 2.0
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                        Revisión por Pares
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                        Acceso Abierto
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cronograma */}
              <div className="conference-card bg-white/95 backdrop-blur-sm border border-white/30 mb-8 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#c00000] mb-6 flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Cronograma de la Convocatoria
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 text-white rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900">Inicio de Convocatoria</h3>
                        <p className="text-blue-800 font-bold text-lg">10 de abril de 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-600">
                    <div className="flex items-start gap-3">
                      <div className="bg-red-600 text-white rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-900">Fecha Límite de Envío</h3>
                        <p className="text-red-800 font-bold text-lg">11 de mayo de 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border-l-4 border-yellow-600">
                    <div className="flex items-start gap-3">
                      <div className="bg-yellow-600 text-white rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-yellow-900">Notificación 1era Revisión</h3>
                        <p className="text-yellow-800 font-bold">18 de mayo de 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-600">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-600 text-white rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-orange-900">Período de Correcciones</h3>
                        <p className="text-orange-800 font-bold">18 - 24 de mayo de 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-600">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-600 text-white rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-900">Notificación de Aceptación</h3>
                        <p className="text-green-800 font-bold">28 - 31 de mayo de 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-600 text-white rounded-full p-2 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-900">Difusión de Resultados</h3>
                        <p className="text-purple-800 font-bold">02 al 04 de junio de 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Costo de Publicación */}
              <div className="conference-card bg-gradient-to-r from-green-50 to-emerald-50 backdrop-blur-sm border border-green-300 mb-8 p-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <DollarSign className="h-8 w-8 text-green-700" />
                  <h2 className="text-2xl font-bold text-green-800">Costo de Publicación</h2>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-700 mb-2">$160 USD</p>
                  <p className="text-green-800 text-lg">
                    Hasta <strong>4 autores</strong> con afiliación universitaria
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    Incluye publicación indexada, DOI y acceso abierto permanente
                  </p>
                </div>
              </div>

              {/* Documentos para Autores */}
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                {/* Documentos de la Revista */}
                <div className="conference-card bg-white/90 backdrop-blur-sm border border-white/20">
                  <h2 className="text-[#c00000] text-sm font-semibold mb-4 pl-1 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Documentos para Publicación
                  </h2>
                  <div className="space-y-3">
                    {/* Plantilla para Artículos Científicos */}
                    <a
                      href="/docs/Plantilla para el desarrollo de artículos científicos InvestiGo_.docx"
                      download
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Plantilla de Artículos Científicos</span>
                          <p className="text-xs text-gray-500 mt-0.5">Formato InvestiGo - Estructura y estilo</p>
                        </div>
                        <Download className="h-5 w-5 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    {/* Originalidad y Cesión de Derechos */}
                    <a
                      href="/docs/Originalidad y cesión de derechos de articulo (13).docx"
                      download
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Declaración de Originalidad</span>
                          <p className="text-xs text-gray-500 mt-0.5">Cesión de derechos de autor (Copyright)</p>
                        </div>
                        <FileText className="h-5 w-5 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    {/* Ficha de Información */}
                    <a
                      href="/docs/Ficha de Información para autores y evaluadores InvestiGo (14).docx"
                      download
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Ficha de Información</span>
                          <p className="text-xs text-gray-500 mt-0.5">Datos de autores y evaluadores</p>
                        </div>
                        <FileText className="h-5 w-5 text-red-600 hover:text-green-600" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Enlaces Importantes */}
                <div className="conference-card bg-white/90 backdrop-blur-sm border border-white/20">
                  <h2 className="text-[#c00000] text-sm font-semibold mb-4 pl-1 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Enlaces Importantes
                  </h2>
                  <div className="space-y-3">
                    <a
                      href="https://espochsedemorona.vercel.app/normativa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Normativa y Lineamientos</span>
                        <ExternalLink className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    <a
                      href="https://espoch.edu.ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Sitio Web ESPOCH</span>
                        <ExternalLink className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    <a
                      href="http://revistainvestigo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Revista InvestiGo</span>
                        <ExternalLink className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    <a
                      href="https://erihplus.hkdir.no/en/informationarticles/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>ERIH PLUS - Más Información</span>
                        <ExternalLink className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Información de Contacto */}
              <div className="conference-card bg-white/95 backdrop-blur-sm border border-white/30 mb-8 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#c00000] mb-6">Información de Contacto</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-[#c00000] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Envío de Artículos</h3>
                        <a href="mailto:investigo@istra.edu.ec" className="text-blue-600 hover:text-blue-800">
                          investigo@istra.edu.ec
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-[#c00000] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Más Información</h3>
                        <a href="mailto:carlav.haro@espoch.edu.ec" className="text-blue-600 hover:text-blue-800">
                          carlav.haro@espoch.edu.ec
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">¡Tu investigación merece ser publicada y reconocida!</h3>
                    <p className="text-sm text-blue-800">
                      Comparte tu conocimiento, fortalece la investigación científica y sé parte de un evento que impulsa el desarrollo académico y tecnológico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proceso de Publicación */}
              <div className="conference-card bg-white/95 backdrop-blur-sm border border-white/20 mb-8">
                <h2 className="text-[#c00000] text-sm font-semibold mb-4 pl-1">
                  Proceso de Publicación en la Revista
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">1</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Descarga y Preparación</h3>
                    <p className="text-sm text-gray-600">
                      Descarga la plantilla, ficha de información y declaración de originalidad. Prepara tu artículo según las normas
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">2</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Evaluación</h3>
                    <p className="text-sm text-gray-600">
                      Revisión por pares expertos y evaluación del comité editorial de la revista InvestiGo
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Publicación</h3>
                    <p className="text-sm text-gray-600">
                      Artículo indexado en ERIH PLUS y LATINDEX 2.0 con acceso abierto disponible
                    </p>
                  </div>
                </div>
              </div>

              {/* Normativas Generales */}
              <div className="conference-card bg-white/90 backdrop-blur-sm border border-white/20">
                <h2 className="text-[#c00000] text-sm font-semibold mb-4 pl-1">Requisitos para Publicación</h2>
                <div className="prose prose-sm max-w-none text-gray-800">
                  <h3 className="text-green-600 font-semibold flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Criterios de Aceptación
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Originalidad del trabajo y contribución al área de conocimiento</li>
                    <li>Cumplimiento estricto del formato establecido en la plantilla InvestiGo</li>
                    <li>Extensión: entre 600 y 1000 palabras en introducción, 500-800 en métodos</li>
                    <li>Inclusión de resumen (200-300 palabras) y abstract en inglés</li>
                    <li>Mínimo 20 referencias bibliográficas en formato Vancouver</li>
                    <li>Declaración de originalidad y cesión de derechos firmada por todos los autores</li>
                    <li>Ficha de información de autores completada</li>
                  </ul>

                  <h3 className="text-green-600 font-semibold mt-6 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Formato del Documento
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Fuente: Calibri (tamaños variables según sección)</li>
                    <li>Título: Calibri 18 negrita (máximo 25 palabras)</li>
                    <li>Interlineado: 1.0</li>
                    <li>Texto justificado</li>
                    <li>Incluir ORCID de todos los autores</li>
                    <li>4-6 palabras clave</li>
                  </ul>

                  <h3 className="text-green-600 font-semibold mt-6">Información de la Revista</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Nombre:</strong> Revista Científica Multidisciplinaria InvestiGo</li>
                    <li><strong>ISSN:</strong> 2953-6367</li>
                    <li><strong>Web:</strong> http://revistainvestigo.com</li>
                    <li><strong>Ubicación:</strong> Riobamba – Ecuador</li>
                    <li><strong>Contacto:</strong> investigo@istra.edu.ec / carlav.haro@espoch.edu.ec</li>
                    <li><strong>Indexación:</strong> ERIH PLUS (European Reference Index for the Humanities and Social Sciences) y LATINDEX 2.0</li>
                    <li><strong>Evento:</strong> VI Congreso Internacional de Ciencia y Tecnología Morona Santiago 2026 (CICTMS 2026)</li>
                  </ul>
                </div>
              </div>

              {/* Hashtags */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm drop-shadow">
                  #ESPOCH #CICTMS2026 #SECTEI2026 #InvestigaciónCientífica #Publicaciones #Innovación #MoronaSantiago
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}