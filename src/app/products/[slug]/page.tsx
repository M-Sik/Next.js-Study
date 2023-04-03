import { notFound } from 'next/navigation';
import React from 'react'
import Link from 'next/link';

type Props = {
  // 동적라우팅을 위한 next.js props
  params: {
    // 동적 라우팅 폴더에 적은 name, slug
    slug: string;
  }
}

export default function SlugPage({ params }: Props) {
  if (params.slug === 'nothing') notFound();
  return (
    <>
      <h1>{params.slug}제품 페이지</h1>
    </>
  )
}
// 동적라우트 방식에서 미리 만들어놀 페이지 경로를 만들어주는 next.js 내장 함수
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }))
}
