import Counter from '@/components/Counter';


export default function Home() {
  console.log("안녕! - 서버 컴포넌트")
  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter></Counter>
    </>
  )
}
