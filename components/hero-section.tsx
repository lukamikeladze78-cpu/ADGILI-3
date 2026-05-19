"use client"

import { useEffect, useState, useMemo } from "react"
import { useLanguage } from "@/contexts/language-context"

function GoldParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#c9a86c] rounded-full opacity-30"
          style={{
            left: `${particle.left}%`,
            bottom: "-10px",
            animation: `particle ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function PhoneMockup() {
  const { t } = useLanguage()
  const [currentScreen, setCurrentScreen] = useState(0)

  const appScreens = useMemo(() => [
    {
      id: 1,
      title: "Restaurant Cards",
      content: (
        <div className="space-y-3">
          <div className="bg-[#1e3235] rounded-xl p-3 border border-[#2a4245]">
            <div className="w-full h-20 bg-[#2a4245] rounded-lg mb-2" />
            <p className="text-xs text-[#f5f5f5] font-medium">Café Stamba</p>
            <p className="text-[10px] text-[#8a9a9d]">{t("georgianCuisine")} • $$</p>
            <button type="button" className="mt-2 w-full bg-[#c9a86c] text-[#0f1a1c] text-xs py-1.5 rounded-lg font-medium">{t("book")}</button>
          </div>
          <div className="bg-[#1e3235] rounded-xl p-3 border border-[#2a4245]">
            <div className="w-full h-20 bg-[#2a4245] rounded-lg mb-2" />
            <p className="text-xs text-[#f5f5f5] font-medium">Shavi Lomi</p>
            <p className="text-[10px] text-[#8a9a9d]">{t("fineDining")} • $$$</p>
            <button type="button" className="mt-2 w-full bg-[#c9a86c] text-[#0f1a1c] text-xs py-1.5 rounded-lg font-medium">{t("book")}</button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Restaurant Detail",
      content: (
        <div className="space-y-3">
          <div className="w-full h-32 bg-[#2a4245] rounded-xl" />
          <h3 className="text-sm font-semibold text-[#f5f5f5]">Café Stamba</h3>
          <div className="flex items-center gap-2">
            <span className="text-[#c9a86c] text-xs">★★★★★</span>
            <span className="text-[10px] text-[#8a9a9d]">4.9 (324 {t("reviews")})</span>
          </div>
          <p className="text-[10px] text-[#8a9a9d]">{t("experienceAuthentic")}</p>
          <button type="button" className="w-full bg-[#c9a86c] text-[#0f1a1c] text-xs py-2 rounded-lg font-medium">{t("reserveTable")}</button>
        </div>
      ),
    },
    {
      id: 3,
      title: "Time Slot Picker",
      content: (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-[#f5f5f5]">{t("selectTime")}</h3>
          <p className="text-[10px] text-[#8a9a9d]">May 15, 2025 • 2 {t("guests")}</p>
          <div className="grid grid-cols-3 gap-2">
            {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"].map((time, i) => (
              <button
                key={time}
                type="button"
                className={`text-[10px] py-2 rounded-lg font-medium transition-all ${
                  i === 2
                    ? "bg-[#c9a86c] text-[#0f1a1c]"
                    : "bg-[#1e3235] text-[#f5f5f5] border border-[#2a4245]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          <button type="button" className="w-full bg-[#c9a86c] text-[#0f1a1c] text-xs py-2 rounded-lg font-medium mt-2">{t("confirmBooking")}</button>
        </div>
      ),
    },
    {
      id: 4,
      title: "Booking Confirmed",
      content: (
        <div className="flex flex-col items-center justify-center h-full py-6">
          <div className="w-16 h-16 rounded-full bg-[#c9a86c] flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#0f1a1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-[#c9a86c] mb-1">{t("bookingConfirmed")}</h3>
          <p className="text-[10px] text-[#8a9a9d] text-center">
            Café Stamba<br />
            May 15, 2025 at 19:00<br />
            2 {t("guests")}
          </p>
        </div>
      ),
    },
  ], [t])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % appScreens.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [appScreens.length])

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#c9a86c]/20 blur-3xl rounded-full scale-75" />
      
      {/* Phone Frame */}
      <div className="relative animate-float">
        <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-[#162325] rounded-[3rem] border-4 border-[#2a4245] shadow-2xl animate-glow overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0f1a1c] rounded-b-2xl z-10" />
          
          {/* Screen Content */}
          <div className="absolute inset-4 top-10 bg-[#0f1a1c] rounded-2xl p-4 overflow-hidden">
            {/* App Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#c9a86c] font-serif font-bold text-lg">ADGILI</span>
              <div className="w-8 h-8 rounded-full bg-[#1e3235]" />
            </div>
            
            {/* Screen Content with Animation */}
            <div className="relative h-[calc(100%-60px)]">
              {appScreens.map((screen, index) => (
                <div
                  key={screen.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentScreen
                      ? "opacity-100 translate-x-0"
                      : index < currentScreen
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  {screen.content}
                </div>
              ))}
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2a4245] rounded-full" />
        </div>
      </div>

      {/* Screen Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {appScreens.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentScreen(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentScreen ? "bg-[#c9a86c] w-6" : "bg-[#2a4245]"
            }`}
            aria-label={`Go to screen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <GoldParticles />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#c9a86c]/10 border border-[#c9a86c]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-[#c9a86c] text-sm font-medium">{t("badge")}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#f5f5f5] leading-tight mb-6 text-balance">
              {t("heroTitle1")}{" "}
              <span className="text-[#c9a86c]">{t("heroTitle2")}</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-[#8a9a9d] mb-8 max-w-lg mx-auto lg:mx-0 text-pretty">
              {t("heroSubtext")}
            </p>

            {/* App Store Buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 border-2 border-[#c9a86c] rounded-xl text-[#c9a86c] hover:bg-[#c9a86c] hover:text-[#0f1a1c] transition-all duration-300"
                aria-label="Download on App Store"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 border-2 border-[#c9a86c] rounded-xl text-[#c9a86c] hover:bg-[#c9a86c] hover:text-[#0f1a1c] transition-all duration-300"
                aria-label="Get it on Google Play"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
