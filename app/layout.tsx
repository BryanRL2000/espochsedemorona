import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "V Congreso Internacional de Ciencia y Tecnología Morona Santiago 2025",
  description: "Innovación, Conocimiento y Sostenibilidad para el Desarrollo Amazónico - ESPOCH Sede Morona Santiago",
  generator: "v0.app",
  keywords: "congreso, ciencia, tecnología, ESPOCH, Morona Santiago, Amazon, investigación, innovación",
  authors: [{ name: "ESPOCH Sede Morona Santiago" }],
  openGraph: {
    title: "VCICTMS 2025 - V Congreso Internacional de Ciencia y Tecnología",
    description: "Innovación, Conocimiento y Sostenibilidad para el Desarrollo Amazónico",
    type: "website",
    locale: "es_EC",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Header />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
