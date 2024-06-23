// # useMemo
// - 렌더링 과정에서 특정 값이 바뀌었을 때만 연산 실행
// - 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
// - /= useEffect

import { useState, useMemo } from 'react';

// 예시: 값을 입력하고 클릭하면 10을 곱해 보여주기
const GetResult = () => {
  
  // 입력값 state
  const [ number, setNumber ] = useState(0);

  // 값 업뎃
  const onClickHandler = (e) => setNumber(Number(e.target.value));

  // 곱하기 함수
  const multiplyByTen = (number) => {
    const numberMultipliedByTen = number * 10;
    console.log('multiplyByTen Function worked!');
    return numberMultipliedByTen;
  }

  // 곱하기 함수를 메모이제이션
  // - 예를 들어 처음에 10을 입력하고 클릭하면 multiplyByTen 함수가 사용되나,
  // - 두 번째도 10을 입력하고 클릭하면 multiplyByTen 함수는 사용되지 않음
  const result = useMemo(() => multiplyByTen(number), [number]);

  // 리턴
  return (
    <div>
      <input type="number" onClick = { onClickHandler } />
      <p>10을 곱한 결과: {result}</p>
    </div>
  )
};

export default GetResult;