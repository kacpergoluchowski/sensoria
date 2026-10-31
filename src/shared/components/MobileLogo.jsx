import Logo from './Logo.jsx'

function MobileLogo({ onClick }) {
  return (
    <div className="mb-9">
      <Logo onClick={onClick} />
    </div>
  )
}

export default MobileLogo
