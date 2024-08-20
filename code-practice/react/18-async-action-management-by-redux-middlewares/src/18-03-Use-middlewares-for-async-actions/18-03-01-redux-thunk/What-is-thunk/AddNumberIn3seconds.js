import { useState, useEffect } from 'react';

const AddNumberIn3seconds = () => {
  const [ value, setValue ] = useState(null);

  const addOne = x => x + 1;

  const useThunk = (x) => {
    const thunk = () => addOne(x);
    return thunk;
  }

  const fn = useThunk(5);

  useEffect(() => {
    setTimeout(() => {
      setValue(fn());
    }, 3000);
  }, [fn]);

  return (
    <div>
      {value}
    </div>
  )
}

export default AddNumberIn3seconds;