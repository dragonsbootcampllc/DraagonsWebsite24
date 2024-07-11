import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/forum(.*)',
]);

export default clerkMiddleware((auth, req: NextRequest) => {
  // Protect routes based on authentication status
  if (!auth || !auth()?.userId || isProtectedRoute(req)) {
    const signInUrl = new URL('/sign-in', req.nextUrl.href);
    signInUrl.searchParams.set('redirect_url', req.nextUrl.href);
    return NextResponse.redirect(signInUrl.href);
  }

  // Protect routes based on authorization status
  if (isProtectedRoute(req)) {
    auth().protect(has => {
      return (
        has({ permission: 'org:sys_memberships:manage' }) ||
        has({ permission: 'org:sys_domains_manage' })
      );
    });
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
