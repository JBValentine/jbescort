import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://jbescorts.org/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

// Simple markdown-like renderer for ## headings, **bold**, lists
function renderContent(text: string) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      elements.push(<br key={key++} />)
    } else if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {trimmed.replace('## ', '')}
        </h2>
      )
    } else if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-gray-900 mt-6 mb-2">
          {trimmed.replace('### ', '')}
        </h3>
      )
    } else if (/^\d+\.\s/.test(trimmed)) {
      const text = trimmed.replace(/^\d+\.\s/, '')
      elements.push(
        <li key={key++} className="text-gray-600 text-sm leading-relaxed ml-4 list-decimal">
          {renderInline(text)}
        </li>
      )
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-gray-600 text-sm leading-relaxed ml-4 list-disc">
          {renderInline(trimmed.replace('- ', ''))}
        </li>
      )
    } else {
      elements.push(
        <p key={key++} className="text-gray-600 text-sm leading-relaxed mb-3">
          {renderInline(trimmed)}
        </p>
      )
    }
  }

  return elements
}

function renderInline(text: string) {
  // Handle **bold**
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-gray-800">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'jbescorts.org', logo: { '@type': 'ImageObject', url: 'https://jbescorts.org/JB.png' } },
    url: `https://jbescorts.org/blog/${post.slug}`,
    inLanguage: ['en', 'zh-CN'],
    isPartOf: { '@id': 'https://jbescorts.org/#website' },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#0088cc]">Home</Link></li>
          <li>/</li>
          <li><Link href="/blog" className="hover:text-[#0088cc]">Blog</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-medium truncate max-w-[200px]">{post.title.split('—')[0].trim()}</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <time className="text-xs text-gray-400">{post.date}</time>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 mb-2">
            {post.title}
          </h1>
          <p className="text-lg text-gray-500">{post.titleZh}</p>
        </header>

        {/* English content */}
        <div className="prose-custom mb-12">
          {renderContent(post.content)}
        </div>

        {/* Chinese content */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📖 中文版本</h2>
          {renderContent(post.contentZh)}
        </div>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">📚 Related Articles 相关文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 text-sm mb-1 hover:text-[#0088cc]">{p.title}</h3>
                  <p className="text-xs text-gray-400">{p.date}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-sm">&copy; 2026 jbescorts.org — JB Escort Directory 新山伴游导航</p>
        <p className="text-gray-600 text-xs mt-2">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {' · '}
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
