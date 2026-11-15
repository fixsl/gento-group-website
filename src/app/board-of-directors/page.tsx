import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Board of Directors',
  description:
    'Meet the Gento Group Board of Directors and learn about their experience in infrastructure, finance, governance, law and economic development.',
}

const directors = [
  {
    name: 'Maurice Nathaniel Cole, FCCA',
    title: 'Chairman of the Board',
    classification: 'Independent Non-Executive Director',
    initials: 'MC',
    portrait: '/images/board/maurice-cole.png',
    portraitPosition: 'object-[100%_top]',
    biography: [
      'Maurice Cole is a Chartered Accountant with 36 years of experience in finance, banking and executive management, and brings deep board-level and governance experience to his role as Chairman of Gento Group of Companies Limited.',
      "Most recently, he served as Chief Finance Officer of Sierra Rutile Limited (2019–2025), where he directed the company's financial, commercial, procurement, tax and risk management functions. He led the negotiation of a tax incentive that reduced Sierra Rutile's tax burden by over 70 percent, delivering annual savings of more than US$6 million.",
      'His board experience includes serving as Chairman of the Board of Access Bank (SL) Ltd (2024–2026), where he led the bank’s acquisition of Standard Chartered Bank Sierra Leone, after four years as a Non-Executive Director. He has also served as an Executive Director of Sierra Rutile Holdings and of NP (SL) Limited.',
      'Earlier in his career, he was Managing Director and General Manager of National Petroleum (SL) Limited, where he played a pivotal role in forming NP Group and establishing its subsidiary in Liberia. He also served as Chief Finance Officer of Union Trust Bank and held senior finance roles at the National Power Authority, where he led the financial modelling linked to the Bumbuna hydro project.',
      'Mr Cole is a Fellow of the Association of Chartered Certified Accountants (FCCA), a Fellow of the Institute of Chartered Accountants of Sierra Leone, and a Member of the Association of Accounting Technicians (MAAT).',
    ],
  },
  {
    name: 'Mohamed Gento Kamara',
    title: 'Founder and Chief Executive Officer',
    classification: 'Executive Chairman and CEO',
    initials: 'MK',
    portrait: '/images/board/mohamed-kamara.png',
    portraitPosition: 'object-top',
    biography: [
      'Mohamed Gento Kamara is the founder and Chief Executive Officer of Gento Group of Companies Limited, one of Sierra Leone’s leading road construction and infrastructure firms. The Group’s assets were valued at over US$150 million as of 2022, and that figure has since increased significantly with the company’s expansion into port infrastructure. Most notably, the Group is developing the US$75 million Kent Port and logistics hub. Around US$35 million had been invested by mid-2026, and the project is expected to support more than 10,000 direct and indirect jobs, attract investment and strengthen national competitiveness.',
      'Under the same concession, the Group is also advancing the development of the larger Banana Island Transshipment Port. Together, these projects are intended to ease congestion at the Queen Elizabeth II Quay in Freetown and serve as shared infrastructure that will integrate and enhance West African maritime trade with the world.',
      'Born and raised in Freetown, he began his business career in London in the late 1990s, building a mobile phone dealership with One-2-One and Orange and a chain of retail outlets across South London, before moving into real estate. Responding to an appeal from former President Ahmad Tejan Kabbah, he returned to Sierra Leone to help rebuild the economy after the civil war and to mentor young Sierra Leoneans.',
      'A committed philanthropist, Mr Kamara has supported more than 3,000 young people and women in starting and growing their own enterprises. He also sponsors a range of charities and community initiatives, including anti-malnutrition campaigns and the COVID-19 response.',
      'He was educated at Kissy Municipal Primary School and Ahmadiyya Muslim Secondary School in Freetown, and later studied at Lewisham College, London, but was unable to complete his studies due to several constraints.',
    ],
  },
  {
    name: 'Eng. Giovanni Pirrone',
    title: 'Executive Director',
    classification: '',
    initials: 'GP',
    portrait: '/images/board/giovanni-pirrone-white.png',
    portraitPosition: 'object-center',
    biography: [
      'Giovanni Pirrone is a civil engineer with three decades of experience in the design and delivery of roads, bridges, water infrastructure and marine works across Italy, Sierra Leone and The Gambia.',
      'He holds a Master’s Degree cum laude in Civil Engineering (Transport) from the Mediterranean University of Reggio Calabria, Italy, and has been a registered professional engineer since 1995. From 1997 to 2012 he was a Partner and Project Manager at EARTH Engineering & Consultancy in Italy, leading major aqueduct, sewerage, highway, surveying and GIS projects for regional and municipal authorities.',
      'Since 2012 he has led landmark infrastructure projects in Freetown, including the 6.2 km Freetown Ring Road double carriageway, the King Jimmy Bridge and embankment works, the Hill Cot, Prince Alfred and Kossoh Town bridges, and the City and Provincial Township Roads programme.',
      "With Gento Group, he has served as General Project Manager on the 80 km Buniadou–Kuntair road design in The Gambia, the Kent oil jetty marine terminal, and the Kissy Bypass bridge reconstruction. He also coordinates the Group's proposed Banana Island ocean port project with the Government of Sierra Leone.",
      'Eng. Pirrone is a specialist in GPS surveying, GIS and bathymetry, and has published on geodetic monitoring, GIS and the economics of the Banana Island port.',
    ],
  },
  {
    name: 'Michala Mackay',
    title: 'Non-Executive Director',
    classification: '',
    initials: 'MM',
    portrait: '/images/board/michala-mackay.jpeg',
    portraitPosition: 'object-top',
    biography: [
      'Michala Mackay is a Solicitor with over 24 years of experience across the public and private sectors in corporate governance, the rule of law, commerce and digital transformation. She is currently the Board Chairman of Access Bank (SL) PLC.',
      'From 2013 to 2020, she established and led Sierra Leone’s Corporate Affairs Commission as its first Chief Executive Officer and Registrar. She went on to serve as Director and Chief Operating Officer of the Directorate of Science, Technology and Innovation (2020–2023). Earlier, she was Director of Legal and Licensing at the National Telecommunications Commission and Head of Legal and Company Secretary at Celtel Sierra Leone.',
      'She has played a leading role in Sierra Leone’s corporate and regulatory reform. Her technical and legal drafting skills have contributed to work including the Companies (Amendment) Act 2014, the Companies Regulations 2015, the country’s first National Corporate Governance Code (2019, with IFC), the Public Procurement Act 2004 and the Companies and Business Registration Bill 2026. She has also played critical roles in negotiating major national financing agreements, including the US$31 million ACE submarine cable project and two US$40 million projects in digital transformation and economic diversification.',
      'Ms Mackay is the founder of Mackay Consulting Services. As a private sector consultant, she has led projects and advised key development partners on legal reforms, market systems, governance and gender equality. She holds an MBA in Leadership and Sustainability (University of Cumbria), a Postgraduate Certificate in IT and Telecommunications Law (University of Strathclyde), an LLB (University of London), a BA (Fourah Bay College), and was called to the Bar in 2002. She is also a Non-Executive Director of the Mama Pikin Foundation.',
    ],
  },
  {
    name: 'Kawusu Kebbay',
    title: 'Non-Executive Director',
    classification: '',
    initials: 'KK',
    portrait: '/images/board/kawusu-kebbay.png',
    portraitPosition: 'object-top',
    biography: [
      'Kawusu Kebbay is a development economist with more than 20 years of senior experience in economic planning, aid coordination, resource mobilisation and public policy in Sierra Leone.',
      'For 16 years (2005–2021), he served as Director of the Development Assistance Coordination Office (DACO) at the Ministry of Planning and Economic Development. In that role he advised the Vice President and Ministers of Finance and Planning on national priority programmes and acted as the Government’s principal liaison with development partners.',
      'He convened the Sierra Leone Development Partnership (DEPAC) meetings, Consultative Group meetings and donor round tables that mobilised financing for national priorities. He developed Sierra Leone’s Aid Policy and its Government–development partner Cooperation Framework, contributed to the country’s Poverty Reduction Strategy Papers, and led national implementation of the New Deal for Engagement in Fragile States with the g7+ group of countries.',
      'Earlier, he managed the UNDP-funded Integrated Approach to Aid Coordination project and undertook consultancies for UNDP, the EU and Oxfam. He currently works as an independent consultant, is a resource person in monitoring and evaluation for the West African Institute for Financial and Economic Management (WAIFEM), and heads a non-governmental organisation delivering community projects in Freetown and Kailahun.',
      'Mr Kebbay holds an MA in Economic Policy and Management from the United Nations African Institute for Economic Development and Planning (IDEP) and a BSc in Economic and Social Studies from Fourah Bay College, University of Sierra Leone. He is also an alumnus of the Oxford Strategic Leadership and High-Performance Leadership Programmes at Saïd Business School, University of Oxford.',
    ],
  },
]

