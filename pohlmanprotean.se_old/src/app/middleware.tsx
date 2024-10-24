// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent');
  const isMobile = userAgent?.match(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  const url = request.nextUrl.clone();

  // Redirect to different routes based on device type
  if (isMobile) {
    url.pathname = '/mobile';
    return NextResponse.rewrite(url);
  }

  // Otherwise, render the default page for desktop
  return NextResponse.next();
}

// Specify which routes this middleware should apply to
export const config = {
  matcher: ['/', '/home'], // Apply to these routes
};
