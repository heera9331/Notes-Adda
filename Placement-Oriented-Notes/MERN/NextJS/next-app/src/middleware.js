import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/home";

  // private route /profile

  let token = request.cookies.get("token")?.value || "";
  if (token == undefined) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  console.log("inside middleware", token);

  if (isPublicPath) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/verifyemail"],
};
