'use client'

import { COMPANY_INFO, FOOTER_CONTENT } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { scrollToElement } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <Container className="mb-8">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-gold mb-4">
              {FOOTER_CONTENT.companyName}
            </h3>
            <p className="text-gray-400 text-sm">{COMPANY_INFO.shortDescription}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_CONTENT.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToElement(link.href.replace('#', ''))}
                    className="text-gray-400 hover:text-gold transition-smooth text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (shortened) */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-smooth text-sm">
                  Architectural Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-smooth text-sm">
                  Construction Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-smooth text-sm">
                  Renovation & Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-smooth text-sm">
                  Custom Builds
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-gold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {FOOTER_CONTENT.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black hover:bg-opacity-80 transition-smooth text-sm font-bold"
                  title={link.label}
                >
                  {link.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <Container className="flex flex-col md:flex-row justify-between items-center pt-8">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">{FOOTER_CONTENT.copyright}</p>
        <p className="text-gray-500 text-xs">
          Designed & built with precision by CA Design + Construction
        </p>
      </Container>
    </footer>
  )
}
