import { Metadata } from 'next'
import Link from 'next/link'

const PARTNER_LINKS = [
  {
    key: 'jbanmo',
    name: 'JB安摩',
    url: 'https://jbanmo.com/',
    descZh: '新山安摩平台，精选资源一站直达',
    descEn: 'JB massage & escort platform — curated listings in one place.',
    type: 'web',
  },
  {
    key: 'jbescorts-org',
    name: 'jbescorts.org',
    url: 'https://jbescorts.org/',
    descZh: '新山自由身下水按摩导航，每日自动更新',
    descEn: 'JB freelance escort & massage directory, auto-updated daily.',
    type: 'web',
  },
  {
    key: 'jbescortservices',
    name: 'JB Escort Services',
    url: 'https://jbescortservices.com/',
    descZh: '新山伴游服务综合平台',
    descEn: 'Comprehensive JB escort services platform.',
    type: 'web',
  },
  {
    key: 'jbxiashui',
    name: 'JB下水',
    url: 'https://jbxiashui.com/',
    descZh: '新山下水服务专属平台',
    descEn: 'JB water service specialist platform.',
    type: 'web',
  },
  {
    key: 'wishctjb',
    name: 'WishCT JB',
    url: 'https://wishctjb.com/',
    descZh: '愿望城市 JB 伴游平台',
    descEn: 'WishCT JB escort platform.',
    type: 'web',
  },
  {
    key: 'jbwishcity',
    name: 'JB Wish City',
    url: 'https://jbwishcity.com/',
    descZh: '新山愿望城，优质伴游资源聚合',
    descEn: 'JB Wish City — quality escort resource hub.',
    type: 'web',
  },
  {
    key: 'tg-jbanmowang',
    name: 'Telegram @JBanmowang',
    url: 'https://t.me/JBanmowang',
    descZh: '官方 Telegram 频道 @JBanmowang',
    descEn: 'Official Telegram channel @JBanmowang.',
    type: 'telegram',
  },
  {
    key: 'tg-jbjinhaiwan',
    name: 'Telegram @JBjinhaiwan',
    url: 'https://t.me/JBjinhaiwan',
    descZh: '官方 Telegram 群组 @JBjinhaiwan',
    descEn: 'Official Telegram group @JBjinhaiwan.',
    type: 'telegram',
  },
  {
    key: 'wa-group1',
    name: 'WhatsApp 官方群组 1',
    url: 'https://chat.whatsapp.com/C9MF4hgw6Xa9jq8yH8VppN',
    descZh: 'WhatsApp 官方群组，最新资讯第一手获取',
    descEn: 'Official WhatsApp group — get the latest updates first.',
    type: 'whatsapp',
  },
  {
    key: 'wa-group2',
    name: 'WhatsApp 官方群组 2',
    url: 'https://chat.whatsapp.com/DyKTWDZMSpV7Gjn41Fze8x',
    descZh: 'WhatsApp 官方群组，随时掌握最新动态',
    descEn: 'Official WhatsApp group — stay updated anytime.',
    type: 'whatsapp',
  },
]

export const metadata: Metadata = {
  title: 'JB 伴游平台导航 — 官方平台 & 社群入口 | jbescorts.org',
  description: '新山伴游平台聚合导航，汇集官方网站、Telegram 频道及 WhatsApp 群组，一站直达。',
  alternates: { canonical: '/platforms' },
  openGraph: {
    title: 'JB 伴游平台导航 — 官方平台 & 社群入口',
    description: '新山伴游官方平台、Telegram 频道、WhatsApp 群组一站直达导航。',
    url: 'https://jbescorts.org/platforms',
  },
}

export default function PlatformsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* 滚动字幕 */}
      <div className="bg-[#0088cc] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="mx-8 text-sm font-medium">📌 收藏我们！jbescorts.org 为您提供新山所有伴游网站一站式入口，防坑指南。</span>
          <span className="mx-8 text-sm font-medium">📌 Bookmark us! jbescorts.org — Your one-stop portal to all JB escort sites with scam-proof guide.</span>
          <span className="mx-8 text-sm font-medium">📌 收藏我们！jbescorts.org 为您提供新山所有伴游网站一站式入口，防坑指南。</span>
          <span className="mx-8 text-sm font-medium">📌 Bookmark us! jbescorts.org — Your one-stop portal to all JB escort sites with scam-proof guide.</span>
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
            href="https://t.me/JBjinhaiwan"
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
          官方平台 &amp; 社群入口
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          以下为官方认证平台及社群入口，点击直达。加入 Telegram 或 WhatsApp 群组可第一时间获取最新资讯与优惠。
        </p>
        <p className="text-gray-500 text-xs leading-relaxed mb-6">
          Official platforms and community links — click to visit directly. Join our Telegram or WhatsApp groups to get the latest updates.
        </p>
      </section>

      {/* 平台卡片 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNER_LINKS.map((site) => {
            const isTelegram  = site.type === 'telegram'
            const isWhatsApp  = site.type === 'whatsapp'
            const domain      = site.type === 'web' ? new URL(site.url).hostname : null
            return (
              <a
                key={site.key}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100/50 overflow-hidden"
              >
                <div className={`px-6 py-5 flex items-center border-b border-white/10 ${
                  isTelegram  ? 'bg-gradient-to-r from-[#0077b3]/90 via-[#0088cc]/80 to-[#0077b3]/90' :
                  isWhatsApp  ? 'bg-gradient-to-r from-[#075e54]/90 via-[#128c7e]/80 to-[#075e54]/90' :
                                'bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80'
                } backdrop-blur-md`}>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-1.5 flex items-center justify-center">
                      {isTelegram ? (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.09l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.135c.5-.185.934.12 1.325.882z" />
                        </svg>
                      ) : isWhatsApp ? (
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      ) : (
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                          alt={`${site.name} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <h2 className="text-lg font-bold text-white/95 group-hover:text-blue-200 transition-colors drop-shadow-sm">
                      {site.name}
                    </h2>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-gray-500 text-sm mb-2 line-clamp-2">{site.descEn}</p>
                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">{site.descZh}</p>
                  </div>
                  <div className={`flex items-center justify-between pt-4 border-t border-gray-100 text-sm font-bold ${
                    isTelegram ? 'text-[#0088cc]' : isWhatsApp ? 'text-[#25d366]' : 'text-[#0088cc]'
                  }`}>
                    <span>{isTelegram ? '加入 Telegram' : isWhatsApp ? '加入 WhatsApp' : '立即访问'}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isTelegram ? 'bg-blue-50 group-hover:bg-[#0088cc] group-hover:text-white' :
                      isWhatsApp ? 'bg-green-50 group-hover:bg-[#25d366] group-hover:text-white' :
                                   'bg-blue-50 group-hover:bg-[#0088cc] group-hover:text-white'
                    }`}>
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
          Frequently Asked Questions
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
              Yes. Tap the button at the top of the page or go to <a href="https://t.me/JBjinhaiwan" target="_blank" rel="noopener noreferrer" className="text-[#0088cc] underline">t.me/JBjinhaiwan</a>. The group shares new platform launches, user feedback, and scam alerts for the Johor Bahru area.
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
