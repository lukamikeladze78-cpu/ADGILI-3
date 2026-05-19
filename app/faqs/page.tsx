"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function FAQsPage() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { qKey: "faqQ1", aKey: "faqA1" },
    { qKey: "faqQ2", aKey: "faqA2" },
    { qKey: "faqQ3", aKey: "faqA3" },
    { qKey: "faqQ4", aKey: "faqA4" },
    { qKey: "faqQ5", aKey: "faqA5" },
    { qKey: "faqQ6", aKey: "faqA6" },
    { qKey: "faqQ7", aKey: "faqA7" },
    { qKey: "faqQ8", aKey: "faqA8" },
    { qKey: "faqQ9", aKey: "faqA9" },
    { qKey: "faqQ10", aKey: "faqA10" },
  ]

  return (
    <main className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-[#f5f5f5] mb-8 text-center">
            {t("faqsTitle")} <span className="text-[#c9a86c]">{t("questions")}</span>
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#162325] border border-[#2a4245] rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1e3235] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#c9a86c] pr-4">{t(faq.qKey)}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#c9a86c] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-[#8a9a9d] leading-relaxed">{t(faq.aKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
