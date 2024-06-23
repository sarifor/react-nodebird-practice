// # useCallback
// - 만들어 놨던 함수를 재사용할 수 있게 해줌
// /= useMemo

import { useState, useCallback } from 'react';

// 예시: 몸무게에 변화가 있을 때만 운동하겠다고 외치기
const Dieter = () => {
  // 입력값 state
  const [ bodyWeight, setBodyWeight ] = useState(0);

  // bodyWeight 값이 바뀔 때만 함수 생성
  const onChangeHandler = useCallback((e) => {
    setBodyWeight(parseInt(e.target.value));
    console.log('I will Exercise!')
  }, [bodyWeight]); // 빈 배열을 넣으면 컴포넌트 렌더링 때 만들었던 함수를 계속 재사용

  // 리턴
  return (
    <div>
      <input type="number" onChange={ onChangeHandler }/> {/* onClick 사용하려면 또다른 state를 추가해야 함 */}
      <p>{bodyWeight}</p>
    </div>
  )
}

export default Dieter;