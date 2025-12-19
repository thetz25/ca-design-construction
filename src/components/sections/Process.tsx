'use client'

import { PROCESS_STEPS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Our Process"
          subtitle="A transparent, collaborative approach from concept to completion"
          className="mb-16"
        />

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between mb-12">
            {PROCESS_STEPS.map((step, index) => (
              <ScrollReveal
                key={step.number}
                animation="slideUp"
                delay={index * 0.15}
                duration={0.6}
              >
                <div className="flex flex-col items-center flex-1">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-4 text-white font-heading font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center max-w-xs">{step.description}</p>

                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute left-full w-24 h-1 bg-gradient-to-r from-gold to-transparent"></div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal
              key={step.number}
              animation="slideUp"
              delay={index * 0.15}
              duration={0.6}
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg flex-shrink-0">
                    {step.number}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-gold to-gray-300 my-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-heading font-bold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
