"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0f1a1c] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-serif text-[#c9a86c] font-bold tracking-wide">
              ADGILI
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/faqs"
              className="text-[#8a9a9d] hover:text-[#c9a86c] transition-colors text-sm"
            >
              {t("faqs")}
            </Link>
            <Link
              href="/privacy"
              className="text-[#8a9a9d] hover:text-[#c9a86c] transition-colors text-sm"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/terms"
              className="text-[#8a9a9d] hover:text-[#c9a86c] transition-colors text-sm"
            >
              {t("appTermsConditions")}
            </Link>
            <Link
              href="/website-terms"
              className="text-[#8a9a9d] hover:text-[#c9a86c] transition-colors text-sm"
            >
              {t("websiteTermsConditions")}
            </Link>
            <Link
              href="/business-terms"
              className="text-[#8a9a9d] hover:text-[#c9a86c] transition-colors text-sm"
            >
              {t("businessTermsConditions")}
            </Link>
            <Link
              href="/delete-account"
              className="text-[#8a9a9d] hover:text-[#c9a86c] transition-colors text-sm"
            >
              {t("deleteAccount")}
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a86c]/50 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#8a9a9d] text-sm">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
