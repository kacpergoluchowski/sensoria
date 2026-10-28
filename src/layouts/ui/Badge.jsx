function Badge({ children, className = '' }) {
  return (
    <p
      className={`inline-flex rounded-full bg-[#def3ed] px-5 py-2.5 text-sm font-medium text-[#39577b] sm:text-base ${className}`}
    >
      {children}
    </p>
  )
}

export default Badge
