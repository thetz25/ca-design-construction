'use client'

import { SERVICES } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive design and construction solutions tailored to your needs"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.id}
              animation="slideUp"
              delay={index * 0.1}
              duration={0.6}
            >
              <Card className="h-full flex flex-col">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-h4 text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a href="#contact" className="text-gold font-heading font-bold hover:text-gold/80 transition-smooth">
                    Learn More →
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
