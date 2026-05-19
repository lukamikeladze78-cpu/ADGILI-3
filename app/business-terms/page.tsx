"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function BusinessTermsPage() {
  const { t } = useLanguage()

  const sections = [
    { title: t("businessSection1Title"), content: t("businessSection1") },
    { title: t("businessSection2Title"), content: t("businessSection2") },
    { title: t("businessSection3Title"), content: t("businessSection3") },
    { title: t("businessSection4Title"), content: t("businessSection4") },
    { title: t("businessSection5Title"), content: t("businessSection5") },
    { title: t("businessSection6Title"), content: t("businessSection6") },
  ]

  return (
    <div className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              <span className="text-[#c9a86c]">{t("businessTermsTitle")}</span>{" "}
              <span className="text-white">{t("businessTermsTitle2")}</span>
            </h1>
            <p className="text-[#8a9a9d]">
              {t("copyright")}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-[#1a2a2d] rounded-xl p-6 md:p-8 border border-[#2a3a3d]"
              >
                <h2 className="text-xl md:text-2xl font-serif text-[#c9a86c] mb-4">
                  {section.title}
                </h2>
                <p className="text-[#8a9a9d] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
