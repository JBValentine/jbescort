import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { platforms } from '@/data/platforms'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const platform = platforms.find((p) => p.slug === params.slug)
  if (!platform) return {}

  return {
    title: `${platform.name} Review — JB Escort Platform Guide | jbescorts.org`,
    description: `${platform.name}: ${platform.descEn} Read our detailed review, features, areas served, and safety tips. ${platform.descZh}`,
    alternates: { canonical: `/platform/${platform.slug}` },
    openGraph: {
      title: `${platform.name} — JB Escort Platform Review`,
      description: platform.descEn,
      url: `https://jbescorts.org/platform/${platform.slug}`,
    },
  }
}

export default function PlatformPage({ params }: Props) {
  const platform = platforms.find((p) => p.slug === params.slug)
  if (!platform) notFound()

  const domain = new URL(platform.url).hostname
  const otherPlatforms = platforms.filter((p) => p.slug !== platform.slug).slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `${platform.name} Review`,
    description: platform.fullDescEn,
    url: `https://jbescorts.org/platform/${platform.slug}`,
    itemReviewed: {
      '@type': 'WebSite',
      name: platform.name,
      url: platform.url,
    },
    author: {
      '@type': 'Organization',
      name: 'jbescorts.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'jbescorts.org',
      url: 'https://jbescorts.org',
    },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#0088cc]">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{platform.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 flex items-center justify-center">
              <img
                src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                alt={`${platform.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                {platform.name}
              </h1>
              <p className="text-gray-400 text-sm mt-1">{domain}</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl">
            {platform.descEn}
          </p>
          <p className="text-gray-500 text-xs mt-2 max-w-3xl">
            {platform.descZh}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* 详细介绍 */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About {platform.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{platform.fullDescEn}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{platform.fullDescZh}</p>
            </section>

            {/* 功能特点 */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">⚡ Key Features 核心特点</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {platform.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <div>
                      <p className="text-gray-700 text-sm font-medium">{f}</p>
                      {platform.featuresZh[i] && (
                        <p className="text-gray-400 text-xs">{platform.featuresZh[i]}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 覆盖区域 */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">📍 Areas Served 服务区域</h2>
              <div className="flex flex-wrap gap-2">
                {platform.areas.map((area) => (
                  <span key={area} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">
                    {area}
                  </span>
                ))}
              </div>
            </section>

            {/* 安全提示 */}
            <section className="bg-red-50 rounded-xl border border-red-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">🛡️ Safety Reminder 安全提示</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ Always verify photos with a live selfie or video call before meeting</li>
                <li>✅ Never pay full amount before the companion arrives</li>
                <li>✅ Meet at reputable hotels or well-known locations only</li>
                <li>✅ Keep personal information private and trust your instincts</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3">
                jbescorts.org 不直接提供任何服务。以上信息仅供参考，用户需自行承担相关责任。
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Visit button */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-base font-bold text-white bg-[#0088cc] rounded-xl hover:bg-[#0077b3] transition-all shadow-lg shadow-blue-500/20"
              >
                访问 {platform.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-xs text-gray-400 mt-3">点击将在新窗口打开外部网站</p>
            </div>

            {/* Quick info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4">📋 Quick Info 快速信息</h3>
              <div className="space-y-3 text-sm">
                {platform.girlCount && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Girls 女孩数</span>
                    <span className="font-medium text-gray-900">{platform.girlCount}</span>
                  </div>
                )}
                {platform.priceRange && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price 价格</span>
                    <span className="font-medium text-gray-900">{platform.priceRange}</span>
                  </div>
                )}
                {platform.established && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Since 创建于</span>
                    <span className="font-medium text-gray-900">{platform.established}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact 联系</span>
                  <span className="font-medium text-gray-900">{platform.contactMethods.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Areas 区域</span>
                  <span className="font-medium text-gray-900">{platform.areas.length}+</span>
                </div>
              </div>
            </div>

            {/* Telegram CTA */}
            <div className="bg-gradient-to-br from-[#0088cc]/10 to-blue-50 rounded-xl border border-blue-100 p-6 text-center">
              <p className="text-sm font-bold text-gray-900 mb-2">获取实时防骗提醒</p>
              <p className="text-xs text-gray-500 mb-4">加入 Telegram 群组了解最新平台动态</p>
              <a
                href="https://t.me/JBjinhaiwan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#0088cc] rounded-lg hover:bg-[#0077b3] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.09l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.135c.5-.185.934.12 1.325.882z"/></svg>
                加入 Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Other platforms */}
        <section className="mt-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">🔗 Explore More Platforms 探索更多平台</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {otherPlatforms.map((p) => (
              <Link
                key={p.slug}
                href={`/platform/${p.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-3 hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${new URL(p.url).hostname}&sz=64`}
                  alt={`${p.name} logo`}
                  className="w-8 h-8 rounded mx-auto mb-2"
                  loading="lazy"
                />
                <p className="text-xs font-bold text-gray-900 truncate">{p.name}</p>
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
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          {' · '}
          {platform.name} Review
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
            { '@type': 'ListItem', position: 2, name: platform.name, item: `https://jbescorts.org/platform/${platform.slug}` },
          ],
        }) }}
      />
    </main>
  )
}
