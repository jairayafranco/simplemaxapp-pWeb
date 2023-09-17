import { NextResponse } from 'next/server'

export function middleware (request) {
  const token = request.cookies.get('token')?.value
  console.log(token)
  NextResponse.next()
}

export const config = {
  matcher: ['/login', '/panel']
}
