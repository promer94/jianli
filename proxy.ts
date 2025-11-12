import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en-US', 'zh-CN']
const defaultLocale = 'en-US'// -> 'en-US'

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  const headerLang = request.headers.get('accept-language') || 'en-US,en;q=0.5'
  const languages = new Negotiator({
    headers: {
      'accept-language': headerLang
    }
  }).languages()
  return match(languages, locales, defaultLocale)
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    if (request.nextUrl.hostname === "jianli.yixuanxu.com") {
      return NextResponse.rewrite(
        new URL(`/zh-CN`, request.url)
      )
    }
    const locale = getLocale(request)
    if (locale.startsWith('zh')) {
      return NextResponse.redirect(
        new URL(`/zh-CN`, request.url)
      )
    }
    if (locale.startsWith('en')) {
      return NextResponse.rewrite(
        new URL(`/en-US`, request.url)
      )
    }
    const text = new TextEncoder().encode('Not Found')
    return new NextResponse(text, {
      status: 404
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    '/'
  ]
}


