"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  Mail,
  User,
  GraduationCap,
  Clock,
  ChevronDown,
  ChevronUp,
  Globe,
} from "lucide-react";
import CountryFlag from "react-country-flag";

interface Speaker {
  id: number;
  name: string;
  title: string;
  institution: string;
  country: string;
  countryCode: string | string[];
  day: "2026-06-02" | "2026-06-03" | "2026-06-04";
  time: string;
  topic: string;
  modality: "Presencial" | "Virtual";
  expertise: string[];
  bio: string;
  email?: string;
  phone?: string;
  photo?: string;
}

export const speakers: Speaker[] = [
  // =============== MARTES 02 DE JUNIO DE 2026 ===============
  {
    id: 1,
    name: "Nelson René Ortiz Naveda",
    photo: "/NELSON_ORTIZ.jpg",
    title: "Médico Veterinario Zootecnista | Est. Doctorado en Reproducción Animal",
    institution: "Universidad Federal Rural de Pernambuco (UFRPE) - Brasil",
    country: "Brasil / Ecuador",
    countryCode: ["BR", "EC"],
    day: "2026-06-02",
    time: "08:30 – 09:30",
    topic: "Ultrasonografía Doppler colorida del cuerpo lúteo para la detección precoz de búfalas Murrah no gestantes a los 24 días después de la IATF",
    modality: "Virtual",
    expertise: ["Reproducción bovina", "Ultrasonografía", "Biotecnología reproductiva", "IATF"],
    bio: "Médico Veterinario formado en la Universidad Técnica de Cotopaxi (2009), Especialista en Reproducción Bovina por la UCE (2015) y Máster en Reproducción Animal por la Universidad de Cuenca (2017). Actualmente cursa Doctorado en Ciencia Veterinaria con énfasis en Reprodução Animal en Brasil. Ha participado en proyectos de investigación en Ecuador y Brasil enfocados en fisiología reproductiva, biotécnicas reproductivas y eficiencia productiva en sistemas pecuarios tropicales.",
    email: "nelson.ortiz@ufrpe.br",
  },
  {
    id: 2,
    name: "Danien Bustamante H.",
    photo: "/placeholder-speaker-2.png",
    title: "Zootecnista",
    institution: "Universidad de La Salle - Colombia",
    country: "Colombia",
    countryCode: "CO",
    day: "2026-06-02",
    time: "09:30 – 10:30",
    topic: "BEEF ON DAIRY. Una nueva tendencia mundial, una vieja tradición francesa.",
    modality: "Virtual",
    expertise: ["Inseminación artificial", "Genética bovina", "Producción de leche", "Conservación de semen"],
    bio: "Pionero en la inseminación artificial moderna, cuyas investigaciones permitieron perfeccionar la conservación del semen. Amplia experiencia en genética bovina y transferencia de tecnologías reproductivas en sistemas de producción de leche y carne.",
    email: "dbustamante@lasalle.edu.co",
  },
  {
    id: 3,
    name: "Fabián Augusto Almeida López",
    photo: "/placeholder-speaker-3.png",
    title: "Ingeniero Zootecnista | Máster en Reproducción Animal",
    institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH)",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-02",
    time: "11:00 – 12:00",
    topic: "Juzgamiento en ganado de leche / Juzgamiento en ganado de carne",
    modality: "Presencial",
    expertise: ["Juzgamiento ganadero", "Reproducción bovina", "Producción lechera", "Docencia universitaria"],
    bio: "Magíster en Reproducción Animal Mención Bovinos de Leche. Administrador de haciendas productoras de leche, Gerente Técnico en Balanceados Balanfarina SA, y Gerente de HENOMAQ SA. Juez certificado en concursos ganaderos nacionales. Instructor en cursos de juzgamiento en múltiples provincias. Docente investigador en la Facultad de Ciencias Pecuarias de la ESPOCH.",
    email: "fabian.almeida@espoch.edu.ec",
    phone: "+593 99 XXX XXXX",
  },
  {
    id: 4,
    name: "Dr. Germán Marcelo Mancheno Salazar Msg.",
    photo: "/placeholder-speaker-4.png",
    title: "Abogado | Msc. en Derecho Procesal Penal",
    institution: "Corte Superior de Justicia de Chimborazo / UNACH / UNIANDES",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-02",
    time: "12:00 – 13:00",
    topic: "La Administración de Justicia en un Estado Constitucional de Derechos y Justicia",
    modality: "Presencial",
    expertise: ["Derecho procesal", "Función judicial", "Derecho penal", "Docencia universitaria"],
    bio: "Abogado y Msc. en Derecho Penal Procesal. Su trabajo articula la docencia y la Función Judicial en la Corte Superior de Justicia de Chimborazo. Actualmente ejerce funciones jurisdiccionales como Juez de la Unidad de lo Civil y Mercantil. Profesor Universitario de Pregrado y Posgrado en UNACH y UNIANDES.",
    email: "gmancheno@funcionjudicial.gob.ec",
  },
  {
    id: 5,
    name: "Federico José Arena",
    photo: "/placeholder-speaker-5.png",
    title: "Abogado | Postdoctorado en Filosofía del Derecho",
    institution: "Barcelona Institute of Analytic Philosophy / CONICET / Universidad Blas Pascal",
    country: "Italia / Argentina",
    countryCode: ["IT", "AR"],
    day: "2026-06-02",
    time: "14:30 – 15:30",
    topic: "Los desafíos de la interpretación jurídica",
    modality: "Virtual",
    expertise: ["Filosofía del derecho", "Teoría de la interpretación", "Razonamiento probatorio", "Bioética jurídica"],
    bio: "Investigador y académico especializado en filosofía del derecho, teoría de la interpretación jurídica y razonamiento probatorio. Investigador Postdoctoral Senior en el Barcelona Institute of Analytic Philosophy e Investigador Independiente del CONICET. Director del Doctorado en Derecho de la Universidad Blas Pascal, Argentina.",
    email: "federico.arena@ubp.edu.ar",
  },
  {
    id: 6,
    name: "Oscar Mauricio Sánchez Nivicela",
    photo: "/placeholder-speaker-6.png",
    title: "Doctor en Jurisprudencia | Msc. en Cambio Climático",
    institution: "Universidad del Azuay / Fundación ENTSA",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-02",
    time: "17:00 – 18:00",
    topic: "Pluralismo jurídico como un aporte para enfrentar el cambio climático",
    modality: "Presencial",
    expertise: ["Derecho ambiental", "Cambio climático", "Derechos de la naturaleza", "Pluralismo jurídico"],
    bio: "Graduado con mención sobresaliente de la Universidad del Azuay. Magíster en Cambio Climático, Sustentabilidad y Desarrollo con beca por mérito académico. Experiencia en derecho ambiental, cambio climático, derechos de la naturaleza y pluralismo jurídico. Revisor invitado de la revista EUNOMÍA de la Universidad Carlos III de Madrid.",
    email: "oscar.sanchez@entsa.org",
  },

  // =============== MIÉRCOLES 03 DE JUNIO DE 2026 ===============
  {
    id: 7,
    name: "Cristhian David Chicaiza Ortiz",
    photo: "/placeholder-speaker-7.png",
    title: "PhD en Ciencias e Ingeniería Ambiental",
    institution: "Shanghai Jiao Tong University (SJTU)",
    country: "Ecuador / China",
    countryCode: ["EC", "CN"],
    day: "2026-06-03",
    time: "08:00 – 09:00",
    topic: "Potenciando la transformación de residuos orgánicos en energía: Uso de biocarbón y hierro para optimizar la digestión anaerobia con recirculación de CO₂",
    modality: "Virtual",
    expertise: ["Ingeniería ambiental", "Digestión anaerobia", "Biocarbón", "Descarbonización"],
    bio: "PhD en Ciencias e Ingeniería Ambiental por Shanghai Jiao Tong University, Máster en Environmental Engineering y Máster en Cambio Climático, Sustentabilidad y Desarrollo. Su experiencia abarca la consultoría ambiental y el diseño de estrategias de descarbonización.",
    email: "cristhian.chicaiza@sjtu.edu.cn",
  },
  {
    id: 8,
    name: "María Salomé Álvarez Álvarez",
    photo: "/placeholder-speaker-8.png",
    title: "PhD en Chemical Engineering",
    institution: "Facultad de Química - España",
    country: "España",
    countryCode: "ES",
    day: "2026-06-03",
    time: "09:00 – 10:00",
    topic: "Procesos de remediación de contaminantes emergentes y biocombustibles",
    modality: "Virtual",
    expertise: ["Remediación ambiental", "Contaminantes emergentes", "Biocombustibles", "Ingeniería química"],
    bio: "Degree in Chemistry, Master's y PhD en Chemical Engineering. Enfocada en investigación en remediación de contaminantes emergentes y biocombustibles. Actualmente Vicedecana de Calidad de la Facultad de Química.",
    email: "msalome.alvarez@universidad.es",
  },
  {
    id: 9,
    name: "Gabriela Antonieta Borja Pérez",
    photo: "/placeholder-speaker-9.png",
    title: "Socióloga | MSc. Gestión Integrada de Recursos Hídricos",
    institution: "Investigadora independiente - Ecuador",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-03",
    time: "10:30 – 11:30",
    topic: "Del páramo al río: el aluvión del 2022 en Quito como parte del ciclo hidrosocial de las quebradas",
    modality: "Presencial",
    expertise: ["Ecología política del agua", "Gobernanza comunitaria", "Justicia hídrica", "Páramos"],
    bio: "Socióloga y MSc. en Gestión Integrada de Recursos Hídricos, docente e investigadora enfocada en ecología política del agua y gobernanza comunitaria de páramos en Ecuador. Su trabajo articula justicia hídrica, saberes locales y sostenibilidad.",
    email: "gabriela.borja@investigacion.ec",
  },
  {
    id: 10,
    name: "Ruth Genoveva Barba Vera",
    photo: "/placeholder-speaker-10.png",
    title: "Doctora en Ingeniería | Magíster en Interconectividad de Redes",
    institution: "ESPOCH / Pontificia Universidad Católica del Perú (PUCP)",
    country: "Ecuador / Perú",
    countryCode: ["EC", "PE"],
    day: "2026-06-03",
    time: "11:30 – 12:30",
    topic: "Ciberdelincuencia en jóvenes: diagnóstico exploratorio, huella digital y riesgos desde un enfoque OSINT",
    modality: "Presencial",
    expertise: ["Ciberseguridad", "OSINT", "Redes SDN", "Tecnologías de la información"],
    bio: "Experta con más de 15 años de experiencia en docencia e investigación en ciberseguridad, redes de nueva generación (SDN) y tecnologías de la información. Investigadora Senior y Coordinadora Subrogante del grupo SEGINTE. Coordinadora del proyecto de vinculación 'CIBERJÓVENES'.",
    email: "ruth.barba@espoch.edu.ec",
    phone: "+593 99 XXX XXXX",
  },
  {
    id: 11,
    name: "Xavier Soria Poma",
    photo: "/placeholder-speaker-11.png",
    title: "Doctor en Informática | Magíster en Informática Educativa",
    institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH)",
    country: "Ecuador / España",
    countryCode: ["EC", "ES"],
    day: "2026-06-03",
    time: "14:00 – 15:00",
    topic: "¿Cómo ven las máquinas el mundo real?",
    modality: "Presencial",
    expertise: ["Visión artificial", "Deep learning", "Inteligencia artificial", "Informática educativa"],
    bio: "Doctor en Ciencias de la Computación (2019) por la Universidad Autónoma de Barcelona, España, con énfasis en visión artificial y deep learning. Más de 15 publicaciones científicas. Líder del grupo EspochAI en la ESPOCH.",
    email: "xavier.soria@espoch.edu.ec",
  },
  {
    id: 12,
    name: "Edward Mays",
    photo: "/placeholder-speaker-12.png",
    title: "Senior Technical Mentor",
    institution: "Thoughtworks",
    country: "Estados Unidos",
    countryCode: "US",
    day: "2026-06-03",
    time: "15:00 – 16:00",
    topic: "What Engineers Do Now - how AI is changing the software engineer's craft",
    modality: "Virtual",
    expertise: ["Ingeniería de software", "Inteligencia artificial", "Modernización de legacy", "Plataformas cloud"],
    bio: "Ed Mays has been writing software since 1997. Principal Consultant at Thoughtworks, working across new development, legacy modernization, and platform migration. In this talk he discusses what the AI wave is changing about the work, and what it isn't.",
    email: "ed.mays@thoughtworks.com",
  },

  // =============== JUEVES 04 DE JUNIO DE 2026 ===============
  {
    id: 13,
    name: "Julio Montero Matos",
    photo: "/placeholder-speaker-13.png",
    title: "Doctor en Ciencias Técnicas en Minería | Máster en Minería",
    institution: "Institución minera - Cuba",
    country: "Cuba",
    countryCode: "CU",
    day: "2026-06-04",
    time: "08:00 – 09:00",
    topic: "Cierre de Canteras de Materiales de la Construcción en Cuba, una solución a la Sostenibilidad Minera",
    modality: "Virtual",
    expertise: ["Sostenibilidad minera", "Cierre de operaciones", "Gestión ambiental", "Materiales de construcción"],
    bio: "Doctor en Ciencias Técnicas en Minería con amplia experiencia en sostenibilidad minera, cierre de operaciones y gestión ambiental en el sector de materiales de construcción. Investigador y consultor en proyectos de minería responsable en Cuba y Latinoamérica.",
    email: "jmontero@mineria.cu",
  },
  {
    id: 14,
    name: "Eduardo Andrés Luna Méndez",
    photo: "/placeholder-speaker-14.png",
    title: "Magíster en Ingeniería de Recursos Minerales | Ingeniero en Minas",
    institution: "Universidad del Azuay",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-04",
    time: "09:00 – 10:00",
    topic: "Flotación de minerales: fundamentos y aplicaciones industriales",
    modality: "Presencial",
    expertise: ["Flotación de minerales", "Procesos mineralúrgicos", "Docencia universitaria", "Investigación minera"],
    bio: "Ingeniero en Minas, Magíster en Ingeniería de Recursos Minerales y Especialista en Docencia Universitaria. Amplia experiencia en docencia, investigación y formación académica en el área minera, particularmente en flotación. Docente a tiempo completo en la Universidad del Azuay.",
    email: "eluna@uazuay.edu.ec",
  },
  {
    id: 15,
    name: "Valeria Loor Cárdenas",
    photo: "/placeholder-speaker-15.png",
    title: "Magíster en Minería con Distinción Máxima | Ingeniera en Minas",
    institution: "Universidad de Chile",
    country: "Chile",
    countryCode: "CL",
    day: "2026-06-04",
    time: "10:30 – 11:30",
    topic: "Planificación minera a corto plazo",
    modality: "Virtual",
    expertise: ["Planificación minera", "Perforación y tronadura", "Software minero", "Optimización operacional"],
    bio: "Magíster en Minería con distinción máxima por la Universidad de Chile. Experiencia en planificación minera, perforación y tronadura en Minera Los Pelambres y Anglo American. Reconocida con mejor tesis de magíster y pasantía internacional en South Dakota School of Mines & Technology.",
    email: "vloor@mining.uchile.cl",
  },
  {
    id: 16,
    name: "Francisco Benito Castro Chavez",
    photo: "/placeholder-speaker-16.png",
    title: "Lcdo. Contabilidad y Auditoría | Mgtr. MBA",
    institution: "Cooperativa de Ahorro y Crédito Las Naves / AUDICAST Y ASOCIADOS S.A.S",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-04",
    time: "11:30 – 12:30",
    topic: "El impacto de la inteligencia artificial en la Contabilidad y Auditoría en la Actualidad",
    modality: "Presencial",
    expertise: ["Auditoría financiera", "Inteligencia artificial", "Control interno", "Gestión de riesgos"],
    bio: "Más de 20 años de experiencia en auditoría, contabilidad y administración financiera. Gerente General, Auditor Externo, Auditor Interno y Liquidador calificado por la SEPS. Capacitador en auditoría, riesgos y control interno para el sector financiero y solidario.",
    email: "fcastro@audicast.com",
    phone: "+593 99 XXX XXXX",
  },
  {
    id: 17,
    name: "Iciar López-Vdriero Tejedor",
    photo: "/placeholder-speaker-17.png",
    title: "Licenciada en Derecho | Máster en Telecomunicaciones y Nuevas Tecnologías",
    institution: "ICEF Consultores / Universidad Carlos III de Madrid",
    country: "España",
    countryCode: "ES",
    day: "2026-06-04",
    time: "14:00 – 15:00",
    topic: "Auditoría digital, inteligencia artificial y cumplimiento: gestión de riesgos en entornos públicos y privados",
    modality: "Virtual",
    expertise: ["Privacidad y protección de datos", "Ciberseguridad", "Compliance", "Auditoría ISO 27001"],
    bio: "Abogada especializada en privacidad, ciberseguridad y transformación digital. Socia de ICEF Consultores. Auditora Jefe ISO 27001 y Delegada de Protección de Datos. Profesora en universidades de España y Latinoamérica. Autora de publicaciones en derecho digital y privacidad.",
    email: "iciar.lopez@icefconsultores.com",
  },
  {
    id: 18,
    name: "María del Carmen Jácome Yambay",
    photo: "/placeholder-speaker-18.png",
    title: "Mgtr. en Gestión y Automatización de Procesos | Mgtr. en Big Data y Business Intelligence",
    institution: "Consultora independiente - Ecuador",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-04",
    time: "15:00 – 16:00",
    topic: "Tiempos de Sostenibilidad empresarial: Gestión Compliance y Antisoborno",
    modality: "Presencial",
    expertise: ["Sistemas de Gestión ISO", "Compliance", "Automatización de procesos", "Big Data"],
    bio: "Amplia experiencia en diseño, desarrollo, implementación, auditoría y capacitación de Sistemas de Gestión ISO. Especialista en compliance, gestión de riesgos y sostenibilidad empresarial para sectores público y privado.",
    email: "mjacome@consultora.ec",
  },
  {
    id: 19,
    name: "Carolina Alejandra Lozano Haro",
    photo: "/placeholder-speaker-19.png",
    title: "Economista | Mgtr. en Administración de Negocios",
    institution: "Secretaría Nacional de Gestión de Riesgos (SNGR) - Ecuador",
    country: "Ecuador",
    countryCode: "EC",
    day: "2026-06-04",
    time: "16:00 – 17:00",
    topic: "Afectación del cambio climático con la gestión de riesgo",
    modality: "Presencial",
    expertise: ["Gestión de riesgos", "Planificación estratégica", "Políticas públicas", "Cambio climático"],
    bio: "Economista y magíster en Administración de Negocios. Amplia experiencia en sectores regulados, planificación estratégica y gestión administrativa. Ha impulsado iniciativas regionales en materia de competencia y gestión de riesgos. Visión centrada en eficiencia, transparencia y servicio a la ciudadanía.",
    email: "clozano@gestionderiesgos.gob.ec",
  },
];

