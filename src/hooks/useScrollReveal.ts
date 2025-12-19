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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once, margin])

  return ref
}
