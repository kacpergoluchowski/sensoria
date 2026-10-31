import Button from '../../../shared/components/Button.jsx'
import PhoneLink from '../../../shared/components/PhoneLink.jsx'
import { companyContact } from '../../../config/company.js'

function MobileActions({ onNavigate }) {
  return (
    <>
      <PhoneLink {...companyContact} mobile />
      <Button
        href="/rezerwacja"
        onClick={(event) => onNavigate(event, '/rezerwacja')}
        className="min-h-14 w-full text-base"
      >
        Umów wizytę
      </Button>
    </>
  )
}

export default MobileActions
