import { Navigation } from "@/components/navigation"
import { Download, ExternalLink, BookOpen, FileText } from "lucide-react"
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
                  Publicación en Revista Indexada
                </h1>
                <p className="text-gray-200 text-sm md:text-base drop-shadow">
                  Los trabajos aceptados serán publicados en nuestra revista científica
                </p>
              </div>

              {/* Sección ERIH PLUS */}
              <div className="conference-card bg-white/95 backdrop-blur-sm border border-white/30 mb-8 p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Logo ERIH PLUS */}
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-full max-w-xs aspect-[2/1]">
                      <Image
                        src="/erih-plus-logo.png"
                        alt="ERIH PLUS - European Reference Index"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Información de la Revista */}
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#c00000] mb-3">
                      Revista VI CICTSMS
                    </h2>
                    <p className="text-gray-700 mb-3">
                      Los artículos científicos aprobados serán publicados en nuestra revista institucional, 
                      indexada en <strong>ERIH PLUS</strong> (European Reference Index for the Humanities and Social Sciences).
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        Indexación Europea
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        Revisión por Pares
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                        Acceso Abierto
                      </span>
                    </div>
                  </div>
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
                      href="https://docs.google.com/forms/d/1nnXSRjBYi_sJkxxJMIBRNQjL3hW44hCP5CcGuMBysUw/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Inscripción de Participantes</span>
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
                      href="https://www.esf.org/index.php?id=326"
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
                      Artículo indexado en ERIH PLUS con ISSN 2953-6367 y acceso abierto disponible
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
                    <li><strong>Contacto:</strong> revisinvestigo@gmail.com / +593 97 911 9620</li>
                    <li><strong>Indexación:</strong> ERIH PLUS (European Reference Index for the Humanities and Social Sciences)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}