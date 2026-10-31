import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { buttonSizes, buttonVariants } from '../../config/button.js'

function Button({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'default',
}) {
  const colors = buttonVariants[variant] ?? buttonVariants.primary
  const spacing = buttonSizes[size] ?? buttonSizes.default
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
