import { notFound } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import { getProduct, getProducts } from '@/apis/products';

// ISR 방식 3초마다 새로운 데이터로 렌더링
export const revalidate = 3;

type Props = {
  // 동적라우팅을 위한 next.js props
  params: {
    // 동적 라우팅 폴더에 적은 name, slug
    slug: string;
  }
}

// 다이나믹한 메타데이터
// slug에 따라 메타데이터를 바꾸고 싶을때에는 generateMetadata 사용
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  }
}

export default async function ProductPage({ params: {slug} }: Props) {
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = await getProduct(slug);
  // 만약 찾는 제품이 없으면 notFound
  if (!product) {
    notFound()
  }

  return (
    <>
      <h1>{product.name}제품 페이지</h1>
    </>
  )
}
// 동적라우트 방식에서 미리 만들어놀 페이지 경로를 만들어주는 next.js 내장 함수
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있도록 해줄 것임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }))
}
