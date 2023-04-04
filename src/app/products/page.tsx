import { getProducts } from '@/apis/products'
import Link from 'next/link'
import React from 'react'

// ISR 방식 3초마다 새로운 데이터로 렌더링
// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  // revalidate 혹은 chche를 통한 다른 설정을 하지 않는다면 ssg가 됨
  // revalidate: 0, 혹은 cache: 'no-store'를 사용하게 된다면 ssr과 같아짐
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // cache: 'no-store',
    // next: { revalidate: 3 },
  })
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => {
          return <li key={index}><Link href={`/products/${product.id}`}>{ product.name }</Link></li>
        })}
      </ul>
      <article>
        {factText}
      </article>
    </>
  )
}
