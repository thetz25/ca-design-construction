'use client'

import { TESTIMONIALS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          title="Client Testimonials"
          subtitle="Hear from our satisfied clients about their experience"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              animation="slideUp"
              delay={index * 0.1}
              duration={0.6}
            >
              <Card className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic flex-grow mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-heading font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
