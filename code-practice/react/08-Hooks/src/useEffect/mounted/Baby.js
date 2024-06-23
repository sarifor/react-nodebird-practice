// # useEffect
// - 컴포넌트가 처음에 마운트되었을 때만 특정 작업 수행

import { useState, useEffect } from 'react';

// 예시: 갓 태어난 아기(초기 설정 세팅)
const Baby = () => {
  const [ age, setAge ] = useState(0);

  // 컴포넌트가 처음에 마운트되었을 때만 작동
  useEffect(() => {
    console.log("Me: Baby~ how old are you?");
    console.log("Baby: ", age); // 0에서 변화 없음
  }, []);

  const increaseAge = () => {
    setAge(prevAge => prevAge + 1);
  };

  return (
    <div>
      <p>Newly born human's age is {age}.</p>
      <button onClick={increaseAge}>Let's increase her age!</button>
    </div>
  )
}

export default Baby;