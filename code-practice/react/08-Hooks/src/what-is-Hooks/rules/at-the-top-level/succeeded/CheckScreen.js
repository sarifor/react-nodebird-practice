// # Hooks 규칙
// - 컴포넌트의 top level에서 사용(성공 사례)

import React, { useState, useEffect } from 'react';

function CheckScreen() {
  // 배경색 state
  const [ backgroundColor, setBackgroundColor ] = useState('green');

  // backgroundColor 값이 바뀔 때만 콘솔 로그에 메시지 출력
  useEffect(() => {
    console.log(`background color has been changed to ${backgroundColor}`);
  }, [backgroundColor]);
  
  // 색깔 바꾸는 Handler
  const onChangeBackgroundColor = () => {
    // 이전 상태를 매개변수로 받는 '함수'로, 새로운 상태 반환
    setBackgroundColor(previousBackgroundColor => (previousBackgroundColor === 'green' ? 'black' : 'green'));
  }

  // 렌더링
  return (
    <div style={{backgroundColor: backgroundColor}}> {/* DOM 요소에 스타일 적용하려면 객체로 넣기 */}
      <p style={{color: 'orange'}}>You changed backgroundColor to {backgroundColor}.</p>
      <button onClick={onChangeBackgroundColor}>Switch color</button> {/* onChangeBackgroundColor('black')이면 반환값이 속성값이 되어 에러 남 */}
    </div>
  );
}

export default CheckScreen;