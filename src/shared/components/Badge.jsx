function Badge({ children, icon, className = '' }) {
  return (
    <p
      className={`inline-flex max-w-full items-center gap-3 rounded-full bg-[#ffede7] px-5 py-2.5 text-sm leading-6 font-normal text-[#75645e] sm:text-base ${className}`}
    >
      {icon}
      <span>{children}</span>
    </p>
  )
}

export default Badge
