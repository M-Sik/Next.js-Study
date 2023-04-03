// 잘못된 url로 왓을 경우 보여줄 404페이지
// 해당 not-found.tsx 파일이 있는 경로에서 페이지를 찾을 수 없을시 보여짐
// Ex) 현재 파일은 products 폴더에 있으니 domain/products/nothing
// 동적 라우팅에서 nothing이 들어올 경우 해당 컴포넌트를 보여줄 수 있음
// 해당 컴포넌트는 [slug] -> page.tsx에서 notFound()함수 호출시 보여짐

import React from 'react'

export default function ProductNotFound() {
  return (
    <h1>해당 제품을 찾을 수 없음</h1>
  )
}
