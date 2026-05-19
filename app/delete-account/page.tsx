"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/contexts/language-context"

export default function DeleteAccountPage() {
  const { t } = useLanguage()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [reason, setReason] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-[#f5f5f5] mb-6 text-center">
            {t("deleteYourAccount")}
          </h1>
          <p className="text-[#8a9a9d] text-center mb-8 leading-relaxed">
            {t("deleteAccountDesc")}
          </p>

          {!submitted ? (
            <div className="bg-[#162325] border border-[#2a4245] rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-[#8a9a9d] text-sm">{t("fullName")}</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-[#1e3235] border-[#2a4245] text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-[#c9a86c] mt-1"
                    placeholder={t("enterFullName")}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#8a9a9d] text-sm">{t("email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1e3235] border-[#2a4245] text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-[#c9a86c] mt-1"
                    placeholder={t("enterEmail")}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#8a9a9d] text-sm">{t("phone")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#1e3235] border-[#2a4245] text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-[#c9a86c] mt-1"
                    placeholder={t("enterPhone")}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="reason" className="text-[#8a9a9d] text-sm">{t("reasonForDeletion")}</Label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full mt-1 p-3 bg-[#1e3235] border border-[#2a4245] rounded-md text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-1 focus:ring-[#c9a86c] focus:outline-none resize-none h-24"
                    placeholder={t("reasonPlaceholder")}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="confirm"
                    checked={confirmed}
                    onCheckedChange={(checked) => setConfirmed(checked as boolean)}
                    className="border-[#2a4245] data-[state=checked]:bg-[#c9a86c] data-[state=checked]:border-[#c9a86c] mt-0.5"
                  />
                  <Label htmlFor="confirm" className="text-[#8a9a9d] text-sm leading-tight cursor-pointer">
                    {t("understandPermanent")}
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={!confirmed || !email || !fullName || !phone}
                  className="w-full bg-[#c9a86c] hover:bg-[#b8976b] text-[#0f1a1c] font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t("submitDeletionRequest")}
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-[#162325] border border-[#2a4245] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#c9a86c]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#c9a86c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[#f5f5f5] mb-2">{t("requestSubmitted")}</h2>
              <p className="text-[#8a9a9d]">
                {t("requestSubmittedDesc")}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
