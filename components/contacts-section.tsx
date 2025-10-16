export function ContactsSection() {
  return (
    <section id="contacts" className="bg-white py-24">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <h2 className="heading-3 text-center text-[#0F0E0E]">
          <a
            href="mailto:trucoytrufa@trucoytrufa.es"
            className="hover:opacity-80 transition-opacity"
            aria-label="Escríbenos por correo"
          >
            Escríbenos, ¡Cambiemos el mundo!
          </a>
        </h2>

        {/* Slot de video pequeño bajo el título */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-xl rounded-lg overflow-hidden bg-white">
            <video
              src="/videos/video1final.mp4"
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}
