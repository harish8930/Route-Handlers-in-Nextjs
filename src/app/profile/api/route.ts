import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestedHeader = new Headers(request.headers);
  // console.log(requestedHeader.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  const theme = request.cookies.get("theme");
  console.log(theme, "HELLO TEHEME");

  const cookieStore = await cookies();
  cookieStore.set("resultperpage", "20");
  console.log(cookieStore.get("resultperpage"));
  return new Response("<h1>Profile API Data !</h1>", {
    headers: {
      "content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
