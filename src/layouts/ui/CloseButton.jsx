import { X } from 'lucide-react'

function CloseButton({ onClick, label = 'Zamknij', className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex size-11 cursor-pointer items-center justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-brand ${className}`}
    >
      <X size={30} strokeWidth={1.6} aria-hidden="true" />
    </button>
  )
}

export default CloseButton
