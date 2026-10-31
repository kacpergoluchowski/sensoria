import logo from '../../assets/images/logo.webp'
import { Link } from 'react-router'

function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Sensoria — strona główna"
      className="flex min-w-0 max-w-full items-center justify-self-start gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <span className="relative block h-16 w-[220px] max-w-full overflow-hidden header:w-[260px]">
        <img
          src={logo}
          alt=""
          width="640"
          height="320"
          className="absolute top-1/2 h-auto w-full -translate-y-1/2"
        />
      </span>
    </Link>
  )
}

export default Logo
