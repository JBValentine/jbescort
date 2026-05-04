import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const proto = request.headers.get('x-forwarded-proto') || 'https'

  // HTTP to HTTPS redirect (Cloudflare sends x-forwarded-proto)
  if (proto === 'http') {
    const url = new URL(request.url)
    url.protocol = 'https:'
    url.host = host.replace(/^www\./, '')
    return NextResponse.redirect(url.toString(), 301)
  }

  // www to non-www redirect
  if (host.startsWith('www.')) {
    const url = new URL(request.url)
    url.host = host.replace(/^www\./, '')
    return NextResponse.redirect(url.toString(), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files, public images and internals
    '/((?!_next/static|_next/image|favicon\\.ico|JB\\.png|hero\\.jpeg|freelancers/).*)',
  ],
}
