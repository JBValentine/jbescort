import { Metadata } from 'next'
import Link from 'next/link'
import freelancerData from '@/data/freelancers.json'

export const metadata: Metadata = {
  title: 'Escort JB — JB Escort Listings Updated Daily | jbescorts.org',
  description:
    'Escort JB — daily updated Johor Bahru escort listings. Browse verified escort JB profiles across all areas. JB escort service, escorts JB, hotel outcall. No deposit, meet first.',
  alternates: {
    canonical: '/escort-jb',
  },
  keywords: [
    'escort jb',
    'escorts jb',
    'escort service jb',
    'jb escort service',
    'jb escort',
    'jb escorts',
    'escort johor bahru',
    'escort in jb',
  ],
  openGraph: {
    title: 'Escort JB — JB Escort Listings Updated Daily | jbescorts.org',
    description:
      'Escort JB — daily updated Johor Bahru escort directory. Verified escort JB profiles, hotel outcall, no deposit.',
    url: 'https://jbescorts.org/escort-jb',
  },
}

const areaListings = [
  { name: 'JB Town (Jalan Dhoby)', slug: 'jb-town' },
  { name: 'Bukit Indah',           slug: 'bukit-indah' },
  { name: 'Skudai',                slug: 'skudai' },
  { name: 'Danga Bay',             slug: 'danga-bay' },
  { name: 'Mount Austin',          slug: 'mount-austin' },
  { name: 'Permas Jaya',           slug: 'permas-jaya' },
  { name: 'R&F 富力',              slug: 'r-and-f' },
  { name: 'Nusa Bestari',          slug: 'nusa-bestari' },
]

const faqItems = [
  {
    question: 'What does "Escort JB" mean?',
    answer:
      '"Escort JB" refers to escort services available in Johor Bahru, Malaysia. The term is used interchangeably with "JB escort" by users searching from Singapore and internationally. jbescorts.org is the most complete escort JB directory available.',
  },
  {
    question: 'How often are escort JB listings updated?',
    answer:
      'jbescorts.org escort JB listings are updated daily via automated data collection from active platforms. New profiles are added as they become available, and inactive profiles are removed. This ensures you always see current, live escort JB listings.',
  },
  {
    question: 'What types of escort JB services are available?',
    answer:
      'Escort JB listings on jbescorts.org include companionship services (下水), massage (按摩), and other service types. All listings specify service type, area, pricing, and photos so you can make an informed choice.',
  },
  {
    question: 'Are escort JB services available 24 hours in Johor Bahru?',
    answer:
      'Many escort JB listings operate late hours or around the clock, particularly in JB Town and Bukit Indah. Check individual profiles for availability. For 24/7 platform-based bookings, visit our partner JB Escort Directory at jbanmo.com.',
  },
  {
    question: 'How is escort JB different from escort service JB?',
    answer:
      '"Escort JB" typically refers to individual companion profiles, while "escort service JB" refers to agency or platform-managed services. jbescorts.org lists both independent escort JB freelancers and agency-backed escort service JB platforms.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://jbescorts.org/escort-jb',
      url: 'https://jbescorts.org/escort-jb',
      name: 'Escort JB — JB Escort Listings Updated Daily | jbescorts.org',
      description: 'Daily updated escort JB directory for Johor Bahru.',
      isPartOf: { '@id': 'https://jbescorts.org/#website' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jbescorts.org' },
        { '@type': 'ListItem', position: 2, name: 'Escort JB', item: 'https://jbescorts.org/escort-jb' },
      ],
    },
  ],
}

