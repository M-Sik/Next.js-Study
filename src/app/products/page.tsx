import { getProducts } from '@/apis/products'
import Link from 'next/link'
import React from 'react'

// ISR 방식 3초마다 새로운 데이터로 렌더링
export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => {
          return <li key={index}><Link href={`/products/${product.id}`}>{ product.name }</Link></li>
        })}
      </ul>
    </>
  )
}
