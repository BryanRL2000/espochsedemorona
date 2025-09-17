import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink, Globe, Calendar } from "lucide-react"
import Image from "next/image"

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
                <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Contactos e Información</h1>
                <p className="text-lg text-gray-200 drop-shadow">Información de contacto y registro para el congreso</p>
              </div>

              {/* Tarjeta Principal con Imagen y Datos de la Sede */}
              <div className="mb-12">
                <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-red-600 text-center">ESPOCH Sede Morona Santiago</CardTitle>
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
                        <h3 className="text-xl font-semibold text-red-600">Nuestra Sede en Macas</h3>
                        <p className="text-gray-700 leading-relaxed">
                          La ESPOCH Sede Morona Santiago se encuentra ubicada en la ciudad de Macas, capital de la provincia de Morona Santiago. Nuestra sede ofrece un entorno único de aprendizaje con modernas instalaciones y tecnología de vanguardia.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <MapPin className="h-4 w-4 text-red-600" />
                            <span>Macas, Morona Santiago, Ecuador</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Phone className="h-4 w-4 text-red-600" />
                            <span>+593 (03) 2998-200</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Mail className="h-4 w-4 text-red-600" />
                            <span>vcictms2025@espoch.edu.ec</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Grid: Información a la izquierda, Inscripción destacada a la derecha */}
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Columna Izquierda: Información General */}
                <div className="space-y-6">
                  <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Sobre la Sede
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        La ESPOCH Sede Morona Santiago se ubica en Macas en un entorno de aprendizaje único y estimulante. Cuenta con carreras de Tecnologías de la Información, Minas, Contabilidad y Auditoría, Ambiental y Zootecnia.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500 text-red-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-colors duration-300"
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

                  <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600">Recursos Adicionales</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between border-red-500 text-red-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-colors duration-300"
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
                        className="w-full justify-between border-red-500 text-red-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-colors duration-300"
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

                {/* Columna Derecha: INSCRIPCIÓN DEL CONGRESO (destacada) */}
                <div className="space-y-6">
                  <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-500 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-red-600 text-center">🎓 Inscripción al Congreso</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center space-y-6 py-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                          <h3 className="text-xl font-bold text-red-600 mb-3">¡Únete al V Congreso Internacional!</h3>
                          <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                            Participa en este evento único de ciencia y tecnología. Conecta con expertos internacionales y forma parte de la comunidad científica más importante de la región amazónica.
                          </p>
                          <div className="space-y-3">
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                              <Calendar className="h-4 w-4 text-red-600" />
                              <span>14, 15 y 16 de Octubre 2025</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                              <MapPin className="h-4 w-4 text-red-600" />
                              <span>ESPOCH Sede Morona Santiago - Macas</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-800">¿Cómo participar?</h4>
                          <div className="grid gap-4 text-left">
                            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                              <div className="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                                1
                              </div>
                              <div>
                                <p className="font-medium text-sm">Regístrate en el congreso</p>
                                <p className="text-xs text-gray-500">Completa tu inscripción oficial</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                              <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                                2
                              </div>
                              <div>
                                <p className="font-medium text-sm">Únete a nuestro grupo de WhatsApp</p>
                                <p className="text-xs text-gray-500">Mantente informado y conéctate</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 pt-4">
                          <Button
                            className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white py-5 font-bold text-lg shadow-lg transition-all duration-300"
                            asChild
                          >
                            <a
                              href="https://docs.google.com/forms/d/1nnXSRjBYi_sJkxxJMIBRNQjL3hW44hCP5CcGuMBysUw/viewform"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              📝 REGISTRARSE AHORA
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>

                          <Button
                            variant="outline"
                            className="w-full border-red-500 text-red-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 py-3 bg-transparent font-medium transition-colors duration-300"
                            asChild
                          >
                            <a
                              href="https://chat.whatsapp.com/JxqjrlIA4etFjefs2Lhvlc"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <span className="text-red-600">📱</span>
                              Unirse al Grupo de WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Mapa de Ubicación */}
              <div className="mt-12">
                <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center gap-2 justify-center">
                      <MapPin className="h-6 w-6" />
                      Ubicación del Evento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700 text-center">
                        ESPOCH Sede Morona Santiago - Macas, Morona Santiago, Ecuador
                      </p>
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7586!2d-78.1167!3d-2.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTknMDAuMCJTIDc4wrAwNycwMC4wIlc!5e0!3m2!1ses!2sec!4v1640000000000!5m2!1ses!2sec"
                          width="100%"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Ubicación ESPOCH Sede Morona Santiago"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-red-500 text-red-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-colors duration-300"
                          asChild
                        >
                          <a
                            href="https://maps.app.goo.gl/qs56dV6xugWFaFWP9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <MapPin className="h-5 w-5" />
                            Ver en Google Maps
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}