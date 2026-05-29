import { Metadata } from 'next'
import Link from 'next/link'
import { platforms } from '@/data/platforms'
import { areas } from '@/data/areas'

export const metadata: Metadata = {
  title: 'JB Escorts — Top JB Escort Platforms & Directory 2026',
  description:
    'Browse the best JB escorts in 2026. Trusted directory of verified JB escort platforms near Jalan Dhoby, Johor Bahru. Real photos, honest reviews, safe booking guide.',
  alternates: {
    canonical: '/jb-escorts',
  },
  keywords: [
    'jb escorts',
    'jb escort',
    'jb escort service',
    'jb escort directory',
    'jb escort platforms',
    'johor bahru escorts',
    'escort jb',
    'jb escort 2026',
  ],
  openGraph: {
    title: 'JB Escorts — Top JB Escort Platforms & Directory 2026',
    description:
      'Verified JB escort platforms near Jalan Dhoby, Johor Bahru. Real photos, anti-scam guide, daily updates.',
    url: 'https://jbescorts.org/jb-escorts',
  },
}

const faqItems = [
  {
    question: 'Where can I find JB escorts near Jalan Dhoby?',
    answer:
      'Jalan Dhoby in JB Town is the most concentrated area for escort services in Johor Bahru. Platforms like JOHOR BAHRU 88, JBE, and jb69girl all cover the JB Town and Jalan Dhoby area with frequently updated listings.',
  },
  {
    question: 'How do I contact a JB escort platform?',
    answer:
      'Most JB escort platforms use WhatsApp and Telegram for bookings. You can find the direct contact links on each platform page at jbescorts.org. Always initiate contact through official platform channels.',
  },
  {
    question: 'Are JB escort services available for outcall in Johor Bahru hotels?',
    answer:
      'Yes. Most JB escort platforms offer outcall services to hotels across Johor Bahru. Platforms like JB Escort 2 Me specialise in outcall delivery. Always confirm hotel acceptability with the platform before booking.',
  },
  {
    question: 'What is the difference between a JB escort directory and a JB escort platform?',
    answer:
      'A JB escort directory like jbescorts.org reviews and lists multiple escort platforms, helping you compare options safely. A JB escort platform (like jb69girl or JBSam) is the actual booking service where you contact companions directly.',
  },
  {
    question: 'How do I avoid scams when booking JB escorts?',
    answer:
      'Use only platforms listed in verified directories. Never pay in full before the session. Always request a live video call to verify identity. Avoid platforms with unrealistically low prices or no verifiable reviews.',
  },
  {
    question: 'Do JB escort platforms serve Singapore visitors?',
    answer:
      'Yes. Many JB escort platforms specifically cater to Singapore visitors crossing the Causeway or Second Link. Platforms like jb69girl and JBSam have English-language interfaces and experience with international visitors.',
  },
]

