// # Custom Hooks
// - "컴포넌트의 top level 외에서도 사용 가능"
// - "그러나 일반 Hooks처럼 top level에서 사용하는 것을 권장함"

import React, { useState, useEffect } from 'react';

function useValue(state) {
  const [ value, setValue ] = useState('green');
  const handler = (updateValueFunction) => {
    setValue(updateValueFunction);
  };
  return [value, handler];
}

function CheckScreen2() {
  // backbroundColor 상태, 상태 변경 함수, 핸들러
  // - 조건문 바깥에서 사용하기 위해 let 사용
  let backgroundColor, setBackgroundColor, onChangeBackgroundColor;

  // true일 때만 backgroundColor state 사용
  // - Custom Hooks는 컴포넌트의 최상위 레벨 외에서도 사용 가능하단 점을 연습
  // - 그러나 코드 실행 시, 화면에 아래와 같은 에러 뜸. 코드는 동작하긴 함
  // - React Hook "useValue" is called conditionally. 
  // - React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
  if (true) {
    [ backgroundColor, setBackgroundColor ] = useValue('orange');

    onChangeBackgroundColor = () => {
      setBackgroundColor(previousBackgroundColor => (previousBackgroundColor === 'green' ? 'black' : 'green'));
    }    
  }

  useEffect(() => {
    console.log(`background color has been changed to ${backgroundColor}`);
  }, [backgroundColor]);
  
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <p style={{ color: 'orange' }}>You changed backgroundColor to { backgroundColor }.</p>
      <button onClick={onChangeBackgroundColor}>Switch color</button>
    </div>
  );
}

export default CheckScreen2;