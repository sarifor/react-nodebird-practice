// # CF) setState에 객체 인자 사용
// - 비동기 상태 업데이트 문제 생길 수 있음
// - useState로 만든 setState에는 객체 대신 문자/숫자 타입 넣어도 됨

import React, { useState, useEffect } from 'react';

// 1초씩 경과하는 시계(함수 컴포넌트)
const Clock2 = () => {
  let [sec, setSec] = useState(0);

  useEffect(() => {
    setInterval(() => { 
      setSec(sec += 1);                
    }, 1000); // 객체 인자
  }, []);

  // 렌더링
  return (
    <div>
      <p>{sec}</p>
    </div>
  )
}

export default Clock2;