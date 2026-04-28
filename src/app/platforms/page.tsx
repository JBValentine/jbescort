import { Metadata } from 'next'
import Link from 'next/link'
import { platforms } from '@/data/platforms'

export const metadata: Metadata = {
  title: 'JB Escort Platforms — 15 Verified Escort Sites in Johor Bahru | jbescorts.org',
  description: 'Browse 15 verified escort platforms near Jalan Dhoby, Johor Bahru. Compare listings, read our anti-scam guide, and find the best JB escort site for you. 新山伴游平台聚合导航。',
  alternates: { canonical: '/platforms' },
  openGraph: {
    title: 'JB Escort Platforms — 新山伴游平台导航',
    description: '15 verified escort platforms in Johor Bahru — compare, review, stay safe.',
    url: 'https://jbescorts.org/platforms',
  },
}

export default function PlatformsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* 滚动字幕 */}
      <div className="bg-[#0088cc] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="mx-8 text-sm font-medium">⭐ 收藏我们！jbescorts.org 为您提供新山所有伴游网站一站式入口，防坑指南。</span>
          <span className="mx-8 text-sm font-medium">⭐ Bookmark us! jbescorts.org — Your one-stop portal to all JB escort sites with scam-proof guide.</span>
          <span className="mx-8 text-sm font-medium">⭐ 收藏我们！jbescorts.org 为您提供新山所有伴游网站一站式入口，防坑指南。</span>
          <span className="mx-8 text-sm font-medium">⭐ Bookmark us! jbescorts.org — Your one-stop portal to all JB escort sites with scam-proof guide.</span>
        </div>
      </div>

      {/* Hero */}
      <header className="relative bg-gray-900 py-8 lg:py-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/hero.jpeg')" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Link href="/" className="inline-block mb-4 text-gray-400 hover:text-white text-sm transition-colors">
            ← 返回首页
          </Link>
          <img src="/JB.png" alt="jbescorts.org logo" className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-2xl mb-4 border-2 border-white/20" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 drop-shadow-lg">
            JB Escort <span className="text-blue-400">Platforms</span>
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mb-2 drop-shadow-md">
            Your one-stop guide to verified escort platforms in Johor Bahru. Compare the best options near Jalan Dhoby and choose safely.
          </p>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mb-6">
            新山伴游平台聚合导航 — 汇集优质平台，覆盖 Jalan Dhoby 及全城。
          </p>

          <a
            href="https://t.me/JBmnXS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold text-white bg-[#0088cc] rounded-full hover:bg-[#0077b3] hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.09l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.135c.5-.185.934.12 1.325.882z" />
            </svg>
            加入官方 Telegram 群组
          </a>
        </div>
      </header>

      {/* 引导段落 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 -mt-8 relative z-20">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
          Explore 15 Verified Escort Platforms in Johor Bahru
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          jbescorts.org is a directory that brings together the most popular escort girl and escort angels platforms around Jalan Dhoby and greater Johor Bahru. Instead of searching across dozens of sites, browse our curated list, read detailed reviews, and visit the platform that fits you best.
        </p>
        <p className="text-gray-500 text-xs leading-relaxed mb-6">
          jbescorts.org 汇集了新山 Jalan Dhoby 及周边地区最受欢迎的伴游平台。无需逐个搜索，在这里浏览精选列表、阅读简介，直接访问适合你的平台。
        </p>
      </section>

      {/* 平台卡片 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((site) => {
            const domain = new URL(site.url).hostname
            return (
              <a
                key={site.slug}
                href={`/platform/${site.slug}`}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100/50 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80 backdrop-blur-md px-6 py-5 flex items-center border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-1.5 flex items-center justify-center">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                        alt={`${site.name} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h2 className="text-lg font-bold text-white/95 group-hover:text-blue-400 transition-colors drop-shadow-sm">
                      {site.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-gray-500 text-sm mb-2 line-clamp-2">{site.descEn}</p>
                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">{site.descZh}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-[#0088cc] text-sm font-bold">
                    <span>查看详情</span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#0088cc] group-hover:text-white transition-colors">
                      <svg className="w-4 h-4 translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-xl border border-gray-200 p-5 group" open>
            <summary className="font-semibold text-gray-800 text-sm cursor-pointer list-none flex justify-between items-center">
              How do I find a reliable escort platform in Johor Bahru?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              We&apos;ve done the research for you. jbescorts.org lists 15 active platforms that serve the Jalan Dhoby area and beyond. Each entry includes a brief description so you can quickly tell which site fits your needs — whether you prefer local escort girls or premium angel-tier companions.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-200 p-5 group">
            <summary className="font-semibold text-gray-800 text-sm cursor-pointer list-none flex justify-between items-center">
              Is there a Telegram group for updates?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Yes. Tap the button at the top of the page or go to <a href="https://t.me/JBmnXS" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] underline">t.me/JBmnXS</a>. The group shares new platform launches, user feedback, and scam alerts for the Johor Bahru area.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-200 p-5 group">
            <summary className="font-semibold text-gray-800 text-sm cursor-pointer list-none flex justify-between items-center">
              How can I avoid getting scammed?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Stick to platforms listed here, never pay the full amount before meeting, ask for a live photo or short video call, and always meet in a well-known location.
            </p>
          </details>
        </div>
      </section>

      {/* 防骗指南 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            🛡️ Anti-Scam Guide 防骗指南
          </h2>
          <p className="text-gray-500 mb-8">Stay safe and avoid common traps. 保护自己，远离常见骗局。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { rule: 'Rule 1 规则一', title: 'Never pay full amount upfront 绝不预付全款', desc: '如有需要只付小额定金，见面前要求全额付款的极可能是骗子。' },
              { rule: 'Rule 2 规则二', title: 'Verify photos are real 核实照片真实性', desc: '预约前要求实时自拍或视频通话，假照片是最常见的手段。' },
              { rule: 'Rule 3 规则三', title: 'Use platforms listed here 使用本站收录平台', desc: '优先使用 jbescorts.org 收录的平台，随机社交媒体联系人风险极高。' },
              { rule: 'Rule 4 规则四', title: 'Meet in safe locations 选择安全地点', desc: '务必在新山知名酒店或 Jalan Dhoby 附近正规场所见面，避免陌生私人地址。' },
            ].map((item) => (
              <div key={item.rule} className="bg-white rounded-xl p-6 border border-red-100/50">
                <div className="text-red-500 font-bold text-sm mb-2">⚠️ {item.rule}</div>
                <p className="text-gray-800 font-semibold text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Escort Directory 新山伴游导航. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">← 返回首页</Link>
          {' · '}
          <Link href="/blog" className="hover:text-gray-400">Blog 博客</Link>
        </p>
      </footer>
    </main>
  )
}
