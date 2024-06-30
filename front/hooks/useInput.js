// # Custom Hook
// - 중복되는 부분을 따로 빼서 범용화시킨 것
// - use로 시작해야 함. 안 그러면 Hook 규칙의 위반 여부를 자동 체크할 수 없음

import { useState, useCallback } from 'react';

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}