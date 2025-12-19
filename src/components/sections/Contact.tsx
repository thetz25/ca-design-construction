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

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-heading font-bold text-black mb-4">
                  {CONTACT_INFO.mapTitle}
                </h3>
                <div className="rounded-lg overflow-hidden h-[300px] w-full border border-gray-200 shadow-md">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1937.395937473274!2d121.0069457!3d13.7914164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0f0df9a655fb%3A0xb0f5342791177968!2sPENAWIN!5e0!3m2!1sen!2sph!4v1766153035975!5m2!1sen!2sph" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
