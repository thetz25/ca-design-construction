'use client'

import { WHY_CHOOSE_US } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          title="Why Choose CA Design + Construction"
          subtitle="We combine expertise, integrity, and innovation in every project"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="slideUp"
              delay={index * 0.1}
              duration={0.6}
            >
              <Card className="text-center flex flex-col items-center h-full">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-heading font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
