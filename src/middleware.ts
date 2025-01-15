import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { device, os } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  const osName = os.name === "macos" ? "mac" : "android";

  url.searchParams.set("viewport", viewport);
  url.searchParams.set("os", osName);

  return NextResponse.rewrite(url);
}
