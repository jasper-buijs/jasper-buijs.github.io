//export { default } from "next-auth/middleware";

//export const config = { matcher: ["/live/:path*"] };

import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const path = req.nextUrl.pathname;

    if (!token) return NextResponse.next();
    //if (!token) return NextResponse.redirect(new URL("/", req.url));

    // Email can create ingress
    if (path.startsWith("/live/create")) {
      console.log(`email check ${token.email} against ${process.env.CREATE_INGRESS_EMAIL}`);
      if (token.email != process.env.CREATE_INGRESS_EMAIL) return NextResponse.redirect(new URL("/live", req.url));
      else return NextResponse.next();
    }

    // GuildMember in HM
    else if (path.startsWith("/live") || path.startsWith("/study")) {
      console.log(`checking membership status`);
      const res = await fetch(new URL(`/api/checkGuild`, req.url), {
        headers: {
          Cookie: req.headers.get("cookie") ?? "",
        }
      });
      const data = await res.json();
      if (res.status == 400 && data.redirect) return NextResponse.redirect(new URL(data.redirect, req.url));
      if (res.status != 200) return NextResponse.redirect(new URL("/", req.url));
      else return NextResponse.next();
     }

    // Default
    NextResponse.next();

  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/live/:path*", "/study/:path*"] };