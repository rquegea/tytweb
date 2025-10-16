import { AboutText } from "./about-text"
import { AboutInfoLeft } from "./about-info-left"
import { AboutInfoRight } from "./about-info-right"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-[1800px]">
        {/* Left column: About text + inline services/clients; Right: helper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="space-y-10">
            <AboutText />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <AboutInfoLeft />
              <AboutInfoRight />
            </div>
          </div>
          {/* helper visual eliminado */}
        </div>
      </div>
    </section>
  )
}
