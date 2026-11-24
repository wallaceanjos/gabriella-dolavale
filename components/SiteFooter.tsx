import { ADDRESS, DOCTOR, EMAIL, PHONE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-caramel-700 pt-[70px] pb-[35px] text-[#fffaf7]">
      <div className="container-site">
        <div className="grid gap-[25px] md:grid-cols-[1.2fr_1fr_1fr] md:gap-[60px]">
          <div>
            <p className="font-serif text-4xl">{DOCTOR.shortName}</p>
            <p className="mt-4">
              {DOCTOR.specialty} · {DOCTOR.rqe}
              <br />
              {DOCTOR.crm}
            </p>
          </div>
          <div>
            <p className="font-semibold">CONTATO</p>
            <p className="mt-4">
              <a href={`tel:${PHONE.e164}`} className="no-underline">
                {PHONE.display}
              </a>
              <br />
              <a href={`mailto:${EMAIL}`} className="break-all no-underline">
                {EMAIL}
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold">ENDEREÇO</p>
            <a
              href={ADDRESS.mapsUrl}
              target="_blank"
              rel="noopener"
              aria-label="Abrir endereço no Google Maps"
              className="mt-4 inline-block no-underline"
            >
              {ADDRESS.street}
              <br />
              {ADDRESS.complement}
              <br />
              {ADDRESS.neighborhood} · {ADDRESS.city}
            </a>
          </div>
        </div>
        <p className="mt-[50px] border-t border-blush-light/60 pt-6 text-[10px]">
          As informações deste site têm caráter educativo e não substituem avaliação médica. © {DOCTOR.name}.
        </p>
      </div>
    </footer>
  )
}
