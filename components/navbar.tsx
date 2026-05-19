"use client"

import { useState } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useLanguage, Language } from "@/contexts/language-context"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsModalOpen(false)
    setFormData({ fullName: "", email: "", phone: "", message: "", agreeToTerms: false })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1a1c]/90 backdrop-blur-md border-b border-[#2a4245]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-serif text-[#c9a86c] font-bold tracking-wide">
              ADGILI
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Language Toggle */}
            <div className="flex items-center bg-[#1e3235] rounded-full p-1">
              {(["EN", "GE", "RU"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 md:px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all duration-300 ${
                    language === lang
                      ? "bg-[#c9a86c] text-[#0f1a1c]"
                      : "text-[#c9a86c] hover:text-[#dfc291]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Get in Touch Button */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-[#c9a86c] hover:bg-[#dfc291] text-[#0f1a1c] font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300"
                >
                  <span className="hidden sm:inline">{t("getInTouch")}</span>
                  <span className="sm:hidden">{t("contact")}</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#162325] border-[#2a4245] text-[#f5f5f5] max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif text-[#c9a86c] text-center">
                    {t("contactModalTitle")}
                  </DialogTitle>
                  <DialogDescription className="text-[#8a9a9d] text-center">
                    {t("tellUsHow")}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="fullName" className="text-[#8a9a9d] text-sm">{t("fullName")}</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-[#1e3235] border-[#2a4245] text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-[#c9a86c]"
                      placeholder={t("enterFullName")}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#8a9a9d] text-sm">{t("email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#1e3235] border-[#2a4245] text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-[#c9a86c]"
                      placeholder={t("enterEmail")}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#8a9a9d] text-sm">{t("phone")}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#1e3235] border-[#2a4245] text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-[#c9a86c]"
                      placeholder={t("enterPhone")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-[#8a9a9d] text-sm">{t("howCanWeHelp")}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-[#1e3235] border-[#2a4245] text-[#f5f5f5] focus:border-[#c9a86c] focus:ring-[#c9a86c] min-h-[100px]"
                      placeholder={t("tellUsHow")}
                      required
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                      className="border-[#2a4245] data-[state=checked]:bg-[#c9a86c] data-[state=checked]:border-[#c9a86c] mt-0.5"
                    />
                    <Label htmlFor="terms" className="text-[#8a9a9d] text-sm leading-tight">
                      {t("agreeToTerms")}
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    disabled={!formData.agreeToTerms}
                    className="w-full bg-[#c9a86c] hover:bg-[#dfc291] text-[#0f1a1c] font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t("submit")}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  )
}
