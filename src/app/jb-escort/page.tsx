import { Metadata } from 'next'
import Link from 'next/link'
import freelancerData from '@/data/freelancers.json'

export const metadata: Metadata = {
  title: 'JB Escort — Johor Bahru Escort Directory | jbescorts.org',
  description:
    'JB Escort directory — verified JB escort listings across Johor Bahru. Browse JB escorts by area: Bukit Indah, Skudai, Danga Bay, JB CBD. Escort JB, JB escorts, no deposit, meet first.',
  alternates: {
    canonical: '/jb-escort',
  },
  keywords: [
    'jb escort',
    'jb escorts',
    'escort jb',
    'jb escort service',
    'johor bahru escort',
    'jb escort directory',
    'jb escort 2026',
    'escort service jb',
  ],
  openGraph: {
    title: 'JB Escort — Johor Bahru Escort Directory | jbescorts.org',
    description:
      'Verified JB escort listings across all Johor Bahru areas. Escort JB, JB escorts, hotel outcall, meet first.',
    url: 'https://jbescorts.org/jb-escort',
  },
}

const areaListings = [
  { name: 'Bukit Indah JB Escorts',  slug: 'bukit-indah' },
  { name: 'Skudai JB Escorts',       slug: 'skudai' },
  { name: 'Danga Bay JB Escorts',    slug: 'danga-bay' },
  { name: 'JB CBD Escorts',          slug: 'jb-town' },
  { name: 'Mount Austin JB Escorts', slug: 'mount-austin' },
  { name: 'Permas Jaya JB Escorts',  slug: 'permas-jaya' },
  { name: 'Nusa Bestari JB Escorts', slug: 'nusa-bestari' },
  { name: 'R&F 富力 JB Escorts',     slug: 'r-and-f' },
]

const faqItems = [
  {
    question: 'What is a JB escort?',
    answer:
      'A JB escort is a companion service operating in Johor Bahru (JB), Malaysia. JB escorts are individuals or agency-managed companions available for social companionship, outcall hotel visits, or incall services across various JB neighbourhoods.',
  },
  {
    question: 'How much does a JB escort cost?',
    answer:
      'JB escort pricing typically ranges from RM200 to RM700 per session depending on the service type, duration, area, and companion profile. Always confirm pricing directly before booking. Be cautious of prices below RM150 — these are usually scam bait listings.',
  },
  {
    question: 'How to find a verified JB escort?',
    answer:
      'Use jbescorts.org — the most complete JB escort and freelance directory. We list verified profiles with real photos updated daily. You can also visit our partner directory at jbanmo.com for additional listings.',
  },
  {
    question: 'Are JB escort services available for hotel outcall?',
    answer:
      'Yes. Most JB escorts offer outcall services to major hotels in Johor Bahru including hotels near Jalan Dhoby, Bukit Indah, and Danga Bay. Always confirm with the companion or agency before booking.',
  },
  {
    question: 'Do I need to pay a deposit for a JB escort?',
    answer:
      'Reputable JB escort services use a meet-first, pay-later model — no deposit required upfront. If a service demands full prepayment with no in-person verification, it is almost certainly a scam.',
  },
  {
    question: 'What areas in JB have the most escorts?',
    answer:
      'The highest concentration of JB escort listings is in JB Town (Jalan Dhoby area), Bukit Indah, Skudai, Mount Austin, and Danga Bay. jbescorts.org covers all 17+ active JB areas.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://jbescorts.org/jb-escort',
      url: 'https://jbescorts.org/jb-escort',
      name: 'JB Escort — Johor Bahru Escort Directory | jbescorts.org',
      description:
        'JB Escort directory — verified JB escort listings across Johor Bahru. Browse JB escorts by area.',
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
        { '@type': 'ListItem', position: 2, name: 'JB Escort', item: 'https://jbescorts.org/jb-escort' },
      ],
    },
  ],
}

