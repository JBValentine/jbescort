import { Metadata } from 'next'
import Link from 'next/link'
import freelancerData from '@/data/freelancers.json'

export const metadata: Metadata = {
  title: 'JB Girl Escort — Johor Bahru Girl Escort Listings | jbescorts.org',
  description:
    'JB girl escort directory — browse verified female escort Johor listings across all JB areas. JB girl escort profiles with real photos. Johor escort, JB escorts, meet first.',
  alternates: {
    canonical: '/jb-girl-escort',
  },
  keywords: [
    'jb girl escort',
    'jb escorts',
    'female escort johor',
    'johor escort',
    'jb escort',
    'girl escort jb',
    'johor bahru girl escort',
    'escort jb girl',
  ],
  openGraph: {
    title: 'JB Girl Escort — Johor Bahru Girl Escort Listings | jbescorts.org',
    description:
      'Browse verified JB girl escort profiles across all Johor Bahru areas. Female escort Johor, JB girl escorts, real photos.',
    url: 'https://jbescorts.org/jb-girl-escort',
  },
}

const areaListings = [
  { name: 'Bukit Indah',    slug: 'bukit-indah' },
  { name: 'Skudai',         slug: 'skudai' },
  { name: 'Danga Bay',      slug: 'danga-bay' },
  { name: 'JB Town',        slug: 'jb-town' },
  { name: 'Mount Austin',   slug: 'mount-austin' },
  { name: 'Permas Jaya',    slug: 'permas-jaya' },
  { name: 'Nusa Bestari',   slug: 'nusa-bestari' },
  { name: 'R&F 富力',       slug: 'r-and-f' },
  { name: 'Desa Tebrau',    slug: 'desa-tebrau' },
  { name: 'Taman Pelangi',  slug: 'taman-pelangi' },
]

const faqItems = [
  {
    question: 'How to find a JB girl escort?',
    answer:
      'Use jbescorts.org to browse verified JB girl escort profiles updated daily. Filter by area — popular areas include Bukit Indah, JB Town, Skudai, and Danga Bay. For platform-based bookings, visit our partner JB Escort Directory at jbanmo.com.',
  },
  {
    question: 'What areas have the most JB girl escorts?',
    answer:
      'The areas with the highest concentration of JB girl escort listings are JB Town (Jalan Dhoby), Bukit Indah, Mount Austin, Skudai, and Danga Bay. jbescorts.org covers 17+ active areas in Johor Bahru.',
  },
  {
    question: 'What nationalities are available for JB girl escorts?',
    answer:
      'JB girl escort profiles on jbescorts.org include Malaysian Chinese, Malay, Vietnamese, Indonesian, and Thai companions. Nationality and photos are shown on each profile.',
  },
  {
    question: 'How much does a JB girl escort cost?',
    answer:
      'JB girl escort pricing typically ranges from RM200 to RM600 per session. Pricing depends on nationality, area, service type, and duration. Check individual profiles for exact pricing.',
  },
  {
    question: 'Are JB girl escorts available for hotel outcall?',
    answer:
      'Yes. Most JB girl escort listings on jbescorts.org offer outcall services to JB hotels. Always confirm availability and hotel policy directly with the companion or agency.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://jbescorts.org/jb-girl-escort',
      url: 'https://jbescorts.org/jb-girl-escort',
      name: 'JB Girl Escort — Johor Bahru Girl Escort Listings | jbescorts.org',
      description: 'Browse verified JB girl escort profiles across all Johor Bahru areas.',
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
        { '@type': 'ListItem', position: 2, name: 'JB Girl Escort', item: 'https://jbescorts.org/jb-girl-escort' },
      ],
    },
  ],
}

