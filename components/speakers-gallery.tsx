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
} from "lucide-react";

interface Speaker {
  id: number;
  name: string;
  title: string;
  institution: string;
  country: string;
  countryCode?: string;
  day: "2025-10-14" | "2025-10-15" | "2025-10-16";
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
    modality: "Presencial",
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
    name: "Josué David González Coronel",
    photo: "/josue_gonzales.jpg",
    title: "Magíster en Minas, Estudiante de Doctorado",
    institution: "Universidad de Chile",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-14",
    time: "12:00 – 13:00",
    topic: "Planificación Minera: Tecnologías de Descarbonización, Fully Mobile Crusher and Conveyor Systems",
    modality: "Virtual",
    expertise: ["Planificación Minera", "Optimización", "Procesos metalúrgicos", "IPCC"],
    bio: "Josué David González Coronel es Ingeniero en Minas por la Universidad del Azuay (Ecuador) y Magíster en Minería por la Universidad de Chile. Actualmente es estudiante de Doctorado en Minas. Ha sido Jefe de Operaciones en EMICOR C.A., liderando procesos de flotación y lixiviación, y colaboró como investigador en el AMTC de la Universidad de Chile en proyectos sobre planificación minera y tecnologías IPCC. Sus áreas de interés abarcan los procesos metalúrgicos, la optimización de operaciones, la innovación tecnológica en minería y la formación de nuevos profesionales.",
    email: "josue.gonzalez.cor@gmail.com",
  },
  {
    id: 5,
    name: "Diego Geovanny Barzallo Granizo",
    photo: "/DiegoBarzallo.jpg",
    title: "Doctor en Ciencia y Tecnología Química",
    institution: "Universidad de las Islas Baleares, España",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-14",
    time: "14:00 – 15:00",
    topic: "Materiales avanzados y tecnologías de impresión 3D para la detección y eliminación sostenible de contaminantes emergentes en aguas",
    modality: "Presencial",
    expertise: ["Química analítica ambiental", "Sensores portátiles", "Impresión 3D", "Antibióticos en agua", "Biochar", "Extracción en fase sólida"],
    bio: "Diego Barzallo es Doctor en Ciencia y Tecnología Química por la Universidad de las Islas Baleares (España), con calificación Sobresaliente Cum Laude y Mención Internacional. Realizó una estancia de investigación en la Universidade Estadual Paulista (Brasil) enfocada en el desarrollo de metodologías miniaturizadas y materiales avanzados para la detección de antibióticos en aguas. Posee dos maestrías en Ciencia y Tecnología Química, y en Sistemas de Gestión de la Calidad, Medio Ambiente y Responsabilidad Social. Es Ingeniero Químico por la Escuela Superior Politécnica de Chimborazo (Ecuador). Ha sido docente universitario e investigador en España y Ecuador, autor de múltiples artículos científicos en revistas indexadas y conferencista en eventos internacionales. Actualmente se desempeña como investigador postdoctoral en la Universidad de las Islas Baleares, donde trabaja en sensores portátiles y métodos de extracción basados en materiales avanzados.",
    email: "diego.barzallo@espoch.edu.ec",
    phone: "+593 985675145",
  },
  {
    id: 6,
    name: "Douglas Guzmán Amoroso",
    photo: "douglas_guzman.jpg",
    title: "Doctor en Dirección de Proyectos",
    institution: "GAD del Cantón Pastaza, Ecuador",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-14",
    time: "15:00 – 16:00",
    topic: "Implementación de estrategias sostenibles en proyectos de ingeniería ambiental en zonas amazónicas",
    modality: "Presencial",
    expertise: ["Gestión ambiental", "Sostenibilidad", "Dirección de proyectos", "Remediación"],
    bio: "Douglas Guzmán es Ingeniero Ambiental con amplia trayectoria en gestión ambiental, sostenibilidad y dirección de proyectos. Posee maestrías en Gestión de Proyectos y en Gestión Ambiental mención Sostenibilidad, además de un doctorado en Dirección de Proyectos. Ha ejercido cargos de liderazgo en instituciones públicas y privadas, incluyendo su actual función como Director del GAD del Cantón Pastaza. Su experiencia combina la gestión territorial, la consultoría ambiental y la docencia universitaria. Ha participado en proyectos de remediación, conservación de cuencas y desarrollo sostenible, así como en eventos académicos internacionales. Autor de publicaciones sobre desarrollo socioeconómico de comunidades indígenas amazónicas, destaca por su compromiso con la sostenibilidad y la innovación en la gestión ambiental.",
    email: "douguzman9@gmail.com",
    phone: "+593 987899818",
  },
  {
    id: 7,
    name: "Luis Alberto Quevedo Báez",
    photo: "/LuisQuevedo.jpg",
    title: "Doctor en Cambio Climático",
    institution: "Universidad Nacional de Chimborazo, Ecuador",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-14",
    time: "16:30 – 17:30",
    topic: "Biomimesis, oportunidades y desafíos en la Amazonía ecuatoriana",
    modality: "Presencial",
    expertise: ["Turismo rural comunitario", "Cambio climático", "Desarrollo sostenible", "Bioindicadores", "Gestión ambiental", "Biomimética"],
    bio: "Luis Alberto Quevedo Báez es Doctor en Cambio Climático por la Universitat Rovira i Virgili (España), con amplia trayectoria académica e investigadora en temas de sostenibilidad ambiental, turismo y desarrollo territorial. Posee una maestría en Administración Ambiental por la Universidad Nacional de Chimborazo (Ecuador) y un diplomado en Gestión Sostenible del Turismo por la Universidad Nacional del Centro del Perú. Es Ingeniero en Ecoturismo por la Escuela Superior Politécnica de Chimborazo, donde se desempeña como docente e investigador. Ha sido autor y coautor de numerosas publicaciones científicas en revistas internacionales indexadas y capítulos de libros en temas relacionados con turismo sostenible, biodiversidad y cambio climático. Es director del Centro de Investigación para el Desarrollo Sostenible (CIDES) y consultor en proyectos de planificación ambiental y turismo comunitario.",
    email: "lquevedo@espoch.edu.ec",
    phone: "+593 995711232",
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
    topic: "Caudal Ambiental: la forma más robusta de dotar de seguridad hídrica a los ecosistemas acuáticos en una gestión integrada de recursos hídricos",
    modality: "Presencial",
    expertise: ["Ecohidráulica", "Caudales ambientales", "Gestión hídrica", "Modelación de contaminantes"],
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
    photo: "Jorge-Guerrero.png",
    title: "Magíster en Producción Animal con mención en Nutrición Animal",
    institution: "Universidad Técnica de Ambato",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "10:30 – 11:30",
    topic: "Alternativas de antibióticos promotores del crecimiento y resistencia bacteriana",
    modality: "Presencial",
    expertise: ["Producción Animal", "Patología Aviar", "Resistencia microbiana", "Probióticos"],
    bio: "El Profesor Jorge Ricardo Guerrero López es un Ingeniero Zootecnista con una destacada trayectoria en el ámbito académico y profesional. Posee un Magíster en Producción Animal con mención en Nutrición Animal, y Diplomas Superiores en Patología Aviar e Informática Educativa Universitaria. Desde 2001, se desempeña como Profesor Titular en la Facultad de Ciencias Agropecuarias de la Universidad Técnica de Ambato. Su vasta experiencia abarca el sector avícola, con experticia en sanidad y producción animal. Ha realizado importantes contribuciones a través de numerosas publicaciones científicas sobre nutrición, resistencia microbiana y probióticos, y es coautor de libros en avicultura y reproducción. Es reconocido como un referente en el sector agropecuario.",
    email: "jr.guerrero@uta.edu.ec",
    phone: "+593 99 715 0013",
  },
  {
    id: 11,
    name: "Carlos Andrés Mancheno Herrera",
    photo: "/Andres-Mancheno.png",
    title: "Magíster en Reproducción Animal",
    institution: "ESPOCH",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "11:30 – 12:30",
    topic: "Hormona antimulleriana (HAM), usos como biomarcador de fertilidad en programas de transferencia de embriones bovinos",
    modality: "Presencial",
    expertise: ["Reproducción Animal", "Biotecnología Reproductiva", "Producción bovina"],
    bio: "Carlos Andrés Mancheno Herrera: Ingeniero Zootecnista, Magíster en Reproducción Animal. Asesor comercial y técnico desarrollista empresa el Agro 2015 – 2016; técnico docente responsable del Laboratorio de Reproducción Animal de la FCP – ESPOCH – 2016 – 2020; Docente de programas de grado y postgrado; Asesor técnico en ganaderías; CEO de la empresa BEST BREED GENETICS, dedicada a la criopreservación de material genético animal; Editor Jefe Revista Científica RECIENA indexada en Latindex Catálogo 2.0 y Erihplus 2023 – 2024; Ponente en Congresos Internacionales; publicación de libros y artículos científicos en revistas de alto impacto.",
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
    name: "Ruth Barba Vera",
    photo: "/RuthBarba.jpg",
    title: "Doctora en Ingeniería",
    institution: "Escuela Superior Politécnica de Chimborazo (ESPOCH)",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "15:00 – 16:00",
    topic: "Cuando la amenaza está dentro: riesgos internos en intranets universitarias – Lecciones desde la ESPOCH (Ecuador)",
    modality: "Presencial",
    expertise: ["Ciberseguridad", "Riesgos internos", "Seguridad informática", "Intranets universitarias", "Redes SDN", "Digitalización"],
    bio: "Ruth Genoveva Barba Vera es Técnica Docente en la Facultad de Informática y Electrónica de la ESPOCH. Es Doctora en Ingeniería por la Pontificia Universidad Católica del Perú, Magíster en Interconectividad de Redes e Ingeniera en Electrónica y Computación por la ESPOCH. Con más de 15 años de experiencia docente, lidera proyectos de investigación en seguridad de redes, tecnologías de la información y digitalización de archivos fotográficos. Participa en iniciativas de transformación digital del comercio justo alineadas con la declaratoria de la ESPOCH como Universidad por el Comercio Justo. Es Investigadora Senior y Coordinadora Subrogante del Grupo de Investigación en Seguridad Informática y Telemática (SEGINTE), autora de más de 15 artículos científicos en revistas indexadas y ponente en congresos nacionales e internacionales.",
    email: "ruth.barba@espoch.edu.ec",
    phone: "+593 99 123 4567",
  },
  {
    id: 14,
    name: "Juan Manuel Mashinkiash Chinkias",
    photo: "/JuanManuel.jpg", // asumido
    title: "Magíster en Educación Intercultural",
    institution: "Subsecretaría Técnica de Educación Intercultural Bilingüe y la Etnoeducación (SEIBE)",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "16:00 – 17:00",
    topic: "Interculturalidad",
    modality: "Presencial",
    expertise: ["Educación Intercultural", "Etnoeducación", "Políticas educativas", "Cultura Shuar"],
    bio: "Juan Manuel Mashinkiash Chinkias, originario de Sucúa, provincia de Morona Santiago, pertenece a la nacionalidad Shuar. Es Magíster en Educación con mención en Educación Intercultural y Licenciado en Ciencias de la Educación e Investigación de las Culturas Amazónicas por la Universidad Católica de Cuenca. Ha desempeñado funciones como facilitador de liderazgo comunitario en la CONFENIAE, Analista Distrital de Regulación Educativa, Coordinador técnico pedagógico de educación intercultural bilingüe, Investigador en el Departamento de Estudios Interculturales de la Universidad de Cuenca y Rector encargado de la Unidad Educativa Indígena Intercultural Bilingüe “Yamaram Tsawaa”. Actualmente ocupa el cargo de Subsecretario Técnico de Educación Intercultural Bilingüe y la Etnoeducación (SEIBE). Es autor de varias publicaciones, entre ellas la serie “Sabiduría Amazónica” y obras sobre etnoeducación y cultura Shuar.",
    email: "juan.mashinkiash@educacion.gob.ec", // asumido
  },
  {
    id: 15,
    name: "Miguel Ángel Osorio Rivera",
    photo: "/miguel_osorio.jpg",
    title: "Ingeniero Ambiental, Magíster",
    institution: "Escuela Superior Politécnica de Chimborazo – Sede Morona Santiago",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-15",
    time: "17:00 – 17:30",
    topic: "Gestión ambiental y sostenibilidad en la Amazonía",
    modality: "Presencial",
    expertise: ["Gestión ambiental", "Calidad del agua", "Residuos sólidos", "Cambio climático", "Bioindicadores"],
    bio: "Ingeniero Ambiental por la Universidad Nacional de Chimborazo y Máster Universitario en Ingeniería para el Ambiente y el Territorio por la Università della Calabria (Italia). Ha ejercido funciones académicas en la Escuela Superior Politécnica de Chimborazo – Sede Morona Santiago desde 2016 como profesor ocasional a tiempo completo, dictando asignaturas como Hidrología, Contaminación y Tratamiento del Suelo, Tratamiento de Residuos, Microbiología Ambiental, Sistemas de Información Geográfica, entre otras. Se ha desempeñado como Coordinador de la Carrera de Ingeniería Ambiental entre 2021 y 2023, y actualmente ejerce el cargo de Director de la Sede Morona Santiago. Posee experiencia profesional como Técnico Ambiental en el Consorcio Cevallos y Cevallos – Producción e Ingeniería. Ha dirigido trabajos de titulación orientados al tratamiento de aguas residuales, manejo de residuos sólidos y calidad del agua mediante bioindicadores.",
    email: "miguel.osorio@espoch.edu.ec",
    phone: "+593 984577604", // asumido
  },

  // =============== JUEVES 16 DE OCTUBRE ===============
  {
    id: 16,
    name: "María Dolores Santos Vidal",
    photo: "/maria_santos.jpg",
    title: "Magíster en Relaciones Internacionales",
    institution: "ISOCMONITOREO CIA. LTDA.",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "08:00 – 09:00",
    topic: "Fuerza laboral en tiempos de Inteligencia Artificial: Desafíos, habilidades clave y oportunidades",
    modality: "Virtual",
    expertise: ["Inteligencia Artificial", "Mercado Laboral", "Relaciones Internacionales", "Ciberseguridad"],
    bio: "Magíster en relaciones internacionales e ingeniera en sistemas informáticos. Experta en administración empresarial, políticas cibernéticas y seguridad multidimensional. Ha publicado en Springer y es presidenta de AFCEA Internacional - Capítulo Ecuador. Certificada en ciberseguridad, terrorismo, crimen organizado y género en operaciones de paz.",
    email: "mariadolores.santos.v@gmail.com",
    phone: "0984577604",
  },
  {
    id: 17,
    name: "Mary Carmen Vargas Cisneros",
    photo: "/mary_vargas.jpg",
    title: "Magíster en Seguridad Informática",
    institution: "ISOCMONITOREO CIA. LTDA.",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "09:00 – 10:00",
    topic: "Gestión de Incidentes de Seguridad",
    modality: "Virtual",
    expertise: ["Seguridad Informática", "Gestión de Incidentes", "Ciberseguridad Industrial", "ISO 27001"],
    bio: "Ingeniera Informática con más de 20 años de trayectoria en ciberseguridad IT/OT, gestión de riesgos y control interno en sectores críticos. Directora de TIC y Coordinadora del Centro de Ciberseguridad Industrial en Ecuador. Ponente internacional en foros de ciberseguridad en infraestructuras críticas. Reconocida como Líder Destacada en Seguridad de la Información (2022, 2024) y Women in Energy (2023).",
    email: "mcvc75@gmail.com",
    phone: "0984340202",
  },
  {
    id: 18,
    name: "Katherine Merino",
    photo: "/katherine_merino.jpg",
    title: "Ingeniera en Electrónica, Magíster en Seguridad Telemática",
    institution: "ESPOCH, Sede Morona Santiago",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "10:00 – 12:00",
    topic: "Ataques DDoS y Técnicas de Protección",
    modality: "Presencial",
    expertise: ["Ciberseguridad", "Ataques DDoS", "Seguridad Telemática", "Conectividad en la Amazonía"],
    bio: "Ingeniera en Electrónica, Telecomunicaciones y Redes por la ESPOCH, Magíster en Seguridad Telemática y Máster en Dirección y Gestión de TIC por la Universidad Europea de Madrid. Profesora a tiempo completo en la ESPOCH, sede Morona Santiago. Integra el grupo de investigación ESPOCH IA, con publicaciones en revistas indexadas sobre ISO 27001, reciclaje electrónico y calidad del agua amazónica con aprendizaje automático.",
    phone: "+593 983270118",
  },
  {
    id: 19,
    name: "Alejandra Guerrón",
    photo: "/alejandra_guerron.jpg",
    title: "MSc. en Electrónica e Ingeniería Artificial",
    institution: "Tyndall National Institute, Irlanda",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "10:30 – 11:30",
    topic: "Diseño, implementación y evaluación de un sistema de monitoreo de calidad del aire de bajo costo basado en sensores electroquímicos",
    modality: "Virtual",
    expertise: ["Electrónica", "Inteligencia Artificial", "Sensores ambientales", "Monitoreo de calidad del aire"],
    bio: "Estudiante de Doctorado en Tecnologías de la Información y la Comunicación en la Universidad de Calabria (Italia), con una estancia de investigación en Tyndall National Institute (Irlanda, 2025). Posee una maestría en Sistemas de Información – Business Intelligence y Big Data Analytics (UIE – Nebrija, 2021) y un título de Ingeniera Electrónica -Cum Laude por la Universidad San Francisco de Quito (2016). Su investigación doctoral se centra en el diseño de un sistema de monitoreo de calidad del aire de bajo costo y bajo consumo energético, basado en sensores electroquímicos.",
    email: "alejandra.guerron@tyndall.ie",
  },
  {
    id: 20,
    name: "Maritza Fernanda Santillán Escobar",
    photo: "/Maritza-Santillan.png",
    title: "Magíster en Contabilidad y Auditoría",
    institution: "Cooperativa de Ahorro y Crédito San Jorge Ltda.",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "11:30 – 12:30",
    topic: "Importancia del Control Interno en las organizaciones financieras reguladas por la SEPS",
    modality: "Virtual",
    expertise: ["Control Interno", "Auditoría", "Riesgo Operativo", "Normativa SEPS"],
    bio: "Mgs. Maritza Fernanda Santillán Escobar es Licenciada en Auditoría y Contabilidad, es Contadora Pública Autorizada con una Maestría en Auditoría y Contabilidad en la Universidad Nacional de Chimborazo. Cuenta con más de 5 años de experiencia en auditoría interna y externa, especialmente en cooperativas de los segmentos 1, 3 y 4. Está especializada NIA, control interno y cumplimiento normativo SEPS. Ha liderado procesos de implementación de Estructuración de Procesos y Continuidad del Negocios. Actualmente, se desempeña como Auditora Interna en una Cooperativa de Ahorro y Crédito del segmento 3 y es consultora Junior en una empresa de servicios complementarios.",
    email: "maritzasantillane@gmail.com",
    phone: "0993520532",
  },
  {
    id: 21,
    name: "Donal Raúl Gavilanes Aucay",
    photo: "/DONAL.jpeg",
    title: "Magíster en Auditoría Gubernamental y Control",
    institution: "Contraloría General del Estado",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "14:00 – 15:00",
    topic: "Normas de Control Interno en la Administración Pública",
    modality: "Presencial",
    expertise: ["Auditoría Gubernamental", "Control Interno", "Gestión Pública", "Peculado"],
    bio: "Especialista Provincial de Auditoría con amplia experiencia en planificación de auditoría, gestión financiera y control en el sector público. Ex Director Provincial de la Contraloría en Morona Santiago. Autor de publicaciones como 'Gestión Financiera y Peculado en GAD Municipal'.",
    email: "donal.gavilanes@hotmail.com",
    phone: "0980097122",
  },
  {
    id: 22,
    name: "Carlos Gabriel López Bravo",
    photo: "/Carlos-Lopez.png",
    title: "Magíster en Administración de Empresas",
    institution: "Cooperativa Gualaquiza",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "15:00 – 16:00",
    topic: "El rol estratégico de la auditoría en las cooperativas de ahorro y crédito",
    modality: "Presencial",
    expertise: ["Administración de Empresas", "Gestión Cooperativa", "Riesgos Financieros", "Transformación Digital"],
    bio: "Gerente General de Cooperativa Gualaquiza con amplia experiencia en gestión de riesgos, inteligencia de negocios y administración cooperativa. Magíster en Administración de Empresas por la PUCE. Ha implementado modelos de análisis y prevención de riesgos conforme a normativa de la SEPS. Certificado en Transformación Digital y Gerencia de Cooperativas.",
    email: "karlopez_14@hotmail.es",
    phone: "+593 99 139 3075",
  },
  {
    id: 23,
    name: "Jhonnatan Fabián Carguaytongo Silva",
    photo: "/JHONATAN.JPG",
    title: "Magíster en Gestión Financiera y Riesgos",
    institution: "Cooperativa de Ahorro y Crédito Marcabelí Ltda.",
    country: "Ecuador",
    countryCode: "EC",
    day: "2025-10-16",
    time: "16:00 – 17:00",
    topic: "Área contable",
    modality: "Presencial",
    expertise: ["Auditoría", "Gestión de Riesgos", "Análisis Financiero", "Normas SEPS"],
    bio: "Jhonnatan Fabián Carguaytongo Silva es Ingeniero en Contabilidad y Auditoría por la ESPOCH, Magíster en Contabilidad y Auditoría por la UTA y Magíster en Gestión Financiera y Riesgos por la UESS. Actualmente cursa el Doctorado en Economía y Finanzas. Cuenta con amplia experiencia como auditor interno y externo en cooperativas y empresas del sector financiero. Es presidente fundador de la firma de Auditoría CONSULTORES Y AUDITORES C&SCONAUD CIA.LTDA. Ha impartido talleres en temas de auditoría, control interno y análisis financiero. Autor del artículo 'La presión fiscal y la rentabilidad en las cooperativas de ahorro y crédito'.",
    email: "jcarguaytongo@hotmail.com",
    phone: "0967708388",
  },
  {
    id: 24,
    name: "Victor Vimos",
    photo: "/victor_vimos.jpg",
    title: "Candidato Doctoral en Estudios Literarios y Culturales Latinoamericanos",
    institution: "The Ohio State University",
    country: "Perú",
    countryCode: "PE",
    day: "2025-10-16",
    time: "17:00 – 18:00",
    topic: "Relación entre especies y sus contextos de diálogo con el medioambiente y la cultura",
    modality: "Virtual",
    expertise: ["Estudios indígenas", "Humanidades en el Antropoceno", "Ritualidad andina", "Literatura latinoamericana"],
    bio: "Víctor Vimos es candidato a doctor en el programa de Estudios Literarios y Culturales Latinoamericanos en The Ohio State University. Sus áreas de especialización son la cultura y la literatura en Latinoamérica en el siglo XXI, y los rituales y la violencia en la región andina. Sus principales intereses de investigación incluyen el enfoque interdisciplinario entre la antropología y la literatura para la investigación de la actividad ritual en comunidades indígenas. Específicamente, investiga cómo el ritual media la interacción entre humanos y no humanos.",
    email: "vimosvimos.1@buckeyemail.osu.edu",
    phone: "+1 513 629 0540",
  },
];

