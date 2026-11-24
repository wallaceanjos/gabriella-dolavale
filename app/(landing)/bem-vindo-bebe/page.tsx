import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'
import { absoluteUrl, SITE_NAME, siteUrl } from '@/lib/seo'
import { COURSE_EMAIL, COURSE_ENROLL_URL, DOCTOR } from '@/lib/site'
import { assetPath } from '@/lib/paths'

const DESCRIPTION =
  'Curso online da Dra. Gabriella Dolavale: um guia prático e acolhedor do pré-natal à rotina em casa com o recém-nascido. 21 aulas, 2 bônus, certificado e 365 dias de acesso.'

export const metadata: Metadata = {
  title: 'Curso Bem-vindo, bebê',
  description: DESCRIPTION,
  alternates: { canonical: '/bem-vindo-bebe/' },
  openGraph: {
    title: `Curso Bem-vindo, bebê | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/bem-vindo-bebe/',
    images: [{ url: '/images/curso-bem-vindo-bebe.webp', width: 900, height: 1350, alt: 'Curso Bem-vindo, bebê' }],
  },
}

const PRICE = { installments: '12x de R$ 49,75', total: 'R$ 597,00', totalValue: 597 }

const FACTS = [
  { value: '2 horas', label: 'de conteúdo' },
  { value: '21 aulas', label: 'práticas' },
  { value: '2 bônus', label: 'sono e alimentação' },
  { value: '365 dias', label: 'de acesso' },
  { value: 'Certificado', label: 'ao concluir' },
]

const BENEFITS = [
  {
    title: 'Orientação clara',
    text: 'Entenda o que acontece da maternidade à chegada em casa, com conteúdo direto e baseado em evidências.',
  },
  {
    title: 'Cuidado possível',
    text: 'Aprenda condutas práticas para banho, sono, amamentação, pele, fraldas, rotina e os desafios mais frequentes.',
  },
  {
    title: 'Mais confiança',
    text: 'Prepare a família e a rede de apoio para tomar decisões com mais calma, consciência e presença.',
  },
]

const OUTCOMES = [
  { title: 'Preparar o pré-natal com o pediatra', text: 'Família e rede de apoio no centro do cuidado desde antes do nascimento.' },
  { title: 'Compreender os primeiros dias', text: 'Sala de parto, golden hour, exames, rotina da maternidade e alta.' },
  { title: 'Apoiar a amamentação', text: 'Informações sobre leite materno, fórmulas e situações em que é preciso buscar ajuda.' },
  { title: 'Cuidar do bebê em casa', text: 'Visitas, fralda, banho, umbigo, roupas, pele, sono e rotina.' },
  { title: 'Reconhecer cuidados essenciais', text: 'Primeira consulta, vacinas, suplementação e uso responsável de medicações.' },
  { title: 'Cuidar também de quem cuida', text: 'Um olhar atento para a puérpera, o vínculo e a saúde emocional da família.' },
]

const MODULES = [
  {
    label: 'Parte 1 · Preparação, nascimento e maternidade',
    lessons: [
      'A importância do pré-natal com o pediatra',
      'Primeiro dia do recém-nascido na maternidade',
      'Testes e exames do recém-nascido',
      'Amamentação pelo olhar pediátrico',
      'Leite materno, fórmulas infantis e leite de vaca',
      'Fórmulas infantis: indicações',
      '“Estamos de alta!” E agora?',
    ],
  },
  {
    label: 'Parte 2 · Cuidados com o recém-nascido em casa',
    lessons: [
      'Visitas e proteção do bebê',
      'Troca de fralda e prevenção de assaduras',
      'Hora do banho',
      'Cuidados com o umbigo',
      'Escolhendo a roupa certa',
      'Sono seguro',
      'Cuidados com a pele',
      'Cólica e refluxo',
      'Bicos e chupeta',
      'Rotina e adaptação da família',
    ],
  },
  {
    label: 'Parte 3 · Acompanhamento e saúde integral',
    lessons: [
      'Primeira consulta com o pediatra',
      'Vacinas',
      'Alimentação e suplementação materna e do lactente',
      'Puérpera: o pediatra também cuida de você',
    ],
  },
]

const BONUSES = [
  {
    title: 'Sono do bebê',
    text: 'O que é esperado no primeiro ano e como construir hábitos de sono mais saudáveis, seguros e possíveis para a família.',
  },
  {
    title: 'Introdução alimentar',
    text: 'Uma introdução aos próximos passos da alimentação do bebê, para que a família avance com mais informação e tranquilidade.',
  },
]

const CREDENTIALS = ['Pediatria Integrativa', 'Suplementação', 'Docência e pós-graduação', 'Mãe do Gui e da Bia']

const FAQ = [
  {
    question: 'Quando poderei começar?',
    answer: 'O curso já está disponível. O acesso é liberado assim que o pagamento da matrícula for confirmado.',
  },
  { question: 'O curso possui certificado?', answer: 'Sim. O curso inclui certificado após a conclusão do conteúdo.' },
  {
    question: 'Qual é a duração do curso?',
    answer: 'A carga horária informada é de aproximadamente 2 horas, distribuída em 21 aulas e conteúdos bônus.',
  },
  {
    question: 'Por quanto tempo poderei acessar?',
    answer: 'Você terá 365 dias de acesso e poderá assistir em diferentes dispositivos durante esse período.',
  },
  {
    question: 'Como faço a matrícula?',
    answer:
      'Clique em qualquer botão “Matricule-se” desta página. Você será direcionada para o ambiente seguro da plataforma Mindz para concluir a inscrição.',
  },
]

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Bem-vindo, bebê',
  description: DESCRIPTION,
  url: `${siteUrl()}/bem-vindo-bebe/`,
  image: absoluteUrl('/images/curso-bem-vindo-bebe.webp'),
  inLanguage: 'pt-BR',
  provider: { '@type': 'Person', name: DOCTOR.name, url: `${siteUrl()}/` },
  offers: {
    '@type': 'Offer',
    price: PRICE.totalValue,
    priceCurrency: 'BRL',
    category: 'Paid',
    url: COURSE_ENROLL_URL,
    availability: 'https://schema.org/InStock',
  },
  hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', courseWorkload: 'PT2H' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

function EnrollButton({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <a
      className={`btn w-full justify-center gap-7 px-[26px] py-[19px] text-xs font-medium md:w-auto ${light ? 'bg-cream text-ink hover:bg-white' : ''}`}
      href={COURSE_ENROLL_URL}
      target="_blank"
      rel="noopener"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

function Price({ onDark = false }: { onDark?: boolean }) {
  return (
    <p className={onDark ? 'text-white' : 'text-ink'}>
      <span className="block font-serif text-[36px] leading-none font-medium whitespace-nowrap md:text-[44px]">
        <span
          className={`mb-2 block font-sans text-[11px] tracking-[0.12em] uppercase md:mr-[7px] md:mb-0 md:inline md:align-middle ${onDark ? 'text-[#e8ddd5]' : ''}`}
        >
          em até
        </span>
        {PRICE.installments}
      </span>
      <small className={`mt-[10px] block text-[11px] tracking-[0.05em] ${onDark ? 'text-[#d7c7bd]' : 'text-muted'}`}>
        Valor total: {PRICE.total}
      </small>
    </p>
  )
}

function CourseMark() {
  return (
    <span aria-hidden="true" className="relative inline-block h-[15px] w-7 shrink-0 md:h-[18px] md:w-[34px]">
      <span className="absolute top-0 left-0 size-[15px] rounded-full bg-ink md:size-[18px]" />
      <span className="absolute top-0 right-0 size-[15px] rounded-full bg-ink md:size-[18px]" />
    </span>
  )
}

export default function CoursePage() {
  return (
    <>
      <JsonLd data={courseJsonLd} />
      <JsonLd data={faqJsonLd} />

      <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="container-site flex min-h-14 items-center justify-between gap-3 md:min-h-[68px] md:gap-7">
          <Link
            href="/"
            className="flex items-center gap-2 text-[9px] font-medium tracking-[0.1em] whitespace-nowrap uppercase no-underline md:gap-[14px] md:text-xs md:tracking-[0.12em]"
          >
            <CourseMark /> Bem-vindo, bebê
            <span className="sr-only">— voltar ao site da {DOCTOR.name}</span>
          </Link>
          <a
            className="bg-ink px-3 py-[10px] text-[9px] tracking-[0.08em] whitespace-nowrap text-white uppercase no-underline md:px-4 md:text-[11px]"
            href={COURSE_ENROLL_URL}
            target="_blank"
            rel="noopener"
          >
            Matricule-se
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="grid lg:min-h-[780px] lg:grid-cols-[1.04fr_.96fr]">
          <div className="flex flex-col justify-center px-5 py-12 md:px-12 md:py-20 lg:py-24 lg:pr-[max(44px,calc((100vw-1160px)/2))] lg:pl-[max(44px,calc((100vw-1160px)/2))]">
            <p className="eyebrow">Curso online · {DOCTOR.name}</p>
            <h1 className="mt-4 mb-[22px] max-w-[650px] text-[50px] leading-[0.96] tracking-[-0.025em] md:mt-5 md:mb-7 md:text-[clamp(76px,7.2vw,112px)]">
              Bem-vindo, <span className="accent">bebê.</span>
            </h1>
            <p className="mb-[26px] max-w-[590px] text-[15px] leading-[1.6] md:mb-8 md:text-[19px] md:leading-[1.7]">
              Um guia prático e acolhedor para viver os primeiros dias com mais segurança, presença e tranquilidade.
            </p>
            <div className="flex flex-col items-start gap-[22px] md:flex-row md:flex-wrap md:items-center md:gap-[26px]">
              <EnrollButton>Quero me matricular</EnrollButton>
              <Price />
            </div>
          </div>
          <figure className="relative m-0 min-h-[400px] overflow-hidden bg-paper-2 md:min-h-[620px] lg:min-h-[720px] lg:rounded-bl-[120px]">
            <img
              src={assetPath('/images/curso-bem-vindo-bebe.webp')}
              alt="Dra. Gabriella Dolavale apresentando o curso Bem-vindo, bebê"
              width={900}
              height={1350}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
            />
            <figcaption className="absolute right-6 bottom-8 bg-blush px-[18px] py-[14px] text-[10px] tracking-[0.14em] uppercase">
              Curso online
            </figcaption>
          </figure>
        </section>

        {/* Facts */}
        <div className="border-y border-line">
          <dl className="mx-auto grid w-full grid-cols-2 md:w-[min(1160px,calc(100%-48px))] lg:grid-cols-5">
            {FACTS.map((fact, index) => (
              <div
                key={fact.value}
                className={`flex flex-col-reverse border-line px-[10px] py-5 text-center md:px-4 md:py-[25px] max-lg:border-b lg:border-r lg:last:border-r-0 ${
                  index % 2 === 0 ? 'max-lg:border-r' : ''
                } max-lg:last:col-span-2 max-lg:last:border-r-0`}
              >
                <dt className="text-[9px] tracking-[0.12em] text-[#725f58] uppercase md:text-[10px]">{fact.label}</dt>
                <dd className="font-serif text-[22px] leading-[1.1] md:text-2xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Benefits */}
        <section id="beneficios" className="bg-cream py-[60px] md:py-28">
          <div className="container-site">
            <SectionHead
              eyebrow="Um começo mais leve"
              title={
                <>
                  Informação que transforma <span className="accent">dúvidas em segurança.</span>
                </>
              }
              text="Os primeiros dias com o bebê são intensos: um turbilhão de amor, aprendizado e novas descobertas. Você não precisa atravessar esse momento com medo ou insegurança."
            />
            <ol className="grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((benefit, index) => (
                <li
                  key={benefit.title}
                  className="border-r border-b border-line px-6 py-[30px] md:min-h-[270px] md:px-[34px] md:py-[42px] md:last:col-span-2 lg:last:col-span-1"
                >
                  <span className="text-[11px] tracking-[0.18em] text-rose-700">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-6 mb-3 text-[32px] md:mt-[42px] md:mb-4 md:text-heading">{benefit.title}</h3>
                  <p className="text-[13px] md:text-sm">{benefit.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-[60px] md:py-28">
          <div className="container-site">
            <p className="eyebrow">Ao longo do curso</p>
            <h2 className="mt-[14px] mb-[38px] max-w-[850px] text-[46px] leading-[0.98] tracking-[-0.025em] md:mb-[58px] md:text-[clamp(58px,6vw,90px)]">
              Você aprende a cuidar do recém-nascido <span className="accent">sem se sentir sozinha.</span>
            </h2>
            <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
              {OUTCOMES.map((outcome) => (
                <li
                  key={outcome.title}
                  className="grid grid-cols-[38px_1fr] items-start gap-[14px] bg-paper px-[18px] py-[22px] md:grid-cols-[44px_1fr] md:gap-[18px] md:px-[34px] md:py-[30px]"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-8 place-items-center rounded-full bg-rose-600 text-base text-white md:size-[34px]"
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="mt-[3px] mb-[6px] font-sans text-[15px] leading-[1.45] font-medium md:text-base">
                      {outcome.title}
                    </h3>
                    <p className="text-[13px] md:text-sm">{outcome.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Curriculum */}
        <section id="programa" className="bg-caramel-700 py-[60px] text-cream md:py-28">
          <div className="container-site">
            <SectionHead
              onDark
              eyebrow="Programa completo"
              title={
                <>
                  Do pré-natal à rotina em casa, <span className="italic text-blush-light">passo a passo.</span>
                </>
              }
              text="O conteúdo acompanha a sequência real vivida pela família: preparação, nascimento, maternidade, chegada em casa e acompanhamento pediátrico."
            />
            {MODULES.map((module, moduleIndex) => {
              const offset = MODULES.slice(0, moduleIndex).reduce((total, m) => total + m.lessons.length, 0)
              return (
                <div key={module.label} className="mt-10 md:mt-[58px]">
                  <h3 className="border-b border-white/30 pb-[15px] font-sans text-[10px] leading-[1.5] tracking-[0.18em] uppercase md:text-[11px]">
                    {module.label}
                  </h3>
                  <ol className="grid md:grid-cols-2">
                    {module.lessons.map((lesson, index) => (
                      <li
                        key={lesson}
                        className="grid grid-cols-[44px_1fr] gap-[10px] border-b border-white/20 py-[15px] md:grid-cols-[54px_1fr] md:gap-4 md:py-[23px] md:odd:pr-9 md:even:border-l md:even:pl-9"
                      >
                        <b className="font-serif text-2xl font-normal text-[#f1d0c8] md:text-[28px]">
                          {String(offset + index + 1).padStart(2, '0')}
                        </b>
                        <span className="pt-1 text-[13px] leading-[1.4] md:pt-[6px] md:text-sm md:leading-[1.45]">{lesson}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )
            })}
            <div className="mt-10 md:mt-[58px]">
              <h3 className="border-b border-white/30 pb-[15px] font-sans text-[10px] tracking-[0.18em] uppercase md:text-[11px]">
                Conteúdos bônus
              </h3>
              <div className="mt-6 grid gap-4 md:mt-[34px] md:grid-cols-2 md:gap-6">
                {BONUSES.map((bonus, index) => (
                  <div key={bonus.title} className="border border-white/25 bg-ink/10 px-5 py-6 md:p-[34px]">
                    <p className="text-[11px] font-medium tracking-[0.2em] text-white uppercase">Bônus {String(index + 1).padStart(2, '0')}</p>
                    <h4 className="mt-[10px] mb-2 font-serif text-[32px] leading-[0.98] md:mt-[14px] md:mb-3 md:text-[42px]">
                      {bonus.title}
                    </h4>
                    <p className="text-[13px] text-white md:text-sm">{bonus.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instructor */}
        <section className="grid bg-paper-2 lg:grid-cols-[.92fr_1.08fr]">
          <figure className="relative m-0 min-h-[420px] md:min-h-[650px] lg:min-h-[760px]">
            <img
              src={assetPath('/images/gabriella-consultorio.webp')}
              alt="Dra. Gabriella Dolavale no consultório"
              width={1080}
              height={720}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </figure>
          <div className="flex flex-col justify-center px-5 py-14 md:px-12 md:py-20 lg:py-[100px] lg:pr-[max(48px,calc((100vw-1160px)/2))] lg:pl-[78px]">
            <p className="eyebrow">Sua instrutora</p>
            <h2 className="mt-3 mb-[22px] text-[48px] leading-[0.98] tracking-[-0.025em] md:mt-4 md:mb-[30px] md:text-[clamp(62px,6vw,92px)]">
              Dra. Gabriella <span className="accent">Dolavale.</span>
            </h2>
            <p className="mb-4 max-w-[600px] text-sm md:text-base">
              Pediatra especialista em Pediatria Integrativa e suplementação. Une ciência, nutrição e prevenção em um cuidado
              individualizado, próximo e baseado em evidências.
            </p>
            <p className="max-w-[600px] text-sm md:text-base">
              Também atua como docente, monitora de pós-graduação, palestrante e criadora de conteúdo em saúde. Casada e mãe do
              Gui e da Bia, leva para o curso a experiência médica e a compreensão real das transformações vividas por uma
              família.
            </p>
            <ul className="mt-[22px] grid grid-cols-2 border-t border-l border-line md:mt-[26px]">
              {CREDENTIALS.map((credential) => (
                <li key={credential} className="border-r border-b border-line px-3 py-4 text-xs leading-[1.5] md:p-5">
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-cream py-[60px] md:py-28">
          <div className="container-site max-w-[930px]">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="mt-3 mb-9 text-[46px] leading-none tracking-[-0.025em] md:mt-[14px] md:mb-[50px] md:text-[clamp(58px,6vw,86px)] md:leading-[0.98]">
              Antes de começar, <span className="accent">tire suas dúvidas.</span>
            </h2>
            <div className="border-b border-line">
              {FAQ.map((item, index) => (
                <details key={item.question} open={index === 0} className="group border-t border-line">
                  <summary className="relative cursor-pointer list-none py-[21px] pr-[38px] text-[15px] font-medium md:py-[25px] md:pr-[42px] md:text-base [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="absolute top-4 right-1 font-serif text-[30px] text-rose-600 md:top-5"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">–</span>
                    </span>
                  </summary>
                  <p className="max-w-[760px] pr-8 pb-5 text-[13px] md:pr-[54px] md:pb-6 md:text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-ink py-16 text-center text-white md:py-28">
          <div className="container-site">
            <p className="eyebrow text-blush-light">Comece agora</p>
            <h2 className="mx-auto mt-4 mb-[22px] max-w-[960px] text-[46px] leading-none tracking-[-0.025em] md:mb-7 md:text-[clamp(64px,7vw,104px)] md:leading-[0.98]">
              Viva o início da maternidade com <span className="italic text-blush">mais calma e consciência.</span>
            </h2>
            <p className="mx-auto mb-[30px] max-w-[650px] text-sm leading-[1.6] text-[#e8ddd5] md:mb-[35px] md:text-base md:leading-[1.7]">
              Tenha orientações claras e acolhedoras ao seu lado durante um dos momentos mais intensos e transformadores da
              vida.
            </p>
            <div className="mb-[30px] flex justify-center">
              <Price onDark />
            </div>
            <EnrollButton light>Matricule-se agora</EnrollButton>
          </div>
        </section>
      </main>

      <footer className="bg-espresso py-7 text-[#d7cbc4] md:py-9">
        <div className="container-site flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="max-w-[700px] text-[10px] leading-[1.65] md:text-[11px]">
            Este curso tem finalidade educativa e não substitui consulta, diagnóstico ou acompanhamento médico individual. Em
            caso de dúvidas sobre a saúde do bebê ou da mãe, procure assistência profissional.
          </p>
          <p className="text-[10px] leading-[1.65] md:text-[11px]">
            Dolavale Assed Soluções em Saúde Ltda
            <br />
            CNPJ 41.570.181/0001-79
            <br />
            <a href={`mailto:${COURSE_EMAIL}`} className="no-underline">
              {COURSE_EMAIL}
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

function SectionHead({
  eyebrow,
  title,
  text,
  onDark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  text: string
  onDark?: boolean
}) {
  return (
    <div
      className={`mb-[38px] grid gap-[18px] md:mb-[58px] lg:grid-cols-[1fr_.8fr] lg:gap-20 ${onDark ? 'lg:items-start' : 'lg:items-end'}`}
    >
      <div>
        <p className={`eyebrow ${onDark ? 'text-white' : ''}`}>{eyebrow}</p>
        <h2 className="mt-[14px] text-[46px] leading-[0.98] tracking-[-0.025em] md:text-[clamp(58px,6vw,90px)]">{title}</h2>
      </div>
      <p className={`max-w-[520px] text-sm leading-[1.65] md:text-base ${onDark ? 'text-white' : ''}`}>{text}</p>
    </div>
  )
}
