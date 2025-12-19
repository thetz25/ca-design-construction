'use client'

import { PROJECTS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Portfolio() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3)

  return (
    <section id="portfolio" className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore our portfolio of exceptional designs and construction projects"
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fade"
              delay={index * 0.15}
              duration={0.8}
            >
              <div className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square mb-4 transition-smooth">
                  <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gray-400 flex items-center justify-center group-hover:from-gold/40 group-hover:to-gray-500 transition-smooth">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">📷</div>
                      <p className="text-sm">Image Placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-h4 text-black group-hover:text-gold transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-gold text-black font-heading font-bold px-8 py-3 rounded hover:bg-opacity-90 transition-smooth"
          >
            View All Projects →
          </a>
        </div>
      </Container>
    </section>
  )
}