export function SpeakersGallery() {
  const [selectedDay, setSelectedDay] = useState("2025-10-14");
  const [expandedSpeaker, setExpandedSpeaker] = useState<number | null>(null);

  const filteredSpeakers = speakers.filter((speaker) => speaker.day === selectedDay);

  const getDayLabel = (day: string) => {
    switch (day) {
      case "2025-10-14":
        return "Martes 14 de Octubre";
      case "2025-10-15":
        return "Miércoles 15 de Octubre";
      case "2025-10-16":
        return "Jueves 16 de Octubre";
      default:
        return day;
    }
  };

  const getDayCount = (day: string) => speakers.filter((s) => s.day === day).length;

  const toggleExpand = (id: number) => {
    setExpandedSpeaker(expandedSpeaker === id ? null : id);
  };

  return (
    <section id="expositores" className="py-16 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Ponentes 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expertos internacionales que compartirán conocimiento, innovación y experiencias durante los tres días del
            congreso.
          </p>
        </div>

        {/* Botones de día */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-3 gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-200 max-w-md w-full">
            {[
              { value: "2025-10-14", label: "Martes 14 Oct", count: getDayCount("2025-10-14") },
              { value: "2025-10-15", label: "Miércoles 15 Oct", count: getDayCount("2025-10-15") },
              { value: "2025-10-16", label: "Jueves 16 Oct", count: getDayCount("2025-10-16") },
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
                  {day.count} ponentes
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
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No se encontraron ponentes</h3>
              <p className="text-gray-500 text-lg">Prueba cambiando de día.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 pb-2 border-b-2 border-[#006400]">
                {getDayLabel(selectedDay)}
              </h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredSpeakers.map((speaker) => (
                  <Card
                    key={speaker.id}
                    className="group cursor-pointer overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative"
                  >
                    <div className="relative h-56 bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center">
                      {speaker.photo ? (
                        <img
                          src={speaker.photo}
                          alt={`Foto de ${speaker.name}`}
                          className="max-h-full max-w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="text-center space-y-2">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#006400] to-[#c00000] rounded-full flex items-center justify-center shadow-lg">
                            <User className="h-8 w-8 text-white" />
                          </div>
                          <p className="text-xs text-gray-500 font-medium">Sin foto disponible</p>
                        </div>
                      )}

                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                            speaker.modality === "Presencial"
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-blue-100 text-blue-800 border border-blue-200"
                          }`}
                        >
                          {speaker.modality}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#006400] transition-colors">
                          {speaker.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">{speaker.title}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <GraduationCap className="h-4 w-4 text-[#006400]" />
                          <span>{speaker.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{speaker.country}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                          <Clock className="h-4 w-4 text-[#c00000] flex-shrink-0" />
                          <span className="font-medium text-gray-800">{speaker.time}</span>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-green-50 to-red-50 border border-green-100 rounded-xl">
                          <h4 className="font-semibold text-gray-800 text-sm mb-1">Tema</h4>
                          <p className="text-gray-700 font-medium text-sm leading-relaxed">{speaker.topic}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {speaker.expertise.slice(0, 3).map((exp, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-700 hover:bg-gray-100 px-2.5 py-1 rounded-full"
                          >
                            {exp}
                          </Badge>
                        ))}
                        {speaker.expertise.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-500 hover:bg-gray-100 px-2.5 py-1 rounded-full"
                          >
                            +{speaker.expertise.length - 3}
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
                        className="w-full mt-2 text-[#006400] hover:text-[#004d00] hover:bg-green-50 font-medium rounded-xl border border-green-200 transition-all duration-300 flex items-center justify-center gap-1"
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

                      {expandedSpeaker === speaker.id && (
                        <div className="mt-4 p-5 bg-red-50 rounded-xl border border-red-200 space-y-5 animate-in fade-in slide-in-from-top-2 duration-500">
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm mb-2">Biografía Profesional</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{speaker.bio}</p>
                          </div>
                          {(speaker.email || speaker.phone) && (
                            <div className="pt-4 border-t border-red-200">
                              <h4 className="font-bold text-gray-800 text-sm mb-3">Contacto</h4>
                              <div className="space-y-2 text-sm">
                                {speaker.email && (
                                  <div className="flex items-center gap-3 text-gray-700">
                                    <Mail className="h-4 w-4 text-red-600" />
                                    <span className="font-medium">{speaker.email}</span>
                                  </div>
                                )}
                                {speaker.phone && (
                                  <div className="flex items-center gap-3 text-gray-700">
                                    <span className="text-[#c00000]">📞</span>
                                    <span className="font-medium">{speaker.phone}</span>
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
          )}
        </div>
      </div>
    </section>
  );
}