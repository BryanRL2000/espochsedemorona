import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";

// --- Componentes de Apoyo ---

const ContactItem = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-3 text-gray-700 hover:text-[#c00000] transition-colors group">
    <Icon className="h-5 w-5 text-[#c00000] flex-shrink-0 group-hover:scale-110 transition-transform" />
    <span className="font-medium">{text}</span>
  </div>
);

const ExternalButton = ({ href, label, icon: Icon = ExternalLink, variant = "outline" as const }: { href: string; label: string; icon?: any, variant?: "outline" | "default" }) => (
  <Button
    variant={variant}
    size="lg"
    className="w-full justify-between border-2 border-[#c00000] text-[#c00000] hover:border-[#006400] hover:text-[#006400] hover:bg-green-50 transition-all duration-300 font-bold group"
    asChild
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="flex items-center gap-2 italic">{label}</span>
      <Icon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
    </a>
  </Button>
);

// --- Página Principal ---

export default function ContactosPage() {
  const carreras = [
    "Tecnologías de la Información",
    "Minas",
    "Contabilidad y Auditoría",
    "Ambiental",
    "Zootecnia",
    "Derecho",
  ];

  return (
    <main className="min-h-screen relative font-sans selection:bg-[#c00000] selection:text-white">
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/ciencia.jpg"
          alt="Fondo Institucional ESPOCH"
          fill
          className="object-cover brightness-[0.85]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* HEADER SECTION */}
          <header className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl uppercase tracking-tighter">
              Contactos <span className="text-[#c00000] drop-shadow-none bg-white px-2">e Información</span>
            </h1>
            <p className="text-xl text-white/90 font-medium drop-shadow max-w-2xl mx-auto italic">
              Conecta con la excelencia académica en el corazón de la Amazonía.
            </p>
          </header>

          <div className="space-y-12">
            {/* MAIN CAMPUS CARD */}
            <Card className="overflow-hidden bg-white/95 backdrop-blur-xl border-none shadow-2xl rounded-3xl group">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[400px]">
                    <Image
                      src="/SEDE.jpg"
                      alt="ESPOCH Sede Morona Santiago"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-black text-[#c00000] mb-6 tracking-tight">
                      ESPOCH SEDE MORONA SANTIAGO
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                      "Le damos la bienvenida a nuestra sede en Macas. Aquí, la naturaleza se fusiona con la excelencia académica para potenciar su formación profesional con tecnología de vanguardia."
                    </p>
                    <div className="grid sm:grid-cols-1 gap-4 border-t border-gray-100 pt-8">
                      <ContactItem icon={MapPin} text="Macas, Morona Santiago, Ecuador" />
                      <ContactItem icon={Phone} text="+593 (03) 2998-200" />
                      <ContactItem icon={Mail} text="VIcictms2026@espoch.edu.ec" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* INFO GRID */}
            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* ACADEMIC OFFER */}
              <div className="space-y-8">
                <Card className="bg-white/95 backdrop-blur-md border-none shadow-xl rounded-2xl h-full border-l-8 border-l-[#c00000]">
                  <CardHeader>
                    <CardTitle className="text-[#c00000] flex items-center gap-3 text-2xl font-black uppercase italic">
                      <Globe className="h-7 w-7" />
                      Oferta Académica
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-700">
                    <p className="font-medium italic">Instalaciones modernas en un entorno único y estimulante.</p>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="font-black text-[#c00000] mb-4 uppercase tracking-widest text-sm">Pregrado:</h4>
                      <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                        {carreras.map((carrera, i) => (
                          <li key={i} className="flex items-center gap-2 font-bold text-gray-800 hover:text-[#c00000] transition-colors cursor-default group">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c00000] group-hover:w-4 transition-all" />
                            {carrera}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="default"
                      className="bg-[#c00000] hover:bg-[#a00000] text-white font-bold px-8 rounded-full shadow-lg shadow-[#c00000]/20 active:scale-95 transition-all"
                      asChild
                    >
                      <a href="https://www.espoch.edu.ec/sms-2/" target="_blank" rel="noopener noreferrer">
                        Explorar Carreras <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* RESOURCES */}
                <Card className="bg-white/95 backdrop-blur-md border-none shadow-xl rounded-2xl border-l-8 border-l-[#006400]">
                  <CardHeader>
                    <CardTitle className="text-[#006400] text-2xl font-black uppercase italic">Enlaces Rápidos</CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4">
                    <ExternalButton 
                      href="https://chat.whatsapp.com/JxqjrlIA4etFjefs2Lhvlc" 
                      label="WhatsApp" 
                      icon={MessageCircle} 
                    />
                    <ExternalButton 
                      href="https://www.espoch.edu.ec/sms-2/" 
                      label="Sitio Web" 
                      icon={Globe} 
                    />
                  </CardContent>
                </Card>
              </div>

              {/* VIDEO SECTION */}
              <div className="h-full">
                <Card className="bg-black/90 backdrop-blur-sm border-4 border-white/20 shadow-2xl rounded-3xl h-full flex flex-col overflow-hidden group">
                  <div className="bg-[#c00000] py-4 px-6">
                    <h3 className="text-white text-center font-black uppercase italic tracking-wider flex items-center justify-center gap-3">
                      <span className="animate-pulse">🔴</span> Experiencia ESPOCH Macas
                    </h3>
                  </div>
                  <CardContent className="p-0 flex-grow relative flex items-center bg-black">
                    <div className="w-full aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/lNye4q8wN6M?modestbranding=1&rel=0"
                        title="ESPOCH Morona Santiago Video"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                  <div className="p-6 bg-white/10 text-white/80 text-center text-sm font-medium italic backdrop-blur-md">
                    "Formando líderes para el desarrollo sustentable del país"
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}