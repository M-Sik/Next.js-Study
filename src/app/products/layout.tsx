import Link from 'next/link';
import styles from './layout.module.scss';
import { Metadata } from 'next';

// seo 관련 설정 기존에는 header.tsx에 적용하였으나 next 버전 업그레이드로 인해
// metadata 객체 사용
// product 및 하위 페이지들에 대한 seo
export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해 보세요',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>

    <section>{children}</section>
    </>
  )
}
