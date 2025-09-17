import { Navigation } from "@/components/navigation"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function NormativaPage() {
  return (
    <main className="min-h-screen relative">
      {/* FONDO DE IMAGEN LOCAL */}
      <div className="absolute inset-0">
        <Image
          src="/1.jpg" // ← Asegúrate de que este archivo exista en public/
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
            <div className="max-w-5xl mx-auto">
              {/* Título Principal */}
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  Normativa del Congreso
                </h1>
                <p className="text-gray-200 text-sm md:text-base drop-shadow">
                  Documentos oficiales y enlaces importantes para participantes
                </p>
              </div>

              {/* Enlaces Importantes y Documentos Oficiales */}
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                {/* Enlaces Importantes */}
                <div className="conference-card bg-white/90 backdrop-blur-sm border border-white/20">
                  <h2 className="text-red-600 text-sm font-semibold mb-4 pl-1">Enlaces Importantes</h2>
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
                        <span>Registro de Participantes</span>
                        <ExternalLink className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    <button
                      disabled
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md opacity-70 cursor-not-allowed text-red-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Envío de Ponencias</span>
                        <ExternalLink className="h-4 w-4 text-red-600" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Documentos Oficiales */}
                <div className="conference-card bg-white/90 backdrop-blur-sm border border-white/20">
                  <h2 className="text-red-600 text-sm font-semibold mb-4 pl-1">Documentos Oficiales</h2>
                  <div className="space-y-3">
                    {/* Reglamento del Congreso */}
                    <a
                      href="/docs/Normativa-articulos.pdf"
                      download
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Normativa para Artículos Científicos</span>
                        <Download className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    {/* Formato de Ponencias */}
                    <a
                      href="/docs/Normativa-ponencias.pdf"
                      download
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Formato de Ponencias</span>
                        <Download className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>

                    {/* Certificados de Participación */}
                    <a
                      href="/docs/FORMATO ANEXO 1.docx"
                      download
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Formato Anexo 1</span>
                        <Download className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>
                    {/* Certificados de Participación */}
                    <a
                      href="/docs/FORMATO ANEXO 2.ppt"
                      download
                      className="block w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-red-50 transition-colors text-red-600 hover:text-green-600 active:text-green-600"
                    >
                      <div className="flex justify-between items-center">
                        <span>Formato Anexo 2</span>
                        <Download className="h-4 w-4 text-red-600 hover:text-green-600" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Normativas Generales */}
              <div className="conference-card bg-white/90 backdrop-blur-sm border border-white/20">
                <h2 className="text-red-600 text-sm font-semibold mb-4 pl-1">Normativas Generales</h2>
                <div className="prose prose-sm max-w-none text-gray-800">
                  <h3 className="text-green-600 font-semibold">Requisitos de Participación</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Registro previo obligatorio a través del formulario oficial</li>
                    <li>Presentación de documento de identidad válido</li>
                    <li>Cumplimiento de los horarios establecidos en la agenda</li>
                  </ul>

                  <h3 className="text-green-600 font-semibold mt-6">Normas para Ponentes</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Las ponencias deben seguir el formato académico establecido</li>
                    <li>Tiempo máximo de presentación: 20 minutos + 5 minutos de preguntas</li>
                    <li>Entrega de material de apoyo con 48 horas de anticipación</li>
                  </ul>

                  <h3 className="text-green-600 font-semibold mt-6">Certificaciones</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Certificado de participación: 40 horas académicas</li>
                    <li>Certificado de ponente: 50 horas académicas</li>
                    <li>Los certificados se entregarán al finalizar el evento</li>
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