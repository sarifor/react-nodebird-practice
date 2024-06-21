// # useState (1)
// - 함수 컴포넌트에서도 가변적인 상태를 지니게 해줌
// - 반환되는 배열엔 상태 값, 상태 설정 함수 들어 있음

import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(10); // 상태 값, 상태 설정 함수, 상태 기본값 10 

  const updateValue = () => {
    setValue(value + 1);

    console.log("Before update: " + value); // 23이면
    console.log(value); // 23
    console.log("After update: " + value); // 23  // 상태는 비동기적으로 업데이트되기에 이전 값을 출력해버림
  }

  return (
    <div>
      <button onClick={updateValue}>Update Number!</button>
      <p>{value}</p> {/* 24 */}
    </div>
  )
}

export default Counter;