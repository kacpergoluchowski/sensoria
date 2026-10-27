export const company = {
  name: import.meta.env.VITE_COMPANY_NAME,
  phone: import.meta.env.VITE_COMPANY_PHONE,
  phoneHref: `tel:${import.meta.env.VITE_COMPANY_PHONE_E164}`,
}
