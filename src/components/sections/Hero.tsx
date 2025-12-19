'use client'

import { HERO_CONTENT } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { scrollToElement } from '@/lib/utils'

export function Hero() {
  const handleCtaClick = () => {
    scrollToElement('contact', 100)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <FadeIn duration={0.8}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
            {HERO_CONTENT.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.8}>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {HERO_CONTENT.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleCtaClick}>
              {HERO_CONTENT.ctaText}
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <FadeIn delay={0.8} duration={1}>
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <p className="text-sm text-gray-400">Scroll to explore</p>
            <svg
              className="w-6 h-6 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
