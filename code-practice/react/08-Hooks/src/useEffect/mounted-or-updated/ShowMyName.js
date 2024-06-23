// # useEffect
// - 컴포넌트가 마운트되거나 업데이트될 때 특정 작업 수행

import { useState, useEffect } from 'react';

// 예시: 이름을 입력하는 즉시 화면에 반영됨
const ShowMyName = () => {
  const [ name, setName ] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  }

  useEffect(() => { // 컴포넌트가 마운트되었을 때도, 업데이트되었을 때도 작동
    console.log('Function in useEffect is working!');
  });
  
  return (
    <div>
      <input value = {name} onChange={ changeName } />
      <p>{name}</p>
    </div>
  )
};

export default ShowMyName;