export default function JbEscortPage() {
  const { freelancers, areas, totalCount } = freelancerData as any
  const waterCount = freelancers.filter((f: any) => f.serviceType === 'water').length

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
          <li className="text-gray-900 font-medium">JB Escort</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            JB Escort — Verified Listings in Johor Bahru
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
            Your most complete <strong>JB escort</strong> and <strong>escort JB</strong> directory.{' '}
            {totalCount}+ verified JB escort profiles across {areas.length} areas — hotel outcall, meet first, no deposit.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full">✓ {totalCount}+ JB Escorts</span>
            <span className="bg-green-600 text-white px-4 py-1.5 rounded-full">✓ {waterCount} Escort JB Listings</span>
            <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full">✓ {areas.length} JB Areas</span>
            <span className="bg-amber-600 text-white px-4 py-1.5 rounded-full">✓ No Deposit Required</span>
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
            JB Escort — Johor Bahru Escort Directory
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              <strong>JB escort</strong> refers to companion and escort services operating throughout Johor Bahru
              (JB), Malaysia. As the gateway city from Singapore, JB hosts one of the most active escort scenes
              in Southeast Asia. Whether you search for <em>jb escort</em>, <em>escort jb</em>, or <em>jb escorts</em>,
              this directory is the most complete and up-to-date resource available.
            </p>
            <p>
              jbescorts.org lists <strong>{totalCount}+</strong> verified JB escort profiles across{' '}
              <strong>{areas.length} areas</strong> in Johor Bahru. Every listing includes real photos, service
              type, area, and pricing. All profiles are sourced from active platforms and updated daily.
            </p>
            <p>
              Whether you need a <strong>JB escort service</strong> for hotel outcall in Bukit Indah, a companion
              near Jalan Dhoby in JB Town, or <strong>escort JB</strong> listings in Skudai and Danga Bay — this
              directory has you covered. For the full platform comparison, visit our partner{' '}
              <a href="https://jbanmo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                JB Escort Directory
              </a>.
            </p>
          </div>
        </section>

        {/* Browse by Area */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Browse JB Escort Listings by Area
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Select an area to browse verified JB escort profiles near you.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {areaListings.map((area) => (
              <Link
                key={area.slug}
                href={`/freelance/${area.slug}`}
                className="bg-white rounded-xl border border-gray-200 px-4 py-4 text-center hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900 text-sm">{area.name}</div>
                <div className="text-blue-600 text-xs mt-1">View Listings →</div>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/freelance" className="inline-block text-sm text-blue-600 hover:underline">
              View all JB escort areas →
            </Link>
          </div>
        </section>

        {/* How to book */}
        <section className="mb-14 bg-blue-50 rounded-xl border border-blue-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            How to Book a JB Escort
          </h2>
          <ol className="space-y-3 text-sm text-gray-600 list-decimal list-inside">
            <li><strong>Browse the directory</strong> — Use jbescorts.org or our partner <a href="https://jbanmo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JB Escort Directory</a> to find a verified JB escort profile in your preferred area.</li>
            <li><strong>Check photos and pricing</strong> — Review the profile carefully. Real listings include multiple photos and transparent RM pricing.</li>
            <li><strong>Contact via Telegram or WhatsApp</strong> — Use the provided contact link. Never share personal documents or pay large deposits before meeting.</li>
            <li><strong>Meet first, pay later</strong> — Reputable JB escort services operate on a meet-first model. Confirm identity before any payment.</li>
            <li><strong>Book at a JB hotel</strong> — Most JB escorts offer outcall services to hotels across Johor Bahru.</li>
          </ol>
        </section>

        {/* Safety */}
        <section className="mb-14 bg-red-50 rounded-xl border border-red-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            🛡️ JB Escort Safety Tips
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Only use JB escort profiles listed on verified directories like jbescorts.org</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Never pay full amount upfront — genuine JB escort services don't require prepayment</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Request a live photo or video verification before committing</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Prices below RM150 for JB escorts are almost always scam bait profiles</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Do not share your IC or passport number with any escort service</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            JB Escort FAQ
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
          <h2 className="text-xl font-bold mb-3">Browse All JB Escort Listings</h2>
          <p className="text-gray-400 text-sm mb-5">
            {totalCount}+ verified JB escort profiles across {areas.length} areas. Updated daily.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/freelance"
              className="px-6 py-3 bg-[#0088cc] text-white text-sm font-bold rounded-full hover:bg-[#0077b3] transition-all"
            >
              Browse JB Escort Directory
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
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Escort Directory. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {' · '}
          <Link href="/jb-girl-escort" className="hover:text-gray-400">JB Girl Escort</Link>
          {' · '}
          <Link href="/escort-jb" className="hover:text-gray-400">Escort JB</Link>
          {' · '}
          <Link href="/jb-escorts" className="hover:text-gray-400">JB Escorts</Link>
        </p>
      </footer>
    </main>
  )
}
