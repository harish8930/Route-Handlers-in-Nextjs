import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //custom matcher functions
  //   return NextResponse.redirect(new URL("/", request.url));
  //conditional statement
  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  //   }
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("custom-header", "custom-value");
  return response;
}

//custom matcher functions
// export const config = {
//   matcher: "/profile",
// };
