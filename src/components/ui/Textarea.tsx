import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export function Textarea({ label, error, helperText, className, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-black mb-2">{label}</label>
      )}
      <textarea
        className={cn(
          'w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-black',
          'transition-smooth focus:outline-none focus:border-gold resize-none',
          error && 'border-red-500',
          className
        )}
        rows={5}
        {...props}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      {helperText && !error && <p className="text-sm text-gray-500 mt-1">{helperText}</p>}
    </div>
  )
}
