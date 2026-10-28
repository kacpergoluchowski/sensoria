import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

function Button({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'default',
}) {
  const colors =
    variant === 'secondary'
      ? 'border border-ink/10 bg-white text-ink shadow-sm hover:bg-slate-50'
      : 'bg-booking text-white hover:bg-booking-hover'
  const spacing =
    size === 'large'
      ? 'min-h-14 px-10 py-4 text-base'
      : 'min-h-11 px-7 py-3 text-[14px]'
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 rounded-full font-bold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-booking ${colors} ${spacing} ${className}`}
    >
      {children}
      <ArrowRight
        size={16}
        strokeWidth={1.8}
        className="shrink-0"
        aria-hidden="true"
      />
    </Link>
  )
}

export default Button
