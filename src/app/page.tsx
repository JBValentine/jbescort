import { Metadata } from 'next'
import { platforms } from '@/data/platforms'

export const metadata: Metadata = {
  title: 'JB Escort Directory — Find Trusted Escort Girls & Angels in Johor Bahru',
  description: 'jbescorts.org brings together 15 top escort platforms near Jalan Dhoby, Johor Bahru. Compare verified listings, read our anti-scam guide, and join the Telegram group for real-time updates. 新山伴游聚合导航，一站直达所有优质平台。',
}

export default function Home() {
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

      {/* 1. Hero 区域：带背景图 + 暗色遮罩 + 飞机群入口 */}
      <header className="relative bg-gray-900 py-8 lg:py-10 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/hero.jpeg')" }} 
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <img src="/JB.png" alt="jbescorts.org logo" className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-2xl mb-4 border-2 border-white/20" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 drop-shadow-lg">
            JB Escort <span className="text-blue-400">Directory</span>
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mb-2 drop-shadow-md">
            Your one-stop guide to verified escort platforms in Johor Bahru. Compare the best options near Jalan Dhoby and choose safely.
          </p>
          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mb-6">
            新山伴游聚合导航 — 汇集优质平台，覆盖 Jalan Dhoby 及全城。加入 Telegram 群获取实时更新与防坑指南。
          </p>
          
          <a 
            href="https://t.me/JBmnXS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold text-white bg-[#0088cc] rounded-full hover:bg-[#0077b3] hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.09l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.135c.5-.185.934.12 1.325.882z" />
            </svg>
            加入官方 Telegram 群组
          </a>
        </div>
      </header>

      {/* 2. 引导段落 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 -mt-8 relative z-20">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
          Explore 15 Verified Escort Platforms in Johor Bahru
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          jbescorts.org is a directory that brings together the most popular escort girl and escort angels platforms around Jalan Dhoby and greater Johor Bahru. Instead of searching across dozens of sites, browse our curated list, read detailed reviews, and visit the platform that fits you best.
        </p>
        <p className="text-gray-500 text-xs leading-relaxed mb-6">
          jbescorts.org 汇集了新山 Jalan Dhoby 及周边地区最受欢迎的伴游平台。无需逐个搜索，在这里浏览精选列表、阅读简介，直接访问适合你的平台。加入我们的 Telegram 群组获取最新动态。
        </p>
      </section>

      {/* 3. 核心卡片列表区 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((site) => {
            const domain = new URL(site.url).hostname;
            
            return (
              <a 
                key={site.slug} 
                href={`/platform/${site.slug}`}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100/50 overflow-hidden"
              >
                {/* 毛玻璃黑色透明 Logo 区 */}
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
                {/* 白色内容区 */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                      {site.descEn}
                    </p>
                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                      {site.descZh}
                    </p>
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

      {/* FAQ 区块 — 有助于 Google 富摘要 */}
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
              We&apos;ve done the research for you. jbescorts.org lists 11 active platforms that serve the Jalan Dhoby area and beyond. Each entry includes a brief description so you can quickly tell which site fits your needs — whether you prefer local escort girls or premium angel-tier companions.
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
              What is the difference between &quot;escort girl&quot; and &quot;escort angels&quot;?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              &quot;Escort girl&quot; is the general term used across JB platforms, while &quot;escort angels&quot; usually means a curated, premium tier with stricter verification. Both types are represented in our directory — just check each site&apos;s description for details.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-200 p-5 group">
            <summary className="font-semibold text-gray-800 text-sm cursor-pointer list-none flex justify-between items-center">
              How can I avoid getting scammed?
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Stick to platforms listed here, never pay the full amount before meeting, ask for a live photo or short video call, and always meet in a well-known location. Our Anti-Scam Guide below covers the details.
            </p>
          </details>
        </div>
        {/* FAQ Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How do I find a reliable escort platform in Johor Bahru?', acceptedAnswer: { '@type': 'Answer', text: 'jbescorts.org lists 11 active platforms that serve the Jalan Dhoby area and beyond. Each entry includes a description so you can tell which site fits your needs — whether you prefer local escort girls or premium angel-tier companions.' } },
              { '@type': 'Question', name: 'Is there a Telegram group for updates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Visit t.me/JBmnXS or tap the button on jbescorts.org. The group shares new platform launches, user feedback, and scam alerts for the Johor Bahru area.' } },
              { '@type': 'Question', name: 'What is the difference between escort girl and escort angels?', acceptedAnswer: { '@type': 'Answer', text: 'Escort girl is the general term used across JB platforms, while escort angels usually means a curated, premium tier with stricter verification. Both types are represented in the directory.' } },
              { '@type': 'Question', name: 'How can I avoid getting scammed?', acceptedAnswer: { '@type': 'Answer', text: 'Stick to platforms listed on jbescorts.org, never pay the full amount before meeting, ask for a live photo or video call, and always meet in a well-known location.' } },
            ],
          }) }}
        />
      </section>

      {/* 防骗指南 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            🛡️ Anti-Scam Guide 防骗指南
          </h2>
          <p className="text-gray-500 mb-8">Stay safe and avoid common traps. 保护自己，远离常见骗局。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-red-100/50">
              <div className="text-red-500 font-bold text-sm mb-2">⚠️ Rule 1 规则一</div>
              <p className="text-gray-800 font-semibold text-sm">Never pay full amount upfront 绝不预付全款</p>
              <p className="text-gray-500 text-xs mt-2">Only pay a small deposit if required. If someone demands full payment before meeting, it&apos;s likely a scam. 如有需要只付小额定金，见面前要求全额付款的极可能是骗子。</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100/50">
              <div className="text-red-500 font-bold text-sm mb-2">⚠️ Rule 2 规则二</div>
              <p className="text-gray-800 font-semibold text-sm">Verify photos are real 核实照片真实性</p>
              <p className="text-gray-500 text-xs mt-2">Request a live selfie or short video call before booking. Fake photos are the most common trick. 预约前要求实时自拍或视频通话，假照片是最常见的手段。</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100/50">
              <div className="text-red-500 font-bold text-sm mb-2">⚠️ Rule 3 规则三</div>
              <p className="text-gray-800 font-semibold text-sm">Use platforms listed here 使用本站收录平台</p>
              <p className="text-gray-500 text-xs mt-2">Stick to verified directories on jbescorts.org. Random social media contacts are high risk. 优先使用 jbescorts.org 收录的平台，随机社交媒体联系人风险极高。</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100/50">
              <div className="text-red-500 font-bold text-sm mb-2">⚠️ Rule 4 规则四</div>
              <p className="text-gray-800 font-semibold text-sm">Meet in safe locations 选择安全地点</p>
              <p className="text-gray-500 text-xs mt-2">Always meet at reputable hotels or known locations near Jalan Dhoby, Johor Bahru. Avoid unknown private addresses. 务必在新山知名酒店或 Jalan Dhoby 附近正规场所见面，避免陌生私人地址。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section className="bg-white border-t border-gray-100">

        {/* JB 地区覆盖 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
            📍 JB Areas We Cover 服务覆盖地区
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Our directory covers JB escort services across all major areas in Johor Bahru. 我们的导航覆盖新山所有主要区域的伴游服务。
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Jalan Dhoby', slug: 'jb-town' },
              { name: 'Johor Bahru City Centre', slug: 'jb-town' },
              { name: 'Taman Molek', slug: '' },
              { name: 'Taman Pelangi', slug: 'taman-pelangi' },
              { name: 'Bukit Indah', slug: 'bukit-indah' },
              { name: 'Mount Austin', slug: 'mount-austin' },
              { name: 'Taman Sentosa', slug: '' },
              { name: 'Skudai', slug: 'skudai' },
              { name: 'Permas Jaya', slug: 'permas-jaya' },
              { name: 'Nusajaya', slug: 'iskandar-puteri' },
              { name: 'Iskandar Puteri', slug: 'iskandar-puteri' },
              { name: 'Taman Sutera', slug: '' },
              { name: 'Larkin', slug: '' },
              { name: 'Desa Tebrau', slug: 'desa-tebrau' },
              { name: 'Danga Bay', slug: '' },
              { name: 'Taman Century', slug: '' },
              { name: 'Nusa Bestari', slug: 'nusa-bestari' },
              { name: 'Masai', slug: '' },
              { name: 'Pasir Gudang', slug: '' },
              { name: 'Kulai', slug: '' },
              { name: 'Senai', slug: '' },
              { name: 'Gelang Patah', slug: '' },
              { name: 'Tampoi', slug: '' },
              { name: 'Stulang Laut', slug: '' },
              { name: 'KSL City', slug: 'jb-town' },
            ].map((area) => (
              area.slug ? (
                <a key={area.name} href={`/${area.slug}`} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200 hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-colors">
                  {area.name}
                </a>
              ) : (
                <span key={area.name} className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200 cursor-default">
                  {area.name}
                </span>
              )
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* About */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">About Us 关于我们</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                jbescorts.org is an independent directory aggregating the best JB escort platforms in Johor Bahru. We do not provide any services directly — our goal is to help you find trusted, verified platforms and stay safe.
              </p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                jbescorts.org 是一个独立的新山伴游导航聚合站，我们不直接提供任何服务，仅帮助用户找到可信赖的平台并提供防骗建议。
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Disclaimer 免责声明</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All links are provided for informational purposes only. jbescorts.org does not operate, endorse, or guarantee any third-party platform listed. Users are solely responsible for their own actions and decisions. You must be 18+ to use this site.
              </p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                所有链接仅供信息参考。jbescorts.org 不运营、不背书、不担保任何第三方平台。用户需自行承担相关责任。使用本站须年满18岁。
              </p>
            </div>

            {/* Social / Media Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us 关注我们</h3>
              <div className="flex flex-col gap-3">
                <a href="https://t.me/JBmnXS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#0088cc] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.09l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.135c.5-.185.934.12 1.325.882z"/></svg>
                  Telegram 群组
                </a>
                <a href="https://x.com/jbescortsorg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  X (Twitter)
                </a>
                <a href="mailto:jbescortsorg@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  jbescortsorg@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer 底部 */}
      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Escort Directory 新山伴游导航. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">
          <a href="/blog" className="hover:text-gray-400">Blog 博客</a>
          {' · '}
          Serving the Johor Bahru & Jalan Dhoby area. For informational purposes only.
        </p>
      </footer>

    </main>
  )
}