function Portrait({ name, initials, src, position }: { name: string; initials: string; src: string; position: string }) {
  if (src) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 240px"
          className={`${name === 'Michala Mackay' || name === 'Maurice Nathaniel Cole, FCCA' ? 'object-contain' : 'object-cover'} ${position}`}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Official portrait of ${name} to be supplied`}
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-[#e9e5d9] text-green-950"
    >
      <div aria-hidden="true" className="absolute inset-4 border border-green-950/15" />
      <div aria-hidden="true" className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full border border-amber-700/20" />
      <div aria-hidden="true" className="absolute -bottom-10 -right-4 h-36 w-36 rounded-full border border-amber-700/20" />
      <span className="font-serif text-6xl font-medium tracking-wide text-green-950/80">{initials}</span>
      <span className="absolute bottom-7 left-0 right-0 px-6 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-green-950/60">
        Official portrait forthcoming
      </span>
    </div>
  )
}

export default function BoardOfDirectorsPage() {
  return (
    <main className="bg-[#fbfaf7]">
      <section className="bg-green-950 px-6 pb-16 pt-32 text-white sm:pb-20 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.12em] text-amber-300">Gento Group Sierra Leone</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                Board of Directors
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                Experienced leadership guiding Gento Group’s growth and stewardship of the infrastructure that connects Sierra Leone.
              </p>
            </div>
            <p className="border-l border-amber-300/60 pl-5 text-sm leading-6 text-white/65">
              The Board brings together expertise in finance, infrastructure, corporate governance, law and economic development.
            </p>
          </div>
          <div className="mt-12 h-px w-full bg-white/15" />
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-white/55">Leadership and oversight · Sierra Leone</p>
        </div>
      </section>

      <section aria-label="Directors" className="px-6 py-10 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {directors.map((director) => (
            <article
              key={director.name}
              className="grid gap-x-10 gap-y-8 border-b border-stone-300/80 py-12 first:pt-4 last:border-0 sm:py-16 md:grid-cols-[minmax(180px,240px)_minmax(0,1fr)] lg:gap-x-16"
            >
              <div className="w-full max-w-[240px]">
                <Portrait name={director.name} initials={director.initials} src={director.portrait} position={director.portraitPosition} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">{director.classification || 'Board member'}</p>
                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-green-950 sm:text-4xl">{director.name}</h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-amber-800">{director.title}</p>
                <div className="mt-7 max-w-3xl space-y-4 text-[15px] leading-7 text-stone-700 sm:text-base sm:leading-8">
                  {director.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Gento Group</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-green-950">Building with purpose.</h2>
          </div>
          <a href="/contact" className="inline-flex w-fit items-center border-b border-green-950 pb-2 text-sm font-semibold text-green-950 transition hover:border-amber-700 hover:text-amber-800">
            Get in touch <span className="ml-3" aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  )
}
