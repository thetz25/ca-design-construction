import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-7xl',
    narrow: 'max-w-5xl',
    wide: 'max-w-full',
  }

  return (
    <div className={cn('mx-auto px-4 md:px-6 lg:px-8', sizeClasses[size], className)}>
      {children}
    </div>
  )
}
