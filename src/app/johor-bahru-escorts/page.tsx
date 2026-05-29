import { Metadata } from 'next'
import Link from 'next/link'
import { platforms } from '@/data/platforms'
import { areas } from '@/data/areas'

export const metadata: Metadata = {
  title: 'Johor Bahru Escorts — Verified JB Escort Directory 2026',
  description:
    'Find verified Johor Bahru escorts in 2026. Browse trusted JB escort platforms with real photos, honest reviews, and safety tips. The most complete Johor Bahru escort guide.',
  alternates: {
    canonical: '/johor-bahru-escorts',
  },
  keywords: [
    'johor bahru escorts',
    'johor bahru escort',
    'escorts in johor bahru',
    'jb escort service',
    'johor bahru escort service',
    'jb escort directory',
    'johor escort',
  ],
  openGraph: {
    title: 'Johor Bahru Escorts — Verified JB Escort Directory 2026',
    description:
      'Verified Johor Bahru escort platforms with real photos and genuine reviews. Your trusted guide to JB escort services.',
    url: 'https://jbescorts.org/johor-bahru-escorts',
  },
}

const faqItems = [
  {
    question: 'What are the best Johor Bahru escort platforms in 2026?',
    answer:
      'The top verified Johor Bahru escort platforms include jb69girl, JBE, JOHOR BAHRU 88, JB Escort 2 Me, and JBSam. These platforms are regularly updated and known for real photos and verified profiles.',
  },
  {
    question: 'How do I find Johor Bahru escorts safely?',
    answer:
      'Always use verified directories like jbescorts.org. Never pay the full amount upfront, always request a live photo verification, and meet at reputable hotels in known JB areas.',
  },
  {
    question: 'What areas in Johor Bahru have escort services?',
    answer:
      'Escort services in Johor Bahru are available across all major areas including JB Town (Jalan Dhoby), Bukit Indah, Mount Austin, Permas Jaya, Skudai, Desa Tebrau, Taman Pelangi, Nusa Bestari, and Iskandar Puteri.',
  },
  {
    question: 'What is the price range for Johor Bahru escort services?',
    answer:
      'Prices for Johor Bahru escorts typically range from RM240 to RM700 depending on the platform, service type (incall or outcall), and companion profile. Always confirm the price directly with the platform before booking.',
  },
  {
    question: 'Are Johor Bahru escort services available 24 hours?',
    answer:
      'Many top JB escort platforms operate 24 hours a day, 7 days a week. Platforms like jb69girl and JBSam are known for round-the-clock availability, though response times may vary late at night.',
  },
  {
    question: 'What is the difference between incall and outcall in Johor Bahru?',
    answer:
      'Incall means you visit the companion at a designated location (usually a serviced apartment or hotel). Outcall means the companion comes to your hotel or residence. Most Johor Bahru escort platforms offer both options.',
  },
]

