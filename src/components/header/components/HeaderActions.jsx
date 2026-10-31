import Button from '../../../shared/components/Button.jsx'
import PhoneLink from '../../../shared/components/PhoneLink.jsx'
import { companyContact } from '../../../config/company.js'

function HeaderActions() {
  return (
    <div className="desktop:flex hidden items-center justify-self-end gap-6">
      <PhoneLink {...companyContact} />
      <Button href="/rezerwacja">Umów wizytę</Button>
    </div>
  )
}

export default HeaderActions
