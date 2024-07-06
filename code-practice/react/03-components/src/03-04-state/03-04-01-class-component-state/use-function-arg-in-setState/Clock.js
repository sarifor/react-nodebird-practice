// # setState에 함수 인자 사용
// - 함수 인자를 사용하면 항상 최신 상태 값에 기반하게 되어
// - 비동기 상태 업데이트 문제를 피할 수 있음

import React, { useState, useEffect } from 'react';

// 1초씩 경과하는 시계(함수 컴포넌트)
const Clock = () => {
  // 초 state와 state 변경 함수
  const [sec, setSec] = useState(0);

  // 컴포넌트 마운트 직후 setInterval 실행
  useEffect(() => {
    // 1초마다 sec 값 1씩 갱신
    setInterval(() => { // 첫 인자: handler
      // 항상 최신 상태 값을 기반으로 sec 업데이트
      setSec(prevSec => prevSec + 1); // 함수 인자 사용으로 최신 상태 값 기반 업데이트
    }, 1000);
    // setInterval은 처음 한 번만 실행
    // - useEffect를 처음에만 실행시켜야 초시계가 정상 속도로 작동
    // - [sec]이면 sec이 업데이트될 때마다 새로운 setInterval이 설정되어 문제가 발생
  }, []);

  // 렌더링
  return (
    <div>
      <p>{sec}</p>
    </div>
  );
}

export default Clock;