export default function JbEscortsPage() {
  const topPlatforms = platforms.slice(0, 6)
  const allAreas = areas

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://jbescorts.org/jb-escorts',
        url: 'https://jbescorts.org/jb-escorts',
        name: 'JB Escorts — Top JB Escort Platforms & Directory 2026',
        description:
          'Browse the best JB escorts in 2026. Trusted directory of verified JB escort platforms near Jalan Dhoby, Johor Bahru.',
        isPartOf: { '@id': 'https://jbescorts.org/#website' },
        about: {
          '@type': 'Place',
          name: 'Johor Bahru',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Johor Bahru',
            addressRegion: 'Johor',
            addressCountry: 'MY',
          },
        },
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
          {
            '@type': 'ListItem',
            position: 2,
            name: 'JB Escorts',
            item: 'https://jbescorts.org/jb-escorts',
          },
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#0088cc]">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">JB Escorts</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            JB Escorts
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
            Your #1 directory for verified JB escort platforms in Johor Bahru.
            Compare top-rated services, browse real profiles, and book safely in 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full">✓ Verified Platforms</span>
            <span className="bg-green-600 text-white px-4 py-1.5 rounded-full">✓ Real Reviews</span>
            <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full">✓ 24/7 Available</span>
            <span className="bg-yellow-600 text-white px-4 py-1.5 rounded-full">✓ Scam-Free Guide</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            About JB Escorts — Johor Bahru's #1 Escort Directory
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              JB Escorts refers to the companion and escort services operating throughout Johor Bahru (JB),
              Malaysia. As the second largest city in Malaysia and the gateway from Singapore, Johor Bahru
              hosts one of the most active escort scenes in Southeast Asia. The term "JB Escorts" is widely
              used by both locals and visitors to search for companion services in the region.
            </p>
            <p>
              The JB escort ecosystem includes a range of specialised platforms, each catering to different
              preferences, budgets, and areas. From the bustling entertainment scene near Jalan Dhoby in JB
              Town to the quieter, more private settings in Permas Jaya and Iskandar Puteri, there is a JB
              escort platform suited to every requirement. Most platforms operate round-the-clock and offer
              both incall and outcall services across all major JB neighborhoods.
            </p>
            <p>
              jbescorts.org is an independent review directory. We monitor, evaluate, and rank the most
              active JB escort platforms so that users can make informed decisions without being misled by
              fake listings or outdated information. Our platform data is reviewed regularly and only genuine,
              actively managed platforms are kept in our directory.
            </p>
            <p>
              Whether you're visiting JB for the first time from Singapore or a returning regular, this page
              serves as your starting point to navigate the JB escort landscape safely and efficiently.
            </p>
          </div>
        </section>

        {/* Platform listings */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Best JB Escort Platforms (Ranked 2026)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topPlatforms.map((p, idx) => (
              <Link
                key={p.slug}
                href={`/platform/${p.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all relative"
              >
                {idx < 3 && (
                  <span className="absolute top-3 right-3 text-xs bg-amber-100 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5 font-medium">
                    Top {idx + 1}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${new URL(p.url).hostname}&sz=64`}
                    alt={`${p.name} favicon`}
                    className="w-8 h-8 rounded"
                    loading="lazy"
                  />
                  <h3 className="font-bold text-gray-900 text-base">{p.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">{p.descEn}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.priceRange && (
                    <span className="text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
                      {p.priceRange}
                    </span>
                  )}
                  {p.girlCount && (
                    <span className="text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5">
                      {p.girlCount} girls
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/" className="inline-block text-sm text-blue-600 hover:underline">
              View full JB escort platform list →
            </Link>
          </div>
        </section>

        {/* Why use jbescorts.org */}
        <section className="mb-14 bg-blue-50 rounded-xl border border-blue-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Use jbescorts.org for JB Escorts?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            {[
              ['Independent Reviews', 'We are not affiliated with any escort platform. Our reviews are unbiased and based on actual platform quality.'],
              ['Daily Monitoring', 'Platform statuses are checked regularly. We remove inactive or low-quality platforms quickly.'],
              ['Anti-Scam Focus', 'Every platform is evaluated for photo authenticity, pricing transparency, and scam history.'],
              ['Comprehensive Coverage', 'We cover all major JB areas and escort types — from outcall hotel services to incall premium suites.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3">
                <span className="text-blue-500 text-lg mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">{title}</div>
                  <div className="mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Areas */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            JB Escort Services by Area
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            JB escort platforms cover all major neighborhoods in Johor Bahru. Select your area for
            tailored platform recommendations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {allAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="bg-white rounded-lg border border-gray-200 px-4 py-3 text-center hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                <div className="font-medium text-gray-900 text-sm">{area.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{area.nameZh}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section className="mb-14 bg-red-50 rounded-xl border border-red-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            🛡️ JB Escort Safety Guide
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Book through platforms listed on jbescorts.org only — we pre-screen all listed services</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Pay a small deposit only, never full payment upfront</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Always request a live WhatsApp or Telegram video call before committing</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Book at established JB hotels — avoid unknown private addresses for first-time meetings</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Do not share your passport or IC number with any escort platform</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Extremely low prices (&lt; RM150) are almost always scams or bait profiles</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions — JB Escorts
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="bg-white rounded-xl border border-gray-200 p-5 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/johor-bahru-escorts" className="text-blue-600 hover:underline">Johor Bahru Escorts →</Link>
            <Link href="/jb-town" className="text-blue-600 hover:underline">JB Town Escort →</Link>
            <Link href="/bukit-indah" className="text-blue-600 hover:underline">Bukit Indah Escort →</Link>
            <Link href="/skudai" className="text-blue-600 hover:underline">Skudai Escort →</Link>
            <Link href="/blog/jb-escort-guide-2026" className="text-blue-600 hover:underline">JB Escort Guide 2026 →</Link>
            <Link href="/" className="text-blue-600 hover:underline">JB Freelance Directory →</Link>
          </div>
        </section>

      </div>
    </main>
  )
}
