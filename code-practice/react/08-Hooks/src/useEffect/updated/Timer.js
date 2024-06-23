// # useEffect
// - 컴포넌트가 업데이트되었을 때만 특정 작업 수행

import { useState, useEffect } from 'react';

// 예시: 0부터 1초씩 갱신되는 타이머
const Timer = () => {
  // useState
  const [ sec, setSec ] = useState(0);

  // 컴포넌트가 처음 마운트되었을 때만 작동
  useEffect(() => {
    setInterval(()=> {
      // 1초에 1씩 업데이트
      setSec(preSec => preSec + 1);
    }, 1000);
  }, []);

  // 컴포넌트가 업데이트될 때만 작동
  useEffect(() => {
    console.log('째깍');
  }, [sec]);

  return (
    <div>
      <p>{sec}</p>
    </div>
  )
}

export default Timer;