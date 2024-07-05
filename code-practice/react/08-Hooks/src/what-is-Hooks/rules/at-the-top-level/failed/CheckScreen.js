// # Hooks 규칙
// - 컴포넌트의 top level에서 사용(실패 사례)

import React, { useState, useEffect } from 'react';

function CheckScreen() {
  // Hooks를 조건문 안에서 사용하면 안 됨:
  // React Hook "useEffect" is called conditionally. 
  // React Hooks must be called in the exact same order in every component render.eslintreact-hooks/rules-of-hooks
  if (true) {
    const [ backgroundColor, setBackgroundColor ] = useState('green');

    useEffect(() => {
      console.log(`background color has been changed to ${backgroundColor}`);
    }, [backgroundColor]);
  }
  
  const onChangeBackgroundColor = () => {
    setBackgroundColor(previousBackgroundColor => (previousBackgroundColor === 'green' ? 'black' : 'green'));
  }

  return (
    <div style={{backgroundColor: backgroundColor}}>
      <p style={{color: 'orange'}}>You changed backgroundColor to {backgroundColor}.</p>
      <button onClick={onChangeBackgroundColor}>Switch color</button> {/* onChangeBackgroundColor('black')이면 반환값이 속성값이 되어 에러 남 */}
    </div>
  );
}

export default CheckScreen;