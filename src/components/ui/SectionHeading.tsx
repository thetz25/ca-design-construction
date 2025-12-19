import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  alignment?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={cn(alignmentClasses[alignment], className)}>
      <div className={cn(alignment === 'center' && 'flex justify-center')}>
        <div
          className={cn('gold-accent mb-4', alignment === 'center' && 'mx-auto')}
        ></div>
      </div>
      <h2 className="text-h2 text-black mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
