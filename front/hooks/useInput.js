// # Custom Hook
// - 중복되는 부분을 따로 빼서 범용화시킨 것

import { useState, useCallback } from 'react';

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}