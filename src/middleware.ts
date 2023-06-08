import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
  // Stop Middleware running on static files and public folder
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};

export default async function middleware(request: NextRequest) {
  console.log("hostname", request.nextUrl.host);

  const host = request.nextUrl.host;

  if (host === "lvl23.ravi.dev")
    return NextResponse.redirect("https://portfolio-ravvi-kumar.vercel.app/");

  if (host === "ravi.lvl23.dev")
    return NextResponse.redirect("https://portfolio-ravvi-kumar.vercel.app/");

  if (host === "ravi.supplies")
    return NextResponse.redirect("https://portfolio-ravvi-kumar.vercel.app/");

  return NextResponse.next();
}
