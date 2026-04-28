import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'JB Escort Blog — Guides, Tips & News',
  description: 'Read the latest guides, safety tips, and area reviews for escort services in Johor Bahru. 新山伴游博客 — 指南、安全提示与区域评测。',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'JB Escort Blog — Guides & Tips',
    description: 'Guides, safety tips, and area reviews for JB escort services.',
    url: 'https://jbescorts.org/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#0088cc]">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium">Blog</li>
        </ol>
      </nav>

      <header className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            JB Escort <span className="text-blue-400">Blog</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Guides, safety tips, and area reviews for Johor Bahru escort services
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group"
            >
              <div className="p-6">
                <time className="text-xs text-gray-400">{post.date}</time>
                <h2 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#0088cc] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-400 line-clamp-2">{post.excerptZh}</p>
                <div className="mt-4 text-[#0088cc] text-sm font-bold">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Escort Directory 新山伴游导航</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {' · '}
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
        </p>
      </footer>
    </main>
  )
}
