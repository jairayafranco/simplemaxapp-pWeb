import { NextResponse } from 'next/server'

export function middleware (request) {
  console.log('middleware')
  NextResponse.next()
}

export const config = {
  matcher: ['/login']
}