'use client';

import { useRouter } from 'next/navigation'
import React from 'react'

export default function RedirectBtn() {
  const router = useRouter();

  const moveBack = () => {
    router.push('/products')
  }

  return (
    <button onClick={moveBack}>RedirectBtn</button>
  )
}
