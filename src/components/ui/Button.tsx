import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-heading font-bold rounded transition-smooth inline-flex items-center justify-center gap-2'

  const variantClasses = {
    primary: 'bg-gold text-black hover:bg-opacity-90 active:bg-opacity-80',
    secondary: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black active:bg-opacity-80',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
