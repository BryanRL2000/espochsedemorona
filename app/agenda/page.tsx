import { Navigation } from "@/components/navigation"
import { AgendaSection } from "@/components/agenda-section"

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 relative overflow-hidden">
      {/* Fondo con imagen difuminada */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-8 blur-sm"
        style={{
          backgroundImage: "url('/espoch-macas-campus-building-modern-university-arc.jpg')",
        }}
      ></div>

      {/* Overlay blanco translúcido para legibilidad */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <AgendaSection />
        </div>
      </div>
    </main>
  )
}