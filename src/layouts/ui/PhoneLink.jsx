import { Phone } from 'lucide-react'
import { company } from '../../config/company.js'

function PhoneLink({ mobile = false }) {
  return (
    <a
      href={company.phoneHref}
      className={`flex items-center rounded-sm font-extrabold whitespace-nowrap text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${mobile ? 'mt-9 mb-7 gap-4 text-xl' : 'gap-2 text-[14px]'}`}
    >
      <Phone
        size={mobile ? 24 : 16}
        strokeWidth={2.5}
        className="shrink-0 text-brand"
        aria-hidden="true"
      />
      {company.phone}
    </a>
  )
}

export default PhoneLink
