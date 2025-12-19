'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: 'fade' | 'slideUp' | 'slideRight'
  delay?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  const animationVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants[animation]}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
