// # useRef
// - 함수 컴포넌트에서 DOM에 직접적으로 접근할 때 사용

import React, { useRef } from 'react';

// 예시: 질문을 클릭하면 그에 대한 답을 스크롤 다운하여 보여주기
const QuestionAndAnswer = () => {
  const answerRef = useRef(null);

  const handleOnClick = () => {
    answerRef.current.scrollIntoView();
  }

  return (
    <div>
      <div onClick={handleOnClick}>What is today's date?</div>
      <div ref={answerRef} style={{ marginTop: '200px' }}>Today is {Date()}.</div>
    </div>
  )
}

export default QuestionAndAnswer;