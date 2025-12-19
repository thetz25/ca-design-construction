'use client'

import { COMPANY_INFO, CONTACT_INFO } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ContactForm'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Ready to start your project? Contact us today for a consultation"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <ScrollReveal animation="slideUp" duration={0.6}>
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <h3 className="font-heading font-bold text-black mb-2">
                  {CONTACT_INFO.phoneLabel}
                </h3>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-gold hover:text-gold/80 transition-smooth text-lg"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-heading font-bold text-black mb-2">
                  {CONTACT_INFO.emailLabel}
                </h3>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gold hover:text-gold/80 transition-smooth text-lg"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-heading font-bold text-black mb-2">
                  {CONTACT_INFO.addressLabel}
                </h3>
                <p className="text-gray-700 leading-relaxed">{COMPANY_INFO.address}</p>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-heading font-bold text-black mb-4">
                  {CONTACT_INFO.mapTitle}
                </h3>
                <div className="bg-gradient-to-br from-gold/20 to-gray-300 rounded-lg aspect-square flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p>Map Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal animation="slideUp" delay={0.2} duration={0.6} className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-h3 text-black mb-2">{CONTACT_INFO.formTitle}</h3>
              <p className="text-gray-600 mb-8">{CONTACT_INFO.formSubtitle}</p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
