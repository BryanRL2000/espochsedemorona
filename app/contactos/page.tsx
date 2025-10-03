import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ContactosPage() {
  return (
    <main className="min-h-screen relative">
      {/* FONDO DE IMAGEN LOCAL */}
      <div className="absolute inset-0">
        <Image
          src="/ciencia.jpg"
          alt="Fondo Institucional ESPOCH"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <section>
            <div className="max-w-6xl mx-auto">
              {/* Título Principal */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  Contactos e Información
                </h1>
                <p className="text-lg text-gray-200 drop-shadow">
                  Información sobre nuestra sede y recursos adicionales
                </p>
              </div>

              {/* Tarjeta Principal con Imagen y Datos de la Sede */}
              <div className="mb-12">
                <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-[#c00000] text-center">
                      ESPOCH Sede Morona Santiago
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <img
                          src="/espoch-macas.jpg"
                          alt="ESPOCH Sede Morona Santiago - Campus Macas"
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div className="space-y-4">
                        
                        <p className="text-gray-700 leading-relaxed">
                          Se encuentra ubicada en la ciudad de Macas, capital de la provincia de Morona Santiago. Nuestra sede ofrece un entorno único de aprendizaje con modernas instalaciones y tecnología de vanguardia.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <MapPin className="h-4 w-4 text-[#c00000]" />
                            <span>Macas, Morona Santiago, Ecuador</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Phone className="h-4 w-4 text-[#c00000]" />
                            <span>+593 (03) 2998-200</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Mail className="h-4 w-4 text-[#c00000]" />
                            <span>vcictms2025@espoch.edu.ec</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Grid: Información a la izquierda, Video a la derecha */}
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Columna Izquierda: Dos tarjetas en una columna vertical */}
                <div className="flex flex-col space-y-6">
                  {/* Tarjeta 1: Sobre la Sede */}
                  <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm flex flex-col h-full">
                    <CardHeader>
                      <CardTitle className="text-[#c00000] flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Sobre la Sede
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-700 mb-4">
                        La ESPOCH Sede Morona Santiago, ofrece un entorno de aprendizaje único y enriquecedor. Imparte carreras en áreas estratégicas como Tecnologías de la Información, Ingeniería en Minas, Contabilidad y Auditoría, Gestión Ambiental y Zootecnia.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#c00000] text-[#c00000] hover:border-[#006400] hover:text-[#006400] hover:bg-green-50 transition-colors duration-300"
                        asChild
                      >
                        <a
                          href="https://www.espoch.edu.ec/sms-2/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Más información
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Tarjeta 2: Recursos Adicionales */}
                  <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm flex flex-col h-full">
                    <CardHeader>
                      <CardTitle className="text-[#c00000]">Recursos Adicionales</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between border-[#c00000] text-[#c00000] hover:border-[#006400] hover:text-[#006400] hover:bg-green-50 transition-colors duration-300"
                        asChild
                      >
                        <a
                          href="https://chat.whatsapp.com/JxqjrlIA4etFjefs2Lhvlc"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Grupo de WhatsApp
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-between border-[#c00000] text-[#c00000] hover:border-[#006400] hover:text-[#006400] hover:bg-green-50 transition-colors duration-300"
                        asChild
                      >
                        <a
                          href="https://www.espoch.edu.ec/sms-2/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Sitio Web Oficial
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Columna Derecha: Video de YouTube */}
                <div className="flex flex-col">
                  <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#c00000] shadow-md h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-[#c00000] text-center">
                        🎥 Video de la ESPOCH - Sede Morona Santiago
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center p-4 flex-grow">
                      <div className="w-full max-w-[580px] h-full flex items-center justify-center">
                        <iframe
                          src="https://www.youtube.com/embed/lNye4q8wN6M?si=xD95Oo4uPfPYc2W2"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="w-full h-full aspect-video rounded-lg"
                          style={{ minHeight: '300px' }}
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}