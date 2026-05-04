import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import freelancerData from '@/data/freelancers.json'
import PhotoGallery from './PhotoGallery'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  const data = freelancerData as any
  return (data.freelancers || []).map((f: any) => ({ id: String(f.id) }))
}

export function generateMetadata({ params }: Props): Metadata {
  const data = freelancerData as any
  const f    = data.freelancers?.find((x: any) => String(x.id) === params.id)
  if (!f) return {}

  const displayName = f.description?.match(/名字[：:]\s*\n?([^\n]+)/)?.[1]?.trim() || f.name
  const title = `${displayName} — ${f.area} 自由身 Freelance | jbescorts.org`
  const serviceLabel = f.serviceType === 'water' ? '下水' : f.serviceType === 'massage' ? '按摩' : '自由身'
  const desc  = `${displayName} ${f.area} ${serviceLabel} — 身高 ${f.height ? `${f.height}cm` : ''}${f.cup ? ` ${f.cup}` : ''}${f.priceMin ? `，RM${f.priceMin}-${f.priceMax}` : ''}。JB freelance Johor Bahru escort。查看真实资料及联系方式。`

  return {
    title,
    description: desc,
    alternates: { canonical: `/freelancer/${f.id}` },
    openGraph: {
      title,
      description: desc,
      url:  `https://jbescorts.org/freelancer/${f.id}`,
      images: f.photos?.[0] ? [{ url: `https://jbescorts.org${f.photos[0]}` }] : [],
    },
  }
}

const SERVICE_ICON:  Record<string, string> = { water: '💦', massage: '💆', other: '🔮' }
const SERVICE_LABEL: Record<string, string> = { water: '下水', massage: '按摩', other: '其他' }

export default function FreelancerPage({ params }: Props) {
  const data  = freelancerData as any
  const f     = data.freelancers?.find((x: any) => String(x.id) === params.id)
  if (!f) notFound()

  const serviceIcon  = SERVICE_ICON[f.serviceType]  || '🔮'
  const serviceLabel = SERVICE_LABEL[f.serviceType] || '其他'
  const price        = f.priceMin
    ? `RM${f.priceMin}${f.priceMax !== f.priceMin ? ` — RM${f.priceMax}` : ''}`
    : '价格询问'
  const displayName = f.description?.match(/名字[：:]\s*\n?([^\n]+)/)?.[1]?.trim() || f.name
  const waLink = f.whatsapp
    ? `https://wa.me/${f.whatsapp}?text=${encodeURIComponent(`你好，我从jbescorts.org看到你的资料（${displayName}），想了解更多。`)}`
    : null

  // Other freelancers in same area
  const sameArea = (data.freelancers || [])
    .filter((x: any) => x.areaSlug === f.areaSlug && x.id !== f.id)
    .slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: f.name,
    url: `https://jbescorts.org/freelancer/${f.id}`,
    image: f.photos?.[0] ? `https://jbescorts.org${f.photos[0]}` : undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: f.area,
      addressRegion: 'Johor',
      addressCountry: 'MY',
    },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <li><Link href="/" className="hover:text-[#0088cc]">首页</Link></li>
          <li>/</li>
          <li><Link href="/freelance" className="hover:text-[#0088cc]">自由身</Link></li>
          <li>/</li>
          <li><Link href={`/freelance/${f.areaSlug}`} className="hover:text-[#0088cc]">{f.area}</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{displayName}</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left: Photos ── */}
          <div className="lg:col-span-1">
            <PhotoGallery
              photos={f.photos || []}
              name={f.name}
              serviceIcon={serviceIcon}
              serviceLabel={serviceLabel}
            />
          </div>

          {/* ── Right: Info ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-3xl">{f.nationalityFlag}</span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{displayName}</h1>
              </div>
              <p className="text-gray-500 text-sm">
                📍 {f.area} · {f.nationalityName} · {serviceIcon} {serviceLabel}
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: '价格',   value: price,                 show: !!f.priceMin },
                { label: '身高',   value: f.height ? `${f.height}cm` : '—', show: true },
                { label: '体重',   value: f.weight ? `${f.weight}kg` : '—', show: true },
                { label: '罩杯',   value: f.cup || '—',           show: true },
              ].filter(s => s.show).map(stat => (
                <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-3 text-center">
                  <div className="text-xs text-gray-400 mb-0.5">{stat.label}</div>
                  <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/20 transition-all text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp 联系
              </a>
            )}

            {/* Description */}
            {f.description && (
              <section className="bg-white rounded-xl border border-gray-200 p-5">
                <h2 className="text-base font-bold text-gray-900 mb-3">💰 服务价钱</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {f.description}
                </p>
              </section>
            )}

            {/* Safety reminder */}
            <section className="bg-red-50 rounded-xl border border-red-100 p-4">
              <h2 className="text-sm font-bold text-gray-900 mb-2">🛡️ 安全提示</h2>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>✅ 见面前要求实时自拍或视频通话，核实照片真实性</li>
                <li>✅ 见面前绝不支付全款</li>
                <li>✅ 在知名酒店或正规场所见面</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">
                jbescorts.org 不直接提供任何服务，资料来源于公开论坛，仅供参考。
              </p>
            </section>
          </div>
        </div>

        {/* Reviews */}
        {f.reviews?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              ⭐ 用户好评 ({f.reviews.length})
            </h2>
            <div className="space-y-3">
              {f.reviews.map((review: any, i: number) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                      {review.author?.[0]?.toUpperCase() || '?'}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{review.author}</span>
                    <span className="text-yellow-400 text-xs">⭐</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {review.content}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Same area suggestions */}
        {sameArea.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              📍 {f.area} 其他自由身
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {sameArea.map((other: any) => (
                <Link
                  key={other.id}
                  href={`/freelancer/${other.id}`}
                  className="group text-center"
                >
                  <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-1">
                    {other.photos?.[0] ? (
                      <img
                        src={other.photos[0]}
                        alt={other.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xl">
                        {other.nationalityFlag}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-700 font-medium truncate group-hover:text-[#0088cc]">
                    {other.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <footer className="bg-gray-900 text-center py-8 px-4 mt-10">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Freelance Directory</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/freelance" className="hover:text-gray-400">← 返回自由身列表</Link>
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
            { '@type': 'ListItem', position: 1, name: '首页',     item: 'https://jbescorts.org' },
            { '@type': 'ListItem', position: 2, name: '自由身',   item: 'https://jbescorts.org/freelance' },
            { '@type': 'ListItem', position: 3, name: f.area,     item: `https://jbescorts.org/freelance/${f.areaSlug}` },
            { '@type': 'ListItem', position: 4, name: displayName, item: `https://jbescorts.org/freelancer/${f.id}` },
          ],
        }) }}
      />
    </main>
  )
}
