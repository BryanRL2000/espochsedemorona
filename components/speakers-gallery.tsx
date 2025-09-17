"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Mail, User, GraduationCap, Clock, Calendar, ChevronDown, ChevronUp, Globe } from "lucide-react"

// ✅ Interfaz actualizada con campo photo
interface Speaker {
  id: number
  name: string
  title: string
  institution: string
  country: string
  countryCode?: string
  day: "2025-10-14" | "2025-10-15" | "2025-10-16"
  time: string
  topic: string
  modality: "Presencial" | "Virtual"
  expertise: string[]
  bio: string
  email?: string
  phone?: string
  photo?: string // ✅ Campo para la foto del ponente
}

// ✅ Datos de ponentes con fotos asignadas y biografías completas
const speakers: Speaker[] = [
  // =============== MARTES 14 DE OCTUBRE ===============
  {
    id: 1,
    name: "Moises Oswaldo Bustamante Rúa",
    photo: "/FOTOGRAFIA_OSWALDO BUSTAMANTE.png",
    title: "Doctor en Ciencias de la Ingeniería, mención Metalurgia Extractiva",
    institution: "Universidad Nacional de Colombia, sede Medellín",
    country: "Colombia",
    countryCode: "CO",
    day: "2025-10-14",
    time: "08:30 – 09:30",
    topic: "Conminución",
    modality: "Presencial",
    expertise: ["Reología de suspensiones", "Procesamiento de minerales", "Geomecánica"],
    bio: "Moises Oswaldo Bustamante Rúa es Ingeniero de Minas y Metalurgia por la Universidad Nacional de Colombia y Doctor en Ciencias de la Ingeniería con mención en Metalurgia Extractiva por la Universidad de Concepción en Chile. Es Profesor Titular de la Universidad Nacional de Colombia, donde ha dirigido múltiples cursos de pregrado y posgrado. Actualmente es Director del Instituto de Minerales CIMEX. Su experiencia se centra en la concentración y beneficio de minerales, reología de suspensiones, geomecánica y modelamiento de procesos mineros. Ha liderado importantes proyectos de investigación, publicado numerosos artículos científicos y ha sido reconocido por su excelencia académica en varias ocasiones.",
    email: "mobustam@unal.edu.co",
    phone: "+57 3113289565",
  },
  {
    id: 2,
    name: "Gabriela Jacqueline Contreras Sinchi",
    photo: "/FOTOGRAFIA_GABRIELA CONTRERAS.png",
    title: "Magíster en Ingeniería – Recursos Minerales",
    institution: "Instituto de Minerales CIMEX – Universidad Nacional de Colombia",
    country: "Colombia",
    countryCode: "CO",
    day: "2025-10-14",
    time: "09:30 – 10:30",
    topic: "Caracterización química superficial de minerales",
    modality: "Virtual",
    expertise: ["Flotación de minerales", "Química de superficies", "Procesamiento de minerales"],
    bio: "Gabriela Contreras Sinchi es Ingeniera en Minas por la Universidad del Azuay y Magíster en Ingeniería – Recursos Minerales por la Universidad Nacional de Colombia. Actualmente se desempeña como investigadora e ingeniera de procesos en el Instituto de Minerales CIMEX. Su experiencia abarca flotación de minerales, caracterización fisicoquímica, reprocesamiento de relaves y optimización de procesos. Ha participado como consultora y coordinadora de cooperación interinstitucional en convenios entre universidades de Colombia y Ecuador. También colabora como docente asistente en áreas como química de superficies y sistemas particulados.",
    email: "gcontrerass@unal.edu.co",
    phone: "+57 3116678545",
  },
  {
    id: 3,
    name: "Jacopo Seccatore",
    photo: "/FOTOGRAFIA_JACOPO_SECCATORE.png",
    title: "Doctor en Ingeniería de Minas",
    institution: "Universidad Católica del Norte, Chile",
    country: "Chile",
    countryCode: "CL",
    day: "2025-10-14",
    time: "11:00 – 12:00",
    topic: "A new variable for tunnel drill & blast efficiency: the angles of breakage",
    modality: "Presencial",
    expertise: ["Voladuras en minería", "Optimización minera", "Mecánica de rocas"],
    bio: "Jacopo Seccatore es ingeniero civil con magíster en ingeniería ambiental por el Politécnico de Torino (Italia) y doctor en ingeniería de minas por la Universidad de São Paulo (Brasil). Actualmente es profesor en la Universidad Católica del Norte en Chile, especializado en voladuras, diseño de minas subterráneas y sostenibilidad en pequeña minería. Ha sido director de centros de investigación minera y ha liderado más de 30 proyectos internacionales en Brasil, Chile, Ecuador, Perú y África. Ha colaborado con organismos como el PNUD, CIRDI y universidades de prestigio. Es autor de múltiples artículos y libros, y miembro de sociedades científicas como ISEE, SOMP y SME.",
    email: "jacopo.seccatore@gmail.com",
    phone: "+56 9 85135252",
  },
  {
    id: 4,
    name: "Josué González Coronel",
    photo: "/images/speakers/josue-gonzalez.jpg",
    title: "Estudiante de Doctorado",
    institution: "Universidad de Chile",
    country: "Chile",
    countryCode: "CL",
    day: "2025-10-14",
    time: "12:00 – 13:00",
    topic: "Planificación Minera",
    modality: "Virtual",
    expertise: ["Planificación Minera", "Optimización", "Investigación"],
    bio: "Estudiante de Doctorado en la Universidad de Chile, especializado en planificación minera y optimización de procesos.",
    email: "josue.gonzalez.cor@gmail.com",
  },
  {
    id: 5,
    name: "Katharina Hecht",
    photo: "/images/speakers/katharina-hecht.jpg",
    title: "Especialista en Área Ambiental",
    institution: "Universidad Internacional",
    country: "Internacional",
    day: "2025-10-14",
    time: "14:00 – 15:00",
    topic: "Área Ambiental",
    modality: "Virtual",
    expertise: ["Gestión Ambiental", "Sostenibilidad", "Conservación"],
    bio: "Especialista internacional en temas ambientales con amplia experiencia en proyectos de sostenibilidad y conservación.",
  },
  {
    id: 6,
    name: "Douglas Guzmán Amoroso",
    photo: "/images/speakers/douglas-guzman.jpg",
    title: "Doctor en Dirección de Proyectos",
    institution: "GAD del Cantón Pastaza, Ecuador",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-14",
    time: "15:00 – 16:00",
    topic: "Implementación de estrategias sostenibles en proyectos de ingeniería ambiental en zonas amazónicas",
    modality: "Presencial",
    expertise: ["Gestión ambiental", "Sostenibilidad", "Dirección de proyectos"],
    bio: "Douglas Guzmán es Ingeniero Ambiental con amplia trayectoria en gestión ambiental, sostenibilidad y dirección de proyectos. Posee maestrías en Gestión de Proyectos y en Gestión Ambiental mención Sostenibilidad, además de un doctorado en Dirección de Proyectos. Ha ejercido cargos de liderazgo en instituciones públicas y privadas, incluyendo su actual función como Director del GAD del Cantón Pastaza. Su experiencia combina la gestión territorial, la consultoría ambiental y la docencia universitaria. Ha participado en proyectos de remediación, conservación de cuencas y desarrollo sostenible, así como en eventos académicos internacionales. Autor de publicaciones sobre desarrollo socioeconómico de comunidades indígenas amazónicas, destaca por su compromiso con la sostenibilidad y la innovación en la gestión ambiental.",
    email: "douguzman9@gmail.com",
    phone: "+593 987899818",
  },
  {
    id: 7,
    name: "Ana Lucía Martínez Toledo",
    photo: "/images/speakers/ana-lucia-martinez.jpg",
    title: "Especialista en Innovación Tecnológica",
    institution: "Universidad Internacional",
    country: "Internacional",
    day: "2025-10-14",
    time: "17:00 – 18:00",
    topic: "Innovación tecnológica sustentable",
    modality: "Presencial",
    expertise: ["Innovación", "Tecnología Sustentable", "Desarrollo"],
    bio: "Especialista en innovación tecnológica sustentable con enfoque en desarrollo de soluciones tecnológicas ambientalmente responsables.",
  },

  // =============== MIÉRCOLES 15 DE OCTUBRE ===============
  {
    id: 8,
    name: "Matías Peredo Parada",
    photo: "/Matias-Peredo.png",
    title: "Doctor en Ingeniería Hidráulica y Medio Ambiente",
    institution: "EcoHyd – Plataforma de Investigación en Ecohidrología y Ecohidráulica",
    country: "Chile",
    countryCode: "CL",
    day: "2025-10-15",
    time: "08:00 – 09:00",
    topic: "Caudal Ambiental: la forma mas robusta de dotar de seguridad hídrica a los ecosistemas acuáticos",
    modality: "Virtual",
    expertise: ["Ecohidráulica", "Caudales ambientales", "Gestión hídrica"],
    bio: "Matías Peredo Parada es Ingeniero Civil Hidráulico por la Universidad de Chile y Doctor en Ingeniería Hidráulica y Medio Ambiente por la Universidad Politécnica de Valencia. Se desempeña como Gerente General de EcoHyd y consultor UNESCO en caudales ambientales, ecohidrología y soluciones basadas en la naturaleza. Cuenta con más de 20 años de experiencia en proyectos nacionales e internacionales de gestión hídrica, energía, minería y conservación ambiental. Ha liderado numerosos estudios de modelación de calidad de agua, dispersión de contaminantes y determinación de caudales ecológicos. Sus publicaciones científicas en revistas indexadas y congresos internacionales consolidan su trayectoria académica y profesional.",
  },
  {
    id: 9,
    name: "Hugo de Jesús López Inzunza",
    photo: "/Hugo-Lopez.png",
    title: "Doctor en Ciencias Veterinarias especializado en Nutrición",
    institution: "Universidad Autónoma de Sinaloa, México",
    country: "México",
    countryCode: "MX",
    day: "2025-10-15",
    time: "09:00 – 10:00",
    topic: "Utilización de enzimas exógenas en la finalización de bovinos en confinamiento",
    modality: "Virtual",
    expertise: ["Nutrición de Rumiantes", "Ecología Ruminal", "Producción Animal"],
    bio: "El Dr. Hugo de Jesús López Inzunza es un destacado Ingeniero Agrónomo Zootecnista por la Universidad Autónoma de Sinaloa, México, y Doctor en Ciencias Veterinarias especializado en Nutrición por la Universidad Agraria de la Habana, Cuba. Se desempeña como Profesor Investigador Titular de Tiempo Completo en la Facultad de Agronomía de la Universidad Autónoma de Sinaloa desde 2018, impartiendo cátedras clave en Zootecnia y Nutrición Pecuaria. Es líder del Grupo Disciplinario “Producción y Nutrición Animal” y del Laboratorio de Bromatología y Nutrición Animal. Su experiencia internacional incluye ser asesor y consultor en producción pecuaria y actualmente representa a una consultora internacional especializada en nutrición de bovinos. Ha sido ponente en congresos internacionales y es autor de publicaciones científicas en revistas indexadas y libros, además de haber dirigido y colaborado en diversos proyectos de investigación.",
    email: "hugolopez.fa@uas.edu.mx",
    phone: "+52 1669 245 8978",
  },
  {
    id: 10,
    name: "Jorge Ricardo Guerrero López",
    photo: "/images/speakers/jorge-guerrero.jpg",
    title: "Magíster en Producción Animal con mención en Nutrición Animal",
    institution: "Universidad Técnica de Ambato",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "10:30 – 11:30",
    topic: "Alternativas de antibióticos promotores del crecimiento y resistencia bacteriana",
    modality: "Presencial",
    expertise: ["Producción Animal", "Patología Aviar", "Resistencia microbiana"],
    bio: "El Profesor Jorge Ricardo Guerrero López es un Ingeniero Zootecnista con una destacada trayectoria en el ámbito académico y profesional. Posee un Magíster en Producción Animal con mención en Nutrición Animal, y Diplomas Superiores en Patología Aviar e Informática Educativa Universitaria. Desde 2001, se desempeña como Profesor Titular en la Facultad de Ciencias Agropecuarias de la Universidad Técnica de Ambato. Su vasta experiencia abarca el sector avícola, con experticia en sanidad y producción animal. Ha realizado importantes contribuciones a través de numerosas publicaciones científicas sobre nutrición, resistencia microbiana y probióticos, y es coautor de libros en avicultura y reproducción. Es reconocido como un referente en el sector agropecuario.",
    email: "jr.guerrero@uta.edu.ec",
    phone: "+593 99 715 0013",
  },
  {
    id: 11,
    name: "Carlos Andrés Mancheno Herrera",
    photo: "/Andres-Mancheno.png",
    title: "Magister en Reproducción Animal",
    institution: "ESPOCH",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "11:30 – 12:30",
    topic: "Reproducción Animal y Biotecnología",
    modality: "Presencial",
    expertise: ["Reproducción Animal", "Biotecnología Reproductiva", "Producción bovina"],
    bio: "Carlos Andrés Mancheno Herrera: Ingeniero Zootecnista, Magister en Reproducción Animal. Asesor comercial y técnico desarrollista empresa el Agro 2015 – 2016; técnico docente responsable del Laboratorio de Reproducción Animal de la FCP – ESPOCH – 2016 – 2020; Docente de programas de grado y postgrado; Asesor técnico en ganaderías; CEO de la empresa BEST BREED GENETICS, dedicada a la criopreservación de material genético animal; Editor Jefe Revista Científica RECIENA indexada en Latindex Catálogo 2.0 y Erihplus 2023 – 2024; Ponente en Congresos Internacionales; publicación de libros y artículos científicos en revistas de alto impacto.",
    email: "andres.mancheno@espoch.edu.ec",
    phone: "0984353812",
  },
  {
    id: 12,
    name: "Luis Antonio Aguirre Mendoza",
    photo: "/Luis-Aguirre.png",
    title: "Doctor en Ciencias Veterinarias",
    institution: "Universidad Nacional de Loja, Ecuador",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "14:00 – 15:00",
    topic: "Alternativas para el desarrollo de una ganadería sostenible en la Amazonia ecuatoriana",
    modality: "Virtual",
    expertise: ["Nutrición animal", "Biotecnologías alimentarias", "Ganadería amazónica"],
    bio: "Luis Antonio Aguirre Mendoza es un destacado Médico Veterinario Zootecnista con una amplia trayectoria académica y profesional. Posee una sólida formación de posgrado, que incluye el título de Especialista en Nutrición y Alimentación Animal, dos maestrías en Administración para el Desarrollo Educativo y Producción Animal por la Universidad Nacional de Loja, Ecuador, y un Doctorado en Ciencias Veterinarias otorgado por la Universidad Agraria de La Habana, Cuba. Desde 1994, se desempeña como docente titular principal en la carrera de Medicina Veterinaria y Zootecnia. Su experiencia se extiende como director e investigador principal en seis proyectos de investigación, y actualmente lidera dos proyectos clave en nutrición y alimentación de animales menores y desarrollo de tecnologías para bovinos en la Amazonía ecuatoriana. Es un prolífico autor y coautor de 18 publicaciones científicas en revistas indexadas y un reconocido conferencista a nivel internacional. Sus áreas de especialización se centran en la nutrición y producción animal, incluyendo biotecnologías aplicadas a alimentos.",
    email: "luis.aguirre@unl.edu.ec",
    phone: "0992286390",
  },
  {
    id: 13,
    name: "Victor Vimos",
    photo: "/images/speakers/victor-vimos.jpg",
    title: "PhD en Interculturalidad",
    institution: "Universidad Internacional",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "15:00 – 15:30",
    topic: "Interculturalidad",
    modality: "Virtual",
    expertise: ["Interculturalidad", "Diversidad Cultural", "Investigación Social"],
    bio: "Doctor especializado en estudios interculturales con amplia experiencia en investigación sobre diversidad cultural y social.",
  },

  // =============== JUEVES 16 DE OCTUBRE ===============
  {
    id: 14,
    name: "María Dolores Santos Vidal",
    photo: "/images/speakers/maria-dolores-santos.jpg",
    title: "Magister en Relaciones Internacionales",
    institution: "Universidad Internacional",
    country: "Internacional",
    day: "2025-10-16",
    time: "08:00 – 09:00",
    topic: "Fuerza laboral en tiempos de Inteligencia Artificial: Desafíos, habilidades clave y oportunidades",
    modality: "Virtual",
    expertise: ["Inteligencia Artificial", "Mercado Laboral", "Relaciones Internacionales"],
    bio: "Especialista en relaciones internacionales con enfoque en el impacto de la inteligencia artificial en el mercado laboral global.",
    email: "mariadolores.santos.v@gmail.com",
    phone: "0984577604",
  },
  {
    id: 15,
    name: "Mary Carmen Vargas Cisneros",
    photo: "/images/speakers/mary-carmen-vargas.jpg",
    title: "Magister en Seguridad Informática",
    institution: "Universidad Especializada",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "09:00 – 10:00",
    topic: "Gestión de Incidentes de Seguridad",
    modality: "Virtual",
    expertise: ["Seguridad Informática", "Gestión de Incidentes", "Ciberseguridad"],
    bio: "Especialista en seguridad informática con amplia experiencia en gestión de incidentes y ciberseguridad.",
    email: "mcvc75@gmail.com",
    phone: "0984340202",
  },
  {
    id: 16,
    name: "Alejandra Guerrón",
    photo: "/images/speakers/alejandra-guerron.jpg",
    title: "MSc. en Electrónica e Ingeniería Artificial",
    institution: "Tyndall National Institute",
    country: "Irlanda",
    countryCode: "IE",
    day: "2025-10-16",
    time: "10:30 – 11:30",
    topic: "Electrónica e ingeniería Artificial",
    modality: "Virtual",
    expertise: ["Electrónica", "Inteligencia Artificial", "Ingeniería"],
    bio: "Ingeniera especializada en electrónica e inteligencia artificial, investigadora en el prestigioso Tyndall National Institute.",
    email: "alejandra.guerron@tyndall.ie",
  },
  {
    id: 17,
    name: "Maritza Fernanda Santillán Escobar",
    photo: "/Maritza-Santillan.png",
    title: "Magister en Contabilidad y Auditoria",
    institution: "Cooperativa de Ahorro y Crédito San Jorge Ltda.",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "11:30 – 12:30",
    topic: "Importancia del Control Interno en las organizaciones financieras reguladas por la SEPS",
    modality: "Virtual",
    expertise: ["Control Interno", "Auditoría", "Riesgo Operativo"],
    bio: "Mgs. Maritza Fernanda Santillán Escobar es Licenciada en Auditoría y Contabilidad, es Contadora Pública Autorizada con una Maestría en Auditoría y Contabilidad en la Universidad Nacional de Chimborazo. Cuenta con más de 5 años de experiencia en auditoría interna y externa, especialmente en cooperativas de los segmentos 1, 3 y 4. Está especializada NIA, control interno y cumplimiento normativo SEPS. Ha liderado procesos de implementación de Estructuración de Procesos y Continuidad del Negocios. Actualmente, se desempeña como Auditora Interna en una Cooperativa de Ahorro y Crédito del segmento 3 y es consultora Junior en una empresa de servicios complementarios.",
    email: "maritzasantillane@gmail.com",
    phone: "0993520532",
  },
  {
    id: 18,
    name: "Donal Raúl Gavilanes Aucay",
    photo: "/DONAL.jpeg",
    title: "Magister en Auditoría Gubernamental y Control",
    institution: "Contraloría General del Estado",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "14:00 – 15:00",
    topic: "Normas de Control Interno en la Administración Pública",
    modality: "Presencial",
    expertise: ["Auditoría Gubernamental", "Control Interno", "Gestión Pública"],
    bio: "Especialista Provincial de Auditoría con amplia experiencia en planificación de auditoría, gestión financiera y control en el sector público. Ex Director Provincial de la Contraloría en Morona Santiago. Autor de publicaciones como 'Gestión Financiera y Peculado en GAD Municipal'.",
    email: "donal.gavilanes@hotmail.com",
    phone: "0980097122",
  },
  {
    id: 19,
    name: "Carlos Gabriel López Bravo",
    photo: "/Carlos-Lopez.png",
    title: "Magister en Administración de Empresas",
    institution: "Cooperativa Gualaquiza",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "15:00 – 16:00",
    topic: "Gestión Cooperativa y Administración Financiera",
    modality: "Presencial",
    expertise: ["Administración de Empresas", "Gestión Cooperativa", "Riesgos Financieros"],
    bio: "Gerente General de Cooperativa Gualaquiza con amplia experiencia en gestión de riesgos, inteligencia de negocios y administración cooperativa. Magister en Administración de Empresas por la PUCE. Ha implementado modelos de análisis y prevención de riesgos conforme a normativa de la SEPS. Certificado en Transformación Digital y Gerencia de Cooperativas.",
    email: "karlopez_14@hotmail.es",
    phone: "+593 99 139 3075",
  },
  {
    id: 20,
    name: "Jhonnatan Fabián Carguaytongo Silva",
    photo: "/JHONATAN.JPG",
    title: "Magister en Gestión Financiera y Riesgos",
    institution: "Cooperativa de Ahorro y Crédito Marcabelí Ltda.",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "16:00 – 17:00",
    topic: "Gestión de Riesgos en Cooperativas de Ahorro y Crédito",
    modality: "Presencial",
    expertise: ["Auditoría", "Gestión de Riesgos", "Análisis Financiero"],
    bio: "Jhonnatan Fabián Carguaytongo Silva es Ingeniero en Contabilidad y Auditoría por la ESPOCH, Magíster en Contabilidad y Auditoría por la UTA y Magíster en Gestión Financiera y Riesgos por la UESS. Actualmente cursa el Doctorado en Economía y Finanzas. Cuenta con amplia experiencia como auditor interno y externo en cooperativas y empresas del sector financiero. Es presidente fundador de la firma de Auditoría CONSULTORES Y AUDITORES C&SCONAUD CIA.LTDA. Ha impartido talleres en temas de auditoría, control interno y análisis financiero. Autor del artículo 'La presión fiscal y la rentabilidad en las cooperativas de ahorro y crédito'.",
    email: "jcarguaytongo@hotmail.com",
    phone: "0967708388",
  },
]

