/** Practice data shown across the site. Everything here is already public on the Wix site. */

export const DOCTOR = {
  name: 'Dra. Gabriella Dolavale',
  shortName: 'Gabriella Dolavale',
  specialty: 'Pediatria Integrativa',
  rqe: 'RQE 25313',
  crm: 'CRM 52-92818-6',
} as const

export const PHONE = {
  display: '+55 21 98324-1121',
  e164: '+5521983241121',
} as const

export const EMAIL = 'dragabrielladolavale@gmail.com'
export const COURSE_EMAIL = 'dragabrielladolavale.cursos@gmail.com'

export const ADDRESS = {
  street: 'Avenida Julio de Sá Bierrembach, 200',
  complement: 'Bloco 1B Atlantic, sala 329',
  neighborhood: 'Barra da Tijuca',
  city: 'Rio de Janeiro',
  region: 'RJ',
  postalCode: '22775-028',
  mapsUrl:
    'https://www.google.com/maps/dir//Gabriella+Dolavale+-+Pediatra,+Avenida+julio+de+S%C3%A1+Bierrembach,+200,+Bl+1B+Atlantic,+sala+329+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22775-028/@-22.9712998,-43.3665819,17z',
  geo: { latitude: -22.9712998, longitude: -43.3665819 },
} as const

export const YOUTUBE_URL = 'https://www.youtube.com/@DraGabriellaDolavale'

export const COURSE_ENROLL_URL = 'https://dragabrielladolavale.mindz.com.br/ead/enroll/bem-vindo-bebe/'

/** WhatsApp deep link with a pre-filled message (the message tells the team where the visitor came from). */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${PHONE.e164.slice(1)}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_BOOKING = whatsappUrl('Olá, quero agendar uma consulta com a Dra. Gabriella')
