import { Metadata } from 'next'
import Link from 'next/link'
import freelancerData from '@/data/freelancers.json'

export const metadata: Metadata = {
  title: 'JB 自由�?Freelance �?新山下水按摩导航 | jbescorts.org',
  description: `新山自由身下�?& 按摩导航 �?${freelancerData.totalCount}+ 真实资料，覆�?${freelancerData.areas.length} 个区域。Johor Bahru freelance escort & massage directory.`,
  alternates: { canonical: '/freelance' },
  openGraph: {
    title: 'JB 自由�?Freelance �?新山下水按摩导航',
    description: '新山自由身一站式导航，真实资料，覆盖全新山主要区域�?,
    url: 'https://jbescorts.org/freelance',
  },
}

const SERVICE_ICON: Record<string, string> = {
  water:   '💦',
  massage: '💆',
  other:   '🔮',
}

const SERVICE_LABEL: Record<string, string> = {
  water:   '下水',
  massage: '按摩',
  other:   '其他',
}

export default function FreelancePage() {
  const { freelancers, areas, totalCount, lastUpdated } = freelancerData as any

  // Group by area for display
  const byArea = areas.map((area: any) => ({
    ...area,
    items: freelancers
      .filter((f: any) => f.areaSlug === area.slug)
      .slice(0, 8),
  }))

  const waterCount   = freelancers.filter((f: any) => f.serviceType === 'water').length
  const massageCount = freelancers.filter((f: any) => f.serviceType === 'massage').length

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-block mb-4 text-gray-400 hover:text-white text-sm transition-colors">
            �?返回主页
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            JB 自由�?<span className="text-blue-400">Freelance</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-4">
            新山自由身下�?& 按摩导航 �?真实资料，覆�?{areas.length} 个区�?
          </p>
          <p className="text-gray-500 text-xs mb-6">
            Johor Bahru freelance escort & massage directory. Verified listings from {areas.length} areas.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { label: '自由�?, value: totalCount },
              { label: '区域',   value: areas.length },
              { label: '💦 下水', value: waterCount },
              { label: '💆 按摩', value: massageCount },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-xl px-4 py-2 text-center min-w-[70px]">
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href="https://t.me/JBjinhaiwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#0088cc] rounded-full hover:bg-[#0077b3] transition-all shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.09l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.135c.5-.185.934.12 1.325.882z" />
            </svg>
            加入 Telegram �?
          </a>
        </div>
      </header>

      {/* Area Nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {areas.map((area: any) => (
            <Link
              key={area.slug}
              href={`/freelance/${area.slug}`}
              className="flex-shrink-0 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-colors whitespace-nowrap"
            >
              {area.name} <span className="text-gray-400 group-hover:text-white">({area.count})</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Area Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {byArea.map((area: any) => (
          <section key={area.slug} id={area.slug}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                📍 {area.name}
                <span className="text-gray-400 font-normal text-sm ml-2">({area.count})</span>
              </h2>
              {area.count > 8 && (
                <Link
                  href={`/freelance/${area.slug}`}
                  className="text-[#0088cc] text-sm font-medium hover:underline"
                >
                  查看全部 �?
                </Link>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {area.items.map((f: any) => (
                <FreelancerCard key={f.id} freelancer={f} />
              ))}
            </div>

            {area.count > 8 && (
              <div className="mt-4 text-center">
                <Link
                  href={`/freelance/${area.slug}`}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-white text-[#0088cc] text-sm font-semibold rounded-full border border-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-all"
                >
                  查看 {area.name} 全部 {area.count} �?�?
                </Link>
              </div>
            )}
          </section>
        ))}

        {freelancers.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-4">🔄</p>
            <p className="text-lg font-semibold">数据同步�?..</p>
            <p className="text-sm mt-2">首次运行爬虫后数据将在此显示</p>
          </div>
        )}
      </div>

      {/* Last updated */}
      <div className="text-center py-4 text-xs text-gray-400">
        数据最后更新：{new Date(lastUpdated).toLocaleString('zh-CN', { timeZone: 'Asia/Kuala_Lumpur' })}
        {' · '}数据来源于公开论坛，仅供参考�?
      </div>

      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-sm">
          &copy; 2026 jbescorts.org �?JB Freelance Directory
        </p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">返回主页</Link>
        </p>
      </footer>
    </main>
  )
}

function FreelancerCard({ freelancer: f }: { freelancer: any }) {
  const icon   = SERVICE_ICON[f.serviceType]  || '🔮'
  const label  = SERVICE_LABEL[f.serviceType] || '其他'
  const photo  = f.photos?.[0]
  const price  = f.priceMin
    ? `RM${f.priceMin}${f.priceMax !== f.priceMin ? `-${f.priceMax}` : ''}`
    : ''

  return (
    <Link
      href={`/freelancer/${f.id}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={`${f.name} ${f.area}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
            {f.nationalityFlag}
          </div>
        )}
        {/* Service badge */}
        <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded-full backdrop-blur-sm">
          {icon} {label}
        </span>
        {/* Review badge */}
        {f.reviews?.length > 0 && (
          <span className="absolute top-2 right-2 bg-yellow-400/90 text-yellow-900 text-xs px-1.5 py-0.5 rounded-full font-semibold">
            �?{f.reviews.length}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-base">{f.nationalityFlag}</span>
          <span className="text-sm font-bold text-gray-900 truncate group-hover:text-[#0088cc] transition-colors">
            {f.name}
          </span>
        </div>
        <div className="text-xs text-gray-400 truncate">
          {[f.height && `${f.height}cm`, f.cup].filter(Boolean).join(' / ')}
        </div>
        {price && (
          <div className="text-xs font-semibold text-[#0088cc] mt-1">{price}</div>
        )}
      </div>
    </Link>
  )
}
