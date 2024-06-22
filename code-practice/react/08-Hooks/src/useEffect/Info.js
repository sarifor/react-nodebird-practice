// # useEffect
// - 리액트 컴포넌트가 렌더링될 때마다 특정 작업 수행
// - = componentDidMount + componentDidUpdate

import { useState, useEffect } from 'react';

// 이름을 입력하고, Click! 버튼을 누르면 화면에 최신값이 보임
const Info = () => {
  const [ name, setName ] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  }

  const submitName = () => {
    
  }

  // useEffect

  return (
    <div>
      <input value = {name} onChange={ changeName } /> {/* id 아님! */}
      <button onSubmit={ submitName } >Click!</button>
      <p>{name}</p>
    </div>
  )
};

export default Info;