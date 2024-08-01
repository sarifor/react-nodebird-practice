// # ref/state 사용 기준
// - DOM에 직접적으로 접근하려면, ref 사용
// - DOM에 직접적으로 접근하지 않고도 컴포넌트의 동작/UI를 제어할 수 있다면 state 사용 가능

import React from 'react';

// 예시: 질문을 클릭하면 그에 대한 답을 스크롤 다운하여 보여주기
// - 이 경우 DOM에 직접적으로 접근해야 하기 때문에 ref를 사용해야 함
const QuestionAndAnswer = () => {
  const handleOnClick = () => {
    console.log("HandleOnClick Func.")
  }

  return (
    <div>
      <div onClick={handleOnClick}>What is today's date?</div>
      <div style={{ marginTop: '1000px' }}>Today is...</div>
    </div>
  )
}

export default QuestionAndAnswer;