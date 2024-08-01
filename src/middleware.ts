import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { ClerkMiddlewareAuth } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/DragonsSprints/CareerSprint/Explore(.*)',
]);


export default clerkMiddleware((auth: ClerkMiddlewareAuth & { userId?: string }, req: NextRequest) => {
  const url = req.nextUrl;

  // // Only apply auth checks to protected routes
  // if (isProtectedRoute(req)) {
  //   // Don't redirect if the current page is already the sign-in page
  //   if (url && url.pathname === '/sign-in') {
  //     return NextResponse.next();
  //   }

  //   // Redirect to sign-in if user is not authenticated
  //   if (!auth?.userId) {
  //     const signInUrl = new URL('/sign-in', url.origin);
  //     signInUrl.searchParams.set('redirect_url', url.href);
  //     return NextResponse.redirect(signInUrl);
  //   }

  // }

  // For all other routes, proceed without authentication checks
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
