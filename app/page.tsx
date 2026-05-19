"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatIsAdgili, WhyChooseAdgili, HowItWorks, GetTheApp } from "@/components/sections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1a1c]">
      <Navbar />
      <HeroSection />
      <WhatIsAdgili />
      <WhyChooseAdgili />
      <HowItWorks />
      <GetTheApp />
      <Footer />
    </main>
  )
}