export function SpeakersGallery() {
  const [selectedDay, setSelectedDay] = useState<"2026-06-02" | "2026-06-03" | "2026-06-04">("2026-06-02");
  const [expandedSpeaker, setExpandedSpeaker] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSpeakers = speakers.filter(
    (speaker) =>
      speaker.day === selectedDay &&
      (speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        speaker.institution.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getDayLabel = (day: "2026-06-02" | "2026-06-03" | "2026-06-04") => {
    switch (day) {
      case "2026-06-02":
        return "Martes 02 de Junio";
      case "2026-06-03":
        return "Miércoles 03 de Junio";
      case "2026-06-04":
        return "Jueves 04 de Junio";
      default:
        return day;
    }
  };

  const getDayCount = (day: "2026-06-02" | "2026-06-03" | "2026-06-04") =>
    speakers.filter((s) => s.day === day).length;

  const toggleExpand = (id: number) => {
    setExpandedSpeaker(expandedSpeaker === id ? null : id);
  };

  return (
    <section id="expositores" className="py-16 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Conferencias Magistrales
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VICICTMS 2026 • 2-4 de junio de 2026 • Expertos internacionales en ciencia, tecnología e innovación
          </p>
        </div>

        {/* Buscador */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar por nombre, tema o institución..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-[#006400] focus:border-transparent"
            />
          </div>
        </div>

        {/* Botones de día */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-3 gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-200 max-w-md w-full">
            {[
              { value: "2026-06-02" as const, label: "Martes 02 Jun", count: getDayCount("2026-06-02") },
              { value: "2026-06-03" as const, label: "Miércoles 03 Jun", count: getDayCount("2026-06-03") },
              { value: "2026-06-04" as const, label: "Jueves 04 Jun", count: getDayCount("2026-06-04") },
            ].map((day) => (
              <button
                key={day.value}
                onClick={() => setSelectedDay(day.value)}
                className={`px-3 py-3 text-center text-sm font-medium transition-all duration-300 rounded-lg ${
                  selectedDay === day.value
                    ? "bg-[#006400] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="font-semibold">{day.label}</div>
                <div className="text-xs mt-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full inline-block">
                  {day.count} conferencistas
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Contenido */}
        <div className="mt-8">
          {filteredSpeakers.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl shadow-lg border border-dashed border-gray-300">
              <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron resultados</h3>
              <p className="text-gray-500 text-lg">Intenta con otros términos de búsqueda.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800 pb-2 border-b-2 border-[#006400]">
                  {getDayLabel(selectedDay)}
                </h3>
                <Badge variant="outline" className="text-sm">
                  {filteredSpeakers.length} resultados
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredSpeakers.map((speaker) => (
                  <Card
                    key={speaker.id}
                    className="group cursor-pointer overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center">
                      {speaker.photo ? (
                        <img
                          src={speaker.photo}
                          alt={`Foto de ${speaker.name}`}
                          className="max-h-full max-w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#006400] to-[#c00000] rounded-full flex items-center justify-center shadow-lg">
                            <User className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-xs text-gray-500 font-medium">Sin foto disponible</p>
                        </div>
                      )}

                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge
                          className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                            speaker.modality === "Presencial"
                              ? "bg-green-100 text-green-800 border border-green-200"
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

                    <CardContent className="p-5 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#006400] transition-colors line-clamp-2">
                          {speaker.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium line-clamp-1">{speaker.title}</p>
                        
                        <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                          <GraduationCap className="h-3.5 w-3.5 text-[#006400] flex-shrink-0" />
                          <span className="line-clamp-1">{speaker.institution}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          {Array.isArray(speaker.countryCode) ? (
                            <div className="flex items-center gap-0.5">
                              {speaker.countryCode.map((code) => (
                                <CountryFlag
                                  key={code}
                                  countryCode={code}
                                  svg
                                  style={{ width: '1em', height: '1em', borderRadius: '2px' }}
                                  title={code}
                                />
                              ))}
                            </div>
                          ) : (
                            <CountryFlag
                              countryCode={speaker.countryCode}
                              svg
                              style={{ width: '1.2em', height: '1.2em', borderRadius: '2px' }}
                              title={speaker.countryCode}
                            />
                          )}
                          <span className="line-clamp-1">{speaker.country}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 bg-gray-100 p-2.5 rounded-lg">
                          <Clock className="h-4 w-4 text-[#c00000] flex-shrink-0" />
                          <span className="font-medium text-gray-800 text-sm">{speaker.time}</span>
                        </div>
                        <div className="p-3 bg-gradient-to-r from-green-50 to-red-50 border border-green-100 rounded-xl">
                          <h4 className="font-semibold text-gray-800 text-xs mb-1 uppercase tracking-wide">Tema</h4>
                          <p className="text-gray-700 font-medium text-sm leading-relaxed line-clamp-2">
                            {speaker.topic}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {speaker.expertise.slice(0, 2).map((exp, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-[10px] border-gray-300 text-gray-700 hover:bg-gray-100 px-2 py-0.5 rounded-full"
                          >
                            {exp}
                          </Badge>
                        ))}
                        {speaker.expertise.length > 2 && (
                          <Badge
                            variant="outline"
                            className="text-[10px] border-gray-300 text-gray-500 px-2 py-0.5 rounded-full"
                          >
                            +{speaker.expertise.length - 2}
                          </Badge>
                        )}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(speaker.id);
                        }}
                        className="w-full mt-1 text-[#006400] hover:text-[#004d00] hover:bg-green-50 font-medium rounded-xl border border-green-200 transition-all duration-300 flex items-center justify-center gap-1 text-sm"
                      >
                        {expandedSpeaker === speaker.id ? (
                          <>
                            <ChevronUp className="h-4 w-4 transition-transform duration-300" /> Cerrar
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 transition-transform duration-300" /> Ver biografía
                          </>
                        )}
                      </Button>

                      {expandedSpeaker === speaker.id && (
                        <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-200 space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm mb-2">Biografía Profesional</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{speaker.bio}</p>
                          </div>
                          {(speaker.email || speaker.phone) && (
                            <div className="pt-3 border-t border-red-200">
                              <h4 className="font-bold text-gray-800 text-sm mb-2">Contacto</h4>
                              <div className="space-y-1.5 text-sm">
                                {speaker.email && (
                                  <a
                                    href={`mailto:${speaker.email}`}
                                    className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-colors"
                                  >
                                    <Mail className="h-3.5 w-3.5 text-red-600" />
                                    <span className="font-medium truncate">{speaker.email}</span>
                                  </a>
                                )}
                                {speaker.phone && (
                                  <a
                                    href={`tel:${speaker.phone}`}
                                    className="flex items-center gap-2 text-gray-700 hover:text-[#006400] transition-colors"
                                  >
                                    <span className="text-[#c00000]">📞</span>
                                    <span className="font-medium">{speaker.phone}</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}