export default function JbGirlEscortPage() {
  const { freelancers, areas, totalCount } = freelancerData as any

  // Sample up to 8 profiles with photos (any area)
  const sampleProfiles = (freelancers as any[])
    .filter((f: any) => f.photos?.length > 0)
    .slice(0, 8)

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
          <li className="text-gray-900 font-medium">JB Girl Escort</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            JB Girl Escort — Browse Verified Profiles
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
            The most complete <strong>JB girl escort</strong> and <strong>female escort Johor</strong> directory.{' '}
            {totalCount}+ verified profiles across {areas.length} areas in Johor Bahru — real photos, meet first.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            <span className="bg-pink-600 text-white px-4 py-1.5 rounded-full">✓ JB Girl Escort Profiles</span>
            <span className="bg-purple-600 text-white px-4 py-1.5 rounded-full">✓ Female Escort Johor</span>
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full">✓ {areas.length} JB Areas</span>
            <span className="bg-green-600 text-white px-4 py-1.5 rounded-full">✓ Daily Updated</span>
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
            JB Girl Escort — Johor Bahru
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              <strong>JB girl escort</strong> listings are the most searched escort category in Johor Bahru.
              jbescorts.org maintains the most complete directory of <strong>JB girl escorts</strong>,
              <strong>female escort Johor</strong> profiles, and <strong>johor escort</strong> listings —
              all with real photos and verified daily.
            </p>
            <p>
              Our directory covers all major areas in JB, from the busy JB Town (Jalan Dhoby) corridor to
              quieter residential areas like Nusa Bestari and Permas Jaya. Whether you're looking for a
              <strong>JB girl escort</strong> for hotel outcall or an incall session, you'll find the right
              profile here.
            </p>
            <p>
              For platform-based bookings and curated agency listings, visit our partner{' '}
              <a href="https://jbanmo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                JB Escort Directory
              </a>{' '}
              — the most complete JB girl escort platform comparison available.
            </p>
          </div>
        </section>

        {/* Featured profiles */}
        {sampleProfiles.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Featured JB Girl Escort Profiles
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Sample profiles from our JB escort directory. All profiles include real photos and are updated daily.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sampleProfiles.map((f: any) => {
                const photo = f.photos?.[0]
                const displayName = f.description?.match(/名字[：:]\s*\n?([^\n]+)/)?.[1]?.trim() || f.name
                const price = f.priceMin
                  ? `RM${f.priceMin}${f.priceMax !== f.priceMin ? `-${f.priceMax}` : ''}`
                  : ''
                return (
                  <Link
                    key={f.id}
                    href={`/freelancer/${f.id}`}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
                      {photo ? (
                        <img
                          src={photo}
                          alt={`JB girl escort ${displayName} ${f.area}`}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
                          {f.nationalityFlag}
                        </div>
                      )}
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-bold text-gray-900 truncate">{displayName}</div>
                      <div className="text-[10px] text-gray-400 truncate">{f.area}</div>
                      {price && <div className="text-xs font-semibold text-amber-600 mt-0.5">{price}</div>}
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="mt-5 text-center">
              <Link href="/freelance" className="inline-block text-sm text-blue-600 hover:underline">
                View all JB girl escort listings →
              </Link>
            </div>
          </section>
        )}

        {/* JB Girl Escort Areas */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            JB Girl Escort Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {areaListings.map((area) => (
              <Link
                key={area.slug}
                href={`/freelance/${area.slug}`}
                className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-center hover:bg-pink-50 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900 text-sm">{area.name}</div>
                <div className="text-pink-600 text-xs mt-1">Girl Escorts →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Female Escort Johor section */}
        <section className="mb-14 bg-pink-50 rounded-xl border border-pink-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Female Escort Johor — All Districts
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            jbescorts.org covers <strong>female escort Johor</strong> listings across all JB districts —
            from the central JB Town (Jalan Dhoby) corridor to the northern areas of Bukit Indah and Skudai,
            and southern districts including Nusa Bestari and Iskandar Puteri. All <strong>johor escort</strong>{' '}
            profiles are verified with real photos and updated daily. Use the area links above to filter by
            your preferred district.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FAQ: JB Girl Escort
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
          <h2 className="text-xl font-bold mb-3">Browse All JB Girl Escort Listings</h2>
          <p className="text-gray-400 text-sm mb-5">
            {totalCount}+ verified JB girl escort profiles across {areas.length} areas. Updated daily.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/freelance"
              className="px-6 py-3 bg-[#0088cc] text-white text-sm font-bold rounded-full hover:bg-[#0077b3] transition-all"
            >
              Browse JB Girl Escort Directory
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
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Girl Escort Directory. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {' · '}
          <Link href="/jb-escort" className="hover:text-gray-400">JB Escort</Link>
          {' · '}
          <Link href="/escort-jb" className="hover:text-gray-400">Escort JB</Link>
          {' · '}
          <Link href="/jb-escorts" className="hover:text-gray-400">JB Escorts</Link>
        </p>
      </footer>
    </main>
  )
}
