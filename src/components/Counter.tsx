// client 컴포넌트라고 컴파일러에게 알려주는 키워드
// useState 사용 가능해짐
'use client';

import React, { useState } from 'react'

export default function Counter() {
  console.log("안녕! - 클라이언트 컴포넌트");
  const [counter, setCounter] = useState(0);
  const plusCounter = () => {
    setCounter((counter) => counter + 1)
    // console.log(counter)
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={plusCounter}>숫자 증가시키기</button>
    </>
  )
}
