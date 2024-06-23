// # useState (2)
// - 컴포넌트 함수가 호출될 때마다 내부의 변수가 초기화됨 -> state로 관리하면 값 유지

import { useState } from 'react';

// 이름을 입력하고, Click! 버튼을 누르면 화면에 최신값이 보임
const Info2 = () => {
  const [ name, setName ] = useState('');
  const [ updatedName, setUpdatedName ] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  };

  const submitName = () => {
    setUpdatedName(name);
  };
  
  return (
    <div>
      <input value = {name} onChange={ changeName } />
      <button onClick={ submitName } >Click!</button>
      <p>{updatedName}</p>
    </div>
  )
};

export default Info2;