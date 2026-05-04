import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import freelancerData from '@/data/freelancers.json'

interface Props {
  params: { area: string }
}

export function generateStaticParams() {
  const data = freelancerData as any
  return (data.areas || []).map((a: any) => ({ area: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const data = freelancerData as any
  const area = data.areas?.find((a: any) => a.slug === params.area)
  if (!area) return {}
  return {
    title: `${area.name} 自由身 Freelance — JB 新山下水按摩 | jbescorts.org`,
    description: `${area.name} 自由身 ${area.count} 条真实资料，涵盖下水、按摩服务。JB freelance escort ${area.name} Johor Bahru。每日更新，价格透明。`,
    alternates: { canonical: `/freelance/${area.slug}` },
    openGraph: {
      title: `${area.name} 自由身 — JB Freelance`,
      description: `${area.name} 区域 ${area.count} 条自由身资料`,
      url: `https://jbescorts.org/freelance/${area.slug}`,
    },
  }
}

const SERVICE_ICON: Record<string, string>  = { water: '💦', massage: '💆', other: '🔮' }
const SERVICE_LABEL: Record<string, string> = { water: '下水', massage: '按摩', other: '其他' }

export default function AreaFreelancePage({ params }: Props) {
  const data      = freelancerData as any
  const areaInfo  = data.areas?.find((a: any) => a.slug === params.area)
  if (!areaInfo) notFound()

  const freelancers = (data.freelancers || []).filter(
    (f: any) => f.areaSlug === params.area,
  )
  const otherAreas = (data.areas || []).filter((a: any) => a.slug !== params.area)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#0088cc]">首页</Link></li>
          <li>/</li>
          <li><Link href="/freelance" className="hover:text-[#0088cc]">自由身</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{areaInfo.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            📍 {areaInfo.name}
            <span className="text-blue-400 text-2xl ml-2">自由身</span>
          </h1>
          <p className="text-gray-300 text-sm">共 {freelancers.length} 条资料</p>
        </div>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {freelancers.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {freelancers.map((f: any) => {
              const icon  = SERVICE_ICON[f.serviceType]  || '🔮'
              const label = SERVICE_LABEL[f.serviceType] || '其他'
              const photo = f.photos?.[0]
              const price = f.priceMin
                ? `RM${f.priceMin}${f.priceMax !== f.priceMin ? `-${f.priceMax}` : ''}`
                : ''

              const displayName = f.description?.match(/名字[：:]\s*\n?([^\n]+)/)?.[1]?.trim() || f.name
              return (
                <Link
                  key={f.id}
                  href={`/freelancer/${f.id}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
                    {photo ? (
                      <img
                        src={photo}
                        alt={`${f.name} ${areaInfo.name}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl text-gray-300">
                        {f.nationalityFlag}
                      </div>
                    )}
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                      {icon} {label}
                    </span>
                    {f.reviews?.length > 0 && (
                      <span className="absolute top-2 right-2 bg-yellow-400/90 text-yellow-900 text-xs px-1.5 py-0.5 rounded-full font-semibold">
                        ⭐ {f.reviews.length}
                      </span>
                    )}
                  </div>
                  <div className="p-2.5">
                    <div className="flex items-center gap-1 mb-0.5">
                      <span>{f.nationalityFlag}</span>
                      <span className="text-sm font-bold text-gray-900 truncate group-hover:text-[#0088cc]">
                        {displayName}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {[f.height && `${f.height}cm`, f.cup].filter(Boolean).join(' / ')}
                    </div>
                    {price && (
                      <div className="text-xs font-semibold text-[#0088cc] mt-0.5">{price}</div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="text-center text-gray-400 py-20">该区域暂无资料</p>
        )}

        {/* Other Areas */}
        <section className="mt-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">🗺️ 其他区域</h2>
          <div className="flex flex-wrap gap-2">
            {otherAreas.map((a: any) => (
              <Link
                key={a.slug}
                href={`/freelance/${a.slug}`}
                className="px-3 py-1.5 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-colors"
              >
                {a.name} ({a.count})
              </Link>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-center py-8 px-4 mt-8">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Freelance Directory</p>
        <p className="text-gray-600 text-xs mt-2">
          数据来源于公开论坛，仅供参考。
          {' · '}
          <Link href="/freelance" className="hover:text-gray-400">返回自由身总览</Link>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: 'https://jbescorts.org' },
            { '@type': 'ListItem', position: 2, name: '自由身', item: 'https://jbescorts.org/freelance' },
            { '@type': 'ListItem', position: 3, name: areaInfo.name, item: `https://jbescorts.org/freelance/${areaInfo.slug}` },
          ],
        }) }}
      />
    </main>
  )
}
