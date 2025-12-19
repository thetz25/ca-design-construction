'use client'

import { useEffect, useRef } from 'react'

interface UseScrollRevealOptions {
  threshold?: number | number[]
  once?: boolean
  margin?: string
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, once = true, margin = '0px' } = options
  const ref = useRef<HTMLDivElement>(null)
  const hasBeenVisible = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasBeenVisible.current = true
          entry.target.dispatchEvent(new Event('reveal'))
          if (once) {
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold, rootMargin: margin }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once, margin])

  return ref
}
