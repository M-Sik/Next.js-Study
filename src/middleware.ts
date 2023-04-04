import { NextRequest, NextResponse } from "next/server";

// 미들웨어를 통해 정해진 조건에 부합하지 않으면 리다이렉트 시킬 수 있음
// 로그인 유무, 토큰 확인 등에 사용하면 될듯
export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!!')
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉팅함!')
    return NextResponse.redirect(new URL('products', request.url));
  }
}
// 특정 경로에서만 미들웨어가 실행되도록 하는 설정
export const config = {
  // product나 이하 모든 패스에 대해 미들웨어를 실행해줘
  matcher: ['/products/:path*'],
}
