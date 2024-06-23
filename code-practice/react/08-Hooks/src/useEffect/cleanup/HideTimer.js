// # useEffect
// - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 특정 작업 수행

import { useState, useEffect } from 'react';

// 예시: 타이머를 화면에서 숨기기
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

  // 컴포넌트가 언마운트되기 전에만 작동
  useEffect(() => {
    return () => {
      console.log('Timer is hidden!');
    }  
  }, []); // 빈 배열 넣어주기

  return (
    <div>
      <p>{sec}</p>
    </div>
  )
}

const HideTimer = () => {
  const [ toggle, setToggle ] = useState('');

  return (
    <div>
      {/* <button onClick={ setToggle(!toggle) }>On/Off</button>
      함수 호출을 하면 다음과 같은 에러 뜸: Too many re-renders. React limits the number of renders to prevent an infinite loop.*/}
      <button onClick={ () => setToggle(!toggle) }>Hide/Unhide</button>{/* 함수 참조를 전달해야 무한 루프 에러 안 남 */}
      {toggle && <Timer />}
    </div>
  )
}
export default HideTimer;