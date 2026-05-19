"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPage() {
  const { t } = useLanguage()

  const sections = [
    { titleKey: "privacySection1Title", contentKey: "privacySection1" },
    { titleKey: "privacySection2Title", contentKey: "privacySection2" },
    { titleKey: "privacySection3Title", contentKey: "privacySection3" },
    { titleKey: "privacySection4Title", contentKey: "privacySection4" },
    { titleKey: "privacySection5Title", contentKey: "privacySection5" },
    { titleKey: "privacySection6Title", contentKey: "privacySection6" },
    { titleKey: "privacySection7Title", contentKey: "privacySection7" },
  ]

  return (
    <main className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-[#f5f5f5] mb-8 text-center">
            {t("privacyTitle")} <span className="text-[#c9a86c]">{t("policy")}</span>
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
