'use client'

import { useState } from 'react'

type Site = {
  id: number
  nameEn: string
  nameZh: string
  url: string
  tag: string
  desc: string
}

const tags = [
  { label: 'All 全部', value: 'all' },
  { label: 'Featured 精�?, value: 'Featured' },
  { label: 'Hot 热门', value: 'Hot' },
  { label: 'Verified 认证', value: 'Verified' },
]

const badgeColor: Record<string, string> = {
  Featured: 'bg-blue-100 text-blue-700',
  Hot: 'bg-red-100 text-red-600',
  Verified: 'bg-green-100 text-green-700',
}

export default function CardGrid({ sites }: { sites: Site[] }) {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? sites : sites.filter(s => s.tag === filter)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* 标签过滤 */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tags.map(t => (
          <button
            key={t.value}
            onClick={() => setFilter(t.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              filter === t.value
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 卡片网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(site => (
          <a
            key={site.id}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* 截图 */}
            <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
              <img
                src={`https://image.thum.io/get/width/600/crop/400/${site.url}`}
                alt={`${site.nameEn} - ${site.nameZh} preview`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <span className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold shadow ${badgeColor[site.tag] || 'bg-gray-100 text-gray-600'}`}>
                {site.tag}
              </span>
            </div>

            {/* 信息�?*/}
            <div className="p-5">
              <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {site.nameEn}
              </h2>
              <p className="text-sm text-slate-500 mt-1">{site.nameZh}</p>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">{site.desc}</p>
              <div className="flex items-center text-blue-600 text-sm font-semibold mt-4">
                Visit 访问
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
