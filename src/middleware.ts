import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const sessionCookie = request.cookies.get("connect.sid");

  const response = await axios.get("http://localhost:8000/session", {
    headers: {
      Cookie: `${sessionCookie?.name}=${sessionCookie?.value};`,
    },
  });

  const { isAuthenticated } = response.data;

  if (!isAuthenticated && path !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