export default function EscortJbPage() {
  const { freelancers, areas, totalCount, lastUpdated } = freelancerData as any
  const waterCount = freelancers.filter((f: any) => f.serviceType === 'water').length

  const lastUpdatedStr = new Date(lastUpdated).toLocaleDateString('en-MY', {
    timeZone: 'Asia/Kuala_Lumpur',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#0088cc]">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Escort JB</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Escort JB — Daily Updated Johor Bahru Listings
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-4">
            <strong>Escort JB</strong> directory — {totalCount}+ verified <strong>escorts JB</strong> across{' '}
            {areas.length} areas in Johor Bahru. Updated daily. <strong>JB escort service</strong>, hotel outcall, meet first pay later.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Last updated: {lastUpdatedStr}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            <span className="bg-green-600 text-white px-4 py-1.5 rounded-full">✓ Daily Updated</span>
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full">✓ {waterCount} Escort JB Listings</span>
            <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full">✓ {areas.length} JB Areas</span>
            <span className="bg-amber-600 text-white px-4 py-1.5 rounded-full">✓ Hotel Outcall Available</span>
          </div>
          <a
            href="https://jbanmo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-amber-500 rounded-full hover:bg-amber-400 transition-all shadow-lg"
          >
            🌐 Browse Full JB Escort Directory
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Escort JB — Daily Updated Johor Bahru Escort Directory
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              <strong>Escort JB</strong> is one of the most searched terms for companions in Johor Bahru (JB),
              Malaysia — particularly among visitors crossing from Singapore via the Causeway or Second Link.
              jbescorts.org is the most up-to-date <strong>escort JB</strong> directory, with listings
              refreshed every day from active platforms across Johor Bahru.
            </p>
            <p>
              Unlike static directories that go months without updates, jbescorts.org pulls live data daily,
              ensuring every <strong>escort JB</strong> and <strong>escorts JB</strong> listing you see is
              current and active. Inactive or removed profiles are automatically dropped from the index.
            </p>
            <p>
              We currently list <strong>{totalCount}+</strong> escort JB profiles across{' '}
              <strong>{areas.length} areas</strong> in Johor Bahru, including JB Town (Jalan Dhoby),
              Bukit Indah, Skudai, Danga Bay, Mount Austin, and more. For platform-based{' '}
              <strong>escort service JB</strong> bookings, visit{' '}
              <a href="https://jbanmo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                JB Escort Directory
              </a>.
            </p>
          </div>
        </section>

        {/* Browse by Area */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Browse Escort JB by Area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {areaListings.map((area) => (
              <Link
                key={area.slug}
                href={`/freelance/${area.slug}`}
                className="bg-white rounded-xl border border-gray-200 px-4 py-4 text-center hover:bg-green-50 hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900 text-sm">{area.name}</div>
                <div className="text-green-600 text-xs mt-1">Escort JB →</div>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/freelance" className="inline-block text-sm text-blue-600 hover:underline">
              View all escort JB areas →
            </Link>
          </div>
        </section>

        {/* Why daily updated */}
        <section className="mb-14 bg-green-50 rounded-xl border border-green-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Escort JB Listings Must Be Updated Daily
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            {[
              ['Active Profiles Only', 'Escort JB profiles change frequently. Our daily scraper removes inactive listings so you never contact an unavailable companion.'],
              ['Current Pricing', 'JB escort service prices change. Daily updates ensure the RM pricing shown on every escort JB profile is accurate.'],
              ['New Arrivals First', 'New escort JB listings are added within 24 hours of appearing on source platforms. Be among the first to see new profiles.'],
              ['Scam Detection', 'Listings that generate scam reports are flagged and removed within 24 hours. Daily monitoring keeps the directory trustworthy.'],
            ].map(([title, desc]) => (
              <div key={title as string} className="flex gap-3">
                <span className="text-green-500 text-lg mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">{title}</div>
                  <div className="mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Escort JB — FAQ
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 rounded-xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-3">Browse Latest Escort JB Listings</h2>
          <p className="text-gray-400 text-sm mb-5">
            {totalCount}+ escort JB profiles across {areas.length} areas. Updated: {lastUpdatedStr}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/freelance"
              className="px-6 py-3 bg-[#0088cc] text-white text-sm font-bold rounded-full hover:bg-[#0077b3] transition-all"
            >
              Browse Escort JB Directory
            </Link>
            <a
              href="https://jbanmo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-500 text-white text-sm font-bold rounded-full hover:bg-amber-400 transition-all"
            >
              Full JB Escort Directory →
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 px-4 mt-4">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — Escort JB Directory. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {' · '}
          <Link href="/jb-escort" className="hover:text-gray-400">JB Escort</Link>
          {' · '}
          <Link href="/jb-girl-escort" className="hover:text-gray-400">JB Girl Escort</Link>
          {' · '}
          <Link href="/jb-escorts" className="hover:text-gray-400">JB Escorts</Link>
        </p>
      </footer>
    </main>
  )
}
