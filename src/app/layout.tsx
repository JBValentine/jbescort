import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://jbescorts.org'),
  title: {
    default: 'JB Escort | JB Girl Escort | Escort JB — Johor Bahru Freelance Directory',
    template: '%s | jbescorts.org',
  },
  description: 'JB Escort & Johor Bahru Freelance Directory — 285+ verified JB escorts, JB girl escort listings across 17 areas. Escort JB, JB escorts, hotel outcall. No deposit, meet first.',
  keywords: ['jb escort', 'escort jb', 'jb escorts', 'jb girl escort', 'johor bahru escort', 'jb freelance', 'jb escort directory', '新山自由身', 'johor bahru freelance escort', 'jalan dhoby johor bahru'],
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': 'https://jbescorts.org',
      'en': 'https://jbescorts.org',
      'x-default': 'https://jbescorts.org',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://jbescorts.org',
    siteName: 'jbescorts.org',
    title: 'JB Escort | JB Girl Escort | Escort JB — Johor Bahru Freelance Directory',
    description: 'JB Escort & Johor Bahru Freelance Directory — 285+ verified JB escorts, JB girl escort listings across 17 areas. Escort JB, JB escorts, hotel outcall.',
    images: [{ url: '/JB.png', width: 512, height: 512, alt: 'jbescorts.org logo' }],
  },
  twitter: {
    card: 'summary',
    site: '@jbescortsorg',
    title: 'JB Escort | JB Girl Escort | Escort JB — Johor Bahru',
    description: 'JB Escort & Johor Bahru Freelance Directory — 285+ verified JB escorts, JB girl escort listings. Escort JB, hotel outcall, meet first.',
    images: ['/JB.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://jbescorts.org/#website',
        url: 'https://jbescorts.org',
        name: 'JB Escort Directory',
        description: 'The most complete JB escort directory near Jalan Dhoby, Johor Bahru.',
        inLanguage: ['en', 'zh-CN'],
      },
      {
        '@type': 'Organization',
        '@id': 'https://jbescorts.org/#organization',
        name: 'jbescorts.org',
        url: 'https://jbescorts.org',
        logo: 'https://jbescorts.org/JB.png',
        sameAs: ['https://t.me/JBjinhaiwan', 'https://x.com/jbescortsorg'],
        contactPoint: { '@type': 'ContactPoint', email: 'jbescortsorg@gmail.com', contactType: 'customer service' },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://jbescorts.org/#webpage',
        url: 'https://jbescorts.org',
        name: 'JB Escort Directory - Johor Bahru Guide',
        isPartOf: { '@id': 'https://jbescorts.org/#website' },
        about: { '@id': 'https://jbescorts.org/#organization' },
        description: 'A curated directory of escort platforms in Johor Bahru, covering the Jalan Dhoby area and beyond.',
      },
      {
        '@type': 'ItemList',
        name: 'Top JB Escort Platforms',
        description: 'Curated list of verified escort platforms in Johor Bahru',
        numberOfItems: 15,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'jb69girl', url: 'https://jbescorts.org/platform/jb69girl' },
          { '@type': 'ListItem', position: 2, name: 'JBE', url: 'https://jbescorts.org/platform/jbe' },
          { '@type': 'ListItem', position: 3, name: 'JB Escort 2 Me', url: 'https://jbescorts.org/platform/jb-escort-2-me' },
          { '@type': 'ListItem', position: 4, name: 'JOHOR BAHRU 88', url: 'https://jbescorts.org/platform/johor-bahru-88' },
          { '@type': 'ListItem', position: 5, name: 'Jbgirl', url: 'https://jbescorts.org/platform/jbgirl' },
          { '@type': 'ListItem', position: 6, name: 'JBESCORT4U', url: 'https://jbescorts.org/platform/jbescort4u' },
          { '@type': 'ListItem', position: 7, name: 'JBSam', url: 'https://jbescorts.org/platform/jbsam' },
          { '@type': 'ListItem', position: 8, name: 'JB Escort Xiaojie', url: 'https://jbescorts.org/platform/jb-escort-xiaojie' },
          { '@type': 'ListItem', position: 9, name: 'JB Escort Entertainment', url: 'https://jbescorts.org/platform/jb-escort-entertainment' },
          { '@type': 'ListItem', position: 10, name: '新山情人网', url: 'https://jbescorts.org/platform/jb-valentine' },
          { '@type': 'ListItem', position: 11, name: '愿望城市', url: 'https://jbescorts.org/platform/wish-city' },
          { '@type': 'ListItem', position: 12, name: 'JB Escort Plaboy', url: 'https://jbescorts.org/platform/jb-escort-plaboy' },
          { '@type': 'ListItem', position: 13, name: 'JHB Escort Service', url: 'https://jbescorts.org/platform/jhb-escort-service' },
          { '@type': 'ListItem', position: 14, name: 'JB Escort Call Girl', url: 'https://jbescorts.org/platform/jb-escort-call-girl' },
          { '@type': 'ListItem', position: 15, name: 'JB Pretty Escort', url: 'https://jbescorts.org/platform/jb-pretty-escort' },
        ],
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/JB.png" />
        <link rel="apple-touch-icon" href="/JB.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-2296S29VVQ" />
      </body>
    </html>
  )
}
