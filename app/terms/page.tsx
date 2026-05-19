"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function TermsPage() {
  const { t } = useLanguage()

  const sections = [
    { titleKey: "termsSection1Title", contentKey: "termsSection1" },
    { titleKey: "termsSection2Title", contentKey: "termsSection2" },
    { titleKey: "termsSection3Title", contentKey: "termsSection3" },
    { titleKey: "termsSection4Title", contentKey: "termsSection4" },
    { titleKey: "termsSection5Title", contentKey: "termsSection5" },
    { titleKey: "termsSection6Title", contentKey: "termsSection6" },
    { titleKey: "termsSection7Title", contentKey: "termsSection7" },
    { titleKey: "termsSection8Title", contentKey: "termsSection8" },
  ]

  return (
    <main className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-[#f5f5f5] mb-8 text-center">
            {t("termsTitle")} <span className="text-[#c9a86c]">{t("terms")}</span>
          </h1>
          <div className="bg-[#162325] border border-[#2a4245] rounded-xl p-8 text-[#8a9a9d] space-y-8">
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-xl font-semibold text-[#c9a86c] mb-3">{t(section.titleKey)}</h2>
                <p className="leading-relaxed">{t(section.contentKey)}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
