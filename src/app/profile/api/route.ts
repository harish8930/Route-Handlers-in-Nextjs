import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestedHeader = new Headers(request.headers);
  // console.log(requestedHeader.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Profile API Data !</h1>", {
    headers: { "content-type": "text/html" },
  });
}
