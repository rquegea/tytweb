import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactsSection } from "@/components/contacts-section"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="py-24">
          <div className="site-container">
            <ContactsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


