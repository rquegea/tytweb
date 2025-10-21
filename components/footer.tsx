export function Footer() {
  return (
    <footer className="bg-white">
      <div className="site-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
          {/* Social Links - Left */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <a
              href="https://www.instagram.com/trucoytrufa/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F0E0E] hover:opacity-70 transition-opacity uppercase body-text"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/company/truco-y-trufa/?originalSubdomain=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F0E0E] hover:opacity-70 transition-opacity uppercase body-text"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.facebook.com/trucoytrufa/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F0E0E] hover:opacity-70 transition-opacity uppercase body-text"
            >
              FACEBOOK
            </a>
            <a
              href="https://areacliente.trucoytrufa.es/login/?redirect_to=https%3A%2F%2Fareacliente.trucoytrufa.es%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F0E0E] hover:opacity-70 transition-opacity uppercase body-text"
            >
              ÁREA CLIENTES
            </a>
          </div>

          {/* Address - Center Left */}
          <div className="md:col-span-3 flex flex-col gap-1">
            <p className="text-[#0F0E0E] uppercase body-text">AV. FRANCISCO SANCHA 4, 2º DCHA</p>
            <p className="text-[#0F0E0E] uppercase body-text">MADRID, 28034</p>
            <p className="text-[#0F0E0E] uppercase body-text">SPAIN</p>
          </div>

          {/* Spacer */}
          <div className="md:col-span-2" />

          <div className="md:col-span-5 flex flex-col items-start md:items-end gap-6">
            <h3 className="text-[#0F0E0E] body-text text-right leading-tight">
              ¿Te gusta
              <br />
              lo que ves?
            </h3>
            <a
              href="/contact"
              className="bg-[#0F0E0E] text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity uppercase body-text font-medium"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-[#0F0E0E] body-text uppercase">2025 © TRUCO&TRUFA</p>
        </div>
      </div>

      {/* Subfooter sutil con organismos colaboradores */}
      <div className="border-t border-neutral-200/50">
        <div className="site-container py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <img src="/partners/cofinanciadoue.png" alt="Cofinanciado por la UE" className="h-8 w-auto" />
            <img src="/partners/fondoseuropeos.png" alt="Fondos Europeos" className="h-8 w-auto" />
            <img src="/partners/ministeriodetrabajo.png" alt="Ministerio de Trabajo" className="h-8 w-auto" />
            <img src="/partners/SEPE_Horizontal_Positivo_cas.jpg" alt="SEPE" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  )
}
