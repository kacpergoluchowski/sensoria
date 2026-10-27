import logo from '../../assets/images/logo.webp'
import { company } from '../../config/company.js'
import { Link } from 'react-router'

function Logo() {
  return (
    <Link
      to="/"
      aria-label={`${company.name} — strona główna`}
      className="flex shrink-0 items-center justify-self-start gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <span className="flex size-12 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-brand/70">
        <img
          src={logo}
          alt=""
          width="48"
          height="48"
          className="size-full object-cover"
        />
      </span>
      <span className="text-[24px] font-extrabold tracking-tight text-brand">
        {company.name}
      </span>
    </Link>
  )
}

export default Logo
