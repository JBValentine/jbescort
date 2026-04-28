import { MetadataRoute } from 'next'
import { areas } from '@/data/areas'
import { blogPosts } from '@/data/blog'
import { platforms } from '@/data/platforms'
import freelancerData from '@/data/freelancers.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date(freelancerData.lastUpdated)

  // /[area] — 地区伴游平台页
  const areaPages = areas.map((area) => ({
    url: `https://jbescorts.org/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
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
    lastModified: new Date(),
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
    priority: 0.7,
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
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://jbescorts.org/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...freelanceAreaPages,
    ...freelancerPages,
    ...areaPages,
    ...blogPages,
    ...platformPages,
  ]
}
