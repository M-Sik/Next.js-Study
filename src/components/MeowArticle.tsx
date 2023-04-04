// client 컴포넌트라고 컴파일러에게 알려주는 키워드
// useState 사용 가능해짐
'use client';

import React, { useEffect, useState } from 'react'

export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비중...");

  const fetchApi = async () => {
    try {
      const res = await fetch('https://meowfacts.herokuapp.com', {
        cache: 'no-store',
      })
      const data = await res.json();
      setText(data.data[0]);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <p>{text}</p>
  )
}