export function SpeakersGallery() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDay, setSelectedDay] = useState("2025-10-14")
  const [expandedSpeaker, setExpandedSpeaker] = useState<number | null>(null)

  const filteredSpeakers = speakers.filter((speaker) => {
    const matchesSearch =
      speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.expertise.some((exp) => exp.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesDay = speaker.day === selectedDay

    return matchesSearch && matchesDay
  })

  // Agrupar por día
  const groupedSpeakers = {
    "2025-10-14": filteredSpeakers.filter(s => s.day === "2025-10-14"),
    "2025-10-15": filteredSpeakers.filter(s => s.day === "2025-10-15"),
    "2025-10-16": filteredSpeakers.filter(s => s.day === "2025-10-16"),
  }

  const getDayLabel = (day: string) => {
    switch (day) {
      case "2025-10-14": return "Martes 14 de Octubre"
      case "2025-10-15": return "Miércoles 15 de Octubre"
      case "2025-10-16": return "Jueves 16 de Octubre"
      default: return day
    }
  }

  const getDayCount = (day: string) => speakers.filter((s) => s.day === day).length

  const toggleExpand = (id: number) => {
    setExpandedSpeaker(expandedSpeaker === id ? null : id)
  }

  // ✅ Componente de Bandera Simple (reemplazo de CountryFlag)
  const SimpleFlag = ({ countryCode }: { countryCode?: string }) => {
    if (!countryCode) return null

    const flagMap: Record<string, string> = {
      CO: "🇨🇴",
      CL: "🇨🇱",
      EC: "🇪🇨",
      MX: "🇲🇽",
      IE: "🇮🇪",
      PE: "🇵🇪",
      ES: "🇪🇸",
    }

    return (
      <span className="text-lg" title={countryCode}>
        {flagMap[countryCode] || "🌍"}
      </span>
    )
  }

  return (
    <section id="expositores" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Ponentes Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expertos internacionales que compartirán conocimiento, innovación y experiencias durante los tres días del congreso.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Buscar por nombre, institución, tema o especialidad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-xl transition-all duration-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Day Tabs — SIN "TODOS" */}
        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 p-2 bg-gray-100 rounded-2xl shadow-sm border border-gray-200">
            {[
              { value: "2025-10-14", label: "Martes 14 Oct", count: getDayCount("2025-10-14") },
              { value: "2025-10-15", label: "Miércoles 15 Oct", count: getDayCount("2025-10-15") },
              { value: "2025-10-16", label: "Jueves 16 Oct", count: getDayCount("2025-10-16") },
            ].map((day) => (
              <TabsTrigger
                key={day.value}
                value={day.value}
                className="px-6 py-4 rounded-xl font-medium text-gray-700 transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-green-200"
              >
                <div className="text-center">
                  <div className="text-sm font-semibold">{day.label}</div>
                  <div className="text-xs mt-1 px-2 py-1 bg-green-100 text-green-700 rounded-full w-fit mx-auto">
                    {day.count} ponentes
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedDay} className="mt-8">
            {filteredSpeakers.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl shadow-lg border border-dashed border-gray-300">
                <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron ponentes</h3>
                <p className="text-gray-500 text-lg">Prueba con otros términos o cambia de día.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {Object.entries(groupedSpeakers).map(([day, daySpeakers]) => (
                  daySpeakers.length > 0 && (
                    <div key={day}>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-green-200">
                        {getDayLabel(day)}
                      </h3>
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {daySpeakers.map((speaker) => (
                          <Card
                            key={speaker.id}
                            className="group cursor-pointer overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-500 relative"
                          >
                            {/* ✅ EFECTO HOVER BLANCO SUTIL (reemplazo del rojo-verde-rojo) */}
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl z-0 pointer-events-none"></div>

                            {/* ✅ HEADER CON FOTO O INDICADOR PARA VIRTUAL SIN FOTO */}
                            <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center z-10">
                              {speaker.photo ? (
                                <img
                                  src={speaker.photo}
                                  alt={`Foto de ${speaker.name}`}
                                  className="w-full h-full object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-105"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.style.display = 'none'
                                  }}
                                />
                              ) : speaker.modality === "Virtual" ? (
                                <div className="absolute inset-0 bg-blue-50 flex flex-col items-center justify-center p-4 text-center">
                                  <Globe className="h-8 w-8 text-blue-500 mb-2" />
                                  <p className="text-blue-700 font-medium text-sm">Ponente Virtual</p>
                                  <p className="text-blue-600 text-xs mt-1">Sin foto disponible</p>
                                </div>
                              ) : (
                                <div className="text-center space-y-2">
                                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                                    <User className="h-8 w-8 text-white" />
                                  </div>
                                  <p className="text-xs text-gray-500 font-medium">Sin foto disponible</p>
                                </div>
                              )}

                              {/* Badge de modalidad */}
                              <div className="absolute top-4 right-4 z-10">
                                <Badge
                                  variant="secondary"
                                  className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                                    speaker.modality === "Presencial"
                                      ? "bg-green-100 text-green-800 border border-green-200"
                                      : "bg-blue-100 text-blue-800 border border-blue-200"
                                  }`}
                                >
                                  {speaker.modality}
                                </Badge>
                              </div>
                            </div>

                            <CardContent className="p-6 space-y-4 relative z-10">
                              <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                                  {speaker.name}
                                </h3>
                                <p className="text-sm text-gray-600 font-medium line-clamp-1">{speaker.title}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <GraduationCap className="h-4 w-4 text-green-600" />
                                  <span className="truncate max-w-xs">{speaker.institution}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <MapPin className="h-4 w-4 text-gray-400" />
                                  <span>{speaker.country}</span>
                                  {speaker.countryCode && (
                                    <SimpleFlag countryCode={speaker.countryCode} />
                                  )}
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-lg">
                                  <Clock className="h-4 w-4 text-green-600 flex-shrink-0" />
                                  <span className="font-medium text-gray-800 text-sm">{speaker.time}</span>
                                </div>
                                <div className="p-3 bg-gradient-to-r from-green-50 to-white border border-green-100 rounded-lg">
                                  <h4 className="font-semibold text-gray-800 text-xs mb-1">Tema</h4>
                                  <p className="text-gray-700 font-medium text-sm leading-relaxed line-clamp-2">
                                    {speaker.topic}
                                  </p>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {speaker.expertise.slice(0, 3).map((exp, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs border-gray-300 text-gray-700 hover:bg-gray-100 px-2 py-0.5 rounded-full"
                                  >
                                    {exp}
                                  </Badge>
                                ))}
                                {speaker.expertise.length > 3 && (
                                  <Badge variant="outline" className="text-xs border-gray-300 text-gray-500 hover:bg-gray-100 px-2 py-0.5 rounded-full">
                                    +{speaker.expertise.length - 3}
                                  </Badge>
                                )}
                              </div>

                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleExpand(speaker.id)
                                }}
                                className="w-full mt-2 text-green-700 hover:text-green-800 hover:bg-green-50 font-medium rounded-xl border border-green-200 transition-all duration-300 flex items-center justify-center gap-1"
                              >
                                {expandedSpeaker === speaker.id ? (
                                  <>
                                    <ChevronUp className="h-4 w-4 transition-transform duration-300" /> Cerrar
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="h-4 w-4 transition-transform duration-300" /> Ver más
                                  </>
                                )}
                              </Button>

                              {/* ✅ PANEL EXPANDIDO CON FONDO ROJO MUY BAJO */}
                              {expandedSpeaker === speaker.id && (
                                <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-200 space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
                                  <div>
                                    <h4 className="font-bold text-gray-800 text-sm mb-2">Biografía</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">{speaker.bio}</p>
                                  </div>
                                  {(speaker.email || speaker.phone) && (
                                    <div className="pt-3 border-t border-red-200">
                                      <h4 className="font-bold text-gray-800 text-sm mb-2">Contacto</h4>
                                      <div className="space-y-2 text-sm">
                                        {speaker.email && (
                                          <div className="flex items-center gap-2 text-gray-700">
                                            <Mail className="h-4 w-4 text-red-600" />
                                            <span>{speaker.email}</span>
                                          </div>
                                        )}
                                        {speaker.phone && (
                                          <div className="flex items-center gap-2 text-gray-700">
                                            <span>📞</span>
                                            <span>{speaker.phone}</span>
                                          </div>
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
                  )
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}