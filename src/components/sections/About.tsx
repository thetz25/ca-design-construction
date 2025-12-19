'use client'

import { ABOUT_CONTENT, COMPANY_INFO } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal animation="slideRight">
            <div>
              <div className="gold-accent mb-6"></div>
              <h2 className="text-h2 text-black mb-6">{ABOUT_CONTENT.headline}</h2>

              <div className="space-y-4 mb-8">
                {ABOUT_CONTENT.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-6">
                {ABOUT_CONTENT.highlights.map((highlight, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-3xl font-bold text-gold">✓</div>
                    <p className="font-heading font-bold text-black">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal animation="fade">
            <div className="bg-gradient-to-br from-gold to-gray-800 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏗️</div>
                <p className="text-lg font-heading">{COMPANY_INFO.yearsInBusiness}+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
