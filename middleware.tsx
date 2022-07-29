import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: any, res: any) {
  const { pathname } = req.nextUrl;
  if (pathname == "/download") {
    return NextResponse.redirect(req.url.replace('download', '') + 'robin.zip');
  } else if(pathname == '/docs') {
    return NextResponse.redirect(req.url + '.html');
  } else if(pathname == '/support') {
    return NextResponse.redirect('mailto:support@pidgon.me');
  }
  return NextResponse.next();
}
