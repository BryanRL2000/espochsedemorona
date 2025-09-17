"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"  
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ExternalLink,
  Send,
  CheckCircle,
  Users,
  Building,
  Globe,
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contacto e Información</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas sobre el congreso? Contáctanos o encuentra toda la información que necesitas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border border-gray-200 shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Building className="h-5 w-5" />
                  Información del Evento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Fechas del Congreso</p>
                    <p className="text-sm text-muted-foreground">14, 15 y 16 de Octubre de 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Sede Principal</p>
                    <p className="text-sm text-muted-foreground">
                      Escuela Superior Politécnica de Chimborazo (ESPOCH)
                      <br />
                      Riobamba, Chimborazo, Ecuador
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Modalidad</p>
                    <p className="text-sm text-muted-foreground">Híbrida (Presencial y Virtual)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Participantes Esperados</p>
                    <p className="text-sm text-muted-foreground">Más de 500 investigadores y profesionales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="h-5 w-5" />
                  Contacto Directo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:vcictms2025@espoch.edu.ec"
                      className="text-sm text-primary hover:underline"
                    >
                      vcictms2025@espoch.edu.ec
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <a
                      href="tel:+593032998200"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      +593 (03) 2998-200 ext. 1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Viernes: 8:00 - 17:00
                      <br />
                      Sábados: 8:00 - 12:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-foreground">Enlaces Importantes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-between" asChild>
                  <a
                    href="https://www.espoch.edu.ec/sms-2/  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sede Morona Santiago
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <a
                    href="https://docs.google.com/forms/d/1nnXSRjBYi_sJkxxJMIBRNQjL3hW44hCP5CcGuMBysUw/viewform  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Registro de Participantes
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between" asChild>
                  <a
                    href="https://chat.whatsapp.com/JxqjrlIA4etFjefs2Lhvlc  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Grupo de WhatsApp
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border border-gray-200 shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-foreground">Envíanos un Mensaje</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarnos. Te responderemos en las próximas 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Nombre Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium mb-2 text-foreground">
                        Institución
                      </label>
                      <Input
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        placeholder="Universidad, empresa u organización"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Escribe tu consulta o mensaje aquí..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                      Enviar Mensaje
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="mt-16 text-center">
          <Card className="border border-primary/20 bg-primary/5 rounded-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">¿Listo para Participar?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                No te pierdas esta oportunidad única de conectar con expertos internacionales y conocer las últimas
                innovaciones en ciencia y tecnología para la región amazónica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a
                    href="https://maps.app.goo.gl/m684oT3mBDNNzJ17A "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Users className="h-4 w-4" />
                    Registrarse Ahora
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Send className="h-4 w-4" />
                    Enviar Ponencia
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Badge variant="secondary" className="gap-1">
                  <Calendar className="h-3 w-3" />
                  Registro Abierto
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Globe className="h-3 w-3" />
                  Modalidad Híbrida
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Certificados Incluidos
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}