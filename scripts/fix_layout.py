import re

with open('src/app/layout.tsx', encoding='utf-8') as f:
    c = f.read()

new_meta = """export const metadata: Metadata = {
  metadataBase: new URL('https://jbescorts.org'),
  title: {
    default: 'JB 自由身 \u2014 新山下水按摩导航 | jbescorts.org',
    template: '%s | jbescorts.org',
  },
  description: 'jbescorts.org \u2014 新山自由身下水 & 按摩导航，200+ 真实资料每日更新，覆盖全新山主要区域。Johor Bahru freelance escort & massage directory, auto-updated daily.',
  keywords: ['jb 自由身', 'jb freelance', 'jb escort', 'jb escort girl', '新山自由身', '新山下水', 'johor bahru freelance escort', 'jb massage', 'jalan dhoby johor bahru', '新山伴游'],
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
    title: 'JB 自由身 \u2014 新山下水按摩导航 | jbescorts.org',
    description: '新山自由身一站式导航，200+ 真实资料每日更新。Johor Bahru freelance escort & massage directory.',
    images: [{ url: '/JB.png', width: 512, height: 512, alt: 'jbescorts.org logo' }],
  },
  twitter: {
    card: 'summary',
    site: '@jbescortsorg',
    title: 'JB 自由身 \u2014 新山下水按摩导航',
    description: '新山自由身下水 & 按摩导航，200+ 真实资料每日更新。Johor Bahru freelance escort & massage directory.',
    images: ['/JB.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}"""

start = c.index('export const metadata: Metadata = {')
end = c.index('\nexport default function RootLayout')
result = c[:start] + new_meta + '\n\n' + c[end+1:]

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(result)
print('Done - layout.tsx updated')
