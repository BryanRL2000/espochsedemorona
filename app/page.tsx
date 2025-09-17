import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { KeynoteCarousel } from "@/components/keynote-carousel"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <KeynoteCarousel />
    </main>
  )
}
