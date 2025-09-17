import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappGroupLink = "https://chat.whatsapp.com/JxqjrlIA4etFjefs2Lhvlc"

  return (
    <a
      href={whatsappGroupLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#006400] hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Unirse al grupo de WhatsApp del congreso"
      title="Únete al grupo de WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
