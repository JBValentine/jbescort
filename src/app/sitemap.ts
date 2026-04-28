import { MetadataRoute } from 'next'
import { areas } from '@/data/areas'
import { blogPosts } from '@/data/blog'
import { platforms } from '@/data/platforms'

export default function sitemap(): MetadataRoute.Sitemap {
  const areaPages = areas.map((area) => ({
    url: `https://jbescorts.org/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `https://jbescorts.org/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const platformPages = platforms.map((p) => ({
    url: `https://jbescorts.org/platform/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://jbescorts.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://jbescorts.org/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...areaPages,
    ...blogPages,
    ...platformPages,
  ]
}
