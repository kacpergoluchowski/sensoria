const phone = import.meta.env.VITE_COMPANY_PHONE?.trim() || '500 307 427'
const phoneNumber = phone.replace(/[^\d+]/g, '')

export const companyContact = {
  phone,
  phoneHref: `tel:${phoneNumber.startsWith('+') ? phoneNumber : `+48${phoneNumber}`}`,
}
