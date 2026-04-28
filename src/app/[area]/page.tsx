import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { areas, platformLinks } from '@/data/areas'
import Link from 'next/link'

interface Props {
  params: { area: string }
}

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const area = areas.find((a) => a.slug === params.area)
  if (!area) return {}

  return {
    title: `${area.name} Escort Service — JB Escort Guide | ${area.nameZh}伴游`,
    description: `Find the best escort services in ${area.name}, Johor Bahru. Verified platforms, real photos, anti-scam tips. ${area.nameZh}伴游服务指南，安全可靠。`,
    alternates: {
      canonical: `/${area.slug}`,
    },
    openGraph: {
      title: `${area.name} Escort — JB Escort Directory`,
      description: `Top escort platforms serving ${area.name}, Johor Bahru. Compare and choose safely.`,
      url: `https://jbescorts.org/${area.slug}`,
    },
  }
}

export default function AreaPage({ params }: Props) {
  const area = areas.find((a) => a.slug === params.area)
  if (!area) notFound()

  const recommendedPlatforms = area.platforms
    .map((name) => ({ name, ...platformLinks[name] }))
    .filter((p) => p.url)

  const otherAreas = areas.filter((a) => a.slug !== area.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${area.name} Escort Service — JB Escort Directory`,
    description: area.description,
    url: `https://jbescorts.org/${area.slug}`,
    isPartOf: { '@id': 'https://jbescorts.org/#website' },
    about: {
      '@type': 'Place',
      name: area.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: area.name,
        addressRegion: 'Johor',
        addressCountry: 'MY',
      },
    },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#0088cc]">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{area.name} Escort</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            {area.name} Escort Service <span className="text-blue-400">| {area.nameZh}伴游</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
            Your guide to verified escort platforms in {area.name}, Johor Bahru
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 双语介绍 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About {area.name} Escort Services
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {area.description}
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            {area.descriptionZh}
          </p>
        </section>

        {/* 附近地标 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            📍 Nearby Landmarks 附近地标
          </h2>
          <div className="flex flex-wrap gap-2">
            {area.nearby.map((place) => (
              <span key={place} className="px-3 py-1.5 bg-white text-gray-600 text-xs rounded-full border border-gray-200">
                {place}
              </span>
            ))}
          </div>
        </section>

        {/* 推荐平台 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            ⭐ Recommended Platforms for {area.name} 推荐平台
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedPlatforms.map((p) => (
              <Link
                key={p.name}
                href={`/platform/${p.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${new URL(p.url).hostname}&sz=64`}
                    alt={`${p.name} logo`}
                    className="w-8 h-8 rounded"
                    loading="lazy"
                  />
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-1">{p.descEn}</p>
                <p className="text-gray-400 text-xs">{p.descZh}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 防骗提示 */}
        <section className="mb-12 bg-red-50 rounded-xl border border-red-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            🛡️ Safety Tips for {area.name} 安全提示
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✅ Only use verified platforms listed on jbescorts.org</li>
            <li>✅ Meet at reputable hotels near {area.nearby[0] || area.name}</li>
            <li>✅ Never pay full amount before meeting</li>
            <li>✅ Request a live photo or video call to verify identity</li>
          </ul>
        </section>

        {/* 其他区域内链 */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            🗺️ Explore Other JB Areas 探索其他区域
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/${a.slug}`}
                className="px-4 py-2 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-colors"
              >
                {a.name} Escort
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Escort Directory 新山伴游导航</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {' · '}
          {area.name} Escort Service
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jbescorts.org' },
            { '@type': 'ListItem', position: 2, name: `${area.name} Escort`, item: `https://jbescorts.org/${area.slug}` },
          ],
        }) }}
      />
    </main>
  )
}
