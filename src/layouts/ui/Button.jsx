import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

function Button({ children, href, onClick, className = '' }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-booking px-7 py-3 text-[14px] font-bold whitespace-nowrap text-white transition-colors hover:bg-booking-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-booking ${className}`}
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