export default function JohorBahruEscortsPage() {
  const topPlatforms = platforms.slice(0, 6)
  const allAreas = areas

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://jbescorts.org/johor-bahru-escorts',
        url: 'https://jbescorts.org/johor-bahru-escorts',
        name: 'Johor Bahru Escorts — Verified JB Escort Directory 2026',
        description:
          'Find verified Johor Bahru escorts in 2026. Browse trusted JB escort platforms with real photos, honest reviews, and safety tips.',
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
            name: 'Johor Bahru Escorts',
            item: 'https://jbescorts.org/johor-bahru-escorts',
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
          <li className="text-gray-900 font-medium">Johor Bahru Escorts</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Johor Bahru Escorts
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
            The most trusted directory for verified escort services in Johor Bahru, Malaysia.
            Real photos, genuine reviews, and anti-scam safety tips — updated daily.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full">✓ Verified Platforms</span>
            <span className="bg-green-600 text-white px-4 py-1.5 rounded-full">✓ Real Photos</span>
            <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full">✓ Daily Updates</span>
            <span className="bg-red-600 text-white px-4 py-1.5 rounded-full">✓ Anti-Scam Guide</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Introduction */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Your Complete Guide to Johor Bahru Escorts
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              Johor Bahru (JB) is Malaysia's southernmost major city, directly connected to Singapore via
              the Causeway and Second Link. Its strategic location, vibrant nightlife, and diverse range of
              accommodations have made it one of the most sought-after destinations for escort services in
              Southeast Asia. Whether you're a visitor from Singapore crossing the border or a traveller
              exploring the region, this guide covers everything you need to know about Johor Bahru escorts
              in 2026.
            </p>
            <p>
              The Johor Bahru escort scene is primarily concentrated around Jalan Dhoby in JB Town, the
              city's historic entertainment corridor. Surrounding areas such as Bukit Indah, Mount Austin,
              Permas Jaya, and Skudai also have strong coverage from multiple verified platforms. Prices are
              significantly more affordable compared to Singapore, making JB a popular cross-border
              destination for companion services.
            </p>
            <p>
              At jbescorts.org, we aggregate and review the most active Johor Bahru escort platforms so you
              can make an informed choice. We do not operate any escort service ourselves — we are an
              independent directory that evaluates platforms for quality, safety, and legitimacy. All
              platforms listed have been manually reviewed for photo authenticity, active listing updates,
              and reliable contact methods.
            </p>
          </div>
        </section>

        {/* Top Platforms */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top Johor Bahru Escort Platforms (2026)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topPlatforms.map((p) => (
              <Link
                key={p.slug}
                href={`/platform/${p.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
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
                {p.priceRange && (
                  <span className="inline-block text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5">
                    {p.priceRange}
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link
              href="/"
              className="inline-block text-sm text-blue-600 hover:underline"
            >
              View all JB escort platforms →
            </Link>
          </div>
        </section>

        {/* Areas section */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Johor Bahru Escort Services by Area
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Escort services in Johor Bahru cover all major neighborhoods. Click on an area below for
            platform recommendations specific to that location.
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

        {/* How to choose */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            How to Choose a Johor Bahru Escort Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '1. Verified Photos',
                desc: 'Only trust platforms that verify their photos. Fake or outdated photos are the most common issue. Look for platforms that update listings regularly and display photo verification badges.',
              },
              {
                title: '2. Active Listings',
                desc: 'A quality platform updates its companion listings at least weekly. Stale listings (not updated in months) often indicate the platform is no longer actively managed or maintained.',
              },
              {
                title: '3. Multiple Contact Methods',
                desc: 'Reputable Johor Bahru escort platforms offer WhatsApp and Telegram contact. Be cautious of platforms that only accept unusual payment methods or lack responsive customer support.',
              },
              {
                title: '4. Area Coverage',
                desc: 'Confirm the platform serves your specific area in JB. Some platforms specialise in JB Town, while others cover Bukit Indah, Mount Austin, or Skudai. Area-specific platforms typically have better local knowledge.',
              },
              {
                title: '5. Pricing Transparency',
                desc: 'Quality platforms display their price ranges upfront. Platforms that refuse to show pricing until you contact them are generally less trustworthy and may use bait-and-switch tactics.',
              },
              {
                title: '6. Community Reputation',
                desc: 'Check forums and community feedback about the platform before booking. Established platforms like jb69girl and JBSam have long track records you can research independently.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety section */}
        <section className="mb-14 bg-red-50 rounded-xl border border-red-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            🛡️ Safety Tips for Johor Bahru Escorts
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Only book through platforms listed on trusted directories like jbescorts.org</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Never pay the full amount before the session begins — a small deposit is standard but full prepayment is a red flag</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Request a live photo or short video call to verify the companion's identity matches their profile</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Meet at reputable hotels in known JB areas (City Square, KSL Hotel, Berjaya Waterfront area)</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Keep personal information private — you do not need to share your full name, passport, or home address</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> If a deal sounds too good to be true (extremely low price, unrealistic photos), trust your instincts and walk away</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions — Johor Bahru Escorts
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
            <Link href="/jb-escorts" className="text-blue-600 hover:underline">JB Escorts →</Link>
            <Link href="/jb-town" className="text-blue-600 hover:underline">JB Town Escort →</Link>
            <Link href="/bukit-indah" className="text-blue-600 hover:underline">Bukit Indah Escort →</Link>
            <Link href="/mount-austin" className="text-blue-600 hover:underline">Mount Austin Escort →</Link>
            <Link href="/blog/jb-escort-guide-2026" className="text-blue-600 hover:underline">JB Escort Guide 2026 →</Link>
            <Link href="/" className="text-blue-600 hover:underline">JB Freelance Directory →</Link>
          </div>
        </section>

      </div>
    </main>
  )
}
