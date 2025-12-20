'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PROJECTS } from '@/lib/constants'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Lightbox } from '@/components/ui/Lightbox'

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3)

  useEffect(() => {
    if (selectedProject) {
      // Start with the main image
      setGalleryImages([selectedProject.image])

      // Fetch gallery from API
      fetch(`/api/gallery?projectId=${selectedProject.id}`)
        .then(res => res.json())
        .then(data => {
          if (data.images && data.images.length > 0) {
            setGalleryImages(data.images)
          }
        })
        .catch(err => console.error('Failed to load gallery:', err))
    } else {
      setGalleryImages([])
    }
  }, [selectedProject])

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
              <div
                className="group cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square mb-4 transition-smooth">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth"
                  />
                  {/* Overlay Hint */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Gallery
                    </span>
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

      <Lightbox
        images={galleryImages}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
