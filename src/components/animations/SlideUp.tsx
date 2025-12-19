'use client'

import { motion } from 'framer-motion'

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  distance?: number
}

export function SlideUp({ children, delay = 0, duration = 0.8, distance = 20 }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
