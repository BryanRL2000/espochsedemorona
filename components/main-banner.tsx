export default function MainBanner() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-green-50 py-16 overflow-hidden">
      {/* Elementos decorativos (círculos y líneas) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-secondary transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 border-2 border-secondary/30 transform rotate-12"></div>

        {/* Líneas conectoras */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
          <path
            d="M100,100 Q400,50 700,150"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-primary/20"
          />
          <path
            d="M150,300 Q450,250 750,350"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-secondary/20"
          />
        </svg>
      </div>

      {/* Logos superpuestos en la parte superior */}
      <div className="absolute top-6 left-0 right-0 flex justify-between items-start px-4 z-0">
        {/* Logo izquierdo: ESPOCH */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl p-2 shadow-sm">
          <img
            src="/espoch_banner.png"
            alt="Logo ESPOCH"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Logo central: SECTEI */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl p-1 shadow-sm">
          <img
            src="/sectei_banner.png"
            alt="Logo SECTEI"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Logo derecho: Congreso de Investigación */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl p-2 shadow-sm">
          <img
            src="/Logo-cictms-vi.jpeg"
            alt="Logo Congreso de Investigación"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Bloque izquierdo (opcional: puedes eliminarlo si ya usas logos arriba) */}
          <div className="flex flex-col items-center lg:items-start space-y-4 opacity-0 lg:opacity-100">
            {/* Este bloque se mantiene solo por compatibilidad; puedes borrarlo si no lo usas */}
          </div>

          {/* Título central */}
          <div className="text-center flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              VI CONGRESO INTERNACIONAL
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              DE CIENCIA Y TECNOLOGÍA
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6">
              MORONA SANTIAGO 2026
            </h3>

            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">VI</span>
              </div>
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CICTMS</span>
              </div>
            </div>

            <p className="text-gray-800 text-lg mb-4">CONGRESO INTERNACIONAL DE</p>
            <p className="text-gray-800 text-lg font-semibold">CIENCIA Y TECNOLOGÍA</p>
            <p className="text-gray-700 text-base">MORONA SANTIAGO 2026</p>
          </div>

          {/* Tarjeta de información */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200">
              <h4 className="font-bold text-primary text-lg mb-3">Fechas del Evento</h4>
              <p className="text-gray-900 font-semibold mb-2">14 de Abril</p>
              <p className="text-gray-900 font-semibold mb-4">2026</p>

              <h4 className="font-bold text-secondary text-lg mb-3">Ubicación</h4>
              <p className="text-gray-900 font-semibold mb-2">Salón Azul</p>
              <p className="text-gray-900 font-semibold mb-2">Consejo Provincial</p>
              {/* Tarjeta de información <p className="text-gray-900 text-sm mb-2">Espoch-Sede Macas</p>
              <p className="text-gray-900 text-sm">Morona Santiago</p>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}