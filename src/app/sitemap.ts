import { MetadataRoute } from 'next'
import { areas } from '@/data/areas'
import { blogPosts } from '@/data/blog'
import { platforms } from '@/data/platforms'
import freelancerData from '@/data/freelancers.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date(freelancerData.lastUpdated)
  // Use a fixed date for truly static pages to avoid misleading Google
  const staticDate = new Date('2025-01-01')

  // /[area] — 地区伴游平台页
  const areaPages = areas.map((area) => ({
    url: `https://jbescorts.org/${area.slug}`,
    lastModified: staticDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // /blog/[slug]
  const blogPages = blogPosts.map((post) => ({
    url: `https://jbescorts.org/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // /platform/[slug]
  const platformPages = platforms.map((p) => ({
    url: `https://jbescorts.org/platform/${p.slug}`,
    lastModified: staticDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // /freelance/[area] — 自由身区域页
  const freelanceAreaPages = (freelancerData.areas as { slug: string }[]).map((area) => ({
    url: `https://jbescorts.org/freelance/${area.slug}`,
    lastModified: lastUpdated,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }))

  // /freelancer/[id] — 自由身个人页
  const freelancerPages = (freelancerData.freelancers as { id: number }[]).map((f) => ({
    url: `https://jbescorts.org/freelancer/${f.id}`,
    lastModified: lastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [
    {
      url: 'https://jbescorts.org',
      lastModified: lastUpdated,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://jbescorts.org/freelance',
      lastModified: lastUpdated,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: 'https://jbescorts.org/platforms',
      lastModified: staticDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://jbescorts.org/blog',
      lastModified: staticDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: 'https://jbescorts.org/jb-escort',
      lastModified: staticDate,
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    {
      url: 'https://jbescorts.org/jb-girl-escort',
      lastModified: staticDate,
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    {
      url: 'https://jbescorts.org/escort-jb',
      lastModified: staticDate,
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    {
      url: 'https://jbescorts.org/johor-bahru-escorts',
      lastModified: staticDate,
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    {
      url: 'https://jbescorts.org/jb-escorts',
      lastModified: staticDate,
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    ...freelanceAreaPages,
    ...freelancerPages,
    ...areaPages,
    ...blogPages,
    ...platformPages,
  ]
}
