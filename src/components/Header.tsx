'use client'

import { useState } from 'react'
import Image from 'next/image'
import { scrollToElement } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const NAV_LINKS = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Why Us', href: 'why-choose-us' },
  { label: 'Process', href: 'process' },
  { label: 'Testimonials', href: 'testimonials' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    scrollToElement(href, 80)
    setIsMenuOpen(false)
  }

  const handleContactClick = () => {
    scrollToElement('contact', 80)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.jpg"
              alt="CA Design + Construction"
              width={48}
              height={48}
              className="h-12 w-auto rounded"
              priority
            />
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-gold text-sm leading-tight">CA Design</p>
              <p className="font-heading font-bold text-white text-xs leading-tight">
                + Construction
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-gold transition-smooth font-medium text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={handleContactClick} size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 space-y-3 border-t border-gold/20 pt-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-gold/10 rounded transition-smooth font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <Button onClick={handleContactClick} className="w-full" size="sm">
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
