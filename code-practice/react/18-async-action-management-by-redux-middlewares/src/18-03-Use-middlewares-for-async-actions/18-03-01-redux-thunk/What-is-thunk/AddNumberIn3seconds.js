import { useState, useEffect } from 'react';

const AddNumberIn3seconds = () => {
  const [ value, setValue ] = useState(null);

  const addOne = x => x + 1;

  useEffect(() => {
    setTimeout(() => {
      setValue(addOne(5));
    }, 3000);
  }, []);

  return (
    <div>
      {value}
    </div>
  )
}

export default AddNumberIn3seconds;