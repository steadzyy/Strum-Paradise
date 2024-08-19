import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyJose } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
  const authorization = cookies().get("Authorization");

  if (request.nextUrl.pathname.startsWith("/wishlist")) {
    if (!authorization?.value) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/api/wishlist")) {
    if (!authorization?.value) {
      return Response.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const [type, token] = authorization?.value.split(" ");
    if (type !== "Bearer") {
      return Response.json(
        {
          error: "Invalid token",
        },
        {
          status: 401,
        }
      );
    }

    const decoded = await verifyJose<{
      _id: string;
      email: string;
    }>(token);

    //eksekusi decoded
    // console.log(decoded);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-email", decoded.email);
    requestHeaders.set("x-id", decoded._id);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    return response;
  }
}

export const config = {
  matcher: ["/api/wishlist/:path", "/wishlist"